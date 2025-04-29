import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Magyar Report gives our team the competitive edge in Greenwich. The neighborhood-specific insights allow us to advise clients with precision that wasn't possible before.",
      name: "Jennifer Moore",
      role: "Managing Broker, Greenwich Prime Properties",
      imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a luxury home seller, I needed reliable data to price my property correctly. The Magyar Report provided exactly what I needed, and I sold for $75,000 more than I expected.",
      name: "Michael Thompson",
      role: "Home Seller, Riverside",
      imageUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "I relocated to Greenwich and relied on The Magyar Report to understand micro-market trends. Their insights helped me time my purchase perfectly and find value in a competitive area.",
      name: "Sarah Johnston",
      role: "Home Buyer, Old Greenwich",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-primary-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="body-md text-neutral-600">
            Discover how The Magyar Report is helping real estate professionals and buyers/sellers make more informed decisions in the Greenwich market.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={testimonials[currentIndex].imageUrl} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -left-4 bg-accent-500 p-3 rounded-full shadow-md">
                  <Quote className="text-white" size={24} />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
              <blockquote className="bg-white p-8 rounded-lg shadow-md relative">
                <p className="text-xl font-serif italic text-neutral-700 mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <footer>
                  <div className="font-semibold text-primary-800 font-serif text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-neutral-600">
                    {testimonials[currentIndex].role}
                  </div>
                </footer>
              </blockquote>

              <div className="flex justify-end mt-6 gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 bg-white rounded-full shadow-md text-primary-700 hover:bg-primary-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-3 bg-white rounded-full shadow-md text-primary-700 hover:bg-primary-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-8 bg-primary-700' : 'w-2 bg-neutral-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};