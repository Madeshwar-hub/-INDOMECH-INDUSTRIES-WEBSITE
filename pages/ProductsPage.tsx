import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import ProductSlider from '../components/ProductSlider';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700">
            <h6 className="mb-0">
                <button
                    className="w-full text-left p-6 flex justify-between items-center text-white font-semibold text-lg hover:bg-brand-dark/50"
                    onClick={onClick}
                >
                    {title}
                    <ChevronDownIcon isOpen={isOpen} />
                </button>
            </h6>
            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-6 bg-brand-darker text-brand-gray">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ChevronDownIcon: React.FC<{isOpen: boolean}> = ({isOpen}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
)

const ProductsPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'Products' }
    ];
    
    const cushionTyres = [
        {"size": "4.00×8", "rim": "3.00", "pattern": "Traction/Rib", "od": 16, "width": 4, "load": 930, "steer": 720},
        {"size": "5.00×8", "rim": "3.00", "pattern": "Traction/Plain", "od": 18, "width": 5, "load": 1390, "steer": 1070},
        {"size": "16×6-8", "rim": "4.33", "pattern": "Traction", "od": 16, "width": 6, "load": 1270, "steer": 975},
        {"size": "18×7-8", "rim": "4.33", "pattern": "Traction", "od": 18, "width": 6, "load": 2000, "steer": 1750},
        {"size": "6.00×9", "rim": "4.00", "pattern": "Traction", "od": 21, "width": 6, "load": 1840, "steer": 1420},
        {"size": "6.50×10", "rim": "5.00", "pattern": "Traction", "od": 23, "width": 6.5, "load": 2310, "steer": 1780},
        {"size": "7.00×12", "rim": "5.00", "pattern": "Traction", "od": 26, "width": 7, "load": 2920, "steer": 2240},
        {"size": "8.25×15", "rim": "6.50", "pattern": "Traction", "od": 32, "width": 8.3, "load": 4960, "steer": 3720},
        {"size": "10.00×20", "rim": "7.50", "pattern": "Traction/Plain", "od": 40, "width": 10, "load": 6000, "steer": 5000},
        {"size": "12.00×20", "rim": "8.50", "pattern": "Traction", "od": 41.7, "width": 11, "load": 7500, "steer": 6250},
    ];

    const pobTyres = [
        {"sizeIn": "10×5-6 1/4", "sizeMm": "254 x 127-158", "pattern": "Plain", "load": 780, "steer": 630},
        {"sizeIn": "12×5-6 1/2", "sizeMm": "305 x 127-165", "pattern": "Lug", "load": 780, "steer": 630},
        {"sizeIn": "13×5-8", "sizeMm": "330 x 127-203", "pattern": "Lug", "load": 1100, "steer": 940},
        {"sizeIn": "16×6-10 1/2", "sizeMm": "407 x 152-267", "pattern": "Lug", "load": 1760, "steer": 1480},
        {"sizeIn": "18x7x12 1/8", "sizeMm": "458 x 177-308", "pattern": "Lug", "load": 2550, "steer": 2100},
        {"sizeIn": "21x8x15", "sizeMm": "534 x 203-381", "pattern": "Plain/Lug", "load": 3375, "steer": 2775},
        {"sizeIn": "22x8x16", "sizeMm": "559 x 203-406", "pattern": "Plain/Lug", "load": 2875, "steer": 2475},
        {"sizeIn": "28x12x22", "sizeMm": "711 x 305-559", "pattern": "Lug", "load": 6700, "steer": 5500},
    ];

    return (
        <div>
            <PageTitle title="Our Products" breadcrumbs={breadcrumbs} />
            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    <div className="bg-brand-darker rounded-lg shadow-lg overflow-hidden">
                        <AccordionItem title="Solid-Lift Cushion/Resilient Tyres" isOpen={openIndex === 0} onClick={() => handleToggle(0)}>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-brand-gray">
                                    <thead className="text-xs text-white uppercase bg-brand-dark">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Tyre Size</th>
                                            <th scope="col" className="px-6 py-3">Rim Width</th>
                                            <th scope="col" className="px-6 py-3">Tread Pattern</th>
                                            <th scope="col" className="px-6 py-3 text-center">Tyre OD (in)</th>
                                            <th scope="col" className="px-6 py-3 text-center">Tyre Width (in)</th>
                                            <th scope="col" className="px-6 py-3 text-center">Load Wheel (Kgs)</th>
                                            <th scope="col" className="px-6 py-3 text-center">Steer Wheel (Kgs)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cushionTyres.map((tyre, index) => (
                                            <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">{tyre.size}</th>
                                                <td className="px-6 py-4">{tyre.rim}</td>
                                                <td className="px-6 py-4">{tyre.pattern}</td>
                                                <td className="px-6 py-4 text-center">{tyre.od}</td>
                                                <td className="px-6 py-4 text-center">{tyre.width}</td>
                                                <td className="px-6 py-4 text-center text-brand-primary font-semibold">{tyre.load}</td>
                                                <td className="px-6 py-4 text-center text-brand-primary font-semibold">{tyre.steer}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AccordionItem>
                        <AccordionItem title="Solid-Lift POB Tyre Sizes & Specifications" isOpen={openIndex === 1} onClick={() => handleToggle(1)}>
                             <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-brand-gray">
                                    <thead className="text-xs text-white uppercase bg-brand-dark">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Tyre Size (in)</th>
                                            <th scope="col" className="px-6 py-3">Size (mm)</th>
                                            <th scope="col" className="px-6 py-3">Tread Pattern</th>
                                            <th scope="col" className="px-6 py-3 text-center">Load Wheel (Kgs)</th>
                                            <th scope="col" className="px-6 py-3 text-center">Steer Wheel (Kgs)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {pobTyres.map((tyre, index) => (
                                            <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">{tyre.sizeIn}</th>
                                                <td className="px-6 py-4">{tyre.sizeMm}</td>
                                                <td className="px-6 py-4">{tyre.pattern}</td>
                                                <td className="px-6 py-4 text-center text-brand-primary font-semibold">{tyre.load}</td>
                                                <td className="px-6 py-4 text-center text-brand-primary font-semibold">{tyre.steer}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </AccordionItem>
                    </div>
                </div>
            </section>
            <ProductSlider />
        </div>
    );
};

export default ProductsPage;