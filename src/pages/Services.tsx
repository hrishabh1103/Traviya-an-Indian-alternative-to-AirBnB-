import React from 'react';
import { Camera, Car, Plane, Home as HomeIcon, Utensils, Briefcase, Heart, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Camera,
      title: 'Photography Services',
      description: 'Professional photographers to capture your travel memories',
      price: 'From ₹3,000',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Professional equipment', 'Edited photos', 'Quick delivery', 'Local insights'],
    },
    {
      icon: Car,
      title: 'Airport Transfers',
      description: 'Reliable and comfortable transportation to and from airports',
      price: 'From ₹500',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Professional drivers', 'Meet & greet', 'Flexible timing', 'All vehicles'],
    },
    {
      icon: Utensils,
      title: 'Private Chef Services',
      description: 'Personal chef to prepare authentic local cuisine at your stay',
      price: 'From ₹2,500',
      image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Custom menus', 'Fresh ingredients', 'Dietary options', 'Clean-up included'],
    },
    {
      icon: Sparkles,
      title: 'Housekeeping Services',
      description: 'Daily or one-time cleaning services for your property',
      price: 'From ₹800',
      image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Trained staff', 'Eco-friendly products', 'Flexible schedule', 'Deep cleaning'],
    },
    {
      icon: Plane,
      title: 'Travel Planning',
      description: 'Personalized itinerary planning and local recommendations',
      price: 'From ₹1,500',
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Custom itineraries', 'Local expertise', 'Booking assistance', 'Hidden gems'],
    },
    {
      icon: Heart,
      title: 'Wellness Services',
      description: 'In-home spa, massage, and wellness treatments',
      price: 'From ₹2,000',
      image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Certified therapists', 'Quality products', 'Various treatments', 'Relaxing'],
    },
    {
      icon: HomeIcon,
      title: 'Property Management',
      description: 'Complete property management for hosts',
      price: 'From ₹5,000/month',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Guest communication', 'Maintenance', 'Cleaning coordination', 'Pricing optimization'],
    },
    {
      icon: Briefcase,
      title: 'Business Services',
      description: 'Meeting spaces, equipment, and business support',
      price: 'From ₹1,000',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Meeting rooms', 'High-speed WiFi', 'AV equipment', 'Catering options'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">Travel Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Enhance your stay with premium services from trusted local providers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From transportation to wellness, we've got everything you need for a perfect stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="bg-teal-100 rounded-lg p-2 w-fit mb-3">
                  <service.icon className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="text-rose-600 font-bold mb-3">{service.price}</div>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center">
                      <span className="text-teal-600 mr-1.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition font-semibold text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Services</h3>
              <p className="text-gray-600 text-sm">
                Explore available services for your destination
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Select & Book</h3>
              <p className="text-gray-600 text-sm">
                Choose your service and preferred date/time
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Details</h3>
              <p className="text-gray-600 text-sm">
                Provider confirms and coordinates with you
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enjoy Service</h3>
              <p className="text-gray-600 text-sm">
                Sit back and enjoy your premium service
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-teal-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Providers</h3>
            <p className="text-gray-600">
              All service providers are thoroughly vetted and verified
            </p>
          </div>
          <div className="text-center">
            <div className="bg-teal-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              We ensure high standards across all our services
            </p>
          </div>
          <div className="text-center">
            <div className="bg-teal-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Book and manage all services through one platform
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Service Provider</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Are you a local service provider? Join our network and connect with travelers
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Register as Provider
          </button>
        </div>
      </div>
    </div>
  );
};
