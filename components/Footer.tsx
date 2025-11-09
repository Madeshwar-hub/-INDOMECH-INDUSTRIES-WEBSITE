
import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL = "https://cdnmf.picsart.com/cloud-storage/5e642d4b-e931-42e8-83e6-c1794c9de2c0.png?type=webp&to=min&r=253";

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-darker text-brand-gray border-t border-white/10">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link to="/">
                            <img src={LOGO_URL} alt="INDOMECH INDUSTRIES Logo" className="h-12" />
                        </Link>
                        <div className="flex items-start space-x-3">
                            <MapPinIcon />
                            <p className="text-sm">NO 50, ALAPAKKAM MAIN ROAD, MADURAVOYAL, CHENNAI - 600095</p>
                        </div>
                         <div className="flex items-start space-x-3">
                            <GstIcon />
                            <p className="text-sm">GSTIN: 33AVUPC7944G1ZA</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <PhoneIcon />
                            <p className="text-sm">+91 96772 14411</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MailIcon />
                            <div className="text-sm">
                                <a href="mailto:indomech.as2021@gmail.com" className="block hover:text-brand-primary transition-colors">indomech.as2021@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Useful Pages */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4 uppercase tracking-wider">Useful Pages</h3>
                        <ul className="space-y-2">
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/products">Products</FooterLink>
                            <FooterLink to="/gallery">Gallery</FooterLink>
                            <FooterLink to="/contact">Contact Us</FooterLink>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4 uppercase tracking-wider">Services</h3>
                        <ul className="space-y-2">
                            <FooterLink to="/services">Our Services</FooterLink>
                            <FooterLink to="/gallery">Product Gallery</FooterLink>
                        </ul>
                    </div>
                    
                    {/* Our Hours */}
                    <div>
                         <h3 className="text-white text-xl font-semibold mb-4 uppercase tracking-wider">Our Hours</h3>
                         <ul className="space-y-3 text-sm">
                             <li className="flex justify-between"><span>Mon-Fri</span> <span className="text-white">9:00am - 8:00pm</span></li>
                             <li className="flex justify-between"><span>Saturday</span> <span className="text-white">9:00am - 4:00pm</span></li>
                             <li className="flex justify-between"><span>Sunday</span> <span className="text-white">Closed</span></li>
                         </ul>
                    </div>
                </div>
            </div>
            {/* Copyright Section */}
            <div className="bg-black/50 py-6">
                <div className="container mx-auto px-4 text-center text-sm">
                    <div className="flex justify-center space-x-4 mb-4">
                       <SocialIcon href="https://linkedin.com" icon={<LinkedInIcon />} />
                       <SocialIcon href="https://facebook.com" icon={<FacebookIcon />} />
                       <SocialIcon href="https://instagram.com" icon={<InstagramIcon />} />
                    </div>
                    <p>&copy; {new Date().getFullYear()} INDOMECH INDUSTRIES. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const FooterLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
    <li>
        <Link to={to} className="flex items-center space-x-2 hover:text-brand-primary transition-colors group">
            <CheckCircleIcon />
            <span>{children}</span>
        </Link>
    </li>
);

const SocialIcon: React.FC<{ href: string, icon: React.ReactNode }> = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-primary border border-brand-gray hover:border-brand-primary rounded-full p-2 transition-colors duration-300">
        {icon}
    </a>
);


const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>);
const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>);
const GstIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 10a2 2 0 00-2 2v.5a.5.5 0 00.5.5H15a.5.5 0 00.5-.5V16a2 2 0 00-2-2H4z" clipRule="evenodd" /></svg>);
const CheckCircleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-primary group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>);
const LinkedInIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.82-11.018-3.714v-2.155z"/></svg>);
const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>);
const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>);

export default Footer;
