"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Cookie, Eye, Database, Lock, Globe, Phone, Mail, MapPin, Clock, FileText } from "lucide-react";

export default function CookiesAndPolicy() {
  const navigate = useNavigate();

  // Future functionality for Arabic version
  // const handleArabicClick = () => {
  //   navigate('/cookies-policy-arabic');
  // };

  return (
    <div className="bg-gradient-to-b from-purple-50 via-white to-blue-50 min-h-screen">
      {/* Header with Gradient */}
      <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 border-2 border-white/30 animate-pulse">
              <Shield className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Cookies & Tracking Technologies
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
            Understanding how we use cookies and tracking technologies to improve your experience at Super Boss
          </p>

          {/* Language Switch Button - Commented out until Arabic version is created */}
          {/* <div className="flex justify-center mt-6">
            <button
              onClick={handleArabicClick}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-xl transition-all border border-white/30"
            >
              العربية Arabic
            </button>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Important Notice
            </h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Our site uses cookies and similar tracking technologies to improve user experience, security, and site functionality.
              Cookies may be used to remember your preferences, enable shopping features, analyze site traffic, and display personalized content or advertisements.
              You may disable cookies via your browser settings; however, some features of our site may not function properly without cookies enabled.
            </p>
          </div>
        </section>

        {/* Disclosure to Third Parties */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Disclosure to Third Parties
            </h2>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 space-y-4 text-gray-700">
            <p>
              We will only share your personal data with other parties, including companies and external individuals, if legal permission to do so exists.
              Cookies and Tracking Technologies. We utilize cookies and similar technologies within the application to enhance user experience and overall efficiency. Cookies are small text files assigned to your browser and stored on your hard drive, enhancing the app's user-friendliness and effectiveness.
            </p>
            <p>
              Cookies can contain data allowing device recognition but typically don't personally identify users. We differentiate between session cookies (deleted after closing the browser) and permanent cookies (stored beyond the session).
            </p>
            <p>
              We use necessary cookies for app navigation, basic functions, and security purposes. Consent-based technologies that enhance app usage may also be utilized.
            </p>
          </div>
        </section>

        {/* Analysis Services */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Analysis Services
            </h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700">
              We utilize beaconsmind AG to provide insights into app usage, user preferences, statistical analyses of products and stores, and purchase histories. The statistics obtained help us enhance the app's offerings and make them more appealing to users. In addition, with your consent, we can track your presence in a store using the beacon technology mentioned.
            </p>
          </div>
        </section>

        {/* Cybersecurity Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://www.nokia.com/sites/default/files/2022-01/cybersecurity4_0.jpg?height=600&width=1920&resize=1"
            alt="Cookies Inside App"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
        {/* Google Analytics */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Google Analytics
            </h2>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700">
              We utilize features of Google Analytics. Google Analytics helps us analyze and enhance app usage regularly, utilizing obtained statistics to improve offerings for users.
            </p>
          </div>
        </section>

        {/* Sentry */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Sentry
            </h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700">
              Our app uses the error diagnosis service Sentry, provided by Functional Software, Inc., to diagnose app crashes or unexpected errors. Relevant information is sent to Sentry's servers for analysis and diagnostics.
            </p>
          </div>
        </section>

        {/* Your Users' Rights */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Your Users' Rights
            </h2>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 space-y-4 text-gray-700">
            <p>You have specific rights concerning your personal data under applicable laws:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right to information</li>
              <li>Right to rectification or erasure</li>
              <li>Right to restriction of processing</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
            </ul>
            <p className="mt-4">
              For data protection inquiries, contact: <strong>customercare@superboss.ae</strong>
            </p>
          </div>
        </section>

        {/* Email & Postal Communication */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Email & Postal Communication
            </h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700">
              During registration and acceptance of our terms of use, you can consent to receive email and postal newsletters. We process your email and postal addresses to send you relevant communications. You can revoke this consent at any time without providing reasons.
            </p>
          </div>
        </section>

        {/* Links to External Websites */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Links to External Websites
            </h2>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700">
              Our app may contain links to websites of third-party providers. When you access these links, we no longer control data collection and usage. Refer to the respective provider's privacy policy for comprehensive information on data collection and use.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Data Security
            </h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700">
              You are responsible for controlling access to your mobile device and maintaining password confidentiality. We employ technical and organizational security measures to protect your personal data against unauthorized access, loss, or alterations. However, complete data protection during internet transmission (e.g., email communication) is not guaranteed.
            </p>
          </div>
        </section>

        {/* Updates to Privacy Notice */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Updates to Privacy Notice
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700">
                This privacy notice may be updated periodically due to legal changes or new features. We recommend checking it regularly for updates.
                For any privacy-related inquiries, please contact us at customercare@superboss.ae
              </p>
            </div>

            {/* Image Section */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://humanfocus.co.uk/wp-content/uploads/what-is-cyber-security.jpg"
                alt="Data Security Measures"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Your Consent */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Your Consent
            </h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700">
              By using the Site, you consent to the collection and use of the information you disclose on the website superboss.ae by Crown Excel General Trading LLC. If we decide to change our Privacy Policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.
            </p>
          </div>
        </section>

      </div>

      {/* Contact Information */}
      <section className="bg-gray-50 text-black p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p className="text-black">Get in touch with our team for any questions or concerns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="font-medium mb-1">Phone</h3>
              <a href="tel:+97143540566" className="text-black hover:text-purple-600 transition-colors">
                +971 4 354 0566
              </a>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="font-medium mb-1">Email</h3>
              <a href="mailto:customercare@superboss.ae" className="text-black hover:text-blue-600 transition-colors">
                customercare@superboss.ae
              </a>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="font-medium mb-1">Hours</h3>
              <p className="text-black">Daily 9:00 AM - 7:00 PM</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="font-medium mb-1">Address</h3>
              <p className="text-black">P.O. Box 241975, Dubai, UAE</p>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-gray-700">
            <p className="text-black">
              <strong>Super Boss</strong><br />
              <b>Powered by Crown Excel General Trading LLC</b>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
