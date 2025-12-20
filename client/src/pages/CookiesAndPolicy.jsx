"use client";

import React, { useState } from "react";
import { Cookie, Eye, Database, Lock, Globe, Phone, Mail, MapPin, Clock, FileText, Shield, ChevronRight, AlertCircle, Users } from "lucide-react";

export default function CookiesAndPolicy() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "Important Notice", icon: FileText },
    { id: "disclosure", label: "Disclosure to Third Parties", icon: Eye },
    { id: "analysis", label: "Analysis Services", icon: Database },
    { id: "rights", label: "Your Rights", icon: Users },
    { id: "email", label: "Email & Postal", icon: Mail },
    { id: "links", label: "External Links", icon: Globe },
    { id: "security", label: "Data Security", icon: Lock },
    { id: "consent", label: "Your Consent", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Cookie className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Cookies & Tracking Technologies
              </h1>
              <p className="text-gray-600 mt-1">
                Understanding how Seenalif uses cookies to improve your experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border p-4 sticky top-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <section.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{section.label}</span>
                    {activeSection === section.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            
            {/* Important Notice */}
            <section id="intro" className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our site uses cookies and similar tracking technologies to improve user experience, security, and site functionality.
                    Cookies may be used to remember your preferences, enable shopping features, analyze site traffic, and display personalized content or advertisements.
                    You may disable cookies via your browser settings; however, some features of our site may not function properly without cookies enabled.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclosure */}
            <section id="disclosure" className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Disclosure to Third Parties</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We will only share your personal data with other parties, including companies and external individuals, if legal permission to do so exists.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-gray-700 text-sm">
                      Cookies are small text files assigned to your browser and stored on your hard drive. We differentiate between session cookies (deleted after closing the browser) and permanent cookies (stored beyond the session).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Analysis Services */}
            <section id="analysis" className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Analysis Services</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border">
                      <h3 className="font-semibold text-gray-900 mb-2">Google Analytics</h3>
                      <p className="text-gray-600 text-sm">
                        We utilize Google Analytics to analyze and enhance app usage regularly, utilizing obtained statistics to improve offerings for users.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border">
                      <h3 className="font-semibold text-gray-900 mb-2">Sentry</h3>
                      <p className="text-gray-600 text-sm">
                        Our app uses Sentry error diagnosis service to diagnose app crashes or unexpected errors for analysis and diagnostics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Your Rights</h2>
                  <p className="text-gray-700 mb-4">You have specific rights concerning your personal data under applicable laws:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Right to information", "Right to rectification or erasure", "Right to restriction of processing", "Right to object to processing", "Right to data portability"].map((right, i) => (
                      <div key={i} className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-gray-700 text-sm">{right}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    For data protection inquiries, contact: <strong className="text-blue-600">Support@seenalif.com</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Email & Postal */}
            <section id="email" className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Email & Postal Communication</h2>
                  <p className="text-gray-700 leading-relaxed">
                    During registration and acceptance of our terms of use, you can consent to receive email and postal newsletters. We process your email and postal addresses to send you relevant communications. You can revoke this consent at any time without providing reasons.
                  </p>
                </div>
              </div>
            </section>

            {/* External Links */}
            <section id="links" className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Links to External Websites</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our app may contain links to websites of third-party providers. When you access these links, we no longer control data collection and usage. Refer to the respective provider`s privacy policy for comprehensive information.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section id="security" className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You are responsible for controlling access to your mobile device and maintaining password confidentiality. We employ technical and organizational security measures to protect your personal data against unauthorized access, loss, or alterations. However, complete data protection during internet transmission is not guaranteed.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Consent */}
            <section id="consent" className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-sm p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">Your Consent</h2>
                  <p className="text-blue-100 leading-relaxed">
                    By using the Site, you consent to the collection and use of the information you disclose on the website Seenalif by Super Boss Computers Trading LLC. If we decide to change our Privacy Policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
            <p className="text-gray-600">Get in touch with our team for any questions or concerns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <Phone className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
              <a href="tel:+97143540566" className="text-gray-600 hover:text-blue-600">+971 4 354 0566</a>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <Mail className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Email</h3>
              <a href="mailto:Support@seenalif.com" className="text-gray-600 hover:text-blue-600">Support@seenalif.com</a>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Hours</h3>
              <p className="text-gray-600">Daily 9:00 AM - 7:00 PM</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-50">
              <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Address</h3>
              <p className="text-gray-600 text-sm">Shop 11# Sultan Building, AL Raffa St., Burdubai, Dubai, UAE</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t">
            <p className="text-gray-600">
              <strong className="text-gray-900">Seenalif</strong>  Powered by Super Boss Computers Trading LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
