
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, TrendingUp, Phone, Heart, HeartPulse, GraduationCap, PiggyBank } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Enhanced 3D Blue Banner Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* 3D depth layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-blue-700/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/30 to-blue-900/50" />
        
        {/* Geometric 3D elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-400/10 rounded-full blur-lg animate-pulse delay-500" />
        </div>

        {/* 3D grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Protect What Matters Most With 
                <span className="text-orange-400"> Trusted Insurance</span>
              </h1>
              <p className="text-xl mb-4 text-blue-100">Over 3+ years of experience providing comprehensive insurance solutions.</p>
              <p className="text-lg mb-8 text-blue-200">Life Insurance • Critical Illness • Super Visa • Travel Insurance</p>
              <p className="text-lg mb-8 text-green-300 font-semibold">
                <PiggyBank className="inline w-6 h-6 mr-2" />
                Investment Solutions - We've Got You Covered
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 text-center btn-3d transform hover:scale-105">
                  Get Free Quote
                </Link>
                <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 text-center btn-3d transform hover:scale-105">
                  Contact Agent
                </Link>
                <a href="tel:+14313382078" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 text-center btn-3d flex items-center justify-center gap-2 transform hover:scale-105">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl text-center card-3d border border-white/20 shadow-2xl">
                <Heart className="w-12 h-12 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mb-2">Life</h3>
                <p className="text-blue-100">Insurance</p>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl text-center card-3d border border-white/20 shadow-2xl">
                <HeartPulse className="w-12 h-12 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mb-2">Critical</h3>
                <p className="text-blue-100">Illness</p>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl text-center card-3d border border-white/20 shadow-2xl">
                <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mb-2">Super</h3>
                <p className="text-blue-100">Visa</p>
              </div>
              <div className="bg-white/15 backdrop-blur-md p-6 rounded-xl text-center card-3d border border-white/20 shadow-2xl">
                <GraduationCap className="w-12 h-12 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mb-2">Travel</h3>
                <p className="text-blue-100">Insurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
