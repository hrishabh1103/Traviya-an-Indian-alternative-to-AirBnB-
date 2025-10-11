import React from 'react';
import { Shield, Lock, Eye, Phone, AlertCircle, UserCheck } from 'lucide-react';

export const Safety: React.FC = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: 'Verified Listings',
      description:
        'Every property is verified by our team. We check photos, amenities, and host information to ensure accuracy.',
    },
    {
      icon: UserCheck,
      title: 'Host Verification',
      description:
        'All hosts complete identity verification including government ID and background checks before listing.',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description:
        'Your payment information is encrypted and secure. We never share your financial details with hosts.',
    },
    {
      icon: Eye,
      title: 'Guest Reviews',
      description:
        'Read honest reviews from verified guests. All reviews are checked for authenticity and fairness.',
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description:
        'Our safety team is available around the clock to help with any concerns or emergencies during your stay.',
    },
    {
      icon: AlertCircle,
      title: 'Trust & Safety Tools',
      description:
        'Report issues, block users, and access safety resources anytime through your account dashboard.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-20 w-20" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">Your Safety Matters</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            We're committed to keeping our community safe through verification, secure technology,
            and dedicated support
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Keep You Safe</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Multiple layers of protection ensure every booking is secure and every stay is safe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Tips for Guests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Booking</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Read property reviews and ratings carefully</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Verify the host's profile and verification badges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Check cancellation policies before confirming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Communicate through the Traviya platform</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During Your Stay</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Inspect the property upon arrival</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Keep valuables secure at all times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Know emergency exits and contacts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Report any safety concerns immediately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Tips for Hosts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Hosting</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Ensure all safety equipment is working</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Provide accurate listing information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Install smoke and carbon monoxide detectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Create clear house rules and guidelines</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During Bookings</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Communicate through the platform only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Screen guests and verify identities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Respond promptly to guest concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Document property condition before and after</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-16">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Report Safety Concerns</h2>
              <p className="text-gray-600 mb-6">
                If you experience or witness any safety issues, harassment, discrimination, or
                suspicious activity, report it immediately. Our Trust & Safety team investigates
                all reports and takes appropriate action.
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold">
                Report an Issue
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Phone className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Support</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Need immediate assistance? Our emergency support line is available around the clock
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Call Emergency Line
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-semibold">
              Chat with Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
