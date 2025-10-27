// Card Component Definitions (instead of import)
import * as React from "react"

function Card({ className, ...props }) {
  return <div className={`bg-white rounded-lg ${className}`} {...props} />
}
function CardHeader({ className, ...props }) {
  return <div className={`border-b px-6 py-4 ${className}`} {...props} />
}
function CardTitle({ className, ...props }) {
  return <h3 className={`text-xl font-semibold ${className}`} {...props} />
}
function CardContent({ className, ...props }) {
  return <div className={`px-6 py-4 ${className}`} {...props} />
}

// Separator Component Definition (instead of import)
function Separator({ className = "" }) {
  return <hr className={`my-6 border-t border-gray-300 ${className}`} />
}

import {
  FileText,
  ShoppingCart,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Smartphone,
  Gift,
  Clock,
  Shield,
  DollarSign,
  Users,
  Ban,
} from "lucide-react"

export default function VoucherTermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <FileText className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Voucher Terms & Conditions</h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Important information about using vouchers and discount codes at Super Boss
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
            {/* General Conditions */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">General Conditions</h2>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <Clock className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">1.</span> Each voucher or promo code issued by Super Boss is valid
                    for a limited time, date or event only. The expiry date and applicable terms will be communicated
                    via email, SMS, or any official channel used by Super Boss.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">2.</span> Only one voucher can apply on each purchase made by customer
                    at Super Boss store.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <Ban className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">3.</span> Voucher codes cannot be used during sale periods or combined
                    with other promotions, campaigns, or discount offers unless explicitly stated.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">4.</span> Each voucher code is limited to one use per customer and per
                    account only.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <Ban className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">5.</span> Voucher codes cannot be applied to previously placed orders.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <Gift className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">6.</span> Only specific products may be eligible for voucher
                    discounts; restrictions may apply based on product category or vendor.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <DollarSign className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">7.</span> Vouchers are non-transferable and cannot be exchanged for
                    cash, store credit, or other alternatives.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <Clock className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">8.</span> The voucher code must be entered before completing the
                    checkout process. Late entries will not be honored.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <DollarSign className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">9.</span> In the case of a return or cancellation, the refund will
                    reflect the amount paid after the voucher discount. The discounted amount is non-refundable.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <Ban className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">10.</span> Each voucher code can only be used once. If the order is
                    canceled or items are returned, the voucher cannot be reissued or reused.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">11.</span> Super Boss reserves the right to modify or terminate any
                    voucher or promotional offer at its discretion, without prior notice.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <AlertTriangle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p>
                    <span className="font-medium">12.</span> Any violation of the above terms may result in the voucher
                    becoming void.
                  </p>
                </div>
              </div>
            </div>
            </section>

            <Separator />

            {/* How to Apply */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How to Apply a Voucher or Discount Code</h2>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  To redeem a voucher or promotional discount on your order, please follow these simple steps:
                </p>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-2">
                    <ShoppingCart className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">1. Add Products to Your Cart</h3>
                  </div>
                  <p>Browse and add the desired items to your Shopping Cart.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-2">
                    <ShoppingCart className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">2. Proceed to Shopping Cart</h3>
                  </div>
                  <p>
                    Click the "Shopping Cart" button once you're ready to place your order insert your voucher or coupon
                    code and hit checkout process.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-2">
                    <Gift className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">
                      3. Enter your voucher or promo code, then click "Apply" to activate the discount.
                    </h3>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">
                      4. This is the only place you can add or apply your valid voucher / coupon or discount code.
                    </h3>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">5. Next enter Delivery & Payment Details</h3>
                  </div>
                  <p>moving forward to fill in your shipping information and select your preferred payment method.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">6. Confirm your all details</h3>
                  </div>
                  <p>
                    once insert all your delivery information next you will find review your order summary page to
                    verify all entered information is correct now you are ready for final step.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">7. Place Your Order</h3>
                  </div>
                  <p>
                    done reeview your order summary, and if everything looks correct, click "Place Order" to complete
                    your purchase.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <p className="text-yellow-800 font-medium">
                    <strong>Note:</strong> Voucher codes must be entered before completing the order. Discounts cannot
                    be applied retroactively to confirmed purchases.
                  </p>
                </div>
              </div>
            </div>
            </section>

            <Separator />

            {/* In-Store Voucher Codes */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  In-Store Voucher Codes (for Mobile App Use Only)
                </h2>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p>
                      Customers making an in-store purchase of AED 500 or more may receive an exclusive voucher code and
                      QR code, printed on a separate receipt or token card along with their purchase invoice.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Smartphone className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p>
                      This voucher is redeemable only through the Super Boss mobile app. App installation is required to
                      use the code.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Gift className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p>The in-store voucher provides a 5% discount, with a maximum cap of AED 100.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p>
                      The voucher is valid for one order only per user/account and will expire in one month or 30 days
                      after the invoice date.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p>Lost, damaged, or stolen vouchers will not be replaced or extended under any circumstances.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ban className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p>This voucher cannot be combined with other vouchers or promotional codes.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  
  )
}
