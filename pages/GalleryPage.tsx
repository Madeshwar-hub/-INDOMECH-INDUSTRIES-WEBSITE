import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import { useImageZoom } from '../contexts/ImageZoomContext';
import ProductSlider from '../components/ProductSlider';

// Updated product images with provided URLs
const productPhotoUrls = [
    'https://adamastyres.com/images/gallery/02.jpg',
    'https://adamastyres.com/images/gallery/03.jpg',
    'https://adamastyres.com/images/gallery/03.jpg', // Keeping duplicate as provided
    'https://adamastyres.com/images/gallery/05.jpg',
    'https://adamastyres.com/images/gallery/06.jpg',
    'https://adamastyres.com/images/gallery/07.jpg',
    'https://adamastyres.com/images/gallery/08.jpg',
    'https://adamastyres.com/images/gallery/09.jpg',
    'https://adamastyres.com/images/gallery/10.jpg',
    'https://adamastyres.com/images/gallery/11.jpg',
    'https://adamastyres.com/images/gallery/12.jpg',
    'https://adamastyres.com/images/gallery/20.jpg',
    'https://adamastyres.com/images/gallery/21.jpg',
    'https://adamastyres.com/images/gallery/22.jpg',
    'https://adamastyres.com/images/gallery/23.jpg',
];

const productImages = [
    {
        id: 1,
        src: 'https://adamastyres.com/images/gallery/01.jpg',
        alt: 'Product Image 1'
    },
    ...productPhotoUrls.map((url, i) => ({
        id: i + 2,
        src: url,
        alt: `Product Image ${i + 2}`
    }))
];

// Updated feedback images based on original site structure
const feedbackImages = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    src: `https://adamastyres.com/images/gallery/cusfb${i + 1}.jpg`,
    alt: `Customer Feedback Image ${i + 1}`,
}));

const GalleryPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('products');
    const { zoomImage } = useImageZoom();

    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'Gallery' }
    ];
    
    const ImageGrid: React.FC<{ images: { id: number; src: string; alt: string }[] }> = ({ images }) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map(img => (
                <div 
                    key={img.id} 
                    className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3 cursor-pointer"
                    onClick={() => zoomImage(img.src)}
                >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                        <ZoomInIcon />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <PageTitle title="Gallery" breadcrumbs={breadcrumbs} />

            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center border-b border-gray-700 mb-10">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'products' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-white'}`}
                        >
                            Our Products
                        </button>
                        <button
                            onClick={() => setActiveTab('feedback')}
                            className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'feedback' ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-white'}`}
                        >
                            Customer Feedback
                        </button>
                    </div>

                    <div>
                        {activeTab === 'products' && <ImageGrid images={productImages} />}
                        {activeTab === 'feedback' && <ImageGrid images={feedbackImages} />}
                    </div>
                </div>
            </section>
            <ProductSlider />
        </div>
    );
};

const ZoomInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
);


export default GalleryPage;