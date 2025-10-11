import React from 'react';
import { XCircle, RefreshCw, Calendar, DollarSign } from 'lucide-react';

export const Cancellation: React.FC = () => {
  const policies = [
    {
      name: 'Flexible',
      icon: RefreshCw,
      color: 'green',
      refund: 'Full refund',
      deadline: 'Up to 24 hours before check-in',
      details: [
        'Cancel up to 24 hours before check-in for a full refund',
        'Cancel within 24 hours and receive 50% refund',
        'Service fees are fully refundable',
        'Best for flexible travel plans',
      ],
    },
    {
      name: 'Moderate',
      icon: Calendar,
      color: 'blue',
      refund: 'Full refund',
      deadline: 'Up to 5 days before check-in',
      details: [
        'Cancel up to 5 days before check-in for a full refund',
        'Cancel within 5 days and receive 50% refund',
        'Service fees refundable if canceled within 48 hours of booking',
        'Balanced flexibility and commitment',
      ],
    },
    {
      name: 'Strict',
      icon: XCircle,
      color: 'orange',
      refund: 'Full refund',
      deadline: 'Up to 14 days before check-in',
      details: [
        'Cancel up to 14 days before check-in for a full refund',
        'Cancel within 14 days and receive 50% refund (excluding first night)',
        'No refund if canceled within 7 days',
        'Best for advance planning',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Cancellation Policies</h1>
          <p className="text-xl max-w-2xl">
            Understand your options and get refunds when plans change
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Cancellation Policy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each property has a cancellation policy set by the host. Review the policy before
            booking to understand your options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {policies.map((policy) => (
            <div
              key={policy.name}
              className={`bg-white border-2 border-${policy.color}-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`bg-${policy.color}-100 rounded-lg p-3 w-fit mb-4`}>
                <policy.icon className={`h-8 w-8 text-${policy.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{policy.name}</h3>
              <div className="mb-4">
                <p className={`text-${policy.color}-600 font-semibold text-lg`}>{policy.refund}</p>
                <p className="text-gray-600">{policy.deadline}</p>
              </div>
              <ul className="space-y-3">
                {policy.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className={`text-${policy.color}-600 mr-2 flex-shrink-0`}>•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Cancel Your Booking</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span className="text-rose-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Go to Your Bookings
                </h3>
                <p className="text-gray-600">
                  Sign in to your account and navigate to the bookings section. Find the
                  reservation you want to cancel.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span className="text-rose-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Review Policy</h3>
                <p className="text-gray-600">
                  Check the cancellation policy and see the refund amount you'll receive based on
                  when you cancel.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span className="text-rose-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirm Cancellation</h3>
                <p className="text-gray-600">
                  Select your reason for canceling and confirm. You'll receive a cancellation
                  confirmation email immediately.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span className="text-rose-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Refund</h3>
                <p className="text-gray-600">
                  Refunds are processed within 5-10 business days to your original payment method.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <DollarSign className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Fee Refunds</h3>
            <p className="text-gray-600 mb-4">
              Traviya service fees are refundable in most cases:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Fully refundable with Flexible policy cancellations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Refundable if canceled within 48 hours of booking (Moderate)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Non-refundable with Strict policy late cancellations</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <Calendar className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Extenuating Circumstances
            </h3>
            <p className="text-gray-600 mb-4">
              Full refunds may be available for certain unavoidable situations:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Natural disasters or severe weather</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Serious illness or injury (documentation required)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Government travel restrictions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Cancellation?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our support team can assist with cancellations and answer questions about refunds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-semibold">
              View FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
