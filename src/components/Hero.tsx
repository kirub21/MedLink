import React, { useState } from 'react';
import { Play, Mail, X } from 'lucide-react';

const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleWatchDemo = () => {
  setShowDemo(true);
  // Simulate demo completion after 6 minutes 22 seconds (382,000 ms)
  setTimeout(() => {
    setShowDemo(false);
    setShowFeedback(true);
  }, 402000);
};


  const handleGetDemo = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Serving those who serve their communities.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                If you're a healthcare provider, community leader, or health-focused organization working in rural or underserved areas, Medlink offers the digital tools you need to extend care access, optimize service delivery, and engage communities—online and offline.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWatchDemo}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
              <button
                onClick={handleGetDemo}
                className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get a Demo
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
  src="/hiroimage.jpg"
  alt="Healthcare worker providing care in community setting"
  className="rounded-2xl shadow-2xl max-w-full h-auto"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
     {showDemo && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-2xl mx-4">
      <div className="text-center">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/9dnfW2dIZYY"
          title="Medlink Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  </div>
)}


      {showFeedback && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-2xl mx-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Thank you!</h3>
        <button onClick={() => setShowFeedback(false)} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        🎉 We'd love to hear your feedback. Please fill out the form below.
      </p>
      <iframe
        src="https://ee.kobotoolbox.org/i/GHubGxjR"
        width="100%"
        height="600"
        className="rounded-lg border border-gray-300"
        title="Medlink Feedback Form"
      ></iframe>
    </div>
  </div>
)}
  </section>
  );
};

export default Hero;