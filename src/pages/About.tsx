import React from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">About Traviya</h1>
            <p className="text-xl max-w-2xl">
              Connecting travelers with unique stays and experiences across incredible destinations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Traviya, we believe that travel is more than just visiting new places. It's about
            creating memories, experiencing diverse cultures, and connecting with people from around
            the world. We're committed to making every journey extraordinary by providing access to
            unique accommodations and authentic local experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-rose-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">10M+ Guests</h3>
            <p className="text-gray-600">Travelers trust Traviya worldwide</p>
          </div>

          <div className="text-center">
            <div className="bg-rose-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">50+ Countries</h3>
            <p className="text-gray-600">Properties in major destinations</p>
          </div>

          <div className="text-center">
            <div className="bg-rose-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">100K+ Hosts</h3>
            <p className="text-gray-600">Passionate hosts sharing their spaces</p>
          </div>

          <div className="text-center">
            <div className="bg-rose-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4.8 Rating</h3>
            <p className="text-gray-600">Average guest satisfaction score</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Founded in 2020, Traviya started with a simple idea: to make travel more accessible,
              affordable, and authentic for everyone. What began as a small platform connecting
              travelers with local hosts has grown into a global community of millions.
            </p>
            <p>
              Today, Traviya offers not just accommodations, but a complete travel ecosystem
              including unique experiences, local guides, and community connections. We're proud to
              support local economies and promote sustainable tourism practices across all our
              destinations.
            </p>
            <p>
              Our platform empowers hosts to share their spaces and culture while providing guests
              with unforgettable memories and authentic connections. Every booking on Traviya
              supports local communities and contributes to sustainable travel practices.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Safety</h3>
              <p className="text-gray-600">
                We prioritize the safety and security of our community through verified listings,
                secure payments, and 24/7 support.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                Everyone deserves to travel. We're committed to creating an inclusive platform
                accessible to all.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We promote eco-friendly travel options and support hosts who implement sustainable
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
