import React from 'react';
import { CheckCircle, AlertTriangle, Info, Heart } from 'lucide-react';

export const TravelGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Travel Guidelines</h1>
          <p className="text-xl max-w-2xl">
            Essential information to ensure safe, respectful, and enjoyable travel experiences
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-start space-x-4 mb-8">
            <div className="bg-blue-100 rounded-full p-3">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Travel</h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Check Travel Requirements</h3>
                  <p>
                    Review entry requirements for your destination including visas, vaccinations,
                    and COVID-19 protocols. Requirements vary by country and change frequently.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Travel Insurance</h3>
                  <p>
                    We strongly recommend purchasing comprehensive travel insurance covering
                    medical emergencies, trip cancellations, and lost belongings.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Important Documents</h3>
                  <p>
                    Keep digital and physical copies of your passport, booking confirmations,
                    travel insurance, and emergency contacts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-start space-x-4 mb-8">
            <div className="bg-green-100 rounded-full p-3">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Respectful Travel</h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Cultural Sensitivity</h3>
                  <p>
                    Research and respect local customs, dress codes, and traditions. What's
                    acceptable in one place may be offensive in another.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Environmental Responsibility</h3>
                  <p>
                    Minimize your environmental impact. Reduce waste, conserve resources, support
                    eco-friendly businesses, and leave places better than you found them.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Support Local Communities</h3>
                  <p>
                    Shop at local markets, eat at family-owned restaurants, and hire local guides
                    to directly benefit the communities you visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-start space-x-4 mb-8">
            <div className="bg-yellow-100 rounded-full p-3">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Guidelines</h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Safety</h3>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Stay aware of your surroundings at all times</li>
                    <li>Keep valuables secure and out of sight</li>
                    <li>Share your itinerary with trusted contacts</li>
                    <li>Avoid walking alone at night in unfamiliar areas</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Health Precautions</h3>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Bring necessary medications with prescriptions</li>
                    <li>Research local healthcare facilities</li>
                    <li>Stay hydrated and practice food safety</li>
                    <li>Follow current health guidelines and protocols</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Emergency Preparedness</h3>
                  <p>
                    Save local emergency numbers, your country's embassy contact, and Traviya's
                    24/7 support line. Know the location of the nearest hospital and police
                    station.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-start space-x-4 mb-8">
            <div className="bg-purple-100 rounded-full p-3">
              <Info className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">During Your Stay</h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Property Rules</h3>
                  <p>
                    Respect house rules set by your host. This includes quiet hours, guest limits,
                    smoking policies, and pet restrictions.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                  <p>
                    Keep your host informed of your arrival time and any changes to your plans.
                    Report any issues promptly through the Traviya platform.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Cleanliness</h3>
                  <p>
                    Leave the property in good condition. Follow checkout instructions and report
                    any accidental damage immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-600 to-orange-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Questions About Travel Guidelines?</h2>
          <p className="text-lg mb-6">
            Our support team is here to help you prepare for your trip
          </p>
          <button className="bg-white text-rose-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};
