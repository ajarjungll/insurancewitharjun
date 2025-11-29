import React from 'react';

const LogoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 overflow-hidden py-2">
      <div className="flex animate-scroll-left">
        {/* First set of logos */}
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={`logo-${index}`} className="flex-shrink-0 mx-8">
            <img 
              src="/lovable-uploads/sahara-logo.jpg" 
              alt="Sahara Insurance Group" 
              className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {[7, 8, 9, 10, 11, 12].map((index) => (
          <div key={`logo-duplicate-${index}`} className="flex-shrink-0 mx-8">
            <img 
              src="/lovable-uploads/sahara-logo.jpg" 
              alt="Sahara Insurance Group" 
              className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;
