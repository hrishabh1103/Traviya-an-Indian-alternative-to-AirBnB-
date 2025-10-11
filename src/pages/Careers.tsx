import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

export const Careers: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead product strategy and development for our core booking platform.',
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Build scalable solutions for millions of users worldwide.',
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create delightful user experiences for travelers and hosts.',
    },
    {
      id: 4,
      title: 'Community Support Specialist',
      department: 'Customer Success',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Help our community of hosts and guests have amazing experiences.',
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Drive growth and engagement through creative marketing campaigns.',
    },
    {
      id: 6,
      title: 'Data Analyst',
      department: 'Data',
      location: 'Remote',
      type: 'Full-time',
      description: 'Turn data into insights that drive business decisions.',
    },
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with equity options',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family',
    },
    {
      title: 'Flexible Work',
      description: 'Work from anywhere with flexible hours and remote options',
    },
    {
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and skill development',
    },
    {
      title: 'Travel Credits',
      description: 'Generous travel credits to explore properties on our platform',
    },
    {
      title: 'Paid Time Off',
      description: 'Unlimited PTO and sabbatical programs for long-term employees',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-orange-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl max-w-2xl">
              Help us create a world where anyone can belong anywhere
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Traviya?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're building the future of travel. Join a diverse team of passionate individuals
            working to make travel accessible, authentic, and extraordinary for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="flex items-center bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition font-semibold whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We're always looking for talented people to join our team. Send us your resume and
            let's start a conversation.
          </p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Send General Application
          </button>
        </div>
      </div>
    </div>
  );
};
