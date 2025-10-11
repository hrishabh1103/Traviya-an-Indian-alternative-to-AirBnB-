import React, { useState } from 'react';
import { Search, MapPin, Users, Clock, Star, Compass } from 'lucide-react';

export const Experiences: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'adventure', 'culture', 'food', 'wellness', 'nature'];

  const experiences = [
    {
      id: 1,
      title: 'Traditional Indian Cooking Class',
      host: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      price: 1500,
      duration: '3 hours',
      rating: 4.9,
      reviews: 234,
      guests: 'Up to 8',
      category: 'food',
      image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Himalayan Trekking Adventure',
      host: 'Raj Mehta',
      location: 'Manali, Himachal Pradesh',
      price: 3500,
      duration: 'Full day',
      rating: 5.0,
      reviews: 178,
      guests: 'Up to 12',
      category: 'adventure',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Yoga & Meditation Retreat',
      host: 'Ananya Krishnan',
      location: 'Rishikesh, Uttarakhand',
      price: 2000,
      duration: '4 hours',
      rating: 4.8,
      reviews: 312,
      guests: 'Up to 15',
      category: 'wellness',
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Heritage Walking Tour of Old Delhi',
      host: 'Amit Verma',
      location: 'Delhi',
      price: 800,
      duration: '2.5 hours',
      rating: 4.7,
      reviews: 445,
      guests: 'Up to 10',
      category: 'culture',
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Wildlife Safari & Bird Watching',
      host: 'Karan Singh',
      location: 'Jim Corbett, Uttarakhand',
      price: 4500,
      duration: '6 hours',
      rating: 4.9,
      reviews: 201,
      guests: 'Up to 6',
      category: 'nature',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Street Food Tour',
      host: 'Deepak Patel',
      location: 'Jaipur, Rajasthan',
      price: 1200,
      duration: '3 hours',
      rating: 4.8,
      reviews: 389,
      guests: 'Up to 8',
      category: 'food',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      title: 'Pottery & Handicraft Workshop',
      host: 'Meera Joshi',
      location: 'Jaipur, Rajasthan',
      price: 1800,
      duration: '4 hours',
      rating: 4.9,
      reviews: 156,
      guests: 'Up to 6',
      category: 'culture',
      image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: 'Scuba Diving in Andaman',
      host: 'Vikram Nair',
      location: 'Port Blair, Andaman',
      price: 5500,
      duration: '5 hours',
      rating: 5.0,
      reviews: 267,
      guests: 'Up to 4',
      category: 'adventure',
      image: 'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredExperiences =
    activeFilter === 'all'
      ? experiences
      : experiences.filter((exp) => exp.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Compass className="h-12 w-12" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">Discover Experiences</h1>
          <p className="text-xl max-w-3xl mx-auto text-center mb-8">
            Book unique activities hosted by local experts and create unforgettable memories
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-2 flex items-center space-x-2">
              <div className="flex-1 flex items-center space-x-2 px-3">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search experiences..."
                  className="flex-1 py-3 text-gray-900 focus:outline-none"
                />
              </div>
              <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 overflow-x-auto pb-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition ${
                activeFilter === filter
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExperiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-sm font-semibold text-gray-900">
                  ₹{experience.price}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-rose-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">
                      {experience.rating}
                    </span>
                    <span className="text-sm text-gray-500">({experience.reviews})</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {experience.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">Hosted by {experience.host}</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {experience.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {experience.guests} guests
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Book Experiences?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with locals, learn new skills, and create authentic memories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Hosts</h3>
              <p className="text-gray-600">
                Learn from passionate locals with deep knowledge and expertise
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unique Activities</h3>
              <p className="text-gray-600">
                Access one-of-a-kind experiences you won't find anywhere else
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Connections</h3>
              <p className="text-gray-600">
                Connect with culture and community in meaningful ways
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
