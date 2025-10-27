"use client"

import { CreditCard, Truck, Heart, Headphones } from "lucide-react"

const CoreServiceAspects = () => {
  const services = [
    {
      id: 1,
      icon: CreditCard,
      title: "Secure Payment Method",
      description: "Available Different secure Payment Methods",
      rotate: "-rotate-3"
    },
    {
      id: 2,
      icon: Truck,
      title: "Extreme Fast Delivery",
      description: "Fast and convenient From door to door delivery",
      rotate: "rotate-2"
    },
    {
      id: 3,
      icon: Heart,
      title: "Quality & Savings",
      description: "Comprehensive quality control and affordable price",
      rotate: "-rotate-2"
    },
    {
      id: 4,
      icon: Headphones,
      title: "Professional Support",
      description: "Efficient customer support from passionate team",
      rotate: "rotate-3"
    }
  ]

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-300 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-3 md:px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
            Core Service Aspects
          </h2>
        </div>

        {/* Services Grid - 2x2 on mobile, 4 columns on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="flex flex-col items-center text-center group perspective-1000"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card with tilt effect */}
                <div className={`transform transition-all duration-500 hover:scale-105 ${service.rotate} hover:rotate-0`}>
                  {/* Icon Container - Card Style - Responsive sizes */}
                  <div className="relative mb-3 md:mb-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-2xl md:rounded-3xl bg-white shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      {/* Icon circle */}
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-blue-50 border-2 border-blue-500 group-hover:border-blue-600 transition-colors">
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-blue-600" strokeWidth={2} />
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-blue-400 rounded-full opacity-60"></div>
                    </div>
                  </div>

                  {/* Title - Responsive text */}
                  <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3 px-1 md:px-2">
                    {service.title}
                  </h3>

                  {/* Description - Responsive text */}
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed max-w-xs mx-auto px-2 md:px-4">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default CoreServiceAspects
