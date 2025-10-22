import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { createSlug, generateShopURL } from "../utils/urlUtils";
import { useState } from "react";

const ProductGrid = ({ products }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      ...product,
      quantity: 1,
      selectedColor: product.colors?.[0] || null,
      selectedSize: product.sizes?.[0] || null,
    });

    // Show feedback
    setAddedToCart(prev => ({ ...prev, [product._id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product._id]: false }));
    }, 2000);
  };

  const handleWishlistToggle = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  const calculateDiscountPercentage = (original, sale) => {
    if (!sale || sale >= original) return 0;
    return Math.round(((original - sale) / original) * 100);
  };

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {products.map((product) => {
        const discountPercent = calculateDiscountPercentage(
          product.price,
          product.salePrice
        );
        const inWishlist = isInWishlist(product._id);
        const justAdded = addedToCart[product._id];

        return (
          <Link
            key={product._id}
            to={generateShopURL({
              category: product.category,
              subCategory: product.subCategory,
              productName: product.name,
              productId: product._id,
            })}
            className="card group relative bg-white rounded-lg overflow-hidden hover:shadow-blue transition-shadow duration-300"
          >
            {/* Discount Badge */}
            {discountPercent > 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                -{discountPercent}%
              </div>
            )}

            {/* Wishlist Button */}
            <button
              onClick={(e) => handleWishlistToggle(product, e)}
              className={`absolute top-2 right-2 z-10 p-2 rounded-full transition-colors ${
                inWishlist
                  ? "bg-red-500 text-white"
                  : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                size={18}
                className={inWishlist ? "fill-current" : ""}
              />
            </button>

            {/* Product Image */}
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={
                  product.images?.[0]?.url ||
                  product.images?.[0] ||
                  "/placeholder.png"
                }
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              {/* Brand */}
              {product.brand && (
                <p className="text-xs text-gray-500 mb-1">
                  {typeof product.brand === 'object' ? product.brand.name : product.brand}
                </p>
              )}

              {/* Product Name */}
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-primary-600 transition-colors">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(product.averageRating || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  ({product.totalReviews || 0})
                </span>
              </div>

              {/* Price */}
              <div className="mb-3">
                {product.salePrice && product.salePrice < product.price ? (
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary-600">
                      SAR {product.salePrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      SAR {product.price.toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-lg font-bold text-gray-900">
                    SAR {product.price.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={(e) => handleAddToCart(product, e)}
                disabled={product.stock === 0 || justAdded}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  product.stock === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : justAdded
                    ? "bg-green-500 text-white"
                    : "btn-primary"
                }`}
              >
                {product.stock === 0 ? (
                  "Out of Stock"
                ) : justAdded ? (
                  <>
                    <ShoppingCart size={16} />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
