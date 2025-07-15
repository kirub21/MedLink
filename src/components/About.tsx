import React from 'react';
import { Target, Eye, Heart, Users, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Human-Centered Design",
      description: "Every solution is designed with the end user in mind"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Trust & Confidentiality",
      description: "Maintaining the highest standards of data security and privacy"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Community-First Innovation",
      description: "Solutions that empower local communities and healthcare workers"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Decentralized & Democratized Access",
      description: "Making healthcare tools accessible to everyone, everywhere"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Medlink</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming rural healthcare through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To transform rural healthcare through emerging and capable technologies.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Making healthcare accessible, decentralized, and equitable for all.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-50 rounded-lg p-2">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;