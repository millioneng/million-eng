import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import image1Min from '../images/image-1-min.png';
import image2Min from '../images/image-2-min.png';

const Commitment = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto max-w-full">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* LEFT SIDE - Sustainability Text + Image */}
        <div className="flex-1 w-full relative">
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[500px]">
            <img
              src={image1Min}
              alt="Sustainability Commitment"
              className="shadow-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-logo-gold/30 z-10"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-white p-6 sm:p-8 md:p-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Sustainability</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 sm:mb-4">
                Dedicated to Ensuring Health & Safety
              </h2>
              <p className="text-base sm:text-lg max-w-md leading-relaxed">
                Our filtration systems are designed to safeguard individuals, machinery, and the environment — promoting cleaner operations and safer workplaces.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Existing Content */}
        <div className="flex-1 relative min-h-[400px] md:min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={image2Min}
              alt="Engineering excellence"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Dedicated to Ensuring Health & Safety
            </h2>
            <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-semibold text-gray-800">
              Adopting Industry-Leading Practices
            </h3>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              We comply with international standards and trusted methodologies, providing dependable, high-quality, and secure filtration solutions tailored to unique needs.
            </p>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {['Sustainability', 'Project On Time', 'Modern Technology', 'Latest Designs'].map((item) => (
                <li key={item} className="flex items-center text-base sm:text-lg text-gray-700">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue-700 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Commitment;
