
import React from 'react';
import PageTitle from '../components/PageTitle';

const CertificatePage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Certificate of Trust' }
    ];

    return (
        <div className="bg-brand-dark">
            <PageTitle title="Certificate of Trust" breadcrumbs={breadcrumbs} />
            <div className="py-20 px-4">
                <div className="max-w-2xl mx-auto border-2 border-[#9d8163] p-5 relative bg-white text-gray-800 shadow-2xl">
                    <div className="absolute inset-2 border-2 border-[#9d8163] pointer-events-none"></div>
                    <div className="absolute inset-4 border border-[#9d8163] pointer-events-none"></div>
                    
                    <div className="relative z-10" style={{ fontFamily: "'Roboto', sans-serif"}}>
                        <header className="text-center pb-8 mt-8">
                            <img src="https://td.imimg.com/css/tsLg1.png" alt="Trustseal Logo" className="mx-auto" />
                            <p className="text-lg mt-4 pb-8 relative after:content-[''] after:absolute after:w-20 after:h-0.5 after:bg-[#bf9132] after:bottom-4 after:left-1/2 after:-translate-x-1/2">
                                CERTIFICATE OF TRUST
                            </p>
                            <div className="px-10">
                                <h1 className="text-2xl font-bold text-[#bf9132]">INDOMECH INDUSTRIES</h1>
                                <h3 className="text-base font-medium">Pudukkottai, Tamil Nadu</h3>
                            </div>
                            <p className="text-base mt-4">has been certified as a trusted member of IndiaMART</p>
                        </header>

                        <main className="w-11/12 mx-auto">
                            <hr className="border-[#bf9132]" />
                            <p className="text-xs text-gray-600 mt-4">Following details of the company have been verified*</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <VerifiedItem label="Director / Proprietor" value="Bala Kumar" />
                                <VerifiedItem label="GSTIN" value="33AAXCA8574H1Z1" />
                                <VerifiedItem label="Business Address" value="No.59, East Balan Nagar, PVR Nagar, Thiruvengavasal, Pudukkottai- 622002, Tamil Nadu, India" />
                                <VerifiedItem label="Import Export Code" value="AAXCA*****" />
                                <VerifiedItem label="Mobile Number" />
                                <VerifiedItem label="Email Id" />
                            </ul>
                        </main>

                        <footer className="pb-8 w-11/12 mx-auto mt-4">
                            <hr className="border-[#bf9132]" />
                            <ul className="flex justify-center items-center text-sm space-x-4 mt-4">
                                <li>Issue date: <span className="font-medium">15th Jul 2023</span></li>
                                <li className="h-4 w-px bg-gray-400"></li>
                                <li>Expiry date: <span className="font-medium">28th Jul 2028</span></li>
                            </ul>
                            <div className="text-xs text-center text-gray-600 mt-4">
                                <img alt="IndiaMART Logo" className="mt-2 mx-auto" src="//td.imimg.com/css/imLogo.png" />
                                <p className="mt-2">IndiaMART InterMESH Ltd.</p>
                                <p className="px-5">6th floor, Tower 2, Assotech Business Cresterra, Plot No.22, Sec 135, Noida-201305, Uttar Pradesh, India.</p>
                                <ul className="flex justify-center items-center text-xs mt-4 space-x-4">
                                    <li className="flex items-center"><PhoneIcon /> <span className="font-medium">096-9696-9696</span></li>
                                    <li className="h-4 w-px bg-gray-400"></li>
                                    <li className="flex items-center"><MailIcon /> <span className="font-medium">customercare@indiamart.com</span></li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

const VerifiedItem: React.FC<{ label: string; value?: string }> = ({ label, value }) => (
    <li className="flex items-start">
        <span className="text-green-600 mr-2 mt-0.5 flex-shrink-0"><CheckIcon /></span>
        <div>
            <span className="whitespace-nowrap">{label}: </span>
            {value && <span className="font-medium ml-1">{value}</span>}
        </div>
    </li>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export default CertificatePage;
