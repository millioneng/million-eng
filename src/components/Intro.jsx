import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => (
  <section className="relative -mt-16 px-4 sm:px-6 lg:px-24 xl:px-32 z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] max-w-6xl mx-auto shadow-2xl">
      
      {/* Left side - Dark background with text and button */}
      <div className="bg-logo-black text-logo-gold flex items-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl py-10 sm:py-16">
          <h2 className="text-3xl sm:text-3xl font-bold">Engineering Your Industrial Success</h2>
          <span className="block mt-4 text-2xl sm:text-3xl font-medium text-white">
            3 Years of Unmatched Excellence in Filtration Solutions
          </span>
          <p className="mt-6 text-base sm:text-lg text-pink-100">
            At Million Engineering, we transform industrial challenges into high-performance results with precision filter systems, heat exchangers, and dust collectors.
          </p>

          {/* Updated button using React Router Link */}
          <Link 
            to="/contact-us" 
            className="inline-block mt-8 px-8 py-3 bg-logo-gold text-logo-black rounded-full font-semibold"
          >
            Get Your Solution
          </Link>
        </div>
      </div>

      {/* Right side - White background with numeric data */}
      <div className="bg-white flex items-center">
        <div className="w-full h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            <div className="text-left border border-gray-100 p-4 sm:p-6 flex flex-col justify-center">
              <div className="text-4xl font-bold text-logo-gold mb-2">150+</div>
              <div className="text-base sm:text-lg text-gray-600">Projects Completed</div>
            </div>
            <div className="text-left border border-gray-100 p-4 sm:p-6 flex flex-col justify-center">
              <div className="text-4xl font-bold text-logo-gold mb-2">100%</div>
              <div className="text-base sm:text-lg text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-left border border-gray-100 p-4 sm:p-6 flex flex-col justify-center">
              <div className="text-4xl font-bold text-logo-gold mb-2">40%</div>
              <div className="text-base sm:text-lg text-gray-600">Average Cost Savings for Client</div>
            </div>
            <div className="text-left border border-gray-100 p-4 sm:p-6 flex flex-col justify-center">
              <div className="text-4xl font-bold text-logo-gold mb-2">1 Country</div>
              <div className="text-base sm:text-lg text-gray-600">Served: Pakistan</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Intro;
