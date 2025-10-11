import React from 'react';
import { BookOpen, Video, FileText, Users, TrendingUp, Shield, MessageCircle, Globe } from 'lucide-react';

export const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      resources: [
        { name: 'Host Welcome Guide', description: 'Everything you need to know to start hosting' },
        { name: 'Setting Up Your Listing', description: 'Step-by-step guide to creating your first listing' },
        { name: 'Photography Tips', description: 'Best practices for showcasing your property' },
        { name: 'Pricing Strategy', description: 'How to set competitive rates for your space' },
      ],
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      resources: [
        { name: 'Complete Host Training', description: '45-minute comprehensive training session' },
        { name: 'Calendar Management', description: 'Learn to manage bookings efficiently' },
        { name: 'Guest Communication', description: 'Best practices for host-guest interaction' },
        { name: 'House Rules Setup', description: 'Creating effective property guidelines' },
      ],
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      resources: [
        { name: 'Tax Guidelines for Hosts', description: 'Understanding your tax obligations' },
        { name: 'Insurance Coverage', description: 'Protect your property and guests' },
        { name: 'Local Regulations', description: 'Stay compliant with local laws' },
        { name: 'Terms of Service', description: 'Understanding platform policies' },
      ],
    },
    {
      title: 'Marketing & Growth',
      icon: TrendingUp,
      resources: [
        { name: 'Boost Your Visibility', description: 'SEO tips for your listing' },
        { name: 'Seasonal Strategies', description: 'Maximize bookings year-round' },
        { name: 'Guest Reviews Guide', description: 'Building a 5-star reputation' },
        { name: 'Social Media Marketing', description: 'Promote your listing effectively' },
      ],
    },
    {
      title: 'Guest Experience',
      icon: Users,
      resources: [
        { name: 'Welcome Book Templates', description: 'Create memorable guest experiences' },
        { name: 'Local Area Guides', description: 'Share the best of your neighborhood' },
        { name: 'Amenities Checklist', description: 'Essential items guests expect' },
        { name: 'Handling Special Requests', description: 'Go above and beyond for guests' },
      ],
    },
    {
      title: 'Community & Support',
      icon: MessageCircle,
      resources: [
        { name: 'Host Community Forum', description: 'Connect with fellow hosts' },
        { name: 'Monthly Host Webinars', description: 'Live Q&A and expert insights' },
        { name: 'Success Stories', description: 'Learn from top-performing hosts' },
        { name: '24/7 Host Support', description: 'Get help whenever you need it' },
      ],
    },
  ];

  const downloadableResources = [
    { name: 'Host Handbook PDF', size: '2.5 MB', icon: FileText },
    { name: 'Checklist Template', size: '156 KB', icon: FileText },
    { name: 'Welcome Letter Template', size: '89 KB', icon: FileText },
    { name: 'Cleaning Schedule', size: '124 KB', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Globe className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Host Resources</h1>
              <p className="text-xl text-blue-100">
                Everything you need to succeed as a Traviya host
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-3">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.resources.map((resource) => (
                      <li key={resource.name}>
                        <button className="text-left w-full group">
                          <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {resource.name}
                          </div>
                          <div className="text-sm text-gray-600">{resource.description}</div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloadable Resources</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloadableResources.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <div
                    key={resource.name}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-50 p-3 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{resource.name}</div>
                        <div className="text-sm text-gray-500">{resource.size}</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Download
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Personal Assistance?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Our host support team is available 24/7 to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Contact Support
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
              Schedule a Call
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
