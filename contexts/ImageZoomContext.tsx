import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ImageZoomContextType {
  zoomImage: (src: string) => void;
}

const ImageZoomContext = createContext<ImageZoomContextType | undefined>(undefined);

export const useImageZoom = () => {
  const context = useContext(ImageZoomContext);
  if (!context) {
    throw new Error('useImageZoom must be used within an ImageZoomProvider');
  }
  return context;
};

interface ImageZoomProviderProps {
  children: ReactNode;
}

export const ImageZoomProvider: React.FC<ImageZoomProviderProps> = ({ children }) => {
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);

  const zoomImage = (src: string) => {
    setZoomedSrc(src);
  };

  const closeZoom = () => {
    setZoomedSrc(null);
  };

  return (
    <ImageZoomContext.Provider value={{ zoomImage }}>
      {children}
      {zoomedSrc && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4 animate-fade-in"
          onClick={closeZoom}
          role="dialog"
          aria-modal="true"
          aria-label="Image zoom"
        >
          <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
          <img
            src={zoomedSrc}
            alt="Zoomed view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
          />
          <button
            className="absolute top-4 right-4 text-white text-5xl font-light hover:text-brand-primary transition-colors"
            onClick={closeZoom}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </ImageZoomContext.Provider>
  );
};
