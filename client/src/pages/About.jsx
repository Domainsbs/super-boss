import React from "react";
import { 
  Users, Star, Lightbulb, Target, Award, Heart, Laptop, Mouse, Building,
  Phone, Mail, Clock, MapPin, CheckCircle, ArrowRight, Sparkles, Eye, Rocket
} from "lucide-react";

export default function AboutUs() {
  const coreValues = [
    { icon: Star, title: "Integrity", desc: "Conducting business with honesty and transparency", color: "from-yellow-400 to-orange-500" },
    { icon: Lightbulb, title: "Innovation", desc: "Embracing change and leveraging the latest technologies", color: "from-blue-400 to-cyan-500" },
    { icon: Heart, title: "Customer Focus", desc: "Placing customer satisfaction at the heart of our operations", color: "from-pink-400 to-rose-500" },
    { icon: Award, title: "Excellence", desc: "Striving for superior quality in products and services", color: "from-purple-400 to-indigo-500" },
    { icon: Users, title: "Teamwork", desc: "Fostering collaboration to achieve shared goals", color: "from-green-400 to-emerald-500" }
  ];

  const products = [
    { icon: Laptop, title: "Laptops & Notebooks", desc: "For students, professionals, and enterprises" },
    { icon: Mouse, title: "Computer Peripherals", desc: "Accessories and hardware components" },
    { icon: Building, title: "IT Solutions", desc: "Tailored for businesses and educational institutions" }
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50K+", label: "Happy Customers" },
    { value: "1000+", label: "Products" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Split Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-blue-100 text-sm">Your Technology Partner in Dubai</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About <span className="text-blue-300">Seenalif</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                A premier name in consumer electronics and technology solutions, proudly headquartered in Dubai, United Arab Emirates.
              </p>
              <div className="flex flex-wrap gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/40 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-blue-600">Seenalif</strong>, powered by Super Boss Computers Trading LLC is a premier name in the world of consumer electronics and technology solutions, proudly headquartered in Dubai, United Arab Emirates.
              </p>
              <p>
                Since our inception, we have been driven by a commitment to quality, innovation, and customer satisfaction, establishing ourselves as a trusted technology partner for individuals and businesses alike.
              </p>
              <p>
                With a focus on integrity and excellence, Seenalif offers a wide range of computer electronics, hardware, accessories, and many more exciting technologies, meeting the evolving needs of todays fast-paced digital world.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <img src="/about-us.png" alt="About Seenalif" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a leader in laptop distribution and advanced technology solutions, consistently setting new standards of quality and innovation. We strive to remain ahead of market trends, ensuring that our customers always have access to modern, reliable, and high-performing technology.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver exceptional technology products that empower individuals, businesses, and educational institutions. We aim to enhance productivity, connectivity, and customer experiences through premium products, professional service, and continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="group text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Product Range */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Product Range</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">A diverse portfolio to meet all your technology needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-14 h-14 bg-blue-500/30 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{product.title}</h4>
                  <p className="text-blue-200">{product.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Seenalif?</h2>
            <div className="space-y-4">
              {[
                "Premium quality products from trusted brands",
                "Competitive pricing with transparent policies",
                "Expert customer support team",
                "Fast and reliable delivery across UAE",
                "Secure payment options including Tabby & Tamara",
                "Easy returns and exchange policies"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="/our-vision.jpg" alt="Our Vision" className="rounded-3xl w-full shadow-xl" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
            <p className="text-gray-400">We would love to hear from you</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <a href="tel:+97143258808" className="text-white hover:text-blue-400 transition-colors font-medium">+971 4 3258808</a>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a href="mailto:Support@seenalif.com" className="text-white hover:text-blue-400 transition-colors font-medium">Support@seenalif.com</a>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Hours</p>
              <p className="text-white font-medium">Daily 9AM - 7PM</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 mb-1">Address</p>
              <p className="text-white font-medium text-sm">Shop 11#, Sultan Building<br />AL Raffa St., Burdubai, Dubai</p>
            </div>
          </div>
          
          <div className="text-center mt-10 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              <strong className="text-white text-xl">Seenalif.com</strong>
            </p>
            <p className="text-gray-500 mt-2">Powered by Super Boss Computers Trading LLC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
