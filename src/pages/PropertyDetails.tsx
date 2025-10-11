import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Users, Bed, Bath, ArrowLeft, Calendar } from 'lucide-react';
import { mockProperties } from '../data/mockData';
import { formatCurrency, calculateNights } from '../utils/helpers';
import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';

export const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setBookingDetails } = useBooking();
  const { isAuthenticated } = useAuth();

  const property = mockProperties.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
  });

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property not found</h2>
          <button
            onClick={() => navigate('/listings')}
            className="text-orange-600 hover:text-orange-700"
          >
            Back to listings
          </button>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }

    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }

    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = calculateNights(checkIn, checkOut);
    const totalPrice = nights * property.pricePerNight;

    setBookingDetails({
      propertyId: property.id,
      checkIn,
      checkOut,
      guests: bookingData.guests,
      totalPrice,
    });

    navigate('/checkout');
  };

  const calculateTotal = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = calculateNights(checkIn, checkOut);
    return nights * property.pricePerNight;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/listings')}
          className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 mb-6 transition"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to listings</span>
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
            <div className="space-y-4">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`h-24 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-4 ring-orange-500' : ''
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{property.locationCity}, {property.locationState}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{property.rating}</span>
                    <span className="text-gray-500">({property.reviewCount} reviews)</span>
                  </div>
                </div>
                <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
                  {property.propertyType}
                </div>
              </div>

              <div className="flex items-center space-x-6 py-4 border-y border-gray-200 my-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">{property.maxGuests} guests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bed className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">{property.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">{property.bathrooms} bathrooms</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">About this place</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center space-x-2 text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"
                    >
                      <span className="text-green-600">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Hosted by</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={property.hostImage}
                    alt={property.hostName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{property.hostName}</h4>
                    <p className="text-gray-600 text-sm">Superhost</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Reserve Your Stay
              </h3>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-gray-800">
                    {formatCurrency(property.pricePerNight)}
                  </span>
                  <span className="text-gray-600">per night</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Check In
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Check Out
                    </label>
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                      min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Guests
                  </label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {Array.from({ length: property.maxGuests }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {bookingData.checkIn && bookingData.checkOut && (
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex justify-between text-gray-700 mb-2">
                      <span>
                        {formatCurrency(property.pricePerNight)} x{' '}
                        {calculateNights(new Date(bookingData.checkIn), new Date(bookingData.checkOut))} nights
                      </span>
                      <span>{formatCurrency(calculateTotal())}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg text-gray-800 mt-4">
                      <span>Total</span>
                      <span>{formatCurrency(calculateTotal())}</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 rounded-lg hover:from-orange-700 hover:to-orange-800 transition font-semibold text-lg"
                >
                  {isAuthenticated ? 'Book Now' : 'Login to Book'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
