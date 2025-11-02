import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../images/millions_engineering_logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-logo-gold shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img
            src={logo}
            alt="Million Engineering Logo"
            className="h-20 w-auto object-contain"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Products', 'About Us', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-logo-gold hover:text-logo-gray font-medium transition-all text-lg"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone Icon */}
          <a className="hidden md:flex items-center text-logo-gold hover:text-logo-gray transition-all">
            <Phone className="w-6 h-6" />
          </a>

          {/* Mobile Phone + Hamburger */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile Phone Icon */}
            <a className="flex items-center text-logo-gold hover:text-logo-gray transition-all">
              <Phone className="w-6 h-6" />
            </a>

            {/* Hamburger Icon */}
            <button
              className="text-logo-gold hover:text-logo-gray transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {['Home', 'Products', 'About Us', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-logo-gold hover:text-logo-gray font-medium text-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
