import React from 'react';
import { Link } from 'react-router-dom';
import heroBanner from '../images/banner.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Blue fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-400/100 via-brand-blue-200/90 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 py-12 sm:py-16 lg:py-20 text-center sm:text-left sm:pl-12 lg:pl-24">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
              Simplifying Industrial Solutions Since 2022
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Precision and Excellence <br className="hidden sm:block" /> in Every Project
            </h1>

            <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed">
              With over 3 years of expertise, Million Engineering has completed 150+ projects, <br />
              ranging from advanced filtration systems to comprehensive plant setups, always on time and within budget.
            </p>

            <div className="mt-8 flex justify-center sm:justify-start">
              <Link
                to="/products"
                className="bg-logo-gold text-logo-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
