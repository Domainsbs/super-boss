"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { generateShopURL } from "../utils/urlUtils"

const ShopByBrand = ({ brands = [], onBrandClick }) => {
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef(null)
  const autoScrollIntervalRef = useRef(null)

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollContainerRef.current || brands.length === 0) return

    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isPaused && scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const scrollAmount = 1 // Smooth pixel-by-pixel scroll
          
          // Scroll right
          container.scrollLeft += scrollAmount

          // Reset to beginning when reaching the end
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0
          }
        }
      }, 20) // Smooth animation speed
    }

    startAutoScroll()

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [isPaused, brands.length])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth"
      })
    }
  }

  if (!brands || brands.length === 0) {
    return null
  }

  // Duplicate brands for infinite scroll effect
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        {/* Section Header - Centered */}
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Shop by brand</h2>
        </div>

        {/* Brand Slider Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 md:gap-6 overflow-x-hidden py-4"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <Link
                key={`${brand._id}-${index}`}
                to={`/product-brand/${brand.slug || brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onBrandClick && onBrandClick(brand.name)}
                className="group flex-shrink-0"
              >
                  <div className="flex flex-col items-center justify-center w-24 md:w-32 lg:w-40">
                    <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-primary-500 hover:shadow-2xl transition-all duration-300 shadow-md overflow-hidden">
                      {/* Prefer `logo` field from DB */}
                      <img
                        src={brand.logo || brand.image || ''}
                        alt={brand.name || 'brand'}
                        className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          console.warn('Brand logo failed to load:', brand.name, brand.logo || brand.image)
                          e.target.style.display = 'none'
                          const fallback = e.target.parentNode.querySelector('.brand-fallback')
                          if (fallback) fallback.style.display = 'flex'
                        }}
                      />
                      <div className="brand-fallback hidden w-full h-full items-center justify-center bg-transparent">
                        <span className="text-xs md:text-base lg:text-lg font-semibold text-gray-700">{brand.name}</span>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs md:text-sm lg:text-base font-medium text-gray-700 line-clamp-1">{brand.name}</span>
                    </div>
                  </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="h-1 w-6 md:w-8 bg-gray-800 rounded-full"></div>
          <div className="h-1 w-6 md:w-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default ShopByBrand
