import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, CreditCard, Smartphone, Building, Wallet } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useAuth, supabase } from '../context/AuthContext';
import { mockProperties } from '../data/mockData';
import { formatCurrency, formatDate, calculateNights } from '../utils/helpers';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { bookingDetails, clearBooking } = useBooking();
  const { user } = useAuth();

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'wallet'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (!bookingDetails) {
    navigate('/listings');
    return null;
  }

  const property = mockProperties.find((p) => p.id === bookingDetails.propertyId);

  if (!property) {
    navigate('/listings');
    return null;
  }

  const nights = calculateNights(bookingDetails.checkIn, bookingDetails.checkOut);
  const serviceFee = Math.round(bookingDetails.totalPrice * 0.1);
  const taxes = Math.round(bookingDetails.totalPrice * 0.12);
  const grandTotal = bookingDetails.totalPrice + serviceFee + taxes;

  const handlePayment = async () => {
    if (!user) return;

    setIsProcessing(true);

    try {
      const { error } = await supabase
        .from('bookings')
        .insert({
          user_id: user.id,
          property_id: bookingDetails.propertyId,
          property_name: property.title,
          property_image: property.images[0],
          check_in: bookingDetails.checkIn.toISOString().split('T')[0],
          check_out: bookingDetails.checkOut.toISOString().split('T')[0],
          guests: bookingDetails.guests,
          total_price: grandTotal,
          status: 'confirmed',
        });

      if (error) throw error;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsProcessing(false);
      setIsComplete(true);

      setTimeout(() => {
        clearBooking();
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error creating booking:', error);
      setIsProcessing(false);
      alert('Failed to create booking. Please try again.');
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle2 className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Booking Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-2">Your stay at {property.title} is confirmed</p>
          <p className="text-gray-500">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Complete Your Booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Details</h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{property.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {property.locationCity}, {property.locationState}
                    </p>
                    <p className="text-orange-600 font-semibold mt-1">
                      {property.propertyType}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Check In</p>
                    <p className="font-semibold text-gray-800">
                      {formatDate(bookingDetails.checkIn)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Check Out</p>
                    <p className="font-semibold text-gray-800">
                      {formatDate(bookingDetails.checkOut)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Guests</p>
                    <p className="font-semibold text-gray-800">{bookingDetails.guests}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Nights</p>
                    <p className="font-semibold text-gray-800">{nights}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Guest Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user?.fullName || ''}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={user?.mobile || '+91 98765 43210'}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition ${
                    paymentMethod === 'upi'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Smartphone className="h-8 w-8 mb-2 text-orange-600" />
                  <span className="font-semibold">UPI</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition ${
                    paymentMethod === 'card'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <CreditCard className="h-8 w-8 mb-2 text-orange-600" />
                  <span className="font-semibold">Card</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition ${
                    paymentMethod === 'netbanking'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Building className="h-8 w-8 mb-2 text-orange-600" />
                  <span className="font-semibold">Net Banking</span>
                </button>

                <button
                  onClick={() => setPaymentMethod('wallet')}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition ${
                    paymentMethod === 'wallet'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Wallet className="h-8 w-8 mb-2 text-orange-600" />
                  <span className="font-semibold">Wallet</span>
                </button>
              </div>

              {paymentMethod === 'upi' && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Price Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>
                    {formatCurrency(property.pricePerNight)} x {nights} nights
                  </span>
                  <span>{formatCurrency(bookingDetails.totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Service Fee</span>
                  <span>{formatCurrency(serviceFee)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Taxes (GST 12%)</span>
                  <span>{formatCurrency(taxes)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>{formatCurrency(grandTotal)}</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 rounded-lg hover:from-orange-700 hover:to-orange-800 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Confirm & Pay'}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By confirming, you agree to Traviya's terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
