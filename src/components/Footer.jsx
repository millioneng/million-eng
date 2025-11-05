import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../images/millions_engineering_logo.png'; // Import the logo image

const Footer = () => (
  <footer className="bg-logo-black text-logo-gold py-8">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="text-center mb-6">
            <img src={logo} alt="Million Engineering Logo" className="h-28 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Million Engineering delivers top-tier engineering services and industrial product solutions across sectors, committed to innovation and reliability.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-brand-blue-600">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-brand-blue-600">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-brand-blue-600">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-brand-blue-600">
              <Instagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-white mb-6 uppercase tracking-wider">Products</h4>
          <ul className="space-y-3">
  <li><Link to="/products#filter-bags" className="hover:text-white transition-colors">Filter Bags</Link></li>
  <li><Link to="/products#filter-cartridges" className="hover:text-white transition-colors">Filter Cartridges</Link></li>
  <li><Link to="/products#plate-type-heat-exchangers" className="hover:text-white transition-colors">Plate Type Heat Exchangers</Link></li>
  <li><Link to="/products#dust-collector-bags" className="hover:text-white transition-colors">Dust Collector Bags</Link></li>
  <li><Link to="/products#filter-housings" className="hover:text-white transition-colors">Filter Housings</Link></li>
  <li><Link to="/products#cooling-tower" className="hover:text-white transition-colors">Cooling Tower</Link></li>
  <li><Link to="/products#pressure-leaf-filter" className="hover:text-white transition-colors">Pressure Leaf Filter</Link></li>
</ul>

        </div>

        <div>
          <h4 className="text-xl font-semibold text-white mb-6 uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-brand-blue-500 mr-3 mt-1 flex-shrink-0" />
              <span>Plot # 18, Sector 35-D, Near Edhi Center, Korangi # 5, Karachi, Pakistan</span>
            </li>
            <li className="flex items-start">
              <Phone className="w-5 h-5 text-brand-blue-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p>+92 314 2265033</p>
                <p>+92 346 3697758</p>
              </div>
            </li>
            <li className="flex items-start">
              <Mail className="w-5 h-5 text-brand-blue-500 mr-3 mt-1 flex-shrink-0" />
              <span>millioneng97@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Border above copyright */}
      <div className="border-t border-logo-gold mt-8 pt-4 flex items-center justify-center text-center text-sm h-12">
        © {new Date().getFullYear()} Million Engineering. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
