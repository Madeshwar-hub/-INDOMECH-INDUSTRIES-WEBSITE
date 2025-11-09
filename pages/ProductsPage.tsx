import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import { productCategories, allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700">
            <h2>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-left text-white bg-brand-dark hover:bg-black/20"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className="text-lg">{title}</span>
                    <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
            </h2>
            {isOpen && (
                <div className="p-5 border-t-0 border-gray-700 bg-black/20">
                    {children}
                </div>
            )}
        </div>
    );
};


const ProductsPage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'Products' }
    ];
    
    return (
        <div>
            <PageTitle title="Our Products" breadcrumbs={breadcrumbs} />
            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white uppercase">Our <span className="text-brand-primary">Products</span></h2>
                        <p className="text-lg text-brand-gray mt-2 max-w-3xl mx-auto">Our product range is fabricated using the finest quality rubber and latest technology to ensure durability and performance.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {allProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand-darker">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white uppercase">Product <span className="text-brand-primary">Specifications</span></h2>
                        <p className="text-lg text-brand-gray mt-2 max-w-3xl mx-auto">A detailed look at our tyre specifications for your convenience.</p>
                    </div>
                    <div className="max-w-6xl mx-auto bg-brand-dark rounded-lg shadow-lg overflow-hidden">
                        {productCategories.map((category, catIndex) => (
                            <AccordionItem key={catIndex} title={category.categoryName}>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-brand-gray">
                                        <thead className="text-xs text-white uppercase bg-black/30">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">Product Name</th>
                                                <th scope="col" className="px-6 py-3">Size</th>
                                                <th scope="col" className="px-6 py-3">Type</th>
                                                <th scope="col" className="px-6 py-3">Price</th>
                                                <th scope="col" className="px-6 py-3">OD (mm)</th>
                                                <th scope="col" className="px-6 py-3">SW (mm)</th>
                                                <th scope="col" className="px-6 py-3">Feature</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {category.products.map((product, prodIndex) => (
                                                <tr key={prodIndex} className="border-b border-gray-700 hover:bg-brand-darker/50 last:border-b-0">
                                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">{product.name}</th>
                                                    <td className="px-6 py-4">{product.size}</td>
                                                    <td className="px-6 py-4">{product.type}</td>
                                                    <td className="px-6 py-4 font-medium text-brand-primary whitespace-nowrap">{product.price}</td>
                                                    <td className="px-6 py-4">{product.od}</td>
                                                    <td className="px-6 py-4">{product.sw}</td>
                                                    <td className="px-6 py-4">{product.feature}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
