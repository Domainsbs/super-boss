"use client";

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, FileText, Users, CreditCard, Globe, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  // Future functionality for Arabic version
  // const handleArabicClick = () => {
  //   navigate('/terms-conditions-arabic');
  // };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Welcome to Super Boss, your trusted technology partner. Understanding our terms and your rights when using our services.
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
        <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Welcome to Super Boss, your trusted technology partner. By accessing or using our services, you acknowledge and agree to the terms and conditions outlined below. These terms apply to all users of our services, including without limitation vendors, customers, merchants, and/or contributors of content.
              </p>
              <p>
                All products and services displayed on Super Boss constitute an "invitation to offer." Your order represents an "offer," which is subject to acceptance by Super Boss. Upon placing an order, you will receive an email confirming receipt of your order. This confirmation does not signify our acceptance. Our acceptance takes place only upon dispatch of the product(s) ordered.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <div className="space-y-6">
          
          {/* Membership Eligibility */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">1. Membership Eligibility</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>The services of Super Boss are only available to individuals who are legally eligible to enter into contracts as per UAE laws.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Users below 18 years of age must use our services under supervision of a parent or legal guardian who agrees to be bound by these terms.</li>
                  <li>Super Boss reserves the right to terminate access to users found to be in violation of these terms or providing false information.</li>
                  <li>Users accessing our services from outside the UAE are responsible for compliance with their local laws.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Account & Registration */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">2. Account & Registration</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>When using Super Boss, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your device. You agree to accept responsibility for all activities under your account.</p>
                <div>
                  <p className="font-medium mb-2">You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete registration data.</li>
                    <li>Keep your information updated.</li>
                    <li>Inform us immediately in case of any unauthorized access or breach.</li>
                  </ul>
                </div>
                <p>Super Boss reserves the right to suspend or terminate accounts for providing false, outdated, or misleading information.</p>
              </div>
            </div>
          </section>

          {/* Pricing & Orders */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">3. Pricing & Orders</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Super Boss strives to provide accurate product descriptions and pricing. However, errors may occur.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>In case of incorrect price or information, we reserve the right to cancel the order.</li>
                  <li>We will notify you via email before dispatch if there's a discrepancy in price or availability.</li>
                  <li>Prices and availability are subject to change without prior notice.</li>
                  <li>No cash refunds are provided; all refunds are processed via original payment methods.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Order Cancellation */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4. Order Cancellation</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>By Super Boss:</strong> We reserve the right to cancel orders due to stock issues, pricing errors, or fraud concerns.
                </p>
                <p>
                  <strong>By Customer:</strong> You may cancel an order before it is processed. Once shipped, cancellations are not permitted.
                </p>
                <p>Refunds for canceled orders (by either party) will be credited to your original payment method. Or Super Boss will make a credit voucher.</p>
              </div>
            </div>
          </section>

          {/* Third-Party & Branded Product Disclaimer */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">5. Third-Party & Branded Product Disclaimer</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Super Boss offers a variety of products, including items listed by third-party vendors, marketplace partners, and branded products supplied via external platforms. While some of these branded products may have originally been sourced through Super Boss, we are not responsible for products sold directly by third-party sellers, vendors, or external platforms.
                </p>
                <p>Super Boss assumes responsibility only for products sold directly by our official store. Any product listed by a third-party, even if originally supplied by Super Boss, falls under the responsibility of the respective vendor or seller.</p>
                <p>In the case of branded items, Super Boss does not guarantee the performance, durability, or quality of such products. These aspects are solely determined by the original manufacturer. However, Super Boss can assist in processing returns, warranty claims, or maintenance requests on behalf of the customer, strictly in accordance with the brand's or manufacturer's warranty, return, and exchange policy.</p>
                <p>Customers are advised to read all seller and manufacturer policies carefully before making a purchase. Super Boss is not liable for discrepancies in performance or service standards for third-party or branded items not directly sold by us.</p>
              </div>
            </div>
          </section>

          {/* Payment & Credit Card Information */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">6. Payment & Credit Card Information</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Payments must be made using valid credit/debit cards owned by the customer.</li>
                  <li>Super Boss will not share payment information with third parties except in case of fraud investigation or as required by law.</li>
                  <li>Fraudulent transactions will be reported, and Super Boss reserves the right to take legal action.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Declined or Fraudulent Transactions */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">7. Declined or Fraudulent Transactions</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">Super Boss reserves the right to recover the cost of goods, collection charges, and legal fees from users involved in fraudulent transactions.</p>
            </div>
          </section>

          {/* Electronic Communications */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">8. Electronic Communications</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">By using Super Boss or communicating with us electronically, you consent to receive communications from us electronically, including emails, notices, and updates.</p>
            </div>
          </section>

          {/* Currency & Foreign Transactions */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">9. Currency & Foreign Transactions</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>All transactions are processed in UAE Dirham (AED).</li>
                  <li>If your card is issued by a non-UAE bank, exchange rates and charges may apply.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Availability & "On Demand" Items */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">10. Product Availability & "On Demand" Items</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Items marked "check availability" are sourced upon order confirmation and may take additional time.</li>
                  <li>We do not guarantee availability for such items but will keep you informed throughout the process.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use of the Site */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">11. Use of the Site</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>You agree not to use our services for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting unlawful or harmful content.</li>
                  <li>Conducting fraudulent transactions.</li>
                  <li>Gaining unauthorized access to systems.</li>
                  <li>Violating UAE laws or infringing intellectual property rights.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Colors & Product Display */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">12. Colors & Product Display</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>We strive to display the colors and images of all products available at Super Boss as accurately as possible. However, the actual colors you see may vary depending on your screen resolution, device settings, or lighting conditions. Therefore, we cannot guarantee that your device's display will reflect the true color or appearance of the product.</p>
                <p>To avoid misunderstandings, we strongly encourage customers to carefully review the complete product descriptions, specifications, and additional details provided on each product page. If you require further clarification or specific information about any product, our dedicated support team is always available to assist you.</p>
                <p>For quick assistance, you may use the following available channels:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chat with a Specialist</li>
                  <li>Request a Callback</li>
                </ul>
                <p>These features are designed to ensure you receive accurate guidance before making a purchase.</p>
              </div>
            </div>
          </section>

          {/* Intellectual Property Rights */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">13. Intellectual Property Rights</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">All content, design, layout, graphics, and logos on Super Boss are our property or our licensors. You may not reproduce, distribute, or create derivative works without express written permission.</p>
            </div>
          </section>

          {/* Reviews & Submissions */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">14. Reviews & Submissions</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>All content submitted to Super Boss (reviews, comments, suggestions) becomes the property of Super Boss. We reserve the right to use, publish, or remove content at our discretion.</p>
                <p>You agree not to post:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Obscene, illegal, or defamatory content.</li>
                  <li>Copyright-infringing material.</li>
                  <li>Spam or unauthorized advertising.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Indemnification */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">15. Indemnification</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">You agree to indemnify and hold Super Boss, its affiliates, employees, directors, and agents harmless from any claims, liabilities, or losses arising out of your violation of these terms, use of our services, or breach of laws.</p>
            </div>
          </section>

          {/* Termination */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">16. Termination</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">Super Boss reserves the right to suspend or terminate your access to our services at any time without notice, including for breach of terms or unlawful activity.</p>
            </div>
          </section>

          {/* Governing Law & Jurisdiction */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">17. Governing Law & Jurisdiction</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.</p>
            </div>
          </section>

          {/* OFAC Compliance */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">18. OFAC Compliance</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">Super Boss will not process or ship any orders to OFAC-sanctioned countries, as per UAE regulations.</p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">19. Privacy Policy</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">Your use of Super Boss is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal data. We do not sell or rent your data without your consent. See our full <Link to="/privacy-policy" className="text-purple-600 hover:text-purple-700 underline font-medium transition-colors">Privacy Policy</Link> for more details.</p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">20. Changes to Terms</h2>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">Super Boss may update these Terms & Conditions at any time without prior notice. Continued use of our services after updates constitutes your acceptance of the revised terms.</p>
            </div>
          </section>

        </div>
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