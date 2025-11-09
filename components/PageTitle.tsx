
import React from 'react';
import { Link } from 'react-router-dom';

interface PageTitleProps {
    title: string;
    breadcrumbs: { label: string; path?: string }[];
}

const PageTitle: React.FC<PageTitleProps> = ({ title, breadcrumbs }) => {
    return (
        <section 
            className="relative bg-fixed bg-cover bg-center py-28" 
            style={{ backgroundImage: `url(https://adamastyres.com/images/parallax/s_parallax.jpg)` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">{title}</h1>
                    <nav className="mt-4 text-sm text-white" aria-label="breadcrumb">
                        <ol className="flex justify-center md:justify-start space-x-2">
                            {breadcrumbs.map((crumb, index) => (
                                <li key={index} className="flex items-center">
                                    {crumb.path ? (
                                        <Link to={crumb.path} className="hover:text-brand-primary transition-colors">{crumb.label}</Link>
                                    ) : (
                                        <span className="text-brand-primary">{crumb.label}</span>
                                    )}
                                    {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default PageTitle;
