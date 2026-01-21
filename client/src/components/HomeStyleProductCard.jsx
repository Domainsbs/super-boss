// import { Link } from "react-router-dom"
// import { Heart, Star, ShoppingBag } from "lucide-react"
// import { useWishlist } from "../context/WishlistContext"
// import { useCart } from "../context/CartContext"
// import { useToast } from "../context/ToastContext"
// import { getImageUrl } from "../utils/imageUtils"

// const getStatusColor = (status) => {
//   if (status === "Available Product" || status === "Available") return "bg-green-600"
//   if (status === "Stock Out" || status === "Out of Stock") return "bg-red-600"
//   if (status === "Pre-Order") return "bg-yellow-400 text-black"
//   return "bg-gray-400"
// }

// const HomeStyleProductCard = ({ product }) => {
//   const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
//   const { addToCart } = useCart()
//   const { showToast } = useToast()
//   const discount = product.discount && Number(product.discount) > 0 ? `${product.discount}% Off` : null
//   // Treat both 'Available' and 'Available Product' as available
//   const isAvailable = (product.stockStatus === "Available" || product.stockStatus === "Available Product" || (!product.stockStatus && product.countInStock > 0))
//   const stockStatus = isAvailable ? "Available" : (product.stockStatus || (product.countInStock > 0 ? "Available" : "Out of Stock"))
//   const basePrice = Number(product.price) || 0
//   const offerPrice = Number(product.offerPrice) || 0
  
//   // Show offer price if it exists and is less than base price
//   const hasValidOffer = offerPrice > 0 && basePrice > 0 && offerPrice < basePrice
//   const showOldPrice = hasValidOffer
  
//   // Determine which price to display
//   let priceToShow = 0
//   if (hasValidOffer) {
//     priceToShow = offerPrice
//   } else if (basePrice > 0) {
//     priceToShow = basePrice
//   } else if (offerPrice > 0) {
//     priceToShow = offerPrice
//   }
//   const rating = product.rating || 0
//   const numReviews = product.numReviews || 0
//   const categoryName = product.category?.name || "Unknown"
  
//   // Debug product images


//   return (
//     <div className="border p-2 h-[400px] flex flex-col justify-between bg-white">
//       <div className="relative mb-2 flex h-[180px] justify-center items-cente">
//         <Link to={`/product/${product.slug || product._id}`}>
//           <img
//             src={getImageUrl(product)}
//             alt={product.name}
//             className="w-full h-full cover object-contain rounded mx-auto"
//             onError={(e) => {
//               e.target.src = "/placeholder.svg?height=120&width=120"
//             }}
//           />
//         </Link>
//         <button
//           className="absolute top-1 right-1 text-gray-400 hover:text-red-500"
//           onClick={(e) => {
//             e.preventDefault()
//             e.stopPropagation()
//             isInWishlist(product._id) ? removeFromWishlist(product._id) : addToWishlist(product)
//           }}
//           aria-label={isInWishlist(product._id) ? "Remove from wishlist" : "Add to wishlist"}
//         >
//           <Heart size={12} className={isInWishlist(product._id) ? "text-red-500 fill-red-500" : "text-gray-400"} />
//         </button>
//       </div>
//       <div className="mb-1 flex items-center gap-2 ">
//         <div
//           className={`${getStatusColor(stockStatus)} text-white px-1 py-0.5 rounded text-xs  inline-block mr-1`}
//         >
//           {stockStatus}
//         </div>
//         {discount && (
//           <div className="bg-yellow-400 text-white px-1 py-0.5 rounded text-xs  inline-block">{discount}</div>
//         )}
//       </div>
//       <Link to={`/product/${product.slug || product._id}`}>
//         <h3 className="text-xs font-sm text-gray-900  line-clamp-4 hover:text-blue-600 h-[65px]">{product.name}</h3>
//       </Link>
//       {product.category && <div className="text-xs text-yellow-600 ">Category: {categoryName}</div>}
//       <div className="text-xs text-green-600">Inclusive VAT</div>
//       <div className="flex items-center gap-2">
//         <div className="text-red-600 font-bold text-sm">
//           {Number(priceToShow).toLocaleString(undefined, { minimumFractionDigits: 2 })}AED
//         </div>
//         {showOldPrice && (
//           <div className="text-gray-400 line-through text-xs font-medium">
//             {Number(basePrice).toLocaleString(undefined, { minimumFractionDigits: 2 })}AED
//           </div>
//         )}
//       </div>
//       <div className="flex items-center">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             size={14}
//             className={`${i < Math.round(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
//           />
//         ))}
//         <span className="text-xs text-gray-500 ml-1">({numReviews})</span>
//       </div>
//       <button
//         onClick={(e) => {
//           e.preventDefault()
//           e.stopPropagation()
//           // Immediate visual feedback
//           e.target.style.transform = 'scale(0.95)'
//           setTimeout(() => {
//             if (e.target) e.target.style.transform = 'scale(1)'
//           }, 100)
//           addToCart(product)
//         }}
//         className="mt-2 w-full bg-lime-500 hover:bg-lime-400 border border-lime-300 hover:border-transparent text-black text-xs font-medium py-2 px-1 rounded flex items-center justify-center gap-1 transition-all duration-100"
//         disabled={stockStatus === "Out of Stock"}
//       >
//         <ShoppingBag size={12} />
//         Add to Cart
//       </button>
//     </div>
//   )
// }

// export default HomeStyleProductCard



// =========================

"use client"

import { memo, useCallback } from "react"
import { Link } from "react-router-dom"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { useWishlist } from "../context/WishlistContext"
import { useCart } from "../context/CartContext"
import { getImageUrl } from "../utils/imageUtils"

// Memoized status badge component
const StatusBadge = memo(({ status, discount }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Available":
      case "Available Product":
        return "bg-emerald-500 text-white"
      case "Stock Out":
      case "Out of Stock":
        return "bg-red-500 text-white"
      case "Pre-Order":
        return "bg-amber-500 text-white"
      default:
        return "bg-gray-400 text-white"
    }
  }

  return (
    <div className="absolute top-2 left-2 flex flex-col gap-1">
      <span className={`${getStatusStyle(status)} px-2 py-0.5 rounded-full text-[10px] font-medium shadow-sm`}>
        {status}
      </span>
      {discount && (
        <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm">
          {discount}
        </span>
      )}
    </div>
  )
})

// Memoized rating component
const RatingStars = memo(({ rating, numReviews }) => (
  <div className="flex items-center gap-1">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
    <span className="text-[11px] text-gray-400">({numReviews})</span>
  </div>
))

// Placeholder SVG as data URI
const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E"

const HomeStyleProductCard = memo(({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  // Memoized calculations
  const discount = product.discount && Number(product.discount) > 0 ? `${product.discount}%` : null
  const isAvailable = product.stockStatus === "Available" || product.stockStatus === "Available Product" || (!product.stockStatus && product.countInStock > 0)
  const stockStatus = isAvailable ? "Available" : (product.stockStatus || (product.countInStock > 0 ? "Available" : "Out of Stock"))
  
  const basePrice = Number(product.price) || 0
  const offerPrice = Number(product.offerPrice) || 0
  const hasValidOffer = offerPrice > 0 && basePrice > 0 && offerPrice < basePrice
  const priceToShow = hasValidOffer ? offerPrice : (basePrice > 0 ? basePrice : offerPrice)
  
  const rating = Number(product.rating) || 0
  const numReviews = Number(product.numReviews) || 0
  const productUrl = `/product/${encodeURIComponent(product.slug || product._id)}`
  const inWishlist = isInWishlist(product._id)

  // Memoized handlers
  const handleWishlistClick = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    inWishlist ? removeFromWishlist(product._id) : addToWishlist(product)
  }, [inWishlist, product, addToWishlist, removeFromWishlist])

  const handleAddToCart = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (stockStatus !== "Out of Stock") {
      addToCart(product)
    }
  }, [product, stockStatus, addToCart])

  const handleImageError = useCallback((e) => {
    e.target.src = PLACEHOLDER_IMAGE
  }, [])

  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-[380px]">
      {/* Image Container */}
      <div className="relative h-[180px] bg-gray-50 overflow-hidden">
        <Link to={productUrl} className="block w-full h-full">
          <img
            src={getImageUrl(product) || PLACEHOLDER_IMAGE}
            alt={product.name}
            className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
            loading="lazy"
          />
        </Link>
        
        {/* Status & Discount Badges */}
        <StatusBadge status={stockStatus} discount={discount} />
        
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            inWishlist 
              ? "bg-red-50 text-red-500" 
              : "bg-white/80 text-gray-400 hover:bg-red-50 hover:text-red-500"
          } shadow-sm backdrop-blur-sm`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={16} className={inWishlist ? "fill-current" : ""} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-3 flex flex-col">
        {/* Category */}
        {product.category?.name && (
          <span className="text-[11px] text-blue-500 font-medium uppercase tracking-wide mb-1">
            {product.category.name}
          </span>
        )}

        {/* Product Name */}
        <Link to={productUrl}>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-blue-500 transition-colors leading-snug mb-2 min-h-[40px]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <RatingStars rating={rating} numReviews={numReviews} />

        {/* Price Section */}
        <div className="mt-auto pt-2">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg font-bold text-blue-500">
              {priceToShow.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              <span className="text-sm font-semibold ml-0.5">AED</span>
            </span>
            {hasValidOffer && (
              <span className="text-xs text-gray-400 line-through">
                {basePrice.toLocaleString(undefined, { minimumFractionDigits: 2 })} AED
              </span>
            )}
          </div>
          <span className="text-[10px] text-gray-400">Inclusive of VAT</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={stockStatus === "Out of Stock"}
          className={`mt-3 w-full py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 ${
            stockStatus === "Out of Stock"
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow-md active:scale-[0.98]"
          }`}
        >
          <ShoppingCart size={16} />
          {stockStatus === "Out of Stock" ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
})

HomeStyleProductCard.displayName = "HomeStyleProductCard"
StatusBadge.displayName = "StatusBadge"
RatingStars.displayName = "RatingStars"

export default HomeStyleProductCard
