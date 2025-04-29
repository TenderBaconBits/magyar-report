import React from 'react';
import { Percent, TrendingUp, TrendingDown, DollarSign, Timer, Home } from 'lucide-react';

export const MarketSnapshot = () => {
  // Sample market metrics - would be dynamic in production
  const metrics = [
    {
      label: "Avg. Days on Market",
      value: "32",
      change: "-12%",
      icon: <Timer className="text-primary-700" size={20} />,
      trend: "down",
      isPositive: true
    },
    {
      label: "Median Sale Price",
      value: "$3.2M",
      change: "+5.4%",
      icon: <DollarSign className="text-primary-700" size={20} />,
      trend: "up",
      isPositive: true
    },
    {
      label: "Inventory Levels",
      value: "142",
      change: "-8.3%",
      icon: <Home className="text-primary-700" size={20} />,
      trend: "down",
      isPositive: false
    },
    {
      label: "Price per Sq. Ft.",
      value: "$856",
      change: "+2.1%",
      icon: <DollarSign className="text-primary-700" size={20} />,
      trend: "up",
      isPositive: true
    },
  ];

  // Duplicate metrics to create scrolling effect
  const scrollerMetrics = [...metrics, ...metrics, ...metrics];

  return (
    <section id="market" className="section bg-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">
            Greenwich Market Snapshot
          </h2>
          <p className="body-md text-primary-50">
            Get a glimpse of the current Greenwich real estate landscape. These key metrics are updated in real-time from verified MLS data to give you the most accurate picture of market conditions.
          </p>
        </div>

        <div className="relative mb-16 py-8 overflow-hidden">
          <div className="stats-scroller flex">
            {scrollerMetrics.map((metric, index) => (
              <div 
                key={index}
                className="flex-none w-72 mx-4 bg-primary-700 p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="p-2 bg-primary-600 rounded-full mr-3">
                      {metric.icon}
                    </div>
                    <h3 className="font-serif font-medium">{metric.label}</h3>
                  </div>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-3xl font-serif font-semibold">{metric.value}</span>
                  <div className={`flex items-center ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.trend === 'up' ? 
                      <TrendingUp size={16} className="mr-1" /> : 
                      <TrendingDown size={16} className="mr-1" />
                    }
                    <span>{metric.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-primary-700 p-8 rounded-lg">
            <h3 className="heading-md mb-4">Neighborhood Breakdown</h3>
            <div className="space-y-4">
              {['Riverside', 'Old Greenwich', 'Cos Cob', 'Backcountry'].map((area, index) => (
                <div key={index} className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{area}</span>
                    <span className="text-primary-100">${Math.round(2.5 + Math.random() * 4.5).toFixed(1)}M</span>
                  </div>
                  <div className="w-full bg-primary-600 rounded-full h-1.5">
                    <div 
                      className="bg-accent-500 h-1.5 rounded-full" 
                      style={{ width: `${50 + Math.random() * 40}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-700 p-8 rounded-lg">
            <h3 className="heading-md mb-4">Market Trends</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Percent className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-serif font-medium text-lg mb-1">Sales Price to List Price Ratio</h4>
                  <p className="text-primary-100">Properties are selling at 96.7% of list price on average, indicating a slight buyer's advantage in negotiations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-serif font-medium text-lg mb-1">Luxury Market Segment Growth</h4>
                  <p className="text-primary-100">Properties above $5M have seen 8.3% higher transaction volume compared to same period last year.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Timer className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-serif font-medium text-lg mb-1">Purchase Timeline Shift</h4>
                  <p className="text-primary-100">Average time from first showing to offer acceptance has decreased by 6 days year-over-year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};