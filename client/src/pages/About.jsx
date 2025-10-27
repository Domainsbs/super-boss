import React from 'react';
import { Star, Lightbulb, UsersThree, Medal, UserFocus } from 'phosphor-react';
import { Users, Phone as LucidePhone, Mail, Clock, MapPin as LucideMapPin, Award, Target, Eye } from 'lucide-react';

function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-purple-50 via-white to-blue-50 min-h-screen">
      <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 border-2 border-white/30">
              <Users className="w-14 h-14 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Super Boss
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
            Your Trusted Technology Partner in Dubai, UAE
          </p>
        </div>
      </div>

      <div className="font-poppins text-black">
        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 md:px-8">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome to Super Boss
              </h2>
              <p className="text-[17px] leading-[28px] text-gray-700 mb-6">
                <strong className="text-purple-600">Super Boss</strong>, powered by Crown Excel General Trading LLC, is a premier name in the world of consumer electronics and technology solutions, proudly headquartered in Dubai, United Arab Emirates.
              </p>
              <p className="text-[17px] leading-[28px] text-gray-700 mb-6">
                Since our inception, we have been driven by a commitment to quality, innovation, and customer satisfaction, establishing ourselves as a trusted technology partner for individuals and businesses alike.
              </p>
              <p className="text-[17px] leading-[28px] text-gray-700">
                With a focus on integrity and excellence, Super Boss offers a wide range of computer electronics, hardware, accessories, and many more exciting technologies and IT products.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-20"></div>
                <img src="/about-us.png" alt="Super Boss Technology" className="relative rounded-2xl w-full shadow-2xl transform hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-7xl mx-auto px-4 py-16 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                </div>
                <p className="text-[17px] leading-[28px] text-gray-700">
                  To be recognized as a leader in laptop distribution and advanced technology solutions, consistently setting new standards of quality and innovation.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <p className="text-[17px] leading-[28px] text-gray-700">
                  Our mission is to deliver exceptional technology products that empower individuals, businesses, and educational institutions through innovation and service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gradient-to-b from-purple-50 to-white px-4 py-16 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR PRINCIPLES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Core Values
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              The principles that drive everything we do at Super Boss
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4">
                    <Star size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Integrity</h4>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  Conducting business with honesty and transparency
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4">
                    <Lightbulb size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Innovation</h4>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  Embracing change and leveraging latest technologies
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4">
                    <UserFocus size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h4>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  Placing customer satisfaction at heart
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4">
                    <Medal size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  Striving for superior quality
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4">
                    <UsersThree size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Teamwork</h4>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  Fostering collaboration
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4">
                    <Award size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Quality</h4>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  Delivering the best products
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-purple-100 text-lg">Have questions? We're here to help!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-3">
                    <LucidePhone className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+971504502681" className="text-purple-100 hover:text-white block mb-1 text-sm">
                  +971 50 450 2681
                </a>
                <a href="tel:+971507646297" className="text-purple-100 hover:text-white block text-sm">
                  +971 50 764 6297
                </a>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-3">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:sales@superboss.ae" className="text-purple-100 hover:text-white text-sm block mb-1">
                  sales@superboss.ae
                </a>
                <a href="mailto:superbosscomputer@gmail.com" className="text-purple-100 hover:text-white text-xs block">
                  superbosscomputer@gmail.com
                </a>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-3">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-purple-100 text-sm">Daily 9AM - 7PM</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-3">
                    <LucideMapPin className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-purple-100 text-xs leading-relaxed">Shop:11, Khurram Building<br />Al Raffa Street, Bur Dubai<br />Dubai, UAE</p>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-purple-100 text-lg">
                <strong className="text-white">Super Boss</strong>
                <br />
                Powered by Crown Excel General Trading LLC
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
