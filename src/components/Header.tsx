import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import Logo3D from './Logo3D';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
      
      // Determine if scrolled
      setIsScrolled(scrollTop > 50);
      
      // Header visibility logic
      if (scrollTop === 0) {
        // At the top - always show header
        setIsHeaderVisible(true);
      } else if (scrollTop < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      } else if (scrollTop > lastScrollY && scrollTop > 100) {
        // Scrolling down and past 100px - hide header
        setIsHeaderVisible(false);
      }
      
      setLastScrollY(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
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

      {/* Main Navigation */}
      <nav className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'py-0.5' : 'py-1'}`}>
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
                className={`font-medium transition-all px-4 py-2 rounded-lg ${
                  isActive(item.path) 
                    ? 'text-blue-700 bg-gradient-to-b from-blue-100 to-blue-200 shadow-[0_4px_0_0_#1e40af,0_6px_10px_rgba(30,64,175,0.3)] hover:shadow-[0_2px_0_0_#1e40af,0_4px_6px_rgba(30,64,175,0.3)] hover:translate-y-[2px]' 
                    : 'text-blue-800 bg-gradient-to-b from-blue-50 to-blue-100 shadow-[0_4px_0_0_#3b82f6,0_6px_10px_rgba(59,130,246,0.25)] hover:shadow-[0_2px_0_0_#3b82f6,0_4px_6px_rgba(59,130,246,0.25)] hover:translate-y-[2px] hover:from-blue-100 hover:to-blue-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-gradient-to-b from-orange-500 to-orange-600 text-white rounded-lg transition-all font-medium px-6 py-2 shadow-[0_4px_0_0_#c2410c,0_6px_10px_rgba(194,65,12,0.3)] hover:shadow-[0_2px_0_0_#c2410c,0_4px_6px_rgba(194,65,12,0.3)] hover:translate-y-[2px]"
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
                className={`block py-2 px-4 my-2 rounded-lg font-medium transition-all ${
                  isActive(item.path) 
                    ? 'text-blue-700 bg-gradient-to-b from-blue-100 to-blue-200 shadow-[0_3px_0_0_#1e40af,0_4px_8px_rgba(30,64,175,0.3)]' 
                    : 'text-blue-800 bg-gradient-to-b from-blue-50 to-blue-100 shadow-[0_3px_0_0_#3b82f6,0_4px_8px_rgba(59,130,246,0.25)]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="block mt-4 bg-gradient-to-b from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg transition-all font-medium text-center shadow-[0_3px_0_0_#c2410c,0_4px_8px_rgba(194,65,12,0.3)]"
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
