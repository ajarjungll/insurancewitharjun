
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Insurance with Arjun</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4">Your trusted insurance partner since 2022. We provide comprehensive coverage solutions for all your needs.</p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Twitter size={20} className="text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Linkedin size={20} className="text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Instagram size={20} className="text-pink-400 hover:text-pink-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/insurance-types" className="text-gray-300 hover:text-white">Insurance Types</Link></li>
              <li><Link to="/investment-types" className="text-gray-300 hover:text-white">Investment Types</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Insurance Types</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Auto Insurance</span></li>
              <li><span className="text-gray-300">Home Insurance</span></li>
              <li><span className="text-gray-300">Life Insurance</span></li>
              <li><span className="text-gray-300">Business Insurance</span></li>
              <li><span className="text-gray-300">Health Insurance</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">(431) 338-2078</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">insurancewitharjun@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-gray-300">
                  Unit-5, 360 Keewatin Street.<br />
                  Winnipeg, MB R2X2Y3.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Insurance with Arjun. All rights reserved. | 
            <span className="ml-2">Licensed Insurance Agency</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
