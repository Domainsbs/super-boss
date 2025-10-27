"use client"

import { useNavigate } from "react-router-dom"

const PromotionalOffers = () => {
  const navigate = useNavigate()

  const offers = [
    {
      id: 1,
      image: "https://img.freepik.com/premium-vector/up-10-off-order-now-sale-discount-offer-banner_686319-96.jpg",
      code: "SAVE10",
      title: "Extra 10% Off",
      description: "on all products",
      discount: 10
    },
    {
      id: 2,
      image: "https://www.shutterstock.com/image-vector/15-off-special-offer-marketing-600nw-2041449305.jpg",
      code: "SAVE15",
      title: "Extra 15% Off",
      description: "on selected items",
      discount: 15
    },
    {
      id: 3,
      image: "https://png.pngtree.com/png-clipart/20220928/original/pngtree-up-to-30-off-order-now-offer-banner-design-png-image_8640833.png",
      code: "SAVE30",
      title: "Extra 30% Off",
      description: "on special deals",
      discount: 30
    },
    {
      id: 4,
      image: "https://png.pngtree.com/png-clipart/20221006/original/pngtree-50-off-sale-banner-design-png-image_8661662.png",
      code: "SAVE50",
      title: "Extra 50% Off",
      description: "on clearance items",
      discount: 50
    }
  ]

  const handleOfferClick = (offer) => {
    // Navigate to shop page with discount filter
    navigate(`/shop?discount=${offer.discount}`)
  }

  return (
    <section className="py-6 mx-auto max-w-7xl px-3 bg-white">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Special Offers</h2>
        <div className="flex items-center justify-center mt-2 md:mt-3 mb-2">
          <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
        </div>
        <p className="text-sm md:text-base text-gray-600">Use these exclusive codes to save more</p>
      </div>

      {/* 4 Cards Grid - Responsive: 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
        {offers.map((offer) => (
          <div
            key={offer.id}
            onClick={() => handleOfferClick(offer)}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            {/* Image Container - Responsive height */}
            <div className="relative h-[120px] md:h-[180px] bg-white overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content Container */}
            <div className="p-2 md:p-4 text-center">
              {/* Title */}
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1">{offer.title}</h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PromotionalOffers
