import React, { useState, useEffect } from 'react';
import { BarChart, Home, TrendingUp, Users, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <BarChart className="text-primary-700" size={28} />
          <span className="font-serif text-xl font-semibold text-primary-800">
            TheMagyarReport
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-neutral-700 hover:text-primary-700 transition-colors">Features</a>
          <a href="#market" className="text-neutral-700 hover:text-primary-700 transition-colors">Market Insights</a>
          <a href="#testimonials" className="text-neutral-700 hover:text-primary-700 transition-colors">Testimonials</a>
          <a href="#contact" className="btn btn-primary">Book a Demo</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fadeInUp">
          <nav className="container-custom flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-neutral-700 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#market" 
              className="text-neutral-700 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Market Insights
            </a>
            <a 
              href="#testimonials" 
              className="text-neutral-700 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary self-start my-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};