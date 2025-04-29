import React, { useEffect, useRef } from 'react';
import { ArrowRight, BarChart3, Clock, Database } from 'lucide-react';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.3}px`;
      }
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 text-primary-800 opacity-0 animate-fadeInUp">
            Real-Time Greenwich Real Estate Intelligence
          </h1>
          
          <p className="body-lg text-neutral-600 mb-8 opacity-0 animate-fadeInUp animate-delay-100">
            Make confident decisions with accurate, up-to-date market insights derived from Greenwich MLS data. Trusted by leading brokerages, buyers, and sellers for actionable real estate intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeInUp animate-delay-200">
            <a href="#contact" className="btn btn-primary">
              Book a Demo <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="#features" className="btn btn-secondary">
              Explore Features
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-fadeInUp animate-delay-300">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600 flex items-start">
            <div className="mr-4 p-3 bg-primary-50 rounded-full">
              <Clock className="text-primary-700" size={24} />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Real-Time Updates</h3>
              <p className="text-neutral-600">Get the latest market data as it happens, not after it's too late.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600 flex items-start">
            <div className="mr-4 p-3 bg-primary-50 rounded-full">
              <BarChart3 className="text-primary-700" size={24} />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Data-Driven Insights</h3>
              <p className="text-neutral-600">Make informed decisions based on concrete market analytics.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600 flex items-start">
            <div className="mr-4 p-3 bg-primary-50 rounded-full">
              <Database className="text-primary-700" size={24} />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-lg mb-2">Comprehensive Reports</h3>
              <p className="text-neutral-600">Access detailed reports tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};