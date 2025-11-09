import React, { useState, useEffect } from 'react';
import { useImageZoom } from '../contexts/ImageZoomContext';

const sliderImages = [
    'https://adamastyres.com/images/gallery/01.jpg',
    'https://adamastyres.com/images/gallery/05.jpg',
    'https://adamastyres.com/images/gallery/08.jpg',
    'https://adamastyres.com/images/gallery/12.jpg',
    'https://adamastyres.com/images/gallery/23.jpg',
    'https://adamastyres.com/images/step02.jpg',
    'https://adamastyres.com/images/step03.jpg',
];

const ProductSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { zoomImage } = useImageZoom();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-brand-darker">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white uppercase mb-12">
                    Our Tyre <span className="text-brand-primary">Collection</span>
                </h2>
                <div className="relative w-full max-w-4xl mx-auto h-96 overflow-hidden rounded-lg bg-black/20">
                    {sliderImages.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src={src}
                                alt={`Tyre sample ${index + 1}`}
                                className="w-full h-full object-contain cursor-pointer p-4"
                                onClick={() => zoomImage(src)}
                            />
                        </div>
                    ))}
                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {sliderImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-brand-primary' : 'bg-gray-500'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSlider;
