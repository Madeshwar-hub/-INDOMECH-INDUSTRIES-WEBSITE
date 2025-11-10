
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const LOGO_URL = 'https://cdnmf.picsart.com/cloud-storage/5e642d4b-e931-42e8-83e6-c1794c9de2c0.png?type=webp&to=min&r=253';

interface HeaderProps {
  isHomePage: boolean;
}

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block py-2 px-3 text-white uppercase tracking-wider transition-colors duration-300 hover:text-brand-primary ${
            isActive ? 'text-brand-primary' : ''
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

const Header: React.FC<HeaderProps> = ({ isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
      setSearchQuery('');
      setIsOpen(false); // Close mobile menu on search
    }
  };
  
  const headerBaseClass = "w-full transition-all duration-300 z-50";
  const headerPosition = isHomePage && !isScrolled ? "absolute" : "sticky top-0 shadow-lg";

  return (
    <header className={`${headerBaseClass} ${headerPosition}`}>
      {/* Top Bar - Desktop */}
      <div className={`bg-brand-darker border-b border-white/10 hidden lg:block transition-colors duration-300 ${isHomePage && !isScrolled ? 'bg-opacity-50' : ''}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPinIcon />
              <span>No.29, Sipcot Industrial Estate, Pudukkottai</span>
            </div>
            <a href="mailto:indomech.as2021@gmail.com" className="flex items-center space-x-2 hover:text-brand-primary transition-colors">
              <MailIcon />
              <span>indomech.as2021@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon />
            <span>+91 96772 14411</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-colors duration-300 ${isHomePage && !isScrolled ? 'bg-black/30' : 'bg-brand-dark'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <img src={LOGO_URL} alt="INDOMECH INDUSTRIES Logo" className="h-10 lg:h-12 transition-all" />
                <span className="text-white font-bold text-lg lg:text-xl uppercase tracking-wider hidden md:block">INDOMECH INDUSTRIES</span>
              </Link>
            </div>
            
            {/* Center: Desktop Nav */}
            <nav className="hidden lg:flex flex-grow justify-center">
              <ul className="flex space-x-6">
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About Us</NavItem>
                <NavItem to="/services">Services</NavItem>
                <NavItem to="/products">Products</NavItem>
                <NavItem to="/gallery">Gallery</NavItem>
                <NavItem to="/contact">Contact</NavItem>
              </ul>
            </nav>

            {/* Right: Desktop Search & Mobile Button */}
            <div className="flex-shrink-0 flex items-center space-x-4">
              <form onSubmit={handleSearchSubmit} className="hidden lg:flex relative">
                  <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Products..."
                      className="bg-brand-darker border border-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary w-48 text-sm"
                  />
                  <button type="submit" aria-label="Search" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-primary">
                      <SearchIcon />
                  </button>
              </form>
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                  aria-label="Open menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark absolute w-full shadow-lg">
          <div className="p-4">
            <form onSubmit={handleSearchSubmit} className="relative mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Products..."
                    className="w-full bg-brand-darker border border-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-sm"
                />
                <button type="submit" aria-label="Search" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-primary">
                    <SearchIcon />
                </button>
            </form>
          </div>
          <ul className="flex flex-col items-center py-4 space-y-4 border-t border-white/10" onClick={() => setIsOpen(false)}>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/products">Products</NavItem>
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </ul>
           <div className="border-t border-white/10 p-4 flex flex-col items-center space-y-4 text-sm">
             <a href="mailto:indomech.as2021@gmail.com" className="flex items-center space-x-2 hover:text-brand-primary transition-colors">
                <MailIcon />
                <span>indomech.as2021@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <PhoneIcon />
                <span>+91 96772 14411</span>
              </div>
          </div>
        </div>
      )}
    </header>
  );
};

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>);

const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>);


export default Header;
