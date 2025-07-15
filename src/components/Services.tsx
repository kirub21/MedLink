import React from 'react';
import { Database, Brain, GraduationCap, MessageSquare, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Offline-First Digital Health Record System",
      description: "A reliable, connectivity-independent system for storing and accessing patient data in remote settings."
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Assisted Triage & Decision Support",
      description: "Smart tools to guide community health workers through diagnosis and treatment support."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Digital Health & Data Training",
      description: "Training modules to build capacity in using digital tools for care delivery."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: "Community Feedback Loop Systems",
      description: "Tools to gather local voices and improve system responsiveness based on real feedback."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Blockchain-Based Microinsurance Integration",
      description: "Transparent, localized microinsurance systems tailored for low-income, underserved communities."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital health solutions designed for rural and underserved communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-blue-100"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;