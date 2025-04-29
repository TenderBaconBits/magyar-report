import React, { useState } from 'react';
import { Mail, Phone, User, Building, ArrowRight, Check } from 'lucide-react';

export const CTASection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    userType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        userType: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg text-primary-800 mb-6">
                Experience The Magyar Report Difference
              </h2>
              <p className="body-md text-neutral-600 mb-8">
                Schedule a personalized demo to see how our real-time Greenwich market insights can transform your real estate decision-making process.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary-50 rounded-full">
                    <Check className="text-primary-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-1">Personalized Walkthrough</h3>
                    <p className="text-neutral-600">Get a customized demonstration tailored to your specific real estate needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary-50 rounded-full">
                    <Check className="text-primary-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-1">Feature Exploration</h3>
                    <p className="text-neutral-600">See all the powerful tools and insights available on our platform.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary-50 rounded-full">
                    <Check className="text-primary-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-lg mb-1">Q&A Session</h3>
                    <p className="text-neutral-600">Get all your questions answered by our real estate data experts.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-neutral-50 rounded-lg">
                <p className="italic text-neutral-700 mb-4">
                  "Our clients who use The Magyar Report have a distinct advantage in the Greenwich market. The depth and accuracy of the data is unmatched."
                </p>
                <div className="font-serif font-medium">
                  Robert Magyar, Founder
                </div>
              </div>
            </div>
            
            <div>
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center bg-primary-50 p-8 rounded-lg">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="text-primary-700" size={32} />
                  </div>
                  <h3 className="heading-md text-center mb-4">Thank You!</h3>
                  <p className="text-center text-neutral-600 mb-6">
                    Your request has been received. Our team will contact you within 24 hours to schedule your personalized demo.
                  </p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="bg-neutral-50 p-8 rounded-lg shadow-md"
                >
                  <h3 className="heading-md text-primary-800 mb-6">Book Your Demo</h3>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <label htmlFor="name" className="text-sm font-medium text-neutral-700 mb-1 block">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="text-neutral-500" size={18} />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="email" className="text-sm font-medium text-neutral-700 mb-1 block">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="text-neutral-500" size={18} />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="phone" className="text-sm font-medium text-neutral-700 mb-1 block">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="text-neutral-500" size={18} />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="(203) 555-0123"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="company" className="text-sm font-medium text-neutral-700 mb-1 block">
                        Company/Brokerage
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building className="text-neutral-500" size={18} />
                        </div>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Greenwich Realty"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="userType" className="text-sm font-medium text-neutral-700 mb-1 block">
                        I am a:
                      </label>
                      <select
                        id="userType"
                        name="userType"
                        value={formState.userType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="broker">Real Estate Broker</option>
                        <option value="agent">Real Estate Agent</option>
                        <option value="buyer">Home Buyer</option>
                        <option value="seller">Home Seller</option>
                        <option value="investor">Real Estate Investor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-neutral-700 mb-1 block">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us about your specific needs or questions..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <button type="submit" className="mt-6 w-full btn btn-primary">
                    Request Demo <ArrowRight size={16} className="ml-2" />
                  </button>
                  
                  <p className="text-xs text-neutral-500 mt-4">
                    By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};