
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance Types', path: '/insurance-types' },
    { name: 'Investment Types', path: '/investment-types' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <a href="tel:+14313382078" className="click-to-call text-white hover:text-blue-200">
                (431) 338-2078
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <a href="mailto:insurancewitharjun@gmail.com" className="hover:text-blue-200 transition-colors">
                insurancewitharjun@gmail.com
              </a>
            </div>
          </div>
          <div className="text-sm">
            Licensed Insurance Agent | Serving Communities Since 2022
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center card-3d">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Insurance With Arjun</h1>
              <p className="text-sm text-gray-600">Your Trusted Insurance Partner</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                  isActive(item.path) ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium btn-3d"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden btn-3d p-2 rounded-lg bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-gray-700 hover:text-blue-600 ${
                  isActive(item.path) ? 'text-blue-600 font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="block mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-center btn-3d"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
