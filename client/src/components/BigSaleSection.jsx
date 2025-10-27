"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart, Star, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { useWishlist } from "../context/WishlistContext"
import { useCart } from "../context/CartContext"

// Reusable product card component used in both desktop and mobile views
const ProductCard = ({ product, isMobile = false }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const discount = product.discount && Number(product.discount) > 0 ? `${product.discount}% Off` : null
  const stockStatus = product.stockStatus || (product.countInStock > 0 ? "Available" : "Out of Stock")
  const basePrice = Number(product.price) || 0
  const offerPrice = Number(product.offerPrice) || 0

  // Show offer price if it exists and is less than base price
  const hasValidOffer = offerPrice > 0 && basePrice > 0 && offerPrice < basePrice
  const showOldPrice = hasValidOffer

  // Determine which price to display
  let priceToShow = 0
  if (hasValidOffer) {
    priceToShow = offerPrice
  } else if (basePrice > 0) {
    priceToShow = basePrice
  } else if (offerPrice > 0) {
    priceToShow = offerPrice
  }

  // Fix rating and reviews display
  const rating = Number(product.rating) || 0
  const numReviews = Number(product.numReviews) || 0
  const categoryName = product.category?.name || ""

  const cardClasses = isMobile
    ? "bg-white rounded-lg p-4 shadow-md relative h-full flex flex-col"
    : "bg-white rounded-lg p-4 shadow-lg relative"
  const imageContainerClasses = isMobile ? "w-full h-40 mb-2" : "p-1 w-full h-[180px] mb-2"
  const imageClasses = isMobile ? "w-full h-full object-contain rounded" : "w-full h-full cover rounded mb-5"
  const titleClasses = isMobile
    ? "text-sm font-medium text-black mb-1 line-clamp-2 hover:text-blue-400 flex-grow"
    : "text-xs font-medium text-black mb-2 line-clamp-2 hover:text-blue-400"

  return (
    <div
      className="border p-2 h-[400px] flex flex-col justify-between bg-white w-full"
    >
      <div className="relative mb-2 flex h-[180px] justify-center items-cente">
        <Link to={`/product/${product.slug || product._id}`}>
          <img
            src={product.image || "/placeholder.svg?height=120&width=120"}
            alt={product.name}
            className="w-full h-full cover object-contain rounded mx-auto"
          />
        </Link>
        <button
          className="absolute top-1 right-1 text-gray-400 hover:text-red-500"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            isInWishlist(product._id) ? removeFromWishlist(product._id) : addToWishlist(product)
          }}
          aria-label={isInWishlist(product._id) ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={12} className={isInWishlist(product._id) ? "text-red-500 fill-red-500" : "text-gray-400"} />
        </button>
      </div>
      <div className="mb-1 flex items-center gap-2 ">
        <div className={`${getStatusColor(stockStatus)} text-white px-1 py-0.5 rounded text-xs  inline-block mr-1`}>
          {stockStatus}
        </div>
        {discount && (
          <div className="bg-red-600 text-white px-1 py-0.5 rounded text-xs font-bold inline-block">{discount}</div>
        )}
      </div>
      <Link to={`/product/${product.slug || product._id}`}>
        <h3 className="text-xs font-sm text-gray-900  line-clamp-4 hover:text-blue-600 h-[65px]">{product.name}</h3>
      </Link>
      {product.category && <div className="text-xs text-yellow-600 ">Category: {categoryName}</div>}
      <div className="text-xs text-green-600">Inclusive VAT</div>
      <div className="flex items-center gap-2">
        <div className="text-red-600 font-bold text-sm">
          {Number(priceToShow).toLocaleString(undefined, { minimumFractionDigits: 2 })}AED
        </div>
        {showOldPrice && (
          <div className="text-gray-400 line-through text-xs font-medium">
            {Number(basePrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}AED
          </div>
        )}
      </div>

      {/* Rating and Reviews Section - Fixed */}
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < Math.round(Number(product.rating) || 0) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-1">({Number(product.numReviews) || 0})</span>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          // Immediate visual feedback
          e.target.style.transform = "scale(0.95)"
          setTimeout(() => {
            if (e.target) e.target.style.transform = "scale(1)"
          }, 100)
          addToCart(product)
        }}
        className="mt-2 w-full bg-blue-600 hover:bg-blue-700 border border-blue-500 hover:border-blue-600 text-white text-xs font-medium py-2 px-1 rounded flex items-center justify-center gap-1 transition-all duration-100"
        disabled={stockStatus === "Out of Stock"}
      >
        <ShoppingBag size={12} />
        Add to Cart
      </button>
    </div>
  )
}

// Helper function to determine status color
const getStatusColor = (status) => {
  const statusLower = status.toLowerCase()
  if (statusLower.includes("available")) return "bg-primary-600 hover:bg-primary-700"
  if (statusLower.includes("out of stock") || statusLower.includes("outofstock")) return "bg-dark-900 hover:bg-dark-800"
  if (statusLower.includes("pre-order") || statusLower.includes("preorder")) return "bg-blue-600 hover:bg-blue-700"
  if (statusLower.includes("limited") || statusLower.includes("low stock")) return "bg-primary-400 hover:bg-primary-500"
  return "bg-gray-600 hover:bg-gray-700"
}

const BigSaleSection = ({ products = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const nextSlide = () => {
    if (currentSlide < products.length - 6) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  // If no products, don't render anything
  if (!products || products.length === 0) return null

  return (
    <>
      {/* Desktop Version - Slider */}
      <section className="my-6 hidden md:block overflow-hidden mx-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm">
        {/* Section Heading */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
          <div className="flex items-center justify-center mt-3 mb-2">
            <div className="h-1 w-80 bg-black rounded-full"></div>
          </div>
          <p className="text-gray-600">Grab the best deals on featured products</p>
        </div>

        <div className="relative max-w-8xl">
          <div className="flex justify-center">
            <div className="w-full relative" ref={containerRef}>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all border-2 border-gray-200"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide >= products.length - 6}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all border-2 border-gray-200"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>

              <div className="overflow-hidden py-2">
                <div
                  className="flex transition-transform duration-300 ease-in-out gap-2"
                  style={{ transform: `translateX(-${currentSlide * (100 / 6)}%)` }}
                >
                  {products.map((product) => (
                    <div key={product._id} className="flex-shrink-0" style={{ width: 'calc(16.666% - 6.67px)' }}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version - Grid */}
      <section className="my-6 md:hidden overflow-hidden mx-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 shadow-sm">
        {/* Section Heading */}
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold text-gray-900">Featured Products</h2>
          <div className="flex items-center justify-center mt-2 mb-2">
            <div className="h-1 w-40 bg-black rounded-full"></div>
          </div>
          <p className="text-sm text-gray-600">Grab the best deals on featured products</p>
        </div>

        {/* Mobile Grid - 2 columns */}
        <div className="grid grid-cols-2 gap-2">
          {products.slice(0, 6).map((product) => (
            <div key={product._id}>
              <ProductCard product={product} isMobile={true} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        {products.length > 6 && (
          <div className="mt-4 text-center">
            <Link 
              to="/shop" 
              className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        )}
      </section>
    </>
  )
}

export default BigSaleSection
