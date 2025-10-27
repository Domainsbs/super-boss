"use client"

import { useState } from "react"
import { Mail, Phone, Clock, MapPin, Shield } from "lucide-react"

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState("english")

  const content = {
    english: {
      title: "Privacy Policy",
      
      company: "Company: Super Boss - Your Trusted Technology Partner",
      sections: {
        introduction: {
          title: "Introduction",
          content: `Super Boss ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our services.`,
        },
        dataCollection: {
          title: "Data Collection and Usage",
          points: [
            "We do not collect personal data from users located in the European Union (EU).",
            "We use certain authorized third-party service providers, such as payment gateways, analytics tools, and shipping providers, to operate and improve our services. These third parties may collect and process data according to their own privacy policies.",
            "We collect information you provide voluntarily, such as during registration, purchases, or contacting customer support, and use it solely to provide, personalize, and enhance our services.",
          ],
        },
        cookies: {
          title: "Cookies and Tracking Technologies",
          points: [
            "Our site uses cookies and similar tracking technologies to improve user experience, security, and site functionality.",
            "Cookies may be used to remember your preferences, enable shopping features, analyze site traffic, and display personalized content or advertisements.",
            "You may disable cookies via your browser settings; however, some features of our site may not function properly without cookies enabled.",
          ],
        },
        rights: {
          title: "Your Rights",
          points: [
            "You have the right to access, correct, or delete your personal data.",
            "You may opt out of marketing communications at any time.",
            "For any privacy-related inquiries or to exercise your rights, please contact us at: sales@superboss.ae",
          ],
        },
        security: {
          title: "Data Security",
          content:
            "We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or alteration. However, internet transmissions are not completely secure, and we cannot guarantee absolute security.",
        },
        changes: {
          title: "Changes to This Policy",
          content:
            "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
        },
        contact: {
          title: "Contact Information",
          details: {
            website: "Super Boss",
            poweredBy: "Your Trusted Technology Partner",
            poBox: "Shop:11, Khurram Building, Al Raffa Street, Bur Dubai, Dubai, UAE",
            customerService: "Customer Service:",
            phone: "Tel: +971 50 450 2681 / +971 50 764 6297",
            email: "Email: sales@superboss.ae",
            hours: "Customer service hours: Daily from 9:00 AM to 7:00 PM",
          },
        },
      },
    },
    arabic: {
      title: "سياسة الخصوصية",
      effectiveDate: "تاريخ النفاذ: [أدخل التاريخ]",
      company: "شركة: Super Boss - شريكك التقني الموثوق",
      sections: {
        introduction: {
          title: "مقدمة",
          content: `تحترم شركة Super Boss ("نحن"، "لنا" أو "خاصتنا") خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها عند استخدامك لخدماتنا.`,
        },
        dataCollection: {
          title: "جمع واستخدام البيانات",
          points: [
            "نحن لا نجمع بيانات شخصية من المستخدمين المقيمين في الاتحاد الأوروبي.",
            "نستخدم مزودي خدمات من طرف ثالث مخولين، مثل بوابات الدفع وأدوات التحليل ومزودي الشحن، لتشغيل وتحسين خدماتنا. قد يقوم هؤلاء الطرف الثالث بجمع ومعالجة البيانات وفقًا لسياسات الخصوصية الخاصة بهم.",
            "نجمع المعلومات التي تقدمها طواعيةً، مثل التسجيل أو الشراء أو التواصل مع دعم العملاء، ونستخدمها فقط لتقديم خدماتنا وتخصيصها وتحسينها.",
          ],
        },
        cookies: {
          title: "ملفات تعريف الارتباط وتقنيات التتبع",
          points: [
            "يستخدم موقعنا ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربة المستخدم والأمان ووظائف الموقع.",
            "قد تُستخدم ملفات تعريف الارتباط لتذكر تفضيلاتك، وتمكين ميزات التسوق، وتحليل حركة الموقع، وعرض محتوى أو إعلانات مخصصة.",
            "يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح، لكن بعض ميزات الموقع قد لا تعمل بشكل صحيح بدون تمكين ملفات تعريف الارتباط.",
          ],
        },
        rights: {
          title: "حقوقك",
          points: [
            "لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو حذفها.",
            "يمكنك إلغاء الاشتراك في الاتصالات التسويقية في أي وقت.",
            "لأي استفسارات متعلقة بالخصوصية أو لممارسة حقوقك، يرجى التواصل معنا على: sales@superboss.ae",
          ],
        },
        security: {
          title: "أمان البيانات",
          content:
            "نطبق التدابير الفنية والتنظيمية المناسبة لحماية بياناتك من الوصول غير المصرح به أو الفقدان أو التغيير. ومع ذلك، لا يمكن ضمان الأمان الكامل للبيانات أثناء النقل عبر الإنترنت.",
        },
        changes: {
          title: "تغييرات هذه السياسة",
          content:
            "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر التغييرات على هذه الصفحة مع تاريخ النفاذ المحدث.",
        },
        contact: {
          title: "معلومات الاتصال",
          details: {
            website: "Super Boss",
            poweredBy: "شريكك التقني الموثوق",
            poBox: "محل:11، مبنى خرام، شارع الرفاعة، بر دبي، دبي، الإمارات",
            customerService: "خدمة العملاء:",
            phone: "هاتف: +971 50 450 2681 / +971 50 764 6297",
            email: "البريد الإلكتروني: sales@superboss.ae",
            hours: "ساعات خدمة العملاء: يوميًا من 9:00 صباحًا حتى 7:00 مساءً",
          },
        },
      },
    },
  }

  const currentContent = content[language]
  const isArabic = language === "arabic"

  return (
    <div className={`min-h-screen bg-gray-50 ${isArabic ? "rtl" : "ltr"}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">{currentContent.title}</h1>
          <p className="text-center text-purple-100 text-lg">{currentContent.company}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Language Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setLanguage("english")}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              language === "english"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("arabic")}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              language === "arabic"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
            }`}
          >
            العربية
          </button>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
            {/* Introduction */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                {currentContent.sections.introduction.title}
              </h2>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">{currentContent.sections.introduction.content}</p>
              </div>
            </section>

            {/* Data Collection and Usage */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                {currentContent.sections.dataCollection.title}
              </h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {currentContent.sections.dataCollection.points.map((point, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 ml-1 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                {currentContent.sections.cookies.title}
              </h2>
              <div className="bg-purple-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {currentContent.sections.cookies.points.map((point, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 ml-1 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                {currentContent.sections.rights.title}
              </h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {currentContent.sections.rights.points.map((point, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 ml-1 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                {currentContent.sections.security.title}
              </h2>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">{currentContent.sections.security.content}</p>
              </div>
            </section>

            {/* Changes to This Policy */}
            <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                {currentContent.sections.changes.title}
              </h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">{currentContent.sections.changes.content}</p>
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
  )
}
