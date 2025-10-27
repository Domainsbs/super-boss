import { Truck, Store, Package, Clock, MapPin, Phone, Mail, AlertTriangle, Shield } from "lucide-react"

export default function DeliveryInfo() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Truck className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Delivery Information</h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              We are committed to delivering your orders efficiently and reliably across the United Arab Emirates
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-8">
  
          {/* Standard Delivery Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Standard Delivery to Your Doorstep (UAE Only)</h2>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Deliveries are available to your provided shipping address anywhere in the UAE.
              </p>
    
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Order Value wise Shipping Fee</h3>
    
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="font-semibold text-purple-600 mb-2">Below AED 500</p>
                  <p className="text-gray-700">will be charges AED 20.00 delivery charges</p>
                  <p className="text-gray-700">
                    if COD (Cash on Delivery) then COD Handling Fee: AED 5.00 will be applicable (Non-refundable)
                  </p>
                  <p className="text-gray-700">
                    AED 20 Delivery Charges +5 COD handling Fee total payable on delivery AED 25.00
                  </p>
                </div>
    
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="font-semibold text-purple-600 mb-2">AED 500 or Above</p>
                  <p className="text-gray-700">Eligible for FREE delivery</p>
                  <p className="text-gray-700">
                    if COD (Cash on Delivery) then COD Handling Fee: AED 5.00 (Non-refundable) applicable only.
                  </p>
                </div>
              </div>
    
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Payment Methods Available</h3>
                <p className="text-gray-700">Cash on Delivery, Credit Card, Bank Transfer, Tabby, Tamara</p>
              </div>
    
              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <p>
                  · Free Shipping is applicable on a single order (one order ID) with a value of AED 500 or more, excluding
                  any applied voucher or discount codes.
                </p>
                <p>· Offer is valid for UAE customers only.</p>
                <p>
                  · For bulk orders or international deliveries, please refer to our Bulk Delivery Section or contact
                  Customer Care through the available support channels.
                </p>
                <p>· COD Handling Fee: AED 5.00 (Non-refundable)</p>
                <p>· Delivery Schedule: No deliveries on Sundays or UAE Public Holidays</p>
                <p>· Rates mentioned are per order</p>
              </div>
            </div>
          </section>
  
          {/* In-Store Pickup Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">In-Store Pickup</h2>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Collect your items from designated in-store pickup locations. Super Boss offers 4 locations at Dubai UAE for in-store Pickup.
              </p>
    
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="font-semibold text-purple-600 mb-2">Service</p>
                  <p className="text-gray-700">FREE Pickup on All Orders</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="font-semibold text-purple-600 mb-2">Payment</p>
                  <p className="text-gray-700">Credit Card only</p>
                </div>
              </div>
    
              <div className="space-y-2 text-sm text-gray-600">
                <p>· To find a pickup location near you, please visit our Store Finder page</p>
                <p>· Bulky items may require pickup from store locations only</p>
                <p>
                  · In case of space or logistics limitations, our Customer Care Team will reach out to provide alternative
                  shipping options
                </p>
                <p>· No deliveries on Sundays or UAE Public Holidays</p>
              </div>
    
              <p className="mt-4 text-gray-700">
                For assistance or inquiries regarding delivery, please contact our Customer Care Team via live chat,
                WhatsApp, or email.
              </p>
            </div>
          </section>
  
          {/* Delivery Policy Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Delivery Policy for Retail</h2>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Super Boss, we are committed to providing a smooth, reliable, and express delivery experience. As part of our promise, all standard deliveries are handled on a priority
                basis. However, delivery times may vary depending on product availability, address confirmation, and
                serviceability in remote or urban areas as per our trusted courier partners.
              </p>
    
              <p className="text-gray-700 mb-6 leading-relaxed">Please review the following key points of our delivery policy:</p>
    
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Delivery Schedule:</h3>
                  <p className="text-gray-700">We arrange daily deliveries, except on Sundays and UAE Public Holidays.</p>
                </div>
  
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Possible Delays:</h3>
                  <p className="text-gray-700 mb-2">
                    While we aim to meet the estimated delivery timelines at checkout, delays may occasionally occur due to
                    circumstances beyond our control, including:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                    <li>Customs clearance procedures</li>
                    <li>Deliveries to remote, mobile, or less-accessible urban areas</li>
                    <li>Local and international retail shipping</li>
                    <li>Force majeure events (e.g., extreme weather, logistical disruptions)</li>
                    <li>Inability to contact or locate the recipient at the time of delivery</li>
                  </ol>
                </div>
  
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Change of Delivery Address:</h3>
                  <p className="text-gray-700">
                    If you need to update your shipping address, kindly contact our Customer Care Team before dispatch
                    confirmation.
                  </p>
                  <p className="text-red-600 font-medium mt-2">
                    ⚠️ Please note: Once your order is confirmed as dispatched, we are unable to make any changes to the
                    delivery address.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <p className="text-gray-700 leading-relaxed">
                We value your trust and patience. For further assistance, please reach out to our support team through the
                available channels on our website or app.
              </p>
            </div>
          </section>
  
          {/* Bulk Orders Section */}
          <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Bulk Orders Delivery Information</h2>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Super Boss, we are pleased to accommodate bulk orders. However,
                please note the following important information regarding shipping:
              </p>
  
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">Shipping Costs</h3>
                  <p className="text-gray-700 mb-2">
                    While we gladly accept bulk purchases, shipping charges for bulk orders will either be borne by the
                    customer or mutually agreed upon, as per the applicable terms.
                  </p>
                  <p className="text-gray-700">
                    Shipping costs are calculated based on the actual weight or volumetric (dimensional) weight of the
                    shipment—whichever is higher, and may vary for local and international deliveries.
                  </p>
                </div>
  
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">How It Works:</h3>
                  <p className="text-gray-700 mb-2">Once we receive your bulk order request:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
                    <li>Our team will calculate the shipping cost.</li>
                    <li>
                      We will email you the full delivery details, including the shipping fee, before processing your order.
                    </li>
                    <li>
                      Your confirmation is required to proceed. Upon your approval, the order will be processed and
                      dispatched.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <p className="text-gray-700 leading-relaxed">
                For bulk order inquiries or quotations, please contact us through our Customer Care Team or submit your
                request via our website or mobile app.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 rounded-xl">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-8">
                <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                  <Phone className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
                <p className="text-purple-100">We're here to help with your delivery inquiries</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                  <MapPin className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-purple-100 text-sm">
                    Shop:11, Khurram Building, Al Raffa Street, Bur Dubai, Dubai, UAE
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                  <Phone className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-purple-100 text-sm">+971 50 450 2681</p>
                  <p className="text-purple-100 text-sm">+971 50 764 6297</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                  <Mail className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-purple-100 text-xs break-words">sales@superboss.ae</p>
                  <p className="text-purple-100 text-xs break-all">superbosscomputer@gmail.com</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                  <Clock className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-semibold mb-2">Working Hours</h3>
                  <p className="text-purple-100 text-sm">Daily</p>
                  <p className="text-purple-100 text-sm">9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <AlertTriangle className="w-6 h-6 text-yellow-300" />
                    <p className="text-white font-semibold">Important Reminder</p>
                  </div>
                  <p className="text-purple-100 text-center text-sm">
                    Please ensure someone is available to accept the delivery at the provided address once the order has been confirmed.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 pt-6 border-t border-white/20">
                <p className="text-white text-lg font-semibold">Super Boss</p>
                <p className="text-purple-100 text-sm mt-1">Your Trusted Technology Partner</p>
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>
    )
  }
  