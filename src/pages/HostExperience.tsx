import React from 'react';
import { Compass, Users, Star, TrendingUp, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HostExperience: React.FC = () => {
  const experienceTypes = [
    {
      title: 'Adventure & Outdoor',
      icon: Compass,
      examples: ['Hiking & Trekking', 'Rock Climbing', 'Kayaking', 'Safari Tours'],
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Cultural & Heritage',
      icon: Award,
      examples: ['Cooking Classes', 'Art Workshops', 'Historical Tours', 'Music Sessions'],
      image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Wellness & Relaxation',
      icon: Heart,
      examples: ['Yoga Retreats', 'Meditation', 'Spa Experiences', 'Nature Walks'],
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Earn Extra Income',
      description: 'Set your own prices and schedule. Hosts earn an average of $500-2000 per month.',
    },
    {
      icon: Users,
      title: 'Meet New People',
      description: 'Connect with travelers from around the world and share your passion.',
    },
    {
      icon: Star,
      title: 'Build Your Reputation',
      description: 'Receive reviews and ratings to grow your experience business.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Host Experiences</h1>
            <p className="text-xl max-w-2xl mb-8">
              Share your passion, skills, and local knowledge with travelers worldwide
            </p>
            <Link
              to="/become-host"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
            >
              Start Hosting Experiences
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Host Experiences?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Turn your passion into profit while creating unforgettable moments for travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of Experiences You Can Host
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
                    <type.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Plan Your Experience</h3>
              <p className="text-gray-600 text-sm">
                Design a unique activity showcasing your skills and passion
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Your Listing</h3>
              <p className="text-gray-600 text-sm">
                Add photos, set pricing, and describe what makes it special
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Approved</h3>
              <p className="text-gray-600 text-sm">
                Our team reviews your experience to ensure quality standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Hosting</h3>
              <p className="text-gray-600 text-sm">
                Welcome guests and create memorable experiences
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Host Support & Resources</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Free hosting workshops and training</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>24/7 host support team</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Marketing and promotion tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Host community forum and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Liability insurance coverage</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Join thousands of hosts sharing their passions and earning income through unique
                experiences.
              </p>
              <Link
                to="/become-host"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Become an Experience Host
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Host"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Priya S.</h3>
              <p className="text-sm text-gray-600 mb-2">Cooking Class Host, Mumbai</p>
              <p className="text-gray-600 text-sm italic">
                "Hosting cooking classes has allowed me to share my family recipes and culture
                while earning a steady income. I've met amazing people from around the world!"
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Host"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Raj M.</h3>
              <p className="text-sm text-gray-600 mb-2">Trekking Guide, Himachal</p>
              <p className="text-gray-600 text-sm italic">
                "Being a trekking experience host has been life-changing. I love showing travelers
                the beautiful mountains I grew up in and earning a living doing what I love."
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Host"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Ananya K.</h3>
              <p className="text-sm text-gray-600 mb-2">Yoga Instructor, Kerala</p>
              <p className="text-gray-600 text-sm italic">
                "Hosting yoga and meditation retreats through Traviya has helped me reach a global
                audience. The platform makes it easy to manage bookings and connect with guests."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
