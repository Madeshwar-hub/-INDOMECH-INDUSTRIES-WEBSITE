
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';

const SearchPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || '';

    const filteredProducts = query
        ? allProducts.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.categoryName.toLowerCase().includes(query) ||
            product.type.toLowerCase().includes(query) ||
            product.feature.toLowerCase().includes(query) ||
            product.size.toLowerCase().includes(query)
        )
        : [];

    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'Search' }
    ];

    return (
        <div>
            <PageTitle title={`Search Results for "${query}"`} breadcrumbs={breadcrumbs} />

            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    {filteredProducts.length > 0 ? (
                        <>
                            <p className="text-center text-lg text-brand-gray mb-12">
                                Found {filteredProducts.length} product(s) matching your search.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {filteredProducts.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-2xl font-semibold text-white">No products found for "{query}"</h2>
                            <p className="text-brand-gray mt-4">Please try a different search term.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default SearchPage;
