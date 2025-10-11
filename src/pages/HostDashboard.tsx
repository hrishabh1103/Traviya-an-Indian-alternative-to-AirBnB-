import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Home, Calendar, Star, Edit, Trash2, Eye } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockProperties } from '../data/mockData';
import { formatCurrency } from '../utils/helpers';

export const HostDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<'properties' | 'bookings'>('properties');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }

    if (!user?.isHost) {
      updateProfile({ isHost: true });
    }
  }, [isAuthenticated, navigate, user, updateProfile]);

  const hostProperties = mockProperties.slice(0, 3);

  const mockBookings = [
    {
      id: '1',
      propertyTitle: hostProperties[0]?.title || 'Property',
      guestName: 'Rahul Sharma',
      checkIn: '2025-11-15',
      checkOut: '2025-11-18',
      guests: 2,
      totalPrice: 10500,
      status: 'confirmed',
    },
    {
      id: '2',
      propertyTitle: hostProperties[1]?.title || 'Property',
      guestName: 'Priya Patel',
      checkIn: '2025-11-20',
      checkOut: '2025-11-23',
      guests: 4,
      totalPrice: 8400,
      status: 'pending',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Host Dashboard</h1>
          <p className="text-xl text-white/90">
            Welcome back, {user?.fullName}! Manage your properties and bookings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Total Properties</p>
                <p className="text-3xl font-bold text-gray-800">{hostProperties.length}</p>
              </div>
              <Home className="h-12 w-12 text-orange-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Active Bookings</p>
                <p className="text-3xl font-bold text-gray-800">{mockBookings.length}</p>
              </div>
              <Calendar className="h-12 w-12 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Average Rating</p>
                <p className="text-3xl font-bold text-gray-800">4.8</p>
              </div>
              <Star className="h-12 w-12 text-yellow-500 fill-yellow-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('properties')}
                className={`flex-1 py-4 px-6 font-semibold transition ${
                  activeTab === 'properties'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                My Properties
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`flex-1 py-4 px-6 font-semibold transition ${
                  activeTab === 'bookings'
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Bookings
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'properties' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Your Properties</h2>
                  <button className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition">
                    <Plus className="h-5 w-5" />
                    <span>Add Property</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {hostProperties.map((property) => (
                    <div key={property.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
                      <div className="flex">
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="w-48 h-48 object-cover"
                        />
                        <div className="flex-1 p-4">
                          <h3 className="font-semibold text-gray-800 mb-2">{property.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {property.locationCity}, {property.locationState}
                          </p>
                          <p className="text-orange-600 font-semibold mb-2">
                            {formatCurrency(property.pricePerNight)}/night
                          </p>
                          <div className="flex items-center space-x-1 mb-3">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-semibold">{property.rating}</span>
                            <span className="text-sm text-gray-500">({property.reviewCount})</span>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => navigate(`/property/${property.id}`)}
                              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600 transition"
                            >
                              <Eye className="h-4 w-4" />
                              <span>View</span>
                            </button>
                            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600 transition">
                              <Edit className="h-4 w-4" />
                              <span>Edit</span>
                            </button>
                            <button className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700 transition">
                              <Trash2 className="h-4 w-4" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Bookings</h2>

                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">{booking.propertyTitle}</h3>
                          <p className="text-gray-600 mb-1">Guest: {booking.guestName}</p>
                          <p className="text-sm text-gray-600">
                            {booking.checkIn} to {booking.checkOut} • {booking.guests} guests
                          </p>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-800">
                              {formatCurrency(booking.totalPrice)}
                            </p>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                                booking.status === 'confirmed'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
