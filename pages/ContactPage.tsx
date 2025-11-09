import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const ContactPage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', path: '/' },
        { label: 'Contact Us' }
    ];
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
        alert('Thank you for your enquiry!');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    };

    return (
        <div>
            <PageTitle title="Contact Us" breadcrumbs={breadcrumbs} />

            <section className="h-[500px] bg-brand-dark">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.433519897816!2d80.15312407581136!3d13.07139221226021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526111d4e92a7b%3A0x89232a5a576150d8!2s50%2C%20Alapakkam%20Main%20Rd%2C%20Alapakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600116%2C%20India!5e0!3m2!1sen!2sus!4v1716300000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>

            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Enquiry Form */}
                        <div className="lg:w-1/2">
                             <h2 className="text-3xl font-bold text-white mb-2">Enquiry <span className="text-brand-primary">Us</span></h2>
                             <p className="text-brand-gray mb-8">
                                We are incredibly responsive to your requests and value your business. Our team is ready to answer all your questions within 24 hours.
                             </p>
                             <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required />
                                    <InputField name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
                                </div>
                                <InputField name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
                                <InputField name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required />
                                <TextAreaField name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required />
                                <button type="submit" className="w-full bg-brand-primary text-black font-bold py-3 px-8 uppercase hover:bg-yellow-300 transition-colors rounded-md">
                                    Send Message
                                </button>
                             </form>
                        </div>
                        {/* Address Details */}
                        <div className="lg:w-1/2 space-y-10">
                            <AddressCard 
                                title="Office & Works"
                                address="NO 50, ALAPAKKAM MAIN ROAD, MADURAVOYAL, CHENNAI - 600095"
                                gstin="33AVUPC7944G1ZA"
                                phone="+91 96772 14411"
                                email="indomech.as2021@gmail.com"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


const InputField: React.FC<{name: string, type?: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean}> = ({name, type="text", placeholder, value, onChange, required}) => (
    <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-brand-darker border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
    />
);

const TextAreaField: React.FC<{name: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, required?: boolean}> = ({name, placeholder, value, onChange, required}) => (
    <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        className="w-full bg-brand-darker border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
    />
);

const AddressCard: React.FC<{title: string, address: string, phone?: string, email: string, gstin?: string}> = ({title, address, phone, email, gstin}) => (
    <div className="bg-brand-darker p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <div className="space-y-4">
            <div className="flex items-start space-x-4">
                <MapPinIcon />
                <p>{address}</p>
            </div>
             {gstin &&
                <div className="flex items-center space-x-4">
                    <GstIcon />
                    <p>GSTIN: {gstin}</p>
                </div>
            }
            {phone &&
                <div className="flex items-center space-x-4">
                    <PhoneIcon />
                    <p>{phone}</p>
                </div>
            }
            <div className="flex items-center space-x-4">
                <MailIcon />
                <a href={`mailto:${email}`} className="hover:text-brand-primary transition-colors">{email}</a>
            </div>
        </div>
    </div>
);


const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>);
const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>);
const GstIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 10a2 2 0 00-2 2v.5a.5.5 0 00.5.5H15a.5.5 0 00.5-.5V16a2 2 0 00-2-2H4z" clipRule="evenodd" /></svg>);

export default ContactPage;
