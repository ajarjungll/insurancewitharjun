
import React from 'react';
import { Shield } from 'lucide-react';

const Logo3D = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Main logo container with 3D effect */}
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl flex items-center justify-center card-3d relative overflow-hidden">
          {/* 3D highlight effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"></div>
          
          {/* Shield icon with glow effect */}
          <Shield className="w-8 h-8 text-white relative z-10" />
          
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 rounded-xl shadow-inner"></div>
        </div>
        
        {/* Small "A" badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
          A
        </div>
      </div>
      
      {/* Company name with 3D text effect */}
      <div>
        <h1 className="text-2xl font-bold text-blue-900 relative">
          Insurance With Arjun
          {/* Text shadow for 3D effect */}
          <span className="absolute top-0 left-0 text-blue-800/30 -z-10 transform translate-x-0.5 translate-y-0.5">
            Insurance With Arjun
          </span>
        </h1>
        <p className="text-sm text-gray-600 font-medium">Your Trusted Insurance Partner</p>
      </div>
    </div>
  );
};

export default Logo3D;
