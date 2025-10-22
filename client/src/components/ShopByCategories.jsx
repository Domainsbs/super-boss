"use client"

import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { generateShopURL } from "../utils/urlUtils"

const ShopByCategories = ({ categories = [], onCategoryClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef(null)
  
  const itemsPerView = 7 // Show 7 items at a time on desktop

  if (!categories || categories.length === 0) {
    return null
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth"
      })
    }
  }

  const canScrollLeft = currentSlide > 0
  const canScrollRight = currentSlide < categories.length - itemsPerView

  return (
    <section className="py-6 mx-auto max-w-7xl px-3 bg-white">
      {/* Section Header */}
      <div className="mb-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop By Categories</h2>
          <div className="flex items-center justify-center mt-3 mb-2">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => onCategoryClick && onCategoryClick("all")}
            className="text-gray-700 hover:text-primary-600 font-medium text-sm border border-gray-300 px-4 py-2 rounded-lg hover:border-primary-600 transition-colors whitespace-nowrap"
          >
            VIEW ALL
          </button>
        </div>
      </div>

      {/* Categories Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg border-2 border-gray-200 hidden lg:block"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={(e) => {
            const container = e.target
            const newSlide = Math.round(container.scrollLeft / (container.offsetWidth / itemsPerView))
            setCurrentSlide(newSlide)
          }}
        >
          {categories.map((category) => (
            <Link
              key={category._id}
              to={generateShopURL({ parentCategory: category.name })}
              onClick={() => onCategoryClick && onCategoryClick(category.name)}
              className="group flex-shrink-0"
              style={{ width: "calc(14.28% - 14px)", minWidth: "150px" }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                {/* Image Container - Full Height */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                      <span className="text-5xl">📦</span>
                    </div>
                  )}
                  
                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Category Name */}
                <div className="p-3 text-center bg-white">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg border-2 border-gray-200 hidden lg:block"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default ShopByCategories
