import React from 'react';
import { BarChart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BarChart className="text-accent-500" size={28} />
              <span className="font-serif text-xl font-semibold">
                TheMagyarReport
              </span>
            </div>
            <p className="text-neutral-300 mb-6">
              The definitive source for Greenwich real estate market intelligence. Data-driven insights for informed decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-neutral-300 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#market" className="text-neutral-300 hover:text-white transition-colors">Market Insights</a>
              </li>
              <li>
                <a href="#testimonials" className="text-neutral-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors">Book a Demo</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-300">info@themagyarreport.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-300">(203) 555-7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-neutral-300">
                  290 Greenwich Avenue<br />
                  Greenwich, CT 06830
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-neutral-300 mb-4">
              Subscribe to receive monthly market updates and exclusive insights.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-white placeholder-neutral-400"
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-800 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} The Magyar Report. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};