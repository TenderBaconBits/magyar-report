import React from 'react';
import { BarChart2, TrendingUp, Map, Zap, Building, Users, Clock, Shield } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="text-primary-700" size={24} />,
      title: "Price Trend Analysis",
      description: "Track historical and current price movements across Greenwich neighborhoods to identify opportunities and market shifts."
    },
    {
      icon: <Map className="text-primary-700" size={24} />,
      title: "Neighborhood Insights",
      description: "Drill down into specific Greenwich neighborhoods for hyper-local market statistics and property valuations."
    },
    {
      icon: <Zap className="text-primary-700" size={24} />,
      title: "Instant Alerts",
      description: "Receive real-time notifications on market changes, new listings, and price adjustments matching your criteria."
    },
    {
      icon: <Building className="text-primary-700" size={24} />,
      title: "Property Type Analysis",
      description: "Compare performance metrics across luxury homes, condos, townhouses, and land investments."
    },
    {
      icon: <Users className="text-primary-700" size={24} />,
      title: "Client Matching",
      description: "For brokers: identify potential buyers from your network based on listing characteristics."
    },
    {
      icon: <Clock className="text-primary-700" size={24} />,
      title: "Historical Comparisons",
      description: "Access years of historical data to understand cyclical trends and make predictions about future market movements."
    },
    {
      icon: <BarChart2 className="text-primary-700" size={24} />,
      title: "Custom Reports",
      description: "Generate beautifully formatted reports with your selection of metrics for clients, teams, or personal analysis."
    },
    {
      icon: <Shield className="text-primary-700" size={24} />,
      title: "Verified Data",
      description: "All insights are derived directly from Greenwich MLS, ensuring accuracy and eliminating data discrepancies."
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-primary-800 mb-6">
            Market Intelligence that Powers Your Decisions
          </h2>
          <p className="body-md text-neutral-600">
            The Magyar Report provides comprehensive real estate analytics specifically tailored for Greenwich's luxury market. From macro trends to neighborhood-specific insights, our platform delivers the data you need to make confident decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full inline-block">
                {feature.icon}
              </div>
              <h3 className="font-serif font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};