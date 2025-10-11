import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Bell } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Shield className="w-10 h-10 mr-3" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
              At Traviya, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this privacy policy carefully.
            </p>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-3">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Name, email address, and phone number</li>
                <li>Payment information and billing address</li>
                <li>Government-issued ID for identity verification</li>
                <li>Profile photo and biographical information</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Device information and IP address</li>
                <li>Browser type and operating system</li>
                <li>Usage data and interaction with our services</li>
                <li>Location data with your permission</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-3">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process your bookings and facilitate transactions</li>
                <li>Communicate with you about your reservations</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Improve and personalize your experience</li>
                <li>Send you marketing communications with your consent</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-lg mr-3">
                <UserCheck className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Information Sharing</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>We may share your information with:</p>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-900">Hosts and Guests:</strong> To facilitate bookings and enable communication
                  </li>
                  <li>
                    <strong className="text-gray-900">Service Providers:</strong> Third parties who perform services on our behalf
                  </li>
                  <li>
                    <strong className="text-gray-900">Legal Authorities:</strong> When required by law or to protect rights and safety
                  </li>
                  <li>
                    <strong className="text-gray-900">Business Transfers:</strong> In connection with mergers or acquisitions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-lg mr-3">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Restricted access to personal information</li>
                <li>Secure payment processing through trusted providers</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-3">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights and Choices</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Control cookie preferences</li>
                <li>Request a copy of your data</li>
                <li>Object to certain processing activities</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Types of cookies we use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Essential cookies for platform functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>Marketing cookies for personalized advertising</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="text-gray-700 space-y-2">
              <p><strong>Email:</strong> privacy@traviya.com</p>
              <p><strong>Address:</strong> Traviya, Inc., 123 Travel Street, Mumbai, India</p>
              <p><strong>Phone:</strong> +91 22 1234 5678</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
