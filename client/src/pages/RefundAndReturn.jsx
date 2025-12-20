"use client";

import React from "react";
import { Shield, RotateCcw, CheckCircle, CreditCard, AlertTriangle, Phone, Mail, MapPin, Clock, Package, Truck, ArrowRight, XCircle } from "lucide-react";

export default function RefundAndReturn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Customer Protection</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Refund & Return Policy
              </h1>
              <p className="text-xl text-blue-100 max-w-xl">
                At Seenalif, your satisfaction is our priority. We offer a hassle-free return and refund process.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15</div>
                <div className="text-blue-200">Days Return Window</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <CheckCircle className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Easy Returns</h3>
            <p className="text-gray-600 text-sm">Simple and quick return process</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
            <CreditCard className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Fast Refunds</h3>
            <p className="text-gray-600 text-sm">Refunds processed within 5-15 days</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
            <RotateCcw className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Free Exchange</h3>
            <p className="text-gray-600 text-sm">Exchange for same or different product</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Return Eligibility */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <Shield className="w-6 h-6" />
              Return Eligibility
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Seenalif offers a <strong>15-day return window</strong> from the date of receipt to initiate a return request. To be eligible for a return:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Product must be in original condition with all tags attached",
                "Item must be unused, undamaged, and free from stains",
                "All accessories, manuals, and components must be included",
                "Protective seals and labels must be intact",
                "Product must not have been damaged due to misuse",
                "Customized products or items with cut cables are not eligible"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Return Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">In-Store Return</h3>
            <p className="text-gray-600 mb-4">
              Visit our store location to return, refund, or exchange your product. Bring the item and original invoice.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-800 text-sm font-medium">Our Location:</p>
              <p className="text-blue-600 text-sm">Shop 11# Sultan Building, AL Raffa St., Burdubai, Dubai, UAE</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Home Pick-Up</h3>
            <p className="text-gray-600 mb-4">
              Our delivery team will contact you to schedule a convenient pickup time at your location.
            </p>
            <div className="bg-indigo-50 rounded-lg p-4">
              <p className="text-indigo-800 text-sm font-medium">Note:</p>
              <p className="text-indigo-600 text-sm">Return delivery charges may apply based on location</p>
            </div>
          </div>
        </div>

        {/* Refund Process */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <CreditCard className="w-6 h-6" />
              Refund Process
            </h2>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
              {["Product Received", "Inspection", "Refund Initiated", "Amount Credited"].map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{step}</span>
                  </div>
                  {index < 3 && <ArrowRight className="w-5 h-5 text-gray-300 hidden md:block" />}
                </React.Fragment>
              ))}
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500"></span>
                Refunds are processed within <strong>15 business days</strong> after successful inspection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500"></span>
                Amount will be credited to the <strong>original payment method</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500"></span>
                All refunds are processed in AED; international cards may have currency conversion
              </li>
            </ul>
          </div>
        </div>

        {/* Important Policy Notes */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Important Policy Notes</h3>
              <p className="text-gray-700 mb-3">Seenalif reserves the right to:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  Refuse returns that do not meet the conditions stated above
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  Take action against policy abuse including warnings or account suspension
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  Apply additional terms based on manufacturer or supplier guidelines
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Defective vs Non-Defective */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Defective Items</h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li> Report within 15 days with order details and photos</li>
              <li> We will verify and arrange replacement or refund</li>
              <li> Return shipping for defective items covered by us</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Non-Defective Items</h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li> Returns accepted only if unused and in original packaging</li>
              <li> Must be requested within 15 days of delivery</li>
              <li> Return shipping costs are customer responsibility</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Need Help with Returns?</h2>
            <p className="text-blue-200">Our support team is here to assist you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-1">Email Us</h3>
              <a href="mailto:Support@seenalif.com" className="text-blue-200 hover:text-white">
                Support@seenalif.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-1">Business Hours</h3>
              <p className="text-blue-200">Daily 9:00 AM - 9:00 PM</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-semibold mb-1">Visit Us</h3>
              <p className="text-blue-200 text-sm">Shop 11# Sultan Building, AL Raffa St., Burdubai, Dubai, UAE</p>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p className="text-blue-200">
              <strong className="text-white">Seenalif</strong>  Powered by Super Boss Computers Trading LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
