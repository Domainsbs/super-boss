"use client"
import React, { useState } from "react";
import axios from "axios";
import config from "../config/config";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${config.API_URL}/api/request-callback`, form);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      alert("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 border-2 border-white/30">
              <Send className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              {success ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4 mb-4">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center">Your request has been submitted successfully. We'll contact you soon!</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Request
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We're here to help you with all your technology needs.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+971504502681" className="text-purple-600 hover:text-purple-700 font-medium block">
                        +971 50 450 2681
                      </a>
                      <a href="tel:+971507646297" className="text-purple-600 hover:text-purple-700 font-medium block">
                        +971 50 764 6297
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9AM - 7PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:sales@superboss.ae" className="text-blue-600 hover:text-blue-700 font-medium break-all block">
                        sales@superboss.ae
                      </a>
                      <a href="mailto:superbosscomputer@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium break-all block text-sm">
                        superbosscomputer@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-700">Shop:11, Khurram Building</p>
                      <p className="text-gray-700">Al Raffa Street, Bur Dubai</p>
                      <p className="text-gray-700">Dubai, United Arab Emirates</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Monday - Saturday:</span>
                          <span className="text-gray-900 font-medium">9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sunday:</span>
                          <span className="text-gray-900 font-medium">9:00 AM - 7:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">
                Our team typically responds within 2-4 hours during business hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
