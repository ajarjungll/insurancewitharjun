
import React from 'react';

const Logo3D = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Main logo container with enhanced 3D effect */}
        <div className="w-16 h-16 relative transform-gpu perspective-1000">
          {/* Logo image with 3D transformations */}
          <div className="w-full h-full relative transform transition-all duration-300 hover:rotate-y-12 hover:scale-110">
            <img 
              src="/lovable-uploads/bd067cbb-e9f3-4b2b-b16e-7d648ce0c42c.png" 
              alt="Arjun Gill Insurance Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3)) drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
              }}
            />
            
            {/* 3D depth shadow */}
            <div 
              className="absolute inset-0 -z-10 transform translate-x-1 translate-y-1 opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
                borderRadius: '12px',
                filter: 'blur(2px)'
              }}
            />
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 -z-20 bg-gradient-radial from-blue-400/20 via-transparent to-transparent rounded-xl blur-lg opacity-60" />
        </div>
      </div>
      
      {/* Company name with enhanced 3D text effect */}
      <div>
        <h1 className="text-2xl font-bold relative">
          {/* Main text */}
          <span className="relative z-10 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent">
            Insurance With Arjun
          </span>
          
          {/* 3D depth layers */}
          <span 
            className="absolute top-0 left-0 -z-10 text-blue-800/40 transform translate-x-0.5 translate-y-0.5"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
          >
            Insurance With Arjun
          </span>
          <span 
            className="absolute top-0 left-0 -z-20 text-blue-700/30 transform translate-x-1 translate-y-1"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            Insurance With Arjun
          </span>
        </h1>
        <p className="text-sm text-gray-600 font-medium relative">
          <span className="relative z-10">Your Trusted Insurance Partner</span>
          <span className="absolute top-0 left-0 -z-10 text-gray-500/50 transform translate-x-0.5 translate-y-0.5">
            Your Trusted Insurance Partner
          </span>
        </p>
      </div>
    </div>
  );
};

export default Logo3D;
