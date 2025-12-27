import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { X, Building2, FileText, User, Mail, Phone, CheckCircle, Package, TrendingUp, Shield, Users, Truck, Headphones, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import config from '../config/config';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import '../styles/phoneInput.css'

export default function ReqBulkPurchase() {
  const { user } = useAuth ? useAuth() : { user: null };
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [callbackForm, setCallbackForm] = useState({ 
    name: user?.name || '', 
    email: user?.email || '', 
    phone: '',
    countryCode: '+971',
    company: '',
    note: ''
  });
  const [callbackLoading, setCallbackLoading] = useState(false);
  const [callbackSuccess, setCallbackSuccess] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [tempId, setTempId] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");

  const handleCallbackChange = (e) => {
    const { name, value } = e.target;
    setCallbackForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOTP = async () => {
    if (!callbackForm.email) {
      alert('Please enter your email address');
      return;
    }
    
    setOtpLoading(true);
    try {
      const response = await axios.post(`${config.API_URL}/api/bulk-purchase/send-otp`, {
        email: callbackForm.email
      });
      setTempId(response.data.tempId);
      setOtpSent(true);
      alert('OTP sent to your email!');
    } catch (error) {
      alert('Failed to send OTP. Please try again.');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    setCallbackLoading(true);
    try {
      const payload = {
        ...callbackForm,
        phone: phoneValue,
        userId: user?._id || null,
      };

      delete payload.countryCode;

      if (!user) {
        if (!otpSent) {
          alert('Please verify your email first');
          setCallbackLoading(false);
          return;
        }
        payload.otp = otp;
        payload.tempId = tempId;
      }

      await axios.post(`${config.API_URL}/api/bulk-purchase`, payload);
      setCallbackSuccess(true);
      setTimeout(() => {
        setShowCallbackModal(false);
        setCallbackSuccess(false);
        setCallbackForm({ 
          name: user?.name || '', 
          email: user?.email || '', 
          phone: '',
          countryCode: '+971',
          company: '',
          note: ''
        });
        setOtpSent(false);
        setOtp('');
        setTempId('');
      }, 2000);
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to submit request. Please try again.');
    } finally {
      setCallbackLoading(false);
    }
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Trusted Platform',
      desc: 'Dedicated to serving SMBs in the UAE with trust and reliability as our priority.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Authorized Sellers',
      desc: 'Over 100 authorized sellers ready to serve with competitive prices.',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Learn About Trends',
      desc: 'Join webinars by global brands to stay ahead and grow your business.',
      color: 'purple'
    },
    {
      icon: Package,
      title: 'Wide Product Range',
      desc: 'Access products with accurate info from over 200 global brands.',
      color: 'orange'
    },
    {
      icon: Sparkles,
      title: 'Quantity Discounts',
      desc: 'Get better prices for larger quantities or request quotes from sellers.',
      color: 'pink'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      desc: 'Add team members and set roles for a seamless buying experience.',
      color: 'cyan'
    },
  ];

  const steps = [
    { step: 1, title: 'Bulk Requirement', desc: 'Submit your requirements' },
    { step: 2, title: 'Request Quote', desc: 'Get personalized quotes' },
    { step: 3, title: 'Best Price', desc: 'Compare & choose' },
    { step: 4, title: 'Proposals', desc: 'Review offers' },
    { step: 5, title: 'Invoice', desc: 'Confirm order' },
    { step: 6, title: 'Delivery', desc: 'Receive products' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      cyan: 'bg-cyan-100 text-cyan-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap size={16} />
                Your B2B Partner in UAE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Bulk Purchase
                <span className="block text-blue-200">Made Simple</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                Your one-stop sourcing platform for all business needs. Connect with authorized sellers and get the best deals on bulk orders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowCallbackModal(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Contact Sales
                  <ArrowRight size={20} />
                </button>
                <a 
                  href="#benefits" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Business Meeting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">200+</div>
            <div className="text-gray-500 text-sm">Global Brands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">100+</div>
            <div className="text-gray-500 text-sm">Authorized Sellers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">10K+</div>
            <div className="text-gray-500 text-sm">Products Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-gray-500 text-sm">Support Available</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Welcome to Our B2B Platform
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your one-stop sourcing platform for all your business needs. We are a business-focused marketplace 
            where small and medium businesses discover, interact, and buy products and services by engaging 
            with brands and authorized sellers. Experience seamless procurement with competitive pricing 
            and dedicated support.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Bulk Purchase
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As a business buyer, our platform offers great benefits and opportunities for small and medium businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div 
                key={i} 
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className={`w-14 h-14 ${getColorClasses(item.color)} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Buying Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and streamlined process to get your bulk orders delivered
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all text-center group hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-blue-300">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Contact our sales team today and discover how we can help your business grow with bulk purchasing solutions.
              </p>
              <button 
                onClick={() => setShowCallbackModal(true)}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Sales Team
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showCallbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-5 rounded-t-2xl">
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-all"
                onClick={() => {
                  setShowCallbackModal(false);
                  setOtpSent(false);
                  setOtp('');
                }}
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Building2 size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Contact Sales</h2>
                  <p className="text-white/80 text-sm">Submit your bulk purchase inquiry</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {callbackSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Submitted!</h3>
                  <p className="text-gray-500">We'll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={callbackForm.name}
                        onChange={handleCallbackChange}
                        className="w-full py-2.5 pl-10 pr-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors disabled:bg-gray-100 disabled:text-gray-500"
                        required
                        disabled={!!user}
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field with OTP */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <div className="relative flex gap-2">
                      <div className="relative flex-1">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={callbackForm.email}
                          onChange={handleCallbackChange}
                          className="w-full py-2.5 pl-10 pr-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors disabled:bg-gray-100 disabled:text-gray-500"
                          required
                          disabled={!!user || otpSent}
                          placeholder="Enter your email"
                        />
                      </div>
                      {!user && !otpSent && (
                        <button
                          type="button"
                          onClick={handleSendOTP}
                          disabled={otpLoading || !callbackForm.email}
                          className="px-4 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap text-sm font-medium transition-colors"
                        >
                          {otpLoading ? 'Sending...' : 'Send OTP'}
                        </button>
                      )}
                    </div>
                    {!user && (
                      <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                        {otpSent ? (
                          <>
                            <CheckCircle size={12} className="text-green-500" />
                            <span className="text-green-600">OTP sent to your email</span>
                          </>
                        ) : (
                          'Click "Send OTP" to verify your email'
                        )}
                      </p>
                    )}
                    {user && (
                      <p className="text-xs text-green-600 mt-1.5 flex items-center gap-1">
                        <CheckCircle size={12} />
                        Verified (logged in user)
                      </p>
                    )}
                  </div>

                  {/* OTP Field */}
                  {!user && otpSent && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Enter OTP *</label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 6-digit OTP"
                        maxLength={6}
                        className="w-full py-2.5 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors text-center font-mono tracking-widest"
                        required
                      />
                    </div>
                  )}

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <PhoneInput
                      international
                      defaultCountry="AE"
                      value={phoneValue}
                      onChange={setPhoneValue}
                      className="phone-input-modern"
                      placeholder="Enter phone number"
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name *</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Building2 size={18} />
                      </div>
                      <input
                        type="text"
                        name="company"
                        value={callbackForm.company}
                        onChange={handleCallbackChange}
                        className="w-full py-2.5 pl-10 pr-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                        required
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  {/* Note Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="note"
                      value={callbackForm.note}
                      onChange={handleCallbackChange}
                      rows={3}
                      placeholder="Tell us about your bulk purchase requirements..."
                      className="w-full py-2.5 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                    disabled={callbackLoading || (!user && !otpSent)}
                  >
                    {callbackLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
