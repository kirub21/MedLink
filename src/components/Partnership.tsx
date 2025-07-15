import React from 'react';
import { Award, Handshake } from 'lucide-react';

const Partnership = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partnership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supported by leading organizations in healthcare innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Proudly Incubated by</h3>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-lg p-6 mb-6">
              <h4 className="text-3xl font-bold mb-2">ALX Ventures</h4>
              <p className="text-blue-100">
                Empowering the next generation of African entrepreneurs and innovators
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Through our partnership with ALX Ventures, we're accelerating the development of 
              healthcare solutions that make a real difference in rural communities across Africa.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Handshake className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join us in transforming rural healthcare
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Partner with us to bring innovative healthcare solutions to communities that need them most. 
              Together, we can make healthcare accessible, equitable, and effective for everyone.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <Handshake className="mr-2 h-5 w-5" />
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;