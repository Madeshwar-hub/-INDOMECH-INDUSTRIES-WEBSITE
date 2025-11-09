import React from 'react';
import PageTitle from '../components/PageTitle';
import { useImageZoom } from '../contexts/ImageZoomContext';
import ProductSlider from '../components/ProductSlider';

const AboutPage: React.FC = () => {
    const { zoomImage } = useImageZoom();
    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'About Us' }
    ];
    const imageUrl = "https://adamastyres.com/images/aboutus.png";

    return (
        <div>
            <PageTitle title="About Us" breadcrumbs={breadcrumbs} />
            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <img 
                                src={imageUrl} 
                                alt="About INDOMECH INDUSTRIES" 
                                className="rounded-lg shadow-lg w-full cursor-pointer transition-transform duration-300 hover:scale-105"
                                onClick={() => zoomImage(imageUrl)}
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-4">About <span className="text-brand-primary">Us</span></h2>
                            <p className="mb-4">
                                Since 2010, <strong className="text-white">INDOMECH INDUSTRIES</strong>, is placed along side the top-notch manufacturers, suppliers and exporters of a comprehensive collection of Solid Rubber Tyres. Our range of these products comprises Solid Press On Band (POB) Tyres, Solid Cushion Tyres, Non Marking Tyres and Lip/Click Tyres.
                            </p>
                            <p className="mb-4">
                                These Tyres are recognized in the market for their wear & tear resistance and oil & heat resistance. We have been endorsing our range under the brand name of ‘<strong>SOLID-LIFT</strong>’ & ‘<strong>SHAKTHI</strong>” Tyres.
                            </p>
                            <p>
                                Due to this reason, we have been able to manufacture an impeccable range of products. These products are chiefly fitted in pallet trolleys, reach trucks, baggage trolleys, forklift trucks, internal port trailers and GLAMA charger.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-20">
                         <h3 className="text-3xl font-bold text-white text-center mb-10">Our <span className="text-brand-primary">Commitment</span></h3>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-brand-darker p-8 rounded-lg border-l-4 border-brand-primary">
                                <h4 className="text-2xl font-semibold text-white mb-3">Our Quality</h4>
                                <p className="text-brand-gray">Since our inception, we have been a quality conscious organization. We work towards providing our clients with an array of immaculate products. Our team of quality controllers stringently checks all raw material and finished items under the international norms and standards.</p>
                            </div>
                            <div className="bg-brand-darker p-8 rounded-lg border-l-4 border-brand-primary">
                                <h4 className="text-2xl font-semibold text-white mb-3">Our Mission</h4>
                                <p className="text-brand-gray">Motivated and Committed team, to give quality a new definition. We produce most innovative and reliable tyres. To be amongst the most admired companies in India, committed to excellence.</p>
                            </div>
                            <div className="bg-brand-darker p-8 rounded-lg border-l-4 border-brand-primary">
                                <h4 className="text-2xl font-semibold text-white mb-3">Our Vision</h4>
                                <p className="text-brand-gray">The Team behind this company are well known and have experience more than two decades and equipped with modern machineries & Wide range of molds.</p>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
            <ProductSlider />
        </div>
    );
};

export default AboutPage;