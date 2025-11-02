'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link from react-router-dom
import aboutIndustryImg from '../images/About-industry-img.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('history');

  const tabs = [
    { id: 'history', title: 'Our History' },
    { id: 'mission', title: 'Our Mission' },
    { id: 'vision', title: 'Our Vision' },
  ];

  const tabContent = {
    history:
      "Since our inception in 2022, we have evolved from a local supplier to a trusted international partner, serving over 150 clients in manufacturing, oil & gas, and pharmaceuticals.",
    mission:
      'Our mission is to provide cutting-edge engineering solutions that enhance efficiency, prioritize safety, and support sustainability for industries worldwide.',
    vision:
      'Our vision is to become a global leader in precision filtration and industrial solutions, renowned for our quality, innovation, and dedication to a sustainable future.',
  };

  return (
    <section className="py-24 bg-white text-logo-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left order-first lg:order-first">
            <h2 className="text-4xl font-bold text-logo-black">
              Delivering Excellence Since 2022
            </h2>
            <span className="block mt-4 text-xl font-semibold text-logo-gold">
              Empowering Industries with Innovation & Precision
            </span>

            <p className="mt-6 text-lg text-logo-black/80">
              Welcome to Million Engineering, your global partner for advanced filtration, heat exchange, and dust collection systems. Operating from Pakistan, we leverage state-of-the-art technology and years of expertise to provide solutions that drive cleaner and more efficient industrial operations.
            </p>

            {/* Tabs */}
            <div className="flex mt-12 mb-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-semibold uppercase tracking-wider text-sm md:text-base
                    ${
                      activeTab === tab.id
                        ? 'bg-gray-100 text-logo-gold border-t-2 border-logo-gold border-b-0 border-l-0 border-r-0'
                        : 'bg-gray-100 text-black border-none'
                    } focus:outline-none active:outline-none hover:bg-gray-100 hover:text-inherit`}
                  style={{ transition: 'none' }}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-lg text-logo-black/80 min-h-[100px]">
              <p>{tabContent[activeTab]}</p>
            </div>

            {/* CTA Button using React Router Link */}
            <Link
              to="/products"
              className="inline-block mt-10 px-10 py-4 bg-logo-gold text-logo-black font-semibold uppercase tracking-wider rounded-full focus:outline-none active:outline-none"
              style={{ transition: 'none' }}
            >
              Explore Our Solutions
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center order-last lg:order-last mt-10 lg:mt-0">
            <img
              src={aboutIndustryImg}
              alt="About Us"
              className="rounded-xl object-cover w-full h-auto max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
