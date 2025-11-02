import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import logo from '../images/millions_engineering_logo.png'; // <-- Import your logo image
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-logo-gold shadow-md">
  <div className="container mx-auto px-6 max-w-6xl">
    <div className="flex justify-between items-center py-4">
      {/* Logo */}
      <img src={logo} alt="Million Engineering Logo" className="h-28 w-auto object-contain" />

      {/* Nav Links */}
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

      {/* Phone Icon */}
      <a className="hidden md:flex items-center text-logo-gold hover:text-logo-gray transition-all">
        <Phone className="w-8 h-8" />
      </a>
    </div>
  </div>
</header>

  );
};

export default Header;
