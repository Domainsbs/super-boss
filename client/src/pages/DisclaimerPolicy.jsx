import React, { useState } from "react";
import { 
  AlertTriangle, Shield, FileText, Lock, Globe, ExternalLink,
  Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, Info, Scale
} from "lucide-react";

export default function DisclaimerPolicy() {
  const [expandedSections, setExpandedSections] = useState({
    liability: true,
    userAgreement: false,
    security: false,
    content: false,
    warranty: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      id: "liability",
      icon: AlertTriangle,
      title: "Limitation of Liability and Disclaimers",
      color: "from-red-500 to-orange-500",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            <strong>Seenalif.com,</strong> operated by Super Boss Computers Trading LLC, provides the website and its services on an "as is" and "as available" basis without any warranties, either express or implied. By accessing or using this website, you agree to bear the risks associated with its use.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Although we strive to ensure the accuracy, reliability, and quality of the content and third-party materials available on the website, we do not guarantee that all information will be free from errors or inaccuracies. We disclaim all liability for any loss or damage that may result from the use or reliance on such information.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-800 font-medium">
                This disclaimer does not affect any warranties provided directly by product manufacturers, as stated in the respective product documentation.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To the maximum extent permitted under applicable law, Seenalif.com and Super Boss Computers Trading LLC will not be liable for any indirect, incidental, consequential, or special damages  including but not limited to loss of profits, data, goodwill, or other intangible losses  resulting from your use of the website, services, or any agreement related thereto.
          </p>
        </div>
      )
    },
    {
      id: "userAgreement",
      icon: FileText,
      title: "User Agreement and Limitation of Liability",
      color: "from-blue-500 to-indigo-500",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Our liability to you, whether in contract, tort, or otherwise, shall be limited to the total value of the transaction or order in question. We do not warrant that the operation of the website will be uninterrupted or error-free, nor do we guarantee that defects will be corrected or that the site or servers are free of viruses or other harmful components.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Seenalif.com shall not be held responsible for any delays, interruptions, or data transmission errors resulting from your use of the site.
          </p>
        </div>
      )
    },
    {
      id: "security",
      icon: Lock,
      title: "Site Security and Acceptable Use",
      color: "from-green-500 to-teal-500",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 font-semibold">Users are strictly prohibited from:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Accessing unauthorized data or systems",
              "Attempting to breach security or authentication measures",
              "Introducing malware, viruses, or malicious code",
              "Engaging in denial-of-service attacks or spamming",
              "Sending unsolicited communications",
              "Misrepresenting headers or falsifying IP information"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-red-50 p-3 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Violations of site security may lead to legal action. Seenalif.com reserves the right to cooperate with law enforcement authorities in investigating and prosecuting any users involved in such activities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You must not attempt to interfere with the website''s normal operation or use any automated system (e.g., bots, crawlers, or scrapers) to access or interact with our services without prior written consent.
          </p>
        </div>
      )
    },
    {
      id: "content",
      icon: Globe,
      title: "Content Accuracy and Updates",
      color: "from-purple-500 to-pink-500",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            While we endeavor to keep all information current and accurate, we cannot guarantee that all product descriptions, prices, images, or specifications are always error-free. Product colors, sizes, and packaging may vary slightly from what is displayed online.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Seenalif.com reserves the right to update, modify, or remove any content on the website at any time without notice.
          </p>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <ExternalLink className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                We also provide links to third-party websites for your convenience. These are not under our control, and we do not assume any responsibility for their content, accuracy, or policies. Inclusion of such links does not imply endorsement.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "warranty",
      icon: Shield,
      title: "No Warranty for Travel, Shipping, or Advisory Content",
      color: "from-slate-500 to-gray-600",
      content: (
        <div className="text-gray-700 leading-relaxed">
          <p>
            Any travel or logistical information, including third-party shipping advice, is provided for convenience only and is subject to change. Users are responsible for verifying such information with relevant service providers or authorities.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Floating Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-2xl">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Disclaimer Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Understanding our terms, limitations, and your rights when using Seenalif.com
            </p>
            <div className="mt-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-blue-200" />
              <span className="text-blue-100 text-sm">Last updated: December 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections[section.id];
            
            return (
              <div 
                key={section.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Need Clarification?</h2>
            <p className="text-gray-400">Our team is here to help explain any part of this policy</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <a href="tel:+97143540566" className="text-white hover:text-blue-400 transition-colors">+971 4 354 0566</a>
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
          </div>
        </div>
      </div>
    </div>
  );
}
