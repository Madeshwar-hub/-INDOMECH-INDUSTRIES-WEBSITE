
import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import { useImageZoom } from '../contexts/ImageZoomContext';

const factsheetData = {
    basicInfo: [
        { label: 'Nature of Business', value: 'Manufacturer' },
        { label: 'Additional Business', value: 'Factory / Manufacturing' },
        { label: 'Company CEO', value: 'Bala Kumar' },
        { label: 'Registered Address', value: 'No.59, East Balan Nagar, PVR Nagar, Thiruvengavasal, Pudukkottai- 622002, Tamil Nadu, India' },
        { label: 'Total Number of Employees', value: '26 to 50 People' },
        { label: 'GST Registration Date', value: '04-01-2023' },
        { label: 'Legal Status of Firm', value: 'Limited Company' },
        { label: 'Annual Turnover', value: 'Rs. 5 - 25 Crore' },
        { label: 'GST Partner Name', value: ['Karthik Vigneshwar', 'Balachandar Siddharth Swaminathan', 'Pare Palli Bapiraju Hari Kalyan'] }
    ],
    statutoryProfile: [
        { label: 'Import Export Code (IEC)', value: 'AAXCA8574H' },
        { label: 'GST No.', value: '33AAXCA8574H1Z1' },
        { label: 'CIN No.', value: 'U25199TN2022PTC156421' },
        { label: 'Banker', value: ['Axis Bank', 'Karur Vysya Bank'] }
    ]
};

const companyAlbum = [
    { src: 'https://5.imimg.com/data5/SELLER/Default/2023/7/324241097/ZT/JH/TL/137869393/stock-1000x1000.jpeg', alt: 'Our Warehouse' },
    { src: 'https://5.imimg.com/data5/SELLER/Default/2023/7/324241730/BZ/OS/ST/137869393/infra11a-1000x1000.jpeg', alt: 'Manufacturing Unit' },
    { src: 'https://5.imimg.com/data5/SELLER/Default/2023/7/324243105/GK/JC/PN/137869393/setup-1000x1000.jpeg', alt: 'Infrastructural Set-Up' },
];

const categories = [
    { name: 'Solid Tyres', products: '7 products available', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/324303121/LW/EG/AW/137869393/solid-rubber-tyre-250x250.jpg', link: '/products' },
    { name: 'Forklift Tyres', products: '6 products available', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/322836066/MG/LX/XS/137869393/forklift-tyre-250x250.jpeg', link: '/products' },
    { name: 'Heavy Vehicle Tyres', products: '4 products available', image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/320422891/KT/PT/TU/137869393/hopper-tyres-250x250.jpeg', link: '/products' },
    { name: 'Press On Band Tyre', products: '2 products available', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/324297670/OW/DU/FN/137869393/press-on-band-tyres-250x250.jpg', link: '/products' },
    { name: 'Wheel Rim', products: '1 product available', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/323162324/QT/UA/ST/137869393/forklift-wheels-and-rim-250x250.jpeg', link: '/products' },
];

const CategorySlider: React.FC = () => {
    return (
        <section className="py-20 bg-brand-darker">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-white uppercase">Our <span className="text-brand-primary">Products</span></h2>
                    <Link to="/products" className="text-brand-primary font-semibold hover:underline">View All</Link>
                </div>
                <div className="relative">
                    <div className="flex space-x-8 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                        {categories.map((category, index) => (
                            <Link to={category.link} key={index} className="flex-shrink-0 w-64 group">
                                <div className="bg-brand-dark rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2">
                                    <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                                    <div className="p-4 text-left">
                                        <h3 className="text-lg font-semibold text-white group-hover:text-brand-primary transition-colors">{category.name}</h3>
                                        <p className="text-sm text-brand-gray mt-1">{category.products}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
        </section>
    );
};


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
                                Established in the year of <strong>2009</strong>, We <strong>&ldquo;INDOMECH INDUSTRIES&rdquo;</strong> are <strong>Manufacturer</strong> of an <strong>POB Solid Tyres, Industrial Solid Tyres, Forklift Wheels And Rim</strong> etc. We direct all our activities to cater the expectations of customers by providing them excellent quality products as per their gratification.
                            </p>
                             <p className="mb-4">
                                Moreover, we follow moral business policies and crystal pure transparency in all our transactions to keep healthy relations with the customers.
                            </p>
                            <p>
                                For our accomplishment story, we are grateful to our <strong>Mr. Bala Kumar</strong>, whose continual backing and direction have been useful to us for attaining exponential development in the current market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-brand-darker text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white uppercase">Trust & <span className="text-brand-primary">Verification</span></h2>
                    <p className="max-w-3xl mx-auto mt-4 text-brand-gray">
                        We are a verified business, committed to transparency and quality. View our Certificate of Trust from IndiaMART.
                    </p>
                    <div className="mt-8">
                        <Link to="/certificate" className="bg-brand-primary text-black font-bold py-3 px-8 uppercase hover:bg-yellow-300 transition-colors inline-flex items-center space-x-2 rounded">
                            <CertificateIcon />
                            <span>View Certificate</span>
                        </Link>
                    </div>
                </div>
            </section>

            <CategorySlider />

            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Fact<span className="text-brand-primary">sheet</span></h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Basic Information */}
                        <div className="bg-brand-darker p-8 rounded-lg">
                             <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-brand-primary pl-4">Basic Information</h3>
                             <table className="w-full text-sm text-left text-brand-gray">
                                 <tbody>
                                     {factsheetData.basicInfo.map((item, index) => (
                                         <tr key={index} className="border-b border-gray-700 last:border-b-0">
                                             <th scope="row" className="px-4 py-3 font-medium text-white whitespace-nowrap align-top">{item.label}</th>
                                             <td className="px-4 py-3">
                                                {Array.isArray(item.value) ? (
                                                    <ul className="list-disc list-inside space-y-1">
                                                        {item.value.map((v, i) => <li key={i}>{v}</li>)}
                                                    </ul>
                                                ) : item.value}
                                             </td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                        </div>
                        {/* Statutory Profile */}
                        <div className="bg-brand-darker p-8 rounded-lg">
                             <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-brand-primary pl-4">Statutory Profile</h3>
                             <table className="w-full text-sm text-left text-brand-gray">
                                 <tbody>
                                     {factsheetData.statutoryProfile.map((item, index) => (
                                         <tr key={index} className="border-b border-gray-700 last:border-b-0">
                                             <th scope="row" className="px-4 py-3 font-medium text-white whitespace-nowrap align-top">{item.label}</th>
                                             <td className="px-4 py-3">
                                                {Array.isArray(item.value) ? (
                                                    <ul className="list-disc list-inside space-y-1">
                                                        {item.value.map((v, i) => <li key={i}>{v}</li>)}
                                                    </ul>
                                                ) : item.value}
                                             </td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-20 bg-brand-darker">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Our <span className="text-brand-primary">Infrastructure</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {companyAlbum.map((image, index) => (
                           <div key={index} className="bg-brand-dark rounded-lg shadow-2xl flex flex-col p-4">
                                <div 
                                    className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer flex-grow"
                                    onClick={() => zoomImage(image.src)}
                                >
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                                        <ZoomInIcon />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-white mt-4 text-center">{image.alt}</h3>
                            </div>
                        ))}
                    </div>
                </div>
             </section>
        </div>
    );
};

const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const ZoomInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
);

export default AboutPage;
