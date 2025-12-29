import React, { useState } from "react";
import { 
  Truck, Package, Store, Clock, CreditCard, MapPin, Phone, Mail,
  CheckCircle, AlertTriangle, Globe, DollarSign, Calendar, Users,
  ChevronDown, Info, ShieldCheck, Boxes
} from "lucide-react";

export default function DeliveryInfo() {
  const [activeTab, setActiveTab] = useState("standard");

  const tabs = [
    { id: "standard", label: "Standard Delivery", icon: Truck },
    { id: "pickup", label: "In-Store Pickup", icon: Store },
    { id: "policy", label: "Delivery Policy", icon: ShieldCheck },
    { id: "bulk", label: "Bulk Orders", icon: Boxes }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Delivery Information
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              <strong>Seenalif</strong>, Powered by Super Boss Computers Trading LLC - Reliable delivery across the UAE
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Standard Delivery Tab */}
        {activeTab === "standard" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Standard Delivery to Your Doorstep</h2>
                  <p className="text-gray-500">UAE Only</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                Deliveries are available to your provided shipping address anywhere in the UAE.
              </p>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                    <span className="text-lg font-semibold text-gray-900">Below AED 500</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">AED 20.00 delivery charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">COD Handling Fee: AED 5.00 (Non-refundable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Total COD: AED 25.00 on delivery</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 relative overflow-hidden">
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    FREE DELIVERY
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                    <span className="text-lg font-semibold text-gray-900">AED 500 or Above</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">FREE delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">COD Handling Fee: AED 5.00 only (Non-refundable)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  <h3 className="font-semibold text-gray-900">Payment Methods Available</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Cash on Delivery", "Credit Card", "Bank Transfer", "Tabby", "Tamara"].map((method) => (
                    <span key={method} className="bg-white px-4 py-2 rounded-lg text-gray-700 border border-gray-200">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-amber-800">Important Notes</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Free Shipping is applicable on a single order (one order ID) with a value of AED 500 or more, excluding any applied voucher or discount codes.",
                  "Offer is valid for UAE customers only.",
                  "For bulk orders or international deliveries, please refer to our Bulk Delivery Section or contact Customer Care.",
                  "COD Handling Fee: AED 5.00 (Non-refundable)",
                  "Delivery Schedule: No deliveries on Sundays or UAE Public Holidays",
                  "Rates mentioned are per order"
                ].map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-amber-900">
                    <span className="text-amber-500 mt-1"></span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* In-Store Pickup Tab */}
        {activeTab === "pickup" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center">
                  <Store className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">In-Store Pickup</h2>
                  <p className="text-gray-500">4 locations in Dubai, UAE</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                Collect your items from designated in-store pickup points. Seenalif powered by Super Boss Computers Trading LLC offers 4 locations at Dubai UAE for in-store Pickup.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Package className="w-6 h-6 text-green-600" />
                    <span className="font-semibold text-gray-900">Service</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">FREE Pickup</p>
                  <p className="text-gray-600">on All Orders</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">Payment</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">Credit Card Only</p>
                  <p className="text-gray-600">at pickup locations</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Pickup Guidelines</h3>
                <ul className="space-y-3">
                  {[
                    "To find a pickup location near you, please visit our Store Finder page",
                    "Bulky items may require pickup from store locations only",
                    "In case of space or logistics limitations, our Customer Care Team will reach out to provide alternative shipping options",
                    "No deliveries on Sundays or UAE Public Holidays"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Policy Tab */}
        {activeTab === "policy" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Delivery Policy for Retail</h2>
                  <p className="text-gray-500">Our commitment to reliable delivery</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                At Seenalif, powered by Super Boss Computers Trading LLC, we are committed to providing a smooth, reliable, and express delivery experience. All standard deliveries are handled on a priority basis. However, delivery times may vary depending on product availability, address confirmation, and serviceability in remote or urban areas.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Delivery Schedule</h3>
                  </div>
                  <p className="text-gray-700">We arrange daily deliveries, except on Sundays and UAE Public Holidays.</p>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Possible Delays</h3>
                  </div>
                  <p className="text-gray-700 mb-4">While we aim to meet the estimated delivery timelines at checkout, delays may occasionally occur due to:</p>
                  <ul className="space-y-2">
                    {[
                      "Customs clearance procedures",
                      "Deliveries to remote, mobile, or less-accessible urban areas",
                      "Local and international retail shipping",
                      "Force majeure events (e.g., extreme weather, logistical disruptions)",
                      "Inability to contact or locate the recipient at the time of delivery"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-amber-500">{idx + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-red-600" />
                    <h3 className="font-semibold text-gray-900">Change of Delivery Address</h3>
                  </div>
                  <p className="text-gray-700 mb-3">If you need to update your shipping address, kindly contact our Customer Care Team before dispatch confirmation.</p>
                  <div className="flex items-start gap-2 bg-red-100 p-3 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 font-medium">Once your order is confirmed as dispatched, we are unable to make any changes to the delivery address.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bulk Orders Tab */}
        {activeTab === "bulk" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <Boxes className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Bulk Orders Delivery</h2>
                  <p className="text-gray-500">Special handling for large orders</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                At Seenalif, powered by Super Boss Computers Trading LLC, we are pleased to accommodate bulk orders. Please note the following important information regarding shipping:
              </p>

              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Shipping Costs</h3>
                  </div>
                  <p className="text-gray-700 mb-2">Shipping charges for bulk orders will either be borne by the customer or mutually agreed upon, as per the applicable terms.</p>
                  <p className="text-gray-700">Shipping costs are calculated based on the actual weight or volumetric (dimensional) weight of the shipment - whichever is higher.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-blue-500" />
                    <h3 className="font-semibold text-gray-900">How It Works</h3>
                  </div>
                  <p className="text-gray-700 mb-4">Once we receive your bulk order request:</p>
                  <div className="space-y-4">
                    {[
                      { step: 1, text: "Our team will calculate the shipping cost." },
                      { step: 2, text: "We will email you the full delivery details, including the shipping fee, before processing your order." },
                      { step: 3, text: "Your confirmation is required to proceed. Upon your approval, the order will be processed and dispatched." }
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                          {item.step}
                        </div>
                        <p className="text-gray-700 pt-1">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Contact for Bulk Orders</h3>
              </div>
              <p className="text-gray-700">To inquire about bulk orders and associated shipping costs, please contact our Customer Care Team.</p>
            </div>
          </div>
        )}
      </div>

      {/* Contact Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Need Delivery Assistance?</h2>
            <p className="text-gray-400">Our team is ready to help with your delivery inquiries</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <a href="tel:+97143258808" className="text-white hover:text-blue-400 transition-colors">+971 4 3258808</a>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a href="mailto:Support@seenalif.com" className="text-white hover:text-blue-400 transition-colors">Support@seenalif.com</a>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Hours</p>
              <p className="text-white">9:00 AM - 7:00 PM</p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Location</p>
              <p className="text-white text-sm">Burdubai, Dubai, UAE</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400">
              <strong className="text-white">Seenalif.com</strong>  Powered by Super Boss Computers Trading LLC
            </p>
            <div className="mt-4 bg-red-500/20 inline-block px-4 py-2 rounded-lg">
              <p className="text-red-300 text-sm">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                Please ensure someone is available to accept the delivery at the provided address once the order has been confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
