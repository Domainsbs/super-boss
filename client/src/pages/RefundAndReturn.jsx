"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, RotateCcw, Clock, CheckCircle, XCircle, CreditCard, AlertTriangle, Phone, Mail, MapPin, FileText, Home, Truck, Settings, Info, Package, RefreshCw } from "lucide-react";

export default function RefundAndReturn() {
  const navigate = useNavigate();

  // Future functionality for Arabic version
  // const handleArabicClick = () => {
  //   navigate('/refund-return-arabic');
  // };

  return (
    <div className="bg-gradient-to-b from-purple-50 via-white to-blue-50 min-h-screen">
      {/* Header with Gradient */}
      <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 border-2 border-white/30 animate-pulse">
              <RefreshCw className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Return & Refund Policy
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
            At Super Boss, powered by Crown Excel General Trading LLC, we value your satisfaction and strive to provide a smooth and reliable shopping experience. If for any reason you are not fully satisfied with our products, you can return or exchange them.
          </p>

          {/* Language Switch Button - Commented out until Arabic version is created */}
          {/* <div className="flex justify-center mt-6">
            <button
              onClick={handleArabicClick}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-xl transition-all border border-white/30"
            >
              Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Arabic
            </button>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Return Period */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Return Eligibility
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Super Boss offers a <strong>15-day return window from the date of receipt</strong> of your order to <strong>initiate a return request.</strong>
              </p>

              <div className="bg-purple-50 rounded-xl p-6 space-y-4">
                <p className="font-semibold text-purple-900">When planning for a return, please ensure that:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700">
                  <li>The product is in original condition, including all tags and labels attached.</li>
                  <li>The item should be unused, undamaged, and free from any stains or odors.</li>
                  <li>For all electronics and tech items, all accessories and manuals should be included.</li>
                  <li>Any protective seals or labels must remain intact.</li>
                  <li>The product has not been damaged due to misuse, mishandling, or unauthorized modification.</li>
                  <li>Products that are customized, with cut cables/wires, or missing original components are not eligible for return or exchange.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Return Methods */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Return Methods
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">Super Boss offers two convenient options for return and exchange:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-lg text-blue-900">In-Store Return</h3>
                  </div>
                  <p className="text-gray-700">Visit any of our physical locations for immediate assistance.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Truck className="w-6 h-6 text-purple-600" />
                    <h3 className="font-bold text-lg text-purple-900">Pick-Up from Home</h3>
                  </div>
                  <p className="text-gray-700">Schedule a convenient pickup at your doorstep.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-Store Return */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-3">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                In-Store Return, Refund & Exchange
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>Super Boss</strong> offers the convenience of <strong>in-store returns, refunds, and exchanges</strong> at our physical location in Dubai.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 space-y-4">
                <h3 className="font-bold text-purple-900 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  How It Works:
                </h3>
                <p>
                  Visit our Super Boss store to request a return, refund, or product exchange. Please ensure the item is in the original packaging, unused, and sealed exactly as received.
                </p>
                <p>
                  Bring the item and the original tax invoice (received by email or phone). Our customer service team will assist you with the process.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Important Note:</h3>
                    <p className="text-gray-700">
                      Items that are <strong>not in their original packaging</strong> or have <strong>broken seals</strong> may be subject to rejection or handled according to the <strong>specific brand's return policy.</strong> Super Boss reserves the right to apply additional <strong>terms and conditions</strong> based on <strong>manufacturer or supplier guidelines.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pick-Up from Home */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pick-Up from Home – Return Service
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                At <strong>Super Boss,</strong> we aim to provide a hassle-free return experience. For your convenience, we offer a <strong>Pick-Up from Home</strong> return option.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-3">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                How It Works:
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="bg-purple-50 rounded-xl p-6">
                <p className="text-lg">
                  Our <strong>dedicated delivery team</strong> or an <strong>authorized delivery partner</strong> will contact you to schedule a suitable <strong>pickup time</strong> at your convenience. The returned item will be <strong>transported to our store</strong> for inspection and processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3">
                <Info className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Important:
              </h2>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-4 text-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Ensure the product is in <strong>original condition, unused,</strong> and securely packed in its <strong>original packaging</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Include the <strong>original invoice or proof of purchase</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Return delivery charges</strong> will be <strong>borne by the customer</strong> and may vary based on location or product type</span>
                    </li>
                  </ul>
                  <p className="mt-3">
                    Once the item is received and inspected, a <strong>refund or exchange</strong> will be processed in accordance with our return policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Process */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-3">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Refund Process
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Once the returned product is <strong>received and verified</strong> by our <strong>product inspection team,</strong> a <strong>refund or exchange</strong> will be initiated within <strong>15 days.</strong>
              </p>

              <div className="bg-purple-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Refunds will be issued to the <strong>original payment method</strong> used at the time of purchase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Exchanges will be processed based on <strong>product availability</strong> and customer preference</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>The process will begin <strong>immediately after successful inspection</strong> of the returned item</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Important:</strong> the inspection ensures the product is in its <strong>original condition, unused,</strong> and in <strong>original packaging,</strong> as per our return policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Processing time may vary based on the payment service provider; it takes a minimum of 2 or in some cases up to 15 business days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All refunds are processed in AED; international transactions are automatically converted to your local currency by your payment provider</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Important Policy Notes */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Important Policy Notes
              </h2>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="font-bold text-red-700 mb-4">Super Boss reserves the right to:</p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Refuse returns that do not meet the conditions stated above</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Take appropriate action against policy abuse, which may include warnings, return restrictions, or account suspension</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Defective & Non-Defective Items */}
        <section className="relative group mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-3">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Defective (Damaged) & Non-Defective Items
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Defective Items */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-lg text-red-700">Defective Items:</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Report within 15 days of delivery with order details and photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>We will verify and arrange a replacement or refund</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Return shipping for defective items will be covered by us</span>
                  </li>
                </ul>
              </div>

              {/* Non-Defective Items */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-lg text-green-700">Non-Defective Items:</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Returns accepted only if the item is unused and in original packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Must be requested within 15 days of delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Return shipping costs are the customer's responsibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Defective device inspection and repair"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

      </div>

      {/* Contact Information */}
      <section className="bg-gray-50 text-black p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p className="text-black">For questions or concerns regarding Return and Refunds terms please contact:</p>
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



