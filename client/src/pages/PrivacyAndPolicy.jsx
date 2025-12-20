"use client";

import { useState } from "react";
import { Mail, Phone, Clock, MapPin, Shield, Lock, Eye, Database, FileText, Users, CheckCircle, Globe } from "lucide-react";

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState("english");
  const [activeTab, setActiveTab] = useState("collection");

  const tabs = [
    { id: "collection", label: "Data Collection", icon: Database },
    { id: "cookies", label: "Cookies", icon: Eye },
    { id: "rights", label: "Your Rights", icon: Users },
    { id: "security", label: "Security", icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
            <p className="text-gray-600 max-w-2xl">
              Seenalif, powered by Super Boss Computers Trading LLC, respects your privacy and is committed to protecting your personal data.
            </p>
            
            {/* Language Toggle */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setLanguage("english")}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  language === "english"
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("arabic")}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  language === "arabic"
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`max-w-5xl mx-auto px-6 py-12 ${language === "arabic" ? "rtl" : "ltr"}`}>
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 border"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-sm border p-8">
          
          {activeTab === "collection" && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === "english" ? "Data Collection and Usage" : "جمع واستخدام البيانات"}
                  </h2>
                  <div className="space-y-4">
                    {[
                      language === "english" 
                        ? "We do not collect personal data from users located in the European Union (EU)."
                        : "نحن لا نجمع بيانات شخصية من المستخدمين المقيمين في الاتحاد الأوروبي.",
                      language === "english"
                        ? "We use certain authorized third-party service providers, such as payment gateways, analytics tools, and shipping providers, to operate and improve our services."
                        : "نستخدم مزودي خدمات من طرف ثالث مخولين مثل بوابات الدفع وأدوات التحليل ومزودي الشحن لتشغيل وتحسين خدماتنا.",
                      language === "english"
                        ? "We collect information you provide voluntarily, such as during registration, purchases, or contacting customer support."
                        : "نجمع المعلومات التي تقدمها طواعية مثل التسجيل أو الشراء أو التواصل مع دعم العملاء."
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "cookies" && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === "english" ? "Cookies and Tracking Technologies" : "ملفات تعريف الارتباط وتقنيات التتبع"}
                  </h2>
                  <div className="space-y-4">
                    {[
                      language === "english"
                        ? "Our site uses cookies and similar tracking technologies to improve user experience, security, and site functionality."
                        : "يستخدم موقعنا ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربة المستخدم والأمان ووظائف الموقع.",
                      language === "english"
                        ? "Cookies may be used to remember your preferences, enable shopping features, analyze site traffic, and display personalized content."
                        : "قد تستخدم ملفات تعريف الارتباط لتذكر تفضيلاتك وتمكين ميزات التسوق وتحليل حركة الموقع وعرض محتوى مخصص.",
                      language === "english"
                        ? "You may disable cookies via your browser settings; however, some features may not function properly without cookies enabled."
                        : "يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح لكن بعض ميزات الموقع قد لا تعمل بشكل صحيح."
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rights" && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === "english" ? "Your Rights" : "حقوقك"}
                  </h2>
                  <div className="space-y-4">
                    {[
                      language === "english"
                        ? "You have the right to access, correct, or delete your personal data."
                        : "لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو حذفها.",
                      language === "english"
                        ? "You may opt out of marketing communications at any time."
                        : "يمكنك إلغاء الاشتراك في الاتصالات التسويقية في أي وقت.",
                      language === "english"
                        ? "For any privacy-related inquiries or to exercise your rights, please contact us at: Support@seenalif.com"
                        : "لأي استفسارات متعلقة بالخصوصية أو لممارسة حقوقك يرجى التواصل معنا على: Support@seenalif.com"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === "english" ? "Data Security" : "أمان البيانات"}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {language === "english"
                      ? "We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or alteration. However, internet transmissions are not completely secure, and we cannot guarantee absolute security."
                      : "نطبق التدابير الفنية والتنظيمية المناسبة لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو التغيير. ومع ذلك لا يمكن ضمان الأمان الكامل للبيانات أثناء النقل عبر الإنترنت."}
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-6 h-6" />
                      <h3 className="font-bold text-lg">
                        {language === "english" ? "Changes to This Policy" : "تغييرات هذه السياسة"}
                      </h3>
                    </div>
                    <p className="text-blue-100">
                      {language === "english"
                        ? "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date."
                        : "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر التغييرات على هذه الصفحة مع تاريخ النفاذ المحدث."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">
                {language === "english" ? "Third-Party Services" : "خدمات الطرف الثالث"}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {language === "english"
                ? "Third parties may collect and process data according to their own privacy policies. Please review their policies when accessing external links."
                : "قد يقوم الأطراف الثالثة بجمع ومعالجة البيانات وفقا لسياسات الخصوصية الخاصة بهم."}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900">
                {language === "english" ? "Your Consent" : "موافقتك"}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {language === "english"
                ? "By using the Site, you consent to the collection and use of the information you disclose on the website Seenalif."
                : "باستخدام الموقع فإنك توافق على جمع واستخدام المعلومات التي تكشف عنها."}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-gray-900 text-white mt-12">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <p className="text-gray-400">Get in touch with our team for any questions or concerns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-gray-800/50">
              <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Phone</h3>
              <a href="tel:+97143540566" className="text-gray-400 hover:text-white">+971 4 354 0566</a>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-800/50">
              <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Email</h3>
              <a href="mailto:Support@seenalif.com" className="text-gray-400 hover:text-white">Support@seenalif.com</a>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-800/50">
              <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Hours</h3>
              <p className="text-gray-400">Daily 9:00 AM - 7:00 PM</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-gray-800/50">
              <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium mb-1">Address</h3>
              <p className="text-gray-400 text-sm">Shop 11# Sultan Building, AL Raffa St., Burdubai, Dubai, UAE</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400">
              <strong className="text-white">Seenalif</strong> - Powered by Super Boss Computers Trading LLC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
