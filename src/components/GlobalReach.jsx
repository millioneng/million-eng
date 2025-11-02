import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
} from "lucide-react";
import GlobeAltIcon from "./icons/GlobeAltIcon";

const GlobalReach = () => {
  // --- Inner Reusable Component: ContactCard ---
  const ContactCard = ({ country, address, phone, email, web, mapLink }) => (
    <div className="p-8 text-logo-gold rounded-lg shadow-lg border-b-4 border-logo-gold">
      <h3 className="mb-6 text-3xl font-bold text-gray-900">{country}</h3>
      <div className="space-y-4 text-gray-600">
        <div className="flex items-start">
          <MapPinIcon className="w-6 h-6 mt-1 mr-4 text-logo-gold flex-shrink-0" />
          <span>{address}</span>
        </div>
        <div className="flex items-start">
          <PhoneIcon className="w-6 h-6 mt-1 mr-4 text-logo-gold flex-shrink-0" />
          <span>{phone}</span>
        </div>
        <div className="flex items-start">
          <MailIcon className="w-6 h-6 mt-1 mr-4 text-logo-gold flex-shrink-0" />
          <span>{email}</span>
        </div>
        <div className="flex items-start">
          <GlobeAltIcon className="w-6 h-6 mt-1 mr-4 text-logo-gold flex-shrink-0" />
          <span>{web}</span>
        </div>
      </div>

      {/* Direction Button */}
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 mt-8 bg-logo-gold text-logo-black font-semibold rounded-md hover:bg-logo-gray hover:text-logo-gold transition-all"
      >
        DIRECTION
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </a>
    </div>
  );

  // --- Main Section ---
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto max-w-7xl lg:px-8">
        {/* Header Left-Right Layout */}
        <div className="flex flex-col items-center justify-between mb-16 space-y-8 text-center lg:flex-row lg:space-y-0 lg:text-left">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl">
              Expanding Globally, Delivering Locally
            </h2>
            <p className="text-5xl text-gray-600">
              Supporting Industries Across Pakistan
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Million Engineering, precision drives sustainability. Our advanced
              filtration systems, heat exchangers, and dust collectors are
              engineered to minimize waste, conserve energy, and reduce
              environmental impact—helping industries achieve global standards
              while enhancing efficiency.
            </p>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactCard
            country="PAKISTAN"
            address="Plot # 18, Sector 35-D, Near Edhi Center, Korangi # 5, Karachi, Pakistan"
            phone="+92 314 2265033"
            email="millioneng97@gmail.com"
            web="www.millioneng.com"
            mapLink="https://maps.app.goo.gl/oXM3TpEv9NQGXPHa8"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
