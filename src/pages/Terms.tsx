import React from 'react';
import { FileText, AlertCircle, Scale, Users, CreditCard, Home } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <FileText className="w-10 h-10 mr-3" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-gray-300 text-lg">
            Last updated: October 10, 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Traviya. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-3">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                By creating an account or using Traviya's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
              <p className="text-gray-700">
                If you do not agree to these terms, you may not access or use our services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Eligibility and Account Registration</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility Requirements</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>You must be at least 18 years old to use Traviya</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You must maintain the security of your account</li>
                  <li>You are responsible for all activities under your account</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Responsibilities</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Keep your password confidential and secure</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Ensure your contact information is current</li>
                  <li>Do not share your account with others</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-3">
                <Home className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Host Responsibilities</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">As a host on Traviya, you agree to:</p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-gray-900">Accurate Listings:</strong> Provide truthful and accurate descriptions of your property
                </li>
                <li>
                  <strong className="text-gray-900">Legal Compliance:</strong> Comply with all applicable laws, regulations, and tax requirements
                </li>
                <li>
                  <strong className="text-gray-900">Property Standards:</strong> Maintain your property in safe and habitable condition
                </li>
                <li>
                  <strong className="text-gray-900">Communication:</strong> Respond to guest inquiries and booking requests promptly
                </li>
                <li>
                  <strong className="text-gray-900">Availability:</strong> Keep your calendar updated and honor confirmed bookings
                </li>
                <li>
                  <strong className="text-gray-900">Non-Discrimination:</strong> Accept guests without discrimination based on protected characteristics
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-3">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Guest Responsibilities</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">As a guest on Traviya, you agree to:</p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-gray-900">Property Respect:</strong> Treat the property with care and respect
                </li>
                <li>
                  <strong className="text-gray-900">House Rules:</strong> Follow all house rules set by the host
                </li>
                <li>
                  <strong className="text-gray-900">Accurate Bookings:</strong> Provide accurate information about your stay
                </li>
                <li>
                  <strong className="text-gray-900">Communication:</strong> Communicate clearly with hosts about your needs
                </li>
                <li>
                  <strong className="text-gray-900">Timely Payment:</strong> Pay all amounts owed according to the booking terms
                </li>
                <li>
                  <strong className="text-gray-900">Damages:</strong> Report and be responsible for any damages you cause
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-3">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Payments and Fees</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Fees</h3>
                <p className="mb-3">Traviya charges service fees for the use of the platform:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Guest service fee: Typically 12-15% of the booking subtotal</li>
                  <li>Host service fee: Typically 3% of the booking subtotal</li>
                  <li>Fees are clearly displayed before booking confirmation</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Payment is processed at the time of booking</li>
                  <li>Hosts receive payment 24 hours after guest check-in</li>
                  <li>All payments are processed securely through our payment partners</li>
                  <li>Refunds are subject to the applicable cancellation policy</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation and Refunds</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Cancellations are subject to the cancellation policy chosen by the host. Common policies include:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-gray-900">Flexible:</strong> Full refund if cancelled 24 hours before check-in
                </li>
                <li>
                  <strong className="text-gray-900">Moderate:</strong> Full refund if cancelled 5 days before check-in
                </li>
                <li>
                  <strong className="text-gray-900">Strict:</strong> 50% refund if cancelled 7 days before check-in
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Service fees are refundable in accordance with the cancellation policy. For full details, please review our Cancellation Policy page.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Prohibited Activities</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">Users are strictly prohibited from:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Posting false, misleading, or fraudulent content</li>
                <li>Discriminating against any user based on protected characteristics</li>
                <li>Using the platform for illegal activities</li>
                <li>Attempting to circumvent service fees by transacting off-platform</li>
                <li>Infringing on intellectual property rights</li>
                <li>Harassing, threatening, or abusing other users</li>
                <li>Creating multiple accounts to evade restrictions</li>
                <li>Scraping or copying content without permission</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-3">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Dispute Resolution</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                In the event of a dispute between users, Traviya may assist in resolution but is not obligated to do so. We encourage users to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Communicate directly to resolve issues</li>
                <li>Document all communications and evidence</li>
                <li>Contact our support team for assistance</li>
                <li>Use our resolution center for formal disputes</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
              <p className="text-gray-700 mb-4">
                Traviya is a platform that connects hosts and guests. We do not own or control any listings or accommodations. To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We are not responsible for the conduct of hosts or guests</li>
                <li>We do not guarantee the accuracy of listings</li>
                <li>We are not liable for property damage or personal injury</li>
                <li>Our total liability is limited to the amount paid for the relevant booking</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700">
                All content on Traviya, including text, graphics, logos, and software, is the property of Traviya or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Service at any time. We will notify users of material changes via email or platform notification. Your continued use of Traviya after such changes constitutes acceptance of the updated terms.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                We may suspend or terminate your account if you violate these Terms of Service. You may also terminate your account at any time through your account settings. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You must cancel all pending bookings</li>
                <li>Outstanding payments remain due</li>
                <li>Some provisions of these terms survive termination</li>
              </ul>
            </div>
          </section>

          <section className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="text-gray-700 space-y-2">
              <p><strong>Email:</strong> legal@traviya.com</p>
              <p><strong>Address:</strong> Traviya, Inc., 123 Travel Street, Mumbai, India</p>
              <p><strong>Phone:</strong> +91 22 1234 5678</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
