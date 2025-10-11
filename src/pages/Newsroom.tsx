import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const Newsroom: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Traviya Launches New Safety Features for Enhanced Guest Protection',
      date: 'March 15, 2025',
      category: 'Product',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Introducing advanced verification systems and 24/7 safety support to ensure peace of mind for all travelers.',
    },
    {
      id: 2,
      title: 'Traviya Hosts Generate $2 Billion in Income Last Year',
      date: 'March 10, 2025',
      category: 'Community',
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Our host community continues to thrive, with record earnings supporting families and local economies worldwide.',
    },
    {
      id: 3,
      title: 'Expanding to 20 New Cities Across Asia and Europe',
      date: 'March 5, 2025',
      category: 'Growth',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Bringing unique travel experiences to more destinations with carefully curated properties and local hosts.',
    },
    {
      id: 4,
      title: 'Traviya Commits to Carbon Neutral Operations by 2026',
      date: 'February 28, 2025',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Taking bold steps toward environmental responsibility with new green initiatives and sustainable travel options.',
    },
    {
      id: 5,
      title: 'New Experience Categories Launch: Wellness and Adventure',
      date: 'February 20, 2025',
      category: 'Product',
      image: 'https://images.pexels.com/photos/4473622/pexels-photo-4473622.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Discover yoga retreats, meditation sessions, trekking adventures, and more unique experiences from local experts.',
    },
    {
      id: 6,
      title: 'Traviya Partners with Local Tourism Boards',
      date: 'February 15, 2025',
      category: 'Partnerships',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Collaborating with government agencies to promote responsible tourism and support local communities.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Newsroom</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Stay updated with the latest news, announcements, and stories from Traviya
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <button className="flex items-center text-rose-600 font-semibold hover:text-rose-700 transition">
                  Read more
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
            Load More Articles
          </button>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Inquiries</h2>
          <p className="text-lg text-gray-600 mb-8">
            For press and media inquiries, please contact our communications team
          </p>
          <a
            href="mailto:press@traviya.com"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition font-semibold"
          >
            Contact Press Team
          </a>
        </div>
      </div>
    </div>
  );
};
