import React, { useState } from 'react';
import { Menu, X, Stethoscope } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Stethoscope className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">Medlink</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;