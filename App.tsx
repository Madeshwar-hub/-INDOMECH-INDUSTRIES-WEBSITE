
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ImageZoomProvider } from './contexts/ImageZoomContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CertificatePage = lazy(() => import('./pages/CertificatePage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

const App: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <ImageZoomProvider>
      <div className="bg-brand-darker text-brand-gray min-h-screen font-sans">
        <Header isHomePage={isHomePage} />
        <main>
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/certificate" element={<CertificatePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ImageZoomProvider>
  );
};

export default App;
