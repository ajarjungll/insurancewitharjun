
import React from 'react';

const Logo3D = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        {/* Logo image with enhanced 3D effects - no container shape */}
        <div className="relative">
          <img 
            src="/lovable-uploads/1b840fd9-56c0-4b16-a862-874fe554da35.png" 
            alt="Arjun Gill Logo" 
            className="w-36 h-36 object-contain relative z-10"
            style={{
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3)) drop-shadow(0 4px 8px rgba(0,0,0,0.2)) drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
          />
        </div>
      </div>
      
      {/* Company name with enhanced 3D text effect */}
      <div>
        <h1 className="text-3xl font-bold text-blue-900 relative">
          Insurance With Arjun
          {/* Multiple text shadow layers for enhanced 3D depth */}
          <span className="absolute top-0 left-0 text-blue-800/20 -z-10 transform translate-x-1 translate-y-1">
            Insurance With Arjun
          </span>
          <span className="absolute top-0 left-0 text-blue-700/15 -z-20 transform translate-x-2 translate-y-2">
            Insurance With Arjun
          </span>
        </h1>
        <p className="text-sm text-gray-600 font-medium tracking-wide">Your Trusted Insurance Partner</p>
      </div>
    </div>
  );
};

export default Logo3D;
