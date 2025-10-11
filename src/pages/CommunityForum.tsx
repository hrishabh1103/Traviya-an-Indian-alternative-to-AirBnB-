import React, { useState } from 'react';
import { MessageSquare, TrendingUp, Users, Search, ThumbsUp, MessageCircle, Eye } from 'lucide-react';

export const CommunityForum: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: MessageSquare },
    { id: 'hosting', name: 'Hosting Tips', icon: Users },
    { id: 'travel', name: 'Travel Advice', icon: TrendingUp },
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Best practices for communicating with guests before check-in?',
      author: 'Sarah M.',
      category: 'hosting',
      replies: 24,
      views: 342,
      likes: 18,
      timestamp: '2 hours ago',
      excerpt: 'I recently started hosting and would love to hear from experienced hosts about...',
    },
    {
      id: 2,
      title: 'Hidden gems in Goa - Share your favorite spots!',
      author: 'Raj P.',
      category: 'travel',
      replies: 56,
      views: 891,
      likes: 43,
      timestamp: '5 hours ago',
      excerpt: 'Planning a trip to Goa next month and looking for recommendations beyond the...',
    },
    {
      id: 3,
      title: 'How to price your listing competitively?',
      author: 'Priya S.',
      category: 'hosting',
      replies: 31,
      views: 567,
      likes: 27,
      timestamp: '8 hours ago',
      excerpt: 'I want to ensure my pricing is competitive but also reflects the value I provide...',
    },
    {
      id: 4,
      title: 'Solo female travel tips for India',
      author: 'Emma L.',
      category: 'travel',
      replies: 89,
      views: 1234,
      likes: 72,
      timestamp: '1 day ago',
      excerpt: 'Planning my first solo trip to India. Would appreciate safety tips and...',
    },
    {
      id: 5,
      title: 'Dealing with difficult guests - What are your strategies?',
      author: 'Amit K.',
      category: 'hosting',
      replies: 45,
      views: 678,
      likes: 34,
      timestamp: '1 day ago',
      excerpt: 'Recently had a challenging situation with a guest and wondering how other hosts...',
    },
    {
      id: 6,
      title: 'Best photography tips for listing photos',
      author: 'Lisa T.',
      category: 'hosting',
      replies: 67,
      views: 923,
      likes: 51,
      timestamp: '2 days ago',
      excerpt: 'Your listing photos are the first impression! Here are my top tips for...',
    },
  ];

  const trendingTopics = [
    { name: 'Monsoon Travel Tips', posts: 234 },
    { name: 'Smart Pricing Strategies', posts: 189 },
    { name: 'Eco-Friendly Hosting', posts: 156 },
    { name: 'Guest Communication', posts: 143 },
  ];

  const filteredPosts =
    activeCategory === 'all'
      ? forumPosts
      : forumPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-16 w-16" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">Community Forum</h1>
          <p className="text-xl max-w-3xl mx-auto text-center mb-8">
            Connect with fellow hosts and travelers, share experiences, and get advice from the
            community
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                      activeCategory === category.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">{post.author}</span>
                        <span>•</span>
                        <span>{post.timestamp}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 pt-3 border-t border-gray-100">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">{post.replies} replies</span>
                    </button>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">{post.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
                Load More Discussions
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <button className="text-sm text-gray-700 hover:text-indigo-600 font-medium text-left">
                      {topic.name}
                    </button>
                    <span className="text-xs text-gray-500">{topic.posts}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-sm p-6 text-white">
              <MessageSquare className="h-10 w-10 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Start a Discussion</h3>
              <p className="text-sm text-white/90 mb-4">
                Have a question or topic to share? Start a new discussion and connect with the
                community.
              </p>
              <button className="w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-gray-100 transition font-semibold">
                Create New Post
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Be respectful and courteous</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Stay on topic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>No spam or self-promotion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Share constructive feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
