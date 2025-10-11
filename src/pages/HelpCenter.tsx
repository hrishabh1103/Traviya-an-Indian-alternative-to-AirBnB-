import React, { useState } from 'react';
import { Search, HelpCircle, BookOpen, MessageCircle, Shield, CreditCard, Home as HomeIcon } from 'lucide-react';

export const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: HomeIcon,
      title: 'Booking & Reservations',
      description: 'Learn how to book, modify, or cancel your stay',
      articles: [
        'How to book a property',
        'Changing your reservation dates',
        'Understanding booking confirmations',
        'Instant vs Request to Book',
      ],
    },
    {
      icon: CreditCard,
      title: 'Payments & Refunds',
      description: 'Payment methods, pricing, and refund policies',
      articles: [
        'Accepted payment methods',
        'Understanding service fees',
        'How refunds work',
        'Payment security',
      ],
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Stay safe while traveling with Traviya',
      articles: [
        'Safety guidelines for guests',
        'Verifying property listings',
        'Emergency support',
        'Reporting issues',
      ],
    },
    {
      icon: MessageCircle,
      title: 'Host Support',
      description: 'Resources for hosts managing their properties',
      articles: [
        'Setting up your listing',
        'Pricing strategies',
        'Managing bookings',
        'Guest communication',
      ],
    },
  ];

  const popularArticles = [
    {
      title: 'How do I book a property on Traviya?',
      views: '45K views',
    },
    {
      title: 'What is the cancellation policy?',
      views: '38K views',
    },
    {
      title: 'How do I contact my host?',
      views: '32K views',
    },
    {
      title: 'When will I be charged for my booking?',
      views: '29K views',
    },
    {
      title: 'How do I leave a review?',
      views: '25K views',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-rose-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <HelpCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">How can we help you?</h1>
            <p className="text-xl text-white/90">
              Find answers to common questions and get support
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-rose-100 rounded-lg p-3">
                  <category.icon className="h-6 w-6 text-rose-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <button className="text-rose-600 hover:text-rose-700 text-sm font-medium hover:underline">
                          {article}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Articles</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-gray-400" />
                    <button className="text-gray-900 hover:text-rose-600 font-medium text-left">
                      {article.title}
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">{article.views}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-6 text-gray-300 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition font-semibold">
              Chat with Support
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
