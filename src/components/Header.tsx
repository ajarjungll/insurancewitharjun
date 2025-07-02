
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Logo3D from './Logo3D';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance Types', path: '/insurance-types' },
    { name: 'Investment Types', path: '/investment-types' },
    { name: 'About Us', path: '/about' },
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
            Licensed Insurance Agent | Office Hours: Mon-Fri 10AM-5PM, Sat 10AM-1PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo3D />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-all px-4 py-2 rounded-lg btn-3d ${
                  isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'bg-white hover:bg-blue-50'
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
                className={`block py-2 px-4 my-1 rounded-lg text-gray-700 hover:text-blue-600 btn-3d transition-all ${
                  isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'bg-white hover:bg-blue-50'
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
