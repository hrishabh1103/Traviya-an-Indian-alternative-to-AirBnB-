import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Home, Building2, Users, Info, HelpCircle, Shield, FileText, Briefcase, Newspaper, MapPin, Calendar, MessageCircle, Star } from 'lucide-react';

export const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Browse Listings', path: '/listings', icon: Building2 },
        { name: 'Experiences', path: '/experiences', icon: Star },
        { name: 'Services', path: '/services', icon: Briefcase },
      ],
    },
    {
      title: 'For Hosts',
      icon: Building2,
      links: [
        { name: 'Become a Host', path: '/become-host', icon: Building2 },
        { name: 'Host Dashboard', path: '/host', icon: Users },
        { name: 'Host an Experience', path: '/host-experience', icon: Calendar },
        { name: 'Host Resources', path: '/resources', icon: FileText },
      ],
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/support', icon: HelpCircle },
        { name: 'Safety Information', path: '/safety', icon: Shield },
        { name: 'Cancellation Options', path: '/cancellation', icon: FileText },
        { name: 'Travel Guidelines', path: '/guidelines', icon: MapPin },
      ],
    },
    {
      title: 'Community',
      icon: Users,
      links: [
        { name: 'Community Forum', path: '/community', icon: MessageCircle },
        { name: 'Host Experiences', path: '/host-experience', icon: Star },
      ],
    },
    {
      title: 'Company',
      icon: Info,
      links: [
        { name: 'About Traviya', path: '/about', icon: Info },
        { name: 'Newsroom', path: '/newsroom', icon: Newspaper },
        { name: 'Careers', path: '/careers', icon: Briefcase },
      ],
    },
    {
      title: 'Legal',
      icon: FileText,
      links: [
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText },
        { name: 'Sitemap', path: '/sitemap', icon: Map },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Map className="w-10 h-10 mr-3" />
            <h1 className="text-4xl font-bold">Sitemap</h1>
          </div>
          <p className="text-gray-300 text-lg">
            Navigate through all pages and resources on Traviya
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section) => {
            const SectionIcon = section.icon;
            return (
              <div key={section.title} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-3">
                    <SectionIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                        >
                          <LinkIcon className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                          <span className="font-medium">{link.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <section className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">For Travelers</h3>
              <p className="text-gray-600 mb-4">
                Find unique accommodations, book experiences, and explore destinations across India. Our platform connects you with verified hosts offering authentic stays.
              </p>
              <Link
                to="/listings"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Start Exploring
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">For Hosts</h3>
              <p className="text-gray-600 mb-4">
                Share your space and earn extra income. Join thousands of hosts who have turned their properties into profitable hospitality businesses with Traviya.
              </p>
              <Link
                to="/become-host"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Become a Host
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-6">
            Can't find what you're looking for? Our support team is here to help you navigate the platform and answer any questions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/support"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-blue-200"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              Visit Help Center
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-blue-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Community Forum
            </Link>
          </div>
        </section>

        <section className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Last updated: October 10, 2025
          </p>
          <p className="text-gray-500 text-sm mt-2">
            &copy; 2025 Traviya, Inc. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
};
