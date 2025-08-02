import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Logo3D from './Logo3D';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-gray-50 shadow-lg sticky top-0 z-50 transition-all duration-300`}>
      {/* Top Bar - Keep unchanged */}
      <div className={`bg-blue-900 text-white transition-all duration-300 ${isScrolled ? 'py-0.5 text-xs' : 'py-3'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={isScrolled ? 12 : 18} />
              <a href="tel:+14313382078" className={`click-to-call text-white hover:text-blue-200 ${isScrolled ? 'text-xs' : 'text-base'}`}>
                (431) 338-2078
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={isScrolled ? 12 : 18} />
              <a href="mailto:insurancewitharjun@gmail.com" className={`hover:text-blue-200 transition-colors ${isScrolled ? 'text-xs' : 'text-base'}`}>
                insurancewitharjun@gmail.com
              </a>
            </div>
          </div>
          <div className={`transition-all duration-300 ${isScrolled ? 'text-xs hidden lg:block' : 'text-base hidden md:block'}`}>
            Licensed Insurance Agent | Office Hours: Mon-Fri 10AM-5PM, Sat 10AM-1PM
          </div>
        </div>
      </div>

      {/* Main Navigation - Make white banner much smaller when scrolled */}
      <nav className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="transition-transform duration-300">
            <Logo3D />
          </Link>

          {/* Desktop Navigation - Keep buttons normal size */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-all btn-3d px-4 py-2 rounded-lg ${
                  isActive(item.path) ? 'text-blue-600 bg-blue-50' : 'bg-white hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all font-medium btn-3d px-6 py-2"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button - Keep normal size */}
          <button
            className="lg:hidden btn-3d rounded-lg bg-gray-100 p-2"
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
