
import React from 'react';

const Logo3D = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        {/* Animated 3D Logo Text */}
        <div className="relative transform-gpu">
          <h1 className="text-5xl font-bold bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent relative z-10 animate-pulse">
            AG
          </h1>
          {/* 3D shadow layers */}
          <div className="absolute top-0 left-0 text-5xl font-bold text-blue-400/30 -z-10 transform translate-x-1 translate-y-1">
            AG
          </div>
          <div className="absolute top-0 left-0 text-5xl font-bold text-blue-300/20 -z-20 transform translate-x-2 translate-y-2">
            AG
          </div>
          <div className="absolute top-0 left-0 text-5xl font-bold text-blue-200/10 -z-30 transform translate-x-3 translate-y-3">
            AG
          </div>
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
