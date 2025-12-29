import { useWishlist } from "../context/WishlistContext"
import { Link } from "react-router-dom"
import { Trash2, Heart, ShoppingBag, ArrowRight, Sparkles } from "lucide-react"
import { getFullImageUrl } from "../utils/imageUtils"

const Wishlist = () => {
  const { wishlist, removeFromWishlist, loading } = useWishlist()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading your wishlist...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <Heart className="w-8 h-8 text-red-400 fill-red-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">My Wishlist</h1>
                <p className="text-blue-100 mt-1">
                  {Array.isArray(wishlist) && wishlist.length > 0 
                    ? `You have ${wishlist.length} ${wishlist.length === 1 ? 'item' : 'items'} saved`
                    : "Save items you love for later"
                  }
                </p>
              </div>
            </div>
            
            {Array.isArray(wishlist) && wishlist.length > 0 && (
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                Continue Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {Array.isArray(wishlist) && wishlist.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-16 h-16 text-blue-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Start adding items you love to your wishlist by clicking the heart icon on any product
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
            >
              <Sparkles className="w-5 h-5" />
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          /* Wishlist Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {(Array.isArray(wishlist) ? wishlist : []).map(product => (
              <div 
                key={product._id} 
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-50">
                  <Link to={`/product/${encodeURIComponent(product.slug || product._id)}`}>
                    <img
                      src={getFullImageUrl(product.image) || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(product._id)}
                    className="absolute top-3 right-3 p-2.5 bg-white rounded-xl shadow-lg hover:bg-red-50 transition-all duration-200 group/btn"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={18} className="text-gray-400 group-hover/btn:text-red-500 transition-colors" />
                  </button>

                  {/* Wishlist Badge */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                    <Heart size={12} className="fill-white" />
                    Saved
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <Link to={`/product/${encodeURIComponent(product.slug || product._id)}`} className="block">
                    {/* Brand */}
                    {(product.brand?.name || product.brand) && (
                      <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                        {product.brand?.name || product.brand}
                      </div>
                    )}

                    {/* Product Name */}
                    <h3 className="font-semibold text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.category && (
                        <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                          {product.category?.name || product.category}
                        </span>
                      )}
                      {product.subCategory && (
                        <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg font-medium">
                          {product.subCategory?.name || product.subCategory}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="text-xl font-bold text-gray-900">
                        {product.price ? (
                          <>
                            <span className="text-sm font-normal text-gray-500">AED</span>{" "}
                            {product.price.toLocaleString()}
                          </>
                        ) : (
                          <span className="text-sm text-gray-500">Price not available</span>
                        )}
                      </div>
                      <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA for non-empty wishlist */}
      {Array.isArray(wishlist) && wishlist.length > 0 && (
        <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 mb-2">Need help with your order?</p>
            <p className="text-white">
              Contact us at <a href="mailto:Support@seenalif.com" className="text-blue-400 hover:text-blue-300">Support@seenalif.com</a> or call <a href="tel:+97143258808" className="text-blue-400 hover:text-blue-300">+971 4 3258808</a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wishlist
