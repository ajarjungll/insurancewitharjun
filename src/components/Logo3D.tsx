
import React from 'react';

const Logo3D = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        {/* Main logo container with enhanced 3D effect */}
        <div className="w-20 h-20 relative card-3d overflow-hidden rounded-2xl">
          {/* Enhanced 3D background with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 rounded-2xl"></div>
          
          {/* Multiple highlight layers for depth */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl"></div>
          <div className="absolute top-2 left-2 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
          
          {/* Logo image with enhanced effects */}
          <div className="absolute inset-2 flex items-center justify-center">
            <img 
              src="/lovable-uploads/55ab474a-5f3a-4ae3-a14e-6de458f76ad6.png" 
              alt="Insurance With Arjun Logo" 
              className="w-full h-full object-contain relative z-10 drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
              }}
            />
          </div>
          
          {/* Enhanced inner shadows for realistic depth */}
          <div className="absolute inset-0 rounded-2xl shadow-inner" style={{
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(0,0,0,0.1)'
          }}></div>
          
          {/* Bottom edge shadow for 3D effect */}
          <div className="absolute bottom-0 left-1 right-1 h-1 bg-black/20 rounded-full blur-sm"></div>
        </div>
        
        {/* Enhanced floating badge */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-xl card-3d">
          <span className="relative z-10">A</span>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-full"></div>
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
