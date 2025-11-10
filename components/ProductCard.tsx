
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useImageZoom } from '../contexts/ImageZoomContext';
import { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
    imageIndex?: number;
}


const ProductCard: React.FC<ProductCardProps> = ({ product, imageIndex = 0 }) => {
    const navigate = useNavigate();
    const { zoomImage } = useImageZoom();
    const imageUrl = product.images[imageIndex];

    return (
        <div className="bg-brand-darker rounded-lg shadow-lg overflow-hidden flex flex-col group">
             <div className="relative overflow-hidden cursor-pointer" onClick={() => zoomImage(imageUrl)}>
                <img 
                    src={imageUrl} 
                    alt={`${product.name} image ${imageIndex + 1}`} 
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white flex-grow">{product.name}</h3>
                <p className="text-brand-primary text-xl font-bold mt-2">{product.price}</p>
                <button 
                    onClick={() => navigate('/contact')}
                    className="mt-4 w-full bg-brand-primary text-black font-bold py-2 px-4 uppercase text-sm hover:bg-yellow-300 transition-colors rounded-md"
                >
                    Get Best Quote
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
