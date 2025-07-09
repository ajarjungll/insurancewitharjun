
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, TrendingUp, Phone } from 'lucide-react';

const HeroSection = () => {
  return <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Protect What Matters Most With 
              <span className="text-orange-400"> Trusted Insurance</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">Over 3+ years of experience providing comprehensive insurance solutions. From life to travel, critical illness to super visa - we've got you covered.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors text-center btn-3d">
                Get Free Quote
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center btn-3d">
                Contact Agent
              </Link>
              <a href="tel:+14313382078" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center btn-3d flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center card-3d">
              <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">3+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center card-3d">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center card-3d">
              <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">A+</h3>
              <p className="text-blue-100">BBB Rating</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center card-3d">
              <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-blue-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
