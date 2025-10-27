"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, AlertTriangle, FileText, Lock, Globe, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function DisclaimerPolicy() {
  const navigate = useNavigate();

  // Future functionality for Arabic version
  // const handleArabicClick = () => {
  //   navigate('/disclaimer-policy-arabic');
  // };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Disclaimer Policy
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Understanding our terms, limitations, and your rights when using Super Boss services
          </p>

          {/* Language Switch Button - Commented out until Arabic version is created */}
          {/* <div className="flex justify-center mt-6">
            <button
              onClick={handleArabicClick}
              className="bg-lime-500 hover:bg-lime-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              العربية Arabic
            </button>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Introduction */}
        {/* <div className="bg-white rounded-lg p-1">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex justify-center md:justify-start">
              <FileText className="w-8 h-8 text-lime-500 mt-1 flex-shrink-0" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Important Notice</h2>
              <p className="text-gray-700 leading-relaxed">
                This disclaimer policy outlines the terms and limitations of liability for Grabatoz.ae, 
                operated by Crown Excel General Trading LLC. By using our website and services, you 
                acknowledge and agree to these terms.
              </p>
            </div>
          </div>
        </div> */}

        {/* Limitation of Liability */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability and Disclaimers</h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              <strong>Super Boss</strong> provides the website and its services on an "as is" and "as available" basis without any warranties, either express or implied. By accessing or using our services, you agree to bear the risks associated with its use.
              Although we strive to ensure the accuracy, reliability, and quality of the content and third-party materials available, we do not guarantee that all information will be free from errors or inaccuracies. We disclaim all liability for any loss or damage that may result from the use or reliance on such information.

            </p>
              <div className="bg-blue-100 border-l-4 border-purple-600 p-4 rounded">
                <p className="font-medium text-gray-800">
                  This disclaimer does not affect any warranties provided directly by product manufacturers, as stated in the respective product documentation.
                </p>
              </div>
              <p>
                To the maximum extent permitted under applicable law, Super Boss will not be liable for any indirect, incidental, consequential, or special damages — including but not limited to loss of profits, data, goodwill, or other intangible losses — resulting from your use of the website, services, or any agreement related thereto.
              </p>
            </div>
          </div>
        </section>

        {/* User Agreement */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">User Agreement and Limitation of Liability</h2>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our liability to you, whether in contract, tort, or otherwise, shall be limited to the total value of the transaction or order in question. We do not warrant that the operation of the website will be uninterrupted or error-free, nor do we guarantee that defects will be corrected or that the site or servers are free of viruses or other harmful components.
                Super Boss shall not be held responsible for any delays, interruptions, or data transmission errors resulting from your use of our services.
              </p>
            </div>
          </div>
        </section>

        {/* Site Security */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Site Security and Acceptable Use</h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
            <p><strong>Users are strictly prohibited from:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accessing unauthorized data or systems</li>
              <li>Attempting to breach security or authentication measures</li>
              <li>Introducing malware, viruses, or malicious code</li>
              <li>Engaging in denial-of-service attacks, overloading, spamming, or crashing the site</li>
              <li>Sending unsolicited communications or advertisements</li>
              <li>Misrepresenting headers or falsifying IP packet information</li>
            </ul>
            <p>
              Violations of site security may lead to legal action. Super Boss reserves the right to cooperate with law enforcement authorities in investigating and prosecuting any users involved in such activities.
              You must not attempt to interfere with the website’s normal operation or use any automated system (e.g., bots, crawlers, or scrapers) to access or interact with our services without prior written consent.

            </p>
              <p>
                You must not attempt to interfere with the website's normal operation or use any automated system (e.g., bots, crawlers, or scrapers) to access or interact with our services without prior written consent.
              </p>
            </div>
          </div>
        </section>

        {/* Content Accuracy */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Content Accuracy and Updates</h2>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                While we endeavor to keep all information current and accurate, we cannot guarantee that all product descriptions, prices, images, or specifications are always error-free. Product colors, sizes, and packaging may vary slightly from what is displayed online.
                Super Boss reserves the right to update, modify, or remove any content on the website at any time without notice.
                We also provide links to third-party websites for your convenience. These are not under our control, and we do not assume any responsibility for their content, accuracy, or policies. Inclusion of such links does not imply endorsement.
              </p>
            </div>
          </div>
        </section>

        {/* No Warranty */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">No Warranty for Travel, Shipping, or Advisory Content</h2>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Any travel or logistical information, including third-party shipping advice, is provided for convenience only and is subject to change. Users are responsible for verifying such information with relevant service providers or authorities.
            </p>
          </div>
        </section>

      </div>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
            <p className="text-purple-100">Get in touch with our team for any questions or concerns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <div className="space-y-1">
                <a href="tel:+971504502681" className="block text-purple-100 hover:text-white transition-colors">
                  +971 50 450 2681
                </a>
                <a href="tel:+971507646297" className="block text-purple-100 hover:text-white transition-colors">
                  +971 50 764 6297
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <div className="space-y-1">
                <a href="mailto:sales@superboss.ae" className="block text-purple-100 hover:text-white transition-colors text-sm break-words">
                  sales@superboss.ae
                </a>
                <a href="mailto:superbosscomputer@gmail.com" className="block text-purple-100 hover:text-white transition-colors text-xs break-all">
                  superbosscomputer@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-purple-100">Daily<br/>9:00 AM - 7:00 PM</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
              <div className="flex justify-center mb-3">
                <div className="bg-white/20 rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-purple-100 text-sm">Shop:11, Khurram Building<br/>Al Raffa Street, Bur Dubai<br/>Dubai, UAE</p>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p className="text-white text-lg font-semibold">
              Super Boss
            </p>
            <p className="text-purple-100 text-sm mt-1">
              Your Trusted Technology Partner
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}