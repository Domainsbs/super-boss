import React, { useState } from "react";
import { 
  Ticket, Clock, Users, Ban, Gift, DollarSign, Shield, AlertTriangle,
  ShoppingCart, CreditCard, CheckCircle, Smartphone, Phone, Mail, MapPin,
  ChevronRight, Sparkles, Tag
} from "lucide-react";

export default function VoucherTermsConditions() {
  const [activeStep, setActiveStep] = useState(1);

  const generalConditions = [
    { icon: Clock, text: "Each voucher or promo code issued by Seenalif.com is valid for a limited time, date or event only. The expiry date and applicable terms will be communicated via email, SMS, or any official channel." },
    { icon: Users, text: "Only one voucher can apply on each purchase made by customer on Seenalif.com store." },
    { icon: Ban, text: "Voucher codes cannot be used during sale periods or combined with other promotions, campaigns, or discount offers unless explicitly stated." },
    { icon: Users, text: "Each voucher code is limited to one use per customer and per account only." },
    { icon: Ban, text: "Voucher codes cannot be applied to previously placed orders." },
    { icon: Gift, text: "Only specific products may be eligible for voucher discounts; restrictions may apply based on product category or vendor." },
    { icon: DollarSign, text: "Vouchers are non-transferable and cannot be exchanged for cash, store credit, or other alternatives." },
    { icon: Clock, text: "The voucher code must be entered before completing the checkout process. Late entries will not be honored." },
    { icon: DollarSign, text: "In the case of a return or cancellation, the refund will reflect the amount paid after the voucher discount. The discounted amount is non-refundable." },
    { icon: Ban, text: "Each voucher code can only be used once. If the order is canceled or items are returned, the voucher cannot be reissued or reused." },
    { icon: Shield, text: "Seenalif reserves the right to modify or terminate any voucher or promotional offer at its discretion, without prior notice." },
    { icon: AlertTriangle, text: "Any violation of the above terms may result in the voucher becoming void." }
  ];

  const howToApplySteps = [
    { step: 1, icon: ShoppingCart, title: "Add Products to Your Cart", desc: "Browse and add the desired items to your Shopping Cart." },
    { step: 2, icon: ShoppingCart, title: "Proceed to Shopping Cart", desc: "Click the Shopping Cart button once you are ready to place your order, insert your voucher or coupon code and hit checkout process." },
    { step: 3, icon: Gift, title: "Enter Voucher Code", desc: "Enter your voucher or promo code, then click Apply to activate the discount." },
    { step: 4, icon: AlertTriangle, title: "Important Location", desc: "This is the only place you can add or apply your valid voucher / coupon or discount code." },
    { step: 5, icon: CreditCard, title: "Enter Delivery & Payment Details", desc: "Moving forward to fill in your shipping information and select your preferred payment method." },
    { step: 6, icon: CheckCircle, title: "Confirm Your Details", desc: "Review your order summary page to verify all entered information is correct." },
    { step: 7, icon: CheckCircle, title: "Place Your Order", desc: "Done reviewing your order summary, and if everything looks correct, click Place Order to complete your purchase." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-blue-100 text-sm">Save more with vouchers</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Voucher Terms & Conditions
              </h1>
              <p className="text-xl text-blue-100">
                Everything you need to know about using vouchers and promo codes on Seenalif.com
              </p>
            </div>
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
              <Ticket className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* General Conditions - Timeline Style */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">General Conditions</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-gray-200"></div>
          
          <div className="space-y-4">
            {generalConditions.map((condition, idx) => {
              const Icon = condition.icon;
              return (
                <div key={idx} className="relative flex items-start gap-4 pl-16">
                  <div className="absolute left-3 w-6 h-6 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-500">{idx + 1}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 hover:bg-blue-50 p-4 rounded-xl transition-colors border border-gray-100">
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{condition.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How to Apply Section - Interactive Steps */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">How to Apply a Voucher</h2>
          </div>

          {/* Step Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {howToApplySteps.map((step) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeStep === step.step
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                Step {step.step}
              </button>
            ))}
          </div>

          {/* Active Step Display */}
          {howToApplySteps.map((step) => {
            const Icon = step.icon;
            return activeStep === step.step ? (
              <div key={step.step} className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-500 font-medium mb-1">Step {step.step} of 7</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                    disabled={activeStep === 1}
                    className="px-4 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(7, activeStep + 1))}
                    disabled={activeStep === 7}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : null;
          })}

          {/* Warning Note */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-amber-800">
                <strong>Note:</strong> Voucher codes must be entered before completing the order. Discounts cannot be applied retroactively to confirmed purchases.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* In-Store Voucher Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">In-Store Voucher Codes</h2>
            </div>
            <p className="text-indigo-200 mb-6">For Mobile App Use Only</p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: DollarSign, text: "Available on purchases of AED 500 or more in-store" },
                { icon: Smartphone, text: "Redeemable only through the Seenalif mobile app" },
                { icon: Tag, text: "5% discount with maximum cap of AED 100" },
                { icon: Clock, text: "Valid for 30 days from invoice date" },
                { icon: AlertTriangle, text: "Lost or stolen vouchers will not be replaced" },
                { icon: Ban, text: "Cannot be combined with other promotions" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl">
                    <Icon className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                    <p className="text-indigo-100">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Questions About Vouchers?</h2>
            <p className="text-gray-400">Our support team can help with any voucher-related inquiries</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <a href="tel:+97143540566" className="text-white hover:text-blue-400">+971 4 354 0566</a>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a href="mailto:Support@seenalif.com" className="text-white hover:text-blue-400">Support@seenalif.com</a>
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
          
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400">
              <strong className="text-white">Seenalif.com</strong> - Powered by Super Boss Computers Trading LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
