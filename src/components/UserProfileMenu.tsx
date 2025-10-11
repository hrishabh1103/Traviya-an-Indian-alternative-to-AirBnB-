import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Calendar, Settings, Menu } from 'lucide-react';
import { useAuth, supabase } from '../context/AuthContext';

interface Booking {
  id: string;
  property_id: string;
  property_name: string;
  property_image: string | null;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
  status: string;
  created_at: string;
}

export const UserProfileMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && user) {
      loadBookings();
    }
  }, [isOpen, user]);

  const loadBookings = async () => {
    if (!user) return;

    setLoadingBookings(true);
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setBookings(data || []);
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoadingBookings(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-all duration-200"
      >
        <Menu className="h-4 w-4 text-gray-700" />
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.fullName}
            className="h-7 w-7 rounded-full object-cover"
          />
        ) : (
          <div className="bg-gray-700 rounded-full h-7 w-7 flex items-center justify-center text-white text-xs font-semibold">
            {getInitials(user.fullName)}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt={user.fullName}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <div className="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center text-white text-lg font-semibold">
                  {getInitials(user.fullName)}
                </div>
              )}
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{user.fullName}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
                {user.mobile && (
                  <div className="text-sm text-gray-500">{user.mobile}</div>
                )}
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Your Bookings
            </div>

            {loadingBookings ? (
              <div className="px-4 py-6 text-center text-gray-500">
                Loading bookings...
              </div>
            ) : bookings.length === 0 ? (
              <div className="px-4 py-6 text-center text-gray-500">
                <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm">No bookings yet</p>
                <p className="text-xs text-gray-400 mt-1">
                  Start exploring amazing places
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex space-x-3">
                      {booking.property_image ? (
                        <img
                          src={booking.property_image}
                          alt={booking.property_name}
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-lg bg-gray-200 flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-gray-900 truncate">
                          {booking.property_name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(booking.check_in)} - {formatDate(booking.check_out)}
                        </div>
                        <div className="text-xs text-gray-500">
                          {booking.guests} guest{booking.guests > 1 ? 's' : ''}
                        </div>
                        <div className="text-xs font-semibold text-gray-900 mt-1">
                          ${Number(booking.total_price).toFixed(2)}
                        </div>
                        {booking.status && (
                          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            {booking.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-2">
            {user.isHost && (
              <Link
                to="/host"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Settings className="h-4 w-4" />
                <span className="text-sm">Host Dashboard</span>
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors w-full"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
