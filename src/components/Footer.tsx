import React from 'react';
import { Home, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/support" className="text-gray-600 hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-600 hover:underline">
                  Safety information
                </Link>
              </li>
              <li>
                <Link to="/cancellation" className="text-gray-600 hover:underline">
                  Cancellation options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Community</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/guidelines" className="text-gray-600 hover:underline">
                  Travel Guidelines
                </Link>
              </li>
              <li>
                <Link to="/host" className="text-gray-600 hover:underline">
                  Host your home
                </Link>
              </li>
              <li>
                <Link to="/host-experience" className="text-gray-600 hover:underline">
                  Host experiences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Hosting</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/host" className="text-gray-600 hover:underline">
                  Try hosting
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:underline">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:underline">
                  Community forum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Traviya</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/newsroom" className="text-gray-600 hover:underline">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600">
              <span>&copy; 2025 Traviya, Inc.</span>
              <span className="hidden md:inline">·</span>
              <Link to="/privacy" className="hover:underline">Privacy</Link>
              <span className="hidden md:inline">·</span>
              <Link to="/terms" className="hover:underline">Terms</Link>
              <span className="hidden md:inline">·</span>
              <Link to="/sitemap" className="hover:underline">Sitemap</Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
