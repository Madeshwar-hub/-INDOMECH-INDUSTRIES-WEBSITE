import React from 'react';
import PageTitle from '../components/PageTitle';
import { useImageZoom } from '../contexts/ImageZoomContext';

const ServicesPage: React.FC = () => {
    const { zoomImage } = useImageZoom();
    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'Services' }
    ];
    
    const serviceImages = [
        { src: 'https://adamastyres.com/images/fltservice1.jpg', title: 'FLT Service 1'},
        { src: 'https://adamastyres.com/images/fltservice2.jpg', title: 'FLT Service 2'},
        { src: 'https://adamastyres.com/images/fltservice3.jpg', title: 'FLT Service 3'},
    ];
    
    const partnerLogoSrc = "https://adamastyres.com/img/srisai.png";

    return (
        <div>
            <PageTitle title="Our Services" breadcrumbs={breadcrumbs} />

            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Our <span className="text-brand-primary">Services</span></h2>
                        <p className="text-brand-gray mb-10">
                            We have a tie-up network for forklift services and annual maintenance contracts for forklifts all over India. This is undertaken by our trusted partners.
                        </p>
                        
                        <div className="bg-brand-darker rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
                            <img 
                                src={partnerLogoSrc} 
                                alt="Shree Sai Paark Enterprises" 
                                className="w-32 h-32 rounded-lg object-contain bg-white p-2 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                                onClick={() => zoomImage(partnerLogoSrc)}
                            />
                            <div className="flex-grow">
                                <h3 className="text-2xl font-semibold text-white">Shree Sai Paark Enterprises</h3>
                                <div className="mt-4 space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <MapPinIcon />
                                        <p className="text-sm">Plot No.62, TVS Nagar, Eastern Side, SIPCOT (Post), Vellanoor Village, Kulathur TK, Pudukottai 622002, Tamilnadu. India.</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <PhoneIcon />
                                        <p className="text-sm">+91 96772 14411, +91 84898 19003</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-20">
                        <h3 className="text-3xl font-bold text-white text-center mb-10">Service <span className="text-brand-primary">Showcase</span></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {serviceImages.map((img, index) => (
                                <div key={index} className="group bg-brand-darker rounded-lg overflow-hidden shadow-lg">
                                    <img 
                                        src={img.src} 
                                        alt={img.title} 
                                        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                                        onClick={() => zoomImage(img.src)}
                                    />
                                    <div className="p-4">
                                        <h6 className="text-lg font-semibold text-white">{img.title}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>);

export default ServicesPage;
