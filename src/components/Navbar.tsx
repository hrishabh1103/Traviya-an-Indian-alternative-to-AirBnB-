import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Search, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UserProfileMenu } from './UserProfileMenu';

export const Navbar: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('stays');
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'stays', label: 'Stays', icon: HomeIcon, path: '/listings' },
    { id: 'experiences', label: 'Experiences', badge: 'NEW', path: '/experiences' },
    { id: 'services', label: 'Services', badge: 'NEW', path: '/services' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1760px] mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-rose-500" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 1c2 0 3.46.96 4.75 3.27L28.5 21.9a2.67 2.67 0 0 1-2.5 4.1h-.58v4.03a2 2 0 0 1-1.95 1.97H8.53a2 2 0 0 1-1.95-1.97V26H6a2.67 2.67 0 0 1-2.5-4.1L11.25 4.27C12.54 1.96 14 1 16 1z"/>
            </svg>
            <span className="text-xl font-semibold text-rose-500 hidden sm:block">traviya</span>
          </Link>

          {isHomePage && !isScrolled && (
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.path}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {tab.icon && <tab.icon className="h-4 w-4" />}
                    <span>{tab.label}</span>
                    {tab.badge && (
                      <span className="text-[10px] font-bold bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">
                        {tab.badge}
                      </span>
                    )}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                  )}
                </Link>
              ))}
            </div>
          )}

          {isHomePage && isScrolled && (
            <button className="hidden lg:flex items-center space-x-4 border border-gray-300 rounded-full px-6 py-2.5 hover:shadow-md transition-all duration-200 absolute left-1/2 transform -translate-x-1/2">
              <span className="text-sm font-semibold text-gray-800">Anywhere</span>
              <div className="h-6 w-px bg-gray-300" />
              <span className="text-sm font-semibold text-gray-800">Anytime</span>
              <div className="h-6 w-px bg-gray-300" />
              <span className="text-sm text-gray-500">Add guests</span>
              <div className="bg-rose-500 rounded-full p-2">
                <Search className="h-3.5 w-3.5 text-white" />
              </div>
            </button>
          )}

          {!isHomePage && (
            <button
              onClick={() => navigate('/listings')}
              className="hidden lg:flex items-center space-x-4 border border-gray-300 rounded-full px-6 py-2.5 hover:shadow-md transition-all duration-200 absolute left-1/2 transform -translate-x-1/2"
            >
              <span className="text-sm font-semibold text-gray-800">Anywhere</span>
              <div className="h-6 w-px bg-gray-300" />
              <span className="text-sm font-semibold text-gray-800">Anytime</span>
              <div className="h-6 w-px bg-gray-300" />
              <span className="text-sm text-gray-500">Add guests</span>
              <div className="bg-rose-500 rounded-full p-2">
                <Search className="h-3.5 w-3.5 text-white" />
              </div>
            </button>
          )}

          <div className="flex items-center space-x-4">
            <Link
              to="/become-host"
              className="text-sm font-semibold text-gray-800 hover:bg-gray-50 px-4 py-2 rounded-full transition hidden md:block"
            >
              Become a host
            </Link>
            <button className="p-2 hover:bg-gray-50 rounded-full transition hidden md:block">
              <Globe className="h-5 w-5 text-gray-700" />
            </button>
            {loading ? (
              <div className="w-20 h-10 bg-gray-100 rounded-full animate-pulse" />
            ) : isAuthenticated ? (
              <UserProfileMenu />
            ) : (
              <Link
                to="/auth"
                className="flex items-center space-x-3 border border-gray-300 rounded-full px-4 py-2 hover:shadow-md transition-all duration-200"
              >
                <svg className="h-4 w-4 text-gray-700" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z"/>
                  <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1V5h1zM1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1V6H1z"/>
                </svg>
                <div className="bg-gray-700 rounded-full p-1.5">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 32 32" fill="none">
                    <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 19.86 0A13.55 13.55 0 0 1 16 28.7zm4.75-14.92a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0zm7.6 11.46a14.5 14.5 0 0 0-6.01-7.07 6.65 6.65 0 1 0-8.68 0 14.5 14.5 0 0 0-6.01 7.07 13.53 13.53 0 1 1 20.7 0z" fill="currentColor"/>
                  </svg>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      {isHomePage && !isScrolled && (
        <div className="border-t border-gray-200 lg:hidden">
          <div className="flex items-center justify-around py-2">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-xs font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-gray-900'
                    : 'text-gray-500'
                }`}
              >
                <div className="flex items-center space-x-1">
                  {tab.icon && <tab.icon className="h-3.5 w-3.5" />}
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className="text-[9px] font-bold bg-gray-200 text-gray-700 px-1 py-0.5 rounded">
                      {tab.badge}
                    </span>
                  )}
                </div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
