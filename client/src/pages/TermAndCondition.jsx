"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, FileText, Users, CreditCard, Globe, Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, Scale, Gavel, AlertTriangle, Package } from "lucide-react";

export default function TermsAndConditions() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      icon: Users,
      title: "1. Membership Eligibility",
      content: `The services of Seenalif are only available to individuals who are legally eligible to enter into contracts as per UAE laws.
      
       Users below 18 years of age must use the site under supervision of a parent or legal guardian
       Seenalif reserves the right to terminate access to users found in violation of these terms
       Users accessing from outside the UAE are responsible for compliance with their local laws`
    },
    {
      icon: FileText,
      title: "2. Account & Registration",
      content: `When using Seenalif, you are responsible for maintaining the confidentiality of your account and password.
      
      You agree to:
       Provide accurate and complete registration data
       Keep your information updated
       Inform us immediately in case of any unauthorized access or breach
      
      Seenalif reserves the right to suspend or terminate accounts for providing false, outdated, or misleading information.`
    },
    {
      icon: CreditCard,
      title: "3. Pricing & Orders",
      content: `Seenalif strives to provide accurate product descriptions and pricing. However, errors may occur.
      
       In case of incorrect price or information, we reserve the right to cancel the order
       We will notify you via email before dispatch if there is a discrepancy in price or availability
       Prices and availability are subject to change without prior notice
       No cash refunds are provided; all refunds are processed via original payment methods`
    },
    {
      icon: Globe,
      title: "4. Order Cancellation",
      content: `By Seenalif: We reserve the right to cancel orders due to stock issues, pricing errors, or fraud concerns.
      
      By Customer: You may cancel an order before it is processed. Once shipped, cancellations are not permitted.
      
      Refunds for canceled orders (by either party) will be credited to your original payment method or as a Seenalif credit voucher.`
    },
    {
      icon: Package,
      title: "5. Third-Party & Branded Product Disclaimer",
      content: `Seenalif offers a variety of products, including items listed by third-party vendors and branded products.
      
       Seenalif assumes responsibility only for products sold directly by the official Seenalif store
       We can assist in processing returns, warranty claims, or maintenance requests on behalf of the customer
       Customers are advised to read all seller and manufacturer policies carefully before making a purchase`
    },
    {
      icon: CreditCard,
      title: "6. Payment & Credit Card Information",
      content: ` Payments must be made using valid credit/debit cards owned by the customer
       Seenalif will not share payment information with third parties except in case of fraud investigation
       Fraudulent transactions will be reported, and Seenalif reserves the right to take legal action`
    },
    {
      icon: Shield,
      title: "7. Declined or Fraudulent Transactions",
      content: `Seenalif reserves the right to recover the cost of goods, collection charges, and legal fees from users involved in fraudulent transactions.`
    },
    {
      icon: Mail,
      title: "8. Electronic Communications",
      content: `By visiting Seenalif or communicating with us electronically, you consent to receive communications from us electronically, including emails, notices, and updates.`
    },
    {
      icon: CreditCard,
      title: "9. Currency & Foreign Transactions",
      content: ` All transactions are processed in UAE Dirham (AED)
       If your card is issued by a non-UAE bank, exchange rates and charges may apply`
    },
    {
      icon: Package,
      title: "10. Product Availability",
      content: ` Items marked "check availability" are sourced upon order confirmation and may take additional time
       We do not guarantee availability for such items but will keep you informed throughout the process`
    },
    {
      icon: AlertTriangle,
      title: "11. Use of the Site",
      content: `You agree not to use the website for:
       Posting unlawful or harmful content
       Conducting fraudulent transactions
       Gaining unauthorized access to systems
       Violating UAE laws or infringing intellectual property rights`
    },
    {
      icon: Globe,
      title: "12. Colors & Product Display",
      content: `We strive to display product colors as accurately as possible. However, actual colors may vary depending on your screen resolution or device settings.
      
      For quick assistance:
       Chat with a Specialist
       Request a Callback`
    },
    {
      icon: Shield,
      title: "13. Intellectual Property Rights",
      content: `All content, design, layout, graphics, and logos on Seenalif are the property of Super Boss Computers Trading LLC or its licensors. You may not reproduce, distribute, or create derivative works without express written permission.`
    },
    {
      icon: FileText,
      title: "14. Reviews & Submissions",
      content: `All content submitted to Seenalif becomes the property of Seenalif. We reserve the right to use, publish, or remove content at our discretion.
      
      You agree not to post:
       Obscene, illegal, or defamatory content
       Copyright-infringing material
       Spam or unauthorized advertising`
    },
    {
      icon: Scale,
      title: "15. Indemnification",
      content: `You agree to indemnify and hold Seenalif, its affiliates, employees, directors, and agents harmless from any claims, liabilities, or losses arising out of your violation of these terms.`
    },
    {
      icon: AlertTriangle,
      title: "16. Termination",
      content: `Seenalif reserves the right to suspend or terminate your access to the site at any time without notice, including for breach of terms or unlawful activity.`
    },
    {
      icon: Gavel,
      title: "17. Governing Law & Jurisdiction",
      content: `These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.`
    },
    {
      icon: Shield,
      title: "18. OFAC Compliance",
      content: `Seenalif will not process or ship any orders to OFAC-sanctioned countries, as per UAE regulations.`
    },
    {
      icon: Shield,
      title: "19. Privacy Policy",
      content: `Your use of Seenalif is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal data. We do not sell or rent your data without your consent.`
    },
    {
      icon: FileText,
      title: "20. Changes to Terms",
      content: `Seenalif may update these Terms & Conditions at any time without prior notice. Continued use of the site after updates constitutes your acceptance of the revised terms.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-5xl mx-auto px-6 py-16 relative">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 border border-blue-400/30">
              <Scale className="w-10 h-10 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl">
              Welcome to Seenalif, a service by Super Boss Computers Trading LLC. Please read these terms carefully.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing or using Seenalif or any associated services, you acknowledge and agree to the terms and conditions outlined below. These terms apply to all users of the site, including vendors, customers, merchants, and contributors of content.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All products and services displayed on Seenalif constitute an "invitation to offer." Your order represents an "offer," which is subject to acceptance by Seenalif upon dispatch of the product(s) ordered.
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-blue-300"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    openSection === index ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <section.icon className="w-5 h-5" />
                  </div>
                  <span className={`font-semibold text-left ${openSection === index ? 'text-blue-600' : 'text-gray-900'}`}>
                    {section.title}
                  </span>
                </div>
                {openSection === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openSection === index && (
                <div className="px-5 pb-5 bg-gray-50 border-t">
                  <div className="pt-4 pl-14 text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Privacy Policy Link */}
        <div className="mt-8 p-6 bg-blue-500 rounded-2xl text-white">
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8" />
            <div>
              <h3 className="font-bold text-lg">Privacy Policy</h3>
              <p className="text-blue-100">
                For details on how we handle your data, see our{" "}
                <Link to="/privacy-policy" className="underline hover:text-white font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-slate-400">Get in touch with our team for any questions or concerns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-slate-800/50">
              <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Phone</h3>
              <a href="tel:+97143258808" className="text-slate-400 hover:text-white">+971 4 3258808</a>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-800/50">
              <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Email</h3>
              <a href="mailto:Support@seenalif.com" className="text-slate-400 hover:text-white">Support@seenalif.com</a>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-800/50">
              <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Hours</h3>
              <p className="text-slate-400">Daily 9:00 AM - 7:00 PM</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-800/50">
              <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Address</h3>
              <p className="text-slate-400 text-sm">Shop 11# Sultan Building, AL Raffa St., Burdubai, Dubai, UAE</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-slate-800">
            <p className="text-slate-400">
              <strong className="text-white">Seenalif</strong> - Powered by Super Boss Computers Trading LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
