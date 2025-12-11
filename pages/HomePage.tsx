import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { useImageZoom } from '../contexts/ImageZoomContext';

const slides = [
    {
        image: 'https://adamastyres.com/images/slide01.jpg',
        title: 'INDOMECH INDUSTRIES',
        subtitle: 'Manufacturers of SOLID TYRES',
        typed: [
            'Solid - Cushion Tyres', 1000,
            'Solid Press On Band Tyres', 1000,
            'Non Marking Solid Tyres', 1000,
            'Lip Type Solid Tyres', 1000,
            'Solid Resilient Tyres', 1000,
        ],
        description: 'For Material Handling Equipments Like',
        list: ['Forklifts Trucks', 'Port Trailers', 'Skid-steer Machines', 'Platform Trucks', 'Tow Trucks']
    },
    {
        image: 'https://adamastyres.com/images/slide02.jpg',
        title: 'Solid-Lift',
        subtitle: '5.00 x 8 - 3',
        description: 'and More Tyre sizes'
    },
    {
        image: 'https://adamastyres.com/images/slide03.jpg',
        title: 'Press - On Band',
        subtitle: '600 x 9 - 4',
        description: 'and More Tyre sizes'
    }
];

const fastMovingTyres = [
    { name: 'Solid Cushion Tyres', type: 'CT', size: '6.50 x 10', feature: 'Traction Type' },
    { name: 'Solid Pob Tyres', type: 'POB', size: '22 x 6 x 16', feature: 'Traction Type' },
    { name: 'Port Trailer Tyres', type: 'CT', size: '10.00 x 20', feature: 'Smooth Type' },
    { name: 'Skid Steer Solid Tyres', type: 'CT', size: '8.25 x 16', feature: 'Traction/Tractor Type' },
];

const HomePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [enquirySlideIndex, setEnquirySlideIndex] = useState(0);
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const { zoomImage } = useImageZoom();

    // Hero Slider
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    // Enquiry Image Slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setEnquirySlideIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // Generate Dynamic QR Code URL based on current location
    useEffect(() => {
        // Get the current page URL without hash or query parameters
        // This preserves 'index.html' if it is present in the URL, preventing 404 errors
        // on servers that do not automatically serve index.html for directory roots.
        const baseUrl = window.location.href.split('#')[0].split('?')[0];
        
        // Append the hash route for the products page
        // If baseUrl ends in '/', result is '.../#/products'
        // If baseUrl ends in 'index.html', result is '.../index.html#/products'
        // Both formats are correctly handled by the browser and HashRouter.
        setQrCodeUrl(`${baseUrl}#/products`);
    }, []);

    return (
        <div>
            {/* Hero Slider */}
            <section className="relative h-screen bg-black">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                ))}
                <div className="relative z-10 flex items-center h-full">
                    <div className="container mx-auto px-4 text-white text-center md:text-left">
                        <div className="max-w-3xl">
                             <h1 className="text-4xl lg:text-5xl font-bold uppercase">
                                <span className="text-brand-primary">{slides[currentSlide].title}</span>
                            </h1>
                            {slides[currentSlide].subtitle && 
                                <h2 className="text-3xl lg:text-4xl font-bold uppercase mt-2">
                                    {slides[currentSlide].subtitle}
                                </h2>
                            }
                            {slides[currentSlide].typed && 
                                <div className="text-3xl lg:text-4xl font-bold uppercase text-brand-primary h-12 mt-2">
                                    <TypeAnimation
                                        sequence={slides[currentSlide].typed || []}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </div>
                            }
                             {slides[currentSlide].description && 
                                <p className="mt-4 text-lg">{slides[currentSlide].description}</p>
                            }
                             {slides[currentSlide].list && 
                                <ul className="mt-2 space-y-1 list-disc list-inside">
                                    {slides[currentSlide].list?.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            }
                            <div className="mt-8">
                                <Link to="/products" className="bg-brand-primary text-black font-bold py-3 px-8 uppercase hover:bg-yellow-300 transition-colors">
                                    Get Started More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fast-Moving Tyres */}
            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white uppercase">Fast-Moving Tyres</h2>
                        <p className="text-lg text-brand-gray mt-2">Check out some of our popular tyre sizes</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fastMovingTyres.map((tyre, index) => (
                             <div key={index} className="bg-brand-darker p-8 rounded-lg text-center border border-transparent hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2">
                                <h3 className="text-xl font-semibold text-white uppercase">{tyre.name}</h3>
                                <p className="text-brand-gray text-sm uppercase">{tyre.type}</p>
                                <p className="text-4xl font-bold text-brand-primary my-4">{tyre.size}</p>
                                <div className="flex items-center justify-center space-x-2 text-brand-gray">
                                    <CheckIcon />
                                    <span>{tyre.feature}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-20 text-center">
                 <div className="container mx-auto px-4">
                     <h2 className="text-3xl font-bold text-white uppercase">Welcome to</h2>
                     <p className="text-lg text-brand-primary mt-2">INDOMECH INDUSTRIES</p>
                     <p className="max-w-3xl mx-auto mt-6">
                         Since 2010, INDOMECH INDUSTRIES is placed along side the top-notch manufacturers, suppliers and exporters of a comprehensive collection of Solid Rubber Tyres. Our range of these products comprises Solid Press On Band (POB) Tyres...
                     </p>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-5xl mx-auto">
                        <div className="space-y-3">
                            <QualityIcon />
                            <h4 className="text-xl font-semibold text-white">About Us</h4>
                            <p className="text-sm">Manufactures of SOLID-LIFT brand, Solid Cushion type and...</p>
                        </div>
                        <div className="space-y-3">
                            <MissionIcon />
                            <h4 className="text-xl font-semibold text-white">Our Mission</h4>
                            <p className="text-sm">Motivated and Committed team, to give quality a new...</p>
                        </div>
                        <div className="space-y-3">
                            <VisionIcon />
                            <h4 className="text-xl font-semibold text-white">Quality</h4>
                            <p className="text-sm">Since our inception, we have been a quality conscious...</p>
                        </div>
                     </div>
                     <div className="mt-12">
                         <Link to="/about" className="bg-brand-primary text-black font-bold py-3 px-8 uppercase hover:bg-yellow-300 transition-colors">Read More</Link>
                     </div>
                 </div>
            </section>
            
            {/* Diversified Range */}
             <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4 text-center">
                     <h2 className="text-3xl font-bold text-white uppercase">Diversified Range of <span className="text-brand-primary">Tyres</span></h2>
                     <p className="text-lg text-brand-gray mt-2">Manufactures of SOLID-LIFT brand, Solid Cushion type and Solid POB tyres</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                         {['Comfort Y Lug', 'Comfort Ribbed', 'Comfort Plain', 'Special Purpose Tyres'].map((item, index) => {
                             const imgSrc = index === 0 ? 'https://adamastyres.com/images/gallery/01.jpg' : `https://adamastyres.com/images/step0${index + 1}.jpg`;
                             return (
                              <div key={index} className="group overflow-hidden rounded-lg">
                                 <img 
                                     src={imgSrc} 
                                     alt={item} 
                                     className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500 aspect-[4/3] cursor-pointer"
                                     onClick={() => zoomImage(imgSrc)}
                                 />
                                 <div className="bg-brand-darker p-4">
                                     <h5 className="text-white font-semibold group-hover:text-brand-primary transition-colors">{item}</h5>
                                 </div>
                             </div>
                         )})}
                     </div>
                </div>
            </section>

             {/* Our Products */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white uppercase">Our <span className="text-brand-primary">Products</span></h2>
                    <p className="text-lg text-brand-gray mt-2">Our product range is fabricated using the finest quality rubber and latest technology</p>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
                        <div className="w-full lg:w-1/4 space-y-8 text-left">
                            <ProductItem>Solid Resilient Tyres</ProductItem>
                            <ProductItem>Trolley Tyres</ProductItem>
                            <ProductItem>Port Trailer Tyres</ProductItem>
                            <ProductItem>Tow Truck Tyres</ProductItem>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src="https://adamastyres.com/images/01.png" alt="Featured Tyre" className="mx-auto cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => zoomImage('https://adamastyres.com/images/01.png')} />
                        </div>
                        <div className="w-full lg:w-1/4 space-y-8 text-left">
                             <ProductItem>Non Marking solid Tyres</ProductItem>
                             <ProductItem>Skid Steer Solid Tyres</ProductItem>
                             <ProductItem>Forklift Solid Tyres</ProductItem>
                             <ProductItem>Port Hopper Tyres</ProductItem>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Enquiry and QR Code Section */}
            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Slideshow on Left */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                {slides.map((slide, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === enquirySlideIndex ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <img 
                                            src={slide.image} 
                                            alt="Enquiry Slide" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                {/* Transparent placeholder to maintain aspect ratio */}
                                <img 
                                    src={slides[enquirySlideIndex].image} 
                                    alt="Enquiry Main"
                                    className="w-full h-auto object-cover opacity-0 pointer-events-none"
                                />
                                <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => zoomImage(slides[enquirySlideIndex].image)}></div>
                            </div>
                        </div>

                        {/* Text and Scanner on Right */}
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-3xl font-bold text-white">Send an <span className="text-brand-primary">Enquiry</span></h2>
                            <p className="mt-4 text-brand-gray">We are incredibly responsive to your requests and value your business. Get in touch with us for any questions about features, trials, pricing, or anything else.</p>
                            <ul className="mt-4 space-y-2">
                                <ListItem>Full Support Provided</ListItem>
                                <ListItem>Wide Range of Services</ListItem>
                                <ListItem>24/7 Customer Support</ListItem>
                            </ul>
                            
                            {/* Product Scanner Section */}
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold text-white mb-4">Scan to View Our Products</h4>
                                <div className="bg-brand-darker p-6 rounded-lg border border-white/5 shadow-inner">
                                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                                        {/* Static QR Code */}
                                        <div className="bg-white p-2 rounded-lg shadow-lg">
                                            {qrCodeUrl ? (
                                                <a href={qrCodeUrl} target="_blank" rel="noopener noreferrer" title="Scan to view all products">
                                                    <img 
                                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeUrl)}&ecc=M&margin=0&color=000000&bgcolor=FFFFFF`} 
                                                        alt="Product QR Code" 
                                                        className="w-32 h-32"
                                                    />
                                                </a>
                                            ) : (
                                                <div className="w-32 h-32 flex items-center justify-center bg-gray-200 text-gray-500 text-xs">Loading QR...</div>
                                            )}
                                        </div>
                                        <p className="text-brand-gray text-sm">Scan to browse our complete catalog</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ListItem: React.FC<{children: React.ReactNode}> = ({children}) => (
    <li className="flex items-center text-brand-gray">
        <CheckIcon />
        <span className="ml-2">{children}</span>
    </li>
);

const ProductItem: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div className="flex items-center space-x-3">
        <CheckCircleIcon />
        <h6 className="font-semibold text-white hover:text-brand-primary cursor-pointer transition-colors">{children}</h6>
    </div>
);

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;
const CheckCircleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>);
const QualityIcon = () => <div className="text-5xl text-brand-primary mx-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg></div>;
const MissionIcon = () => <div className="text-5xl text-brand-primary mx-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg></div>;
const VisionIcon = () => <div className="text-5xl text-brand-primary mx-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>;

export default HomePage;