"use client"

import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { 
  Trash2, Minus, Plus, ShoppingBag, Package, X, Percent, Gift, Shield,
  ShoppingCart, Sparkles, Truck, Tag, ArrowRight, Check, ChevronRight,
  CreditCard, Lock, BadgePercent, Clock
} from "lucide-react"
import { useEffect, useState, useMemo } from "react"
import axios from "axios"
import { getFullImageUrl } from "../utils/imageUtils"

import config from "../config/config"

const Cart = () => {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    removeBundleFromCart,
    updateQuantity,
    getGroupedCartItems,
    deliveryOptions,
    setDeliveryOptions,
    selectedDelivery,
    setSelectedDelivery,
    tax,
    setTax,
    coupon,
    setCoupon,
    couponDiscount,
    setCouponDiscount,
  } = useCart()

  const [couponInput, setCouponInput] = useState("")
  const [couponLoading, setCouponLoading] = useState(false)
  const [couponError, setCouponError] = useState("")
  
  // Coupon modal states
  const [showCouponsModal, setShowCouponsModal] = useState(false)
  const [publicCoupons, setPublicCoupons] = useState([])
  const [loadingCoupons, setLoadingCoupons] = useState(false)
  const [couponModalError, setCouponModalError] = useState(null)
  const [couponCopied, setCouponCopied] = useState(null)

  // Add debugging
  useEffect(() => {
    console.log('Cart component - cartItems updated:', cartItems)
    console.log('Cart component - cartTotal:', cartTotal)
  }, [cartItems, cartTotal])

  const { grouped, standaloneItems } = getGroupedCartItems()

  // Filter out protection items from cart display
  const protectionItems = cartItems.filter(item => item.isProtection)
  const regularCartItems = cartItems.filter(item => !item.isProtection)
  
  // Filter protection items from standalone items
  const filteredStandaloneItems = standaloneItems.filter(item => !item.isProtection)

  // Add debugging for grouped items
  useEffect(() => {
    console.log('Cart component - grouped items:', grouped)
    console.log('Cart component - standalone items:', standaloneItems)
    console.log('Cart component - bundle groups keys:', Object.keys(grouped))
    console.log('Cart component - protection items:', protectionItems)
  }, [grouped, standaloneItems, protectionItems])

  useEffect(() => {
    // Fetch delivery options
    const fetchDeliveryOptions = async () => {
      try {
        const { data } = await axios.get(`${config.API_URL}/api/delivery-charges`)
        setDeliveryOptions(data)
        if (!selectedDelivery && data.length > 0) {
          setSelectedDelivery(data[0])
        }
      } catch (err) {
        console.error('Error fetching delivery options:', err)
      }
    }
    // Fetch tax
    const fetchTax = async () => {
      try {
        const { data } = await axios.get(`${config.API_URL}/api/tax`)
        // Use first active tax
        if (data && data.length > 0) setTax(data[0])
      } catch (err) {
        console.error('Error fetching tax:', err)
      }
    }
    fetchDeliveryOptions()
    fetchTax()
  }, [])

  useEffect(() => {
    if (cartItems.length > 0) {
      // Push view cart event to data layer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'view_cart',
        'ecommerce': {
          'currency': 'AED',
          'value': cartTotal,
          'items': cartItems.map(item => ({
            'item_id': item._id,
            'item_name': item.name,
            'item_category': item.parentCategory?.name || item.category?.name || 'Uncategorized',
            'item_brand': item.brand?.name || 'Unknown',
            'price': item.price,
            'quantity': item.quantity
          }))
        }
      });
      
      console.log('View cart tracked, items:', cartItems.length);
    }
  }, [cartItems, cartTotal]);

  const handleQuantityChange = (productId, newQuantity, bundleId = null) => {
    updateQuantity(productId, newQuantity, bundleId)
  }

  // UPDATED: Function to remove single item from bundle - Now removes entire bundle
  const removeItemFromBundle = (itemId, bundleId) => {
    // Remove the entire bundle when any item is removed
    removeBundleFromCart(bundleId)
  }

  // Delivery charge (free if cartTotal > 500)
  const deliveryCharge = selectedDelivery ? (cartTotal > 500 ? 0 : selectedDelivery.charge) : 0

  // Tax is included in prices, no separate calculation needed
  const taxAmount = 0

  // Coupon logic
  const handleApplyCoupon = async () => {
    setCouponLoading(true)
    setCouponError("")
    try {
      // Filter out protection items for coupon validation (only validate actual products)
      const cartApiItems = cartItems
        .filter(item => !item.isProtection)
        .map(item => ({ product: item._id, qty: item.quantity }))
      const { data } = await axios.post(`${config.API_URL}/api/coupons/validate`, {
        code: couponInput,
        cartItems: cartApiItems,
      })
      setCoupon(data.coupon)
      setCouponDiscount(data.discountAmount)
      setCouponError("")
    } catch (err) {
      setCoupon(null)
      setCouponDiscount(0)
      setCouponError(err.response?.data?.message || "Invalid coupon")
    } finally {
      setCouponLoading(false)
    }
  }

  // Coupon modal functions
  const COUPON_COLORS = [
    {
      main: "bg-gradient-to-r from-yellow-100 to-yellow-200",
      stub: "bg-yellow-300",
      border: "border-yellow-400",
      text: "text-yellow-800",
      barcode: "bg-yellow-50",
    },
    {
      main: "bg-gradient-to-r from-blue-100 to-blue-200",
      stub: "bg-blue-300",
      border: "border-blue-400",
      text: "text-blue-800",
      barcode: "bg-blue-50",
    },
    {
      main: "bg-gradient-to-r from-green-100 to-green-200",
      stub: "bg-green-300",
      border: "border-green-400",
      text: "text-green-800",
      barcode: "bg-green-50",
    },
    {
      main: "bg-gradient-to-r from-purple-100 to-purple-200",
      stub: "bg-purple-300",
      border: "border-purple-400",
      text: "text-purple-800",
      barcode: "bg-purple-50",
    },
  ]

  const handleOpenCouponsModal = async () => {
    console.log('Opening coupons modal...')
    setShowCouponsModal(true)
    setLoadingCoupons(true)
    setCouponModalError(null)

    try {
      console.log('Fetching coupons from:', `${config.API_URL}/api/coupons`)
      const response = await axios.get(`${config.API_URL}/api/coupons`)
      console.log('Coupons response:', response.data)
      setPublicCoupons(response.data)
    } catch (error) {
      console.error("Error fetching coupons:", error)
      setCouponModalError("Failed to load coupons")
    } finally {
      setLoadingCoupons(false)
    }
  }

  const handleCloseCouponsModal = () => {
    setShowCouponsModal(false)
    setCouponCopied(null)
  }

  const handleCopyCoupon = (couponCode, couponId) => {
    navigator.clipboard.writeText(couponCode)
    setCouponCopied(couponId)
    setTimeout(() => setCouponCopied(null), 2000)
  }

  const formatPrice = (price) => {
    return `AED ${Number(price).toLocaleString(undefined, { minimumFractionDigits: 2 })}`
  }

  // FIXED: Proper pricing calculation for bundle items
  const getItemPrice = (item) => {
    // If it's a bundle item with bundle price, use that
    if (item.isBundleItem && item.bundlePrice) {
      return item.bundlePrice
    }
    // If it has bundle discount, apply 25% discount
    if (item.bundleDiscount && item.originalPrice) {
      return item.originalPrice * 0.75 // 25% discount
    }
    // Otherwise use offer price or regular price
    return item.offerPrice && item.offerPrice > 0 ? item.offerPrice : item.price
  }

  // FIXED: Calculate actual item total with proper pricing
  const getItemTotal = (item) => {
    const itemPrice = getItemPrice(item)
    return itemPrice * item.quantity
  }

  // FIXED: Helper function to get pricing details for an item
  const getItemPricingDetails = (item) => {
    const originalPrice = Number(item.originalPrice || item.basePrice || item.price) || 0
    const currentPrice = getItemPrice(item)
    
    const savings = originalPrice > currentPrice ? originalPrice - currentPrice : 0
    const discountPercentage = savings > 0 ? Math.round((savings / originalPrice) * 100) : 0
    
    return {
      basePrice: originalPrice,
      currentPrice: currentPrice,
      savings,
      discountPercentage,
      hasDiscount: savings > 0,
      isBundleDiscount: item.bundleDiscount || false
    }
  }

  // FIXED: Calculate cart totals properly (excluding protection items)
  const calculateCartTotals = useMemo(() => {
    let totalBasePrice = 0
    let totalCurrentPrice = 0
    let totalSavings = 0
    
    regularCartItems.forEach(item => {
      const pricingDetails = getItemPricingDetails(item)
      totalBasePrice += pricingDetails.basePrice * item.quantity
      totalCurrentPrice += pricingDetails.currentPrice * item.quantity
      totalSavings += pricingDetails.savings * item.quantity
    })
    
    return {
      totalBasePrice,
      totalCurrentPrice,
      totalSavings
    }
  }, [regularCartItems])

  // FIXED: Calculate bundle totals properly
  const calculateBundleTotals = (bundleItems) => {
    let bundleBaseTotal = 0
    let bundleCurrentTotal = 0
    let bundleSavings = 0
    
    bundleItems.forEach(item => {
      const pricingDetails = getItemPricingDetails(item)
      bundleBaseTotal += pricingDetails.basePrice * item.quantity
      bundleCurrentTotal += pricingDetails.currentPrice * item.quantity
      bundleSavings += pricingDetails.savings * item.quantity
    })
    
    return {
      total: bundleCurrentTotal,
      savings: bundleSavings,
      baseTotal: bundleBaseTotal
    }
  }

  const cartTotals = calculateCartTotals
  
  // Calculate protection items total
  const protectionTotal = protectionItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  
  const totalWithDeliveryTaxCoupon = cartTotals.totalCurrentPrice + protectionTotal + deliveryCharge + taxAmount - couponDiscount

  // Render individual item component
  const renderItem = (item, isInBundle = false, bundleId = null) => {
    const pricingDetails = getItemPricingDetails(item)
    const itemTotal = getItemTotal(item)
    
    return (
      <li key={`${item._id}-${bundleId || 'standalone'}`} className="group">
        {/* Mobile Card */}
        <div className="block sm:hidden p-4">
          <div className="flex gap-4">
            {/* Product Image */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <div className="w-full h-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <img 
                  src={getFullImageUrl(item.image) || "/placeholder.svg"} 
                  alt={item.name} 
                  className="w-full h-full object-contain p-2" 
                />
              </div>
              {pricingDetails.hasDiscount && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow">
                  -{pricingDetails.discountPercentage}%
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                {item.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{item.brand?.name || 'N/A'}</p>
              
              {item.selectedColorData && (
                <div className="flex items-center gap-1.5 mb-1">
                  <span 
                    className="w-3 h-3 rounded-full border border-gray-200" 
                    style={{backgroundColor: item.selectedColorData.color?.toLowerCase() || '#9333ea'}}
                  ></span>
                  <span className="text-xs text-gray-600">{item.selectedColorData.color}</span>
                </div>
              )}
              
              {item.selectedDosData && (
                <p className="text-xs text-blue-600 mb-1">💻 {item.selectedDosData.dosType}</p>
              )}
              
              {isInBundle && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                  <Package size={10} />
                  Bundle Item {item.bundleDiscount && "(25% OFF)"}
                </span>
              )}
            </div>
          </div>

          {/* Price & Actions Row */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            {/* Quantity */}
            <div className="flex items-center bg-gray-100 rounded-lg">
              <button
                onClick={() => handleQuantityChange(item._id, item.quantity - 1, bundleId)}
                className="p-2 text-gray-600 hover:text-blue-600 disabled:opacity-40"
                disabled={item.quantity === 1}
              >
                <Minus size={14} />
              </button>
              <span className="px-3 text-sm font-semibold">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item._id, item.quantity + 1, bundleId)}
                className="p-2 text-gray-600 hover:text-blue-600"
              >
                <Plus size={14} />
              </button>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">{formatPrice(itemTotal)}</p>
              {pricingDetails.hasDiscount && (
                <p className="text-xs text-gray-400 line-through">{formatPrice(pricingDetails.basePrice * item.quantity)}</p>
              )}
            </div>

            {/* Delete */}
            <button
              onClick={() => isInBundle ? removeItemFromBundle(item._id, bundleId) : removeFromCart(item._id)}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        {/* Desktop Card */}
        <div className="hidden sm:block p-5 hover:bg-gray-50/50 transition-colors">
          <div className="flex gap-6">
            {/* Product Image */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={getFullImageUrl(item.image) || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                />
              </div>
              {pricingDetails.hasDiscount && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  -{pricingDetails.discountPercentage}%
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.brand?.name || 'N/A'}</p>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    {item.selectedColorData && (
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 rounded-full">
                        <span 
                          className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm" 
                          style={{backgroundColor: item.selectedColorData.color?.toLowerCase() || '#9333ea'}}
                        ></span>
                        <span className="text-xs font-medium text-gray-700">{item.selectedColorData.color}</span>
                      </div>
                    )}
                    
                    {item.selectedDosData && (
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        💻 {item.selectedDosData.dosType}
                      </span>
                    )}
                    
                    {isInBundle && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                        <Package size={12} />
                        Bundle {item.bundleDiscount && "• 25% OFF"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => isInBundle ? removeItemFromBundle(item._id, bundleId) : removeFromCart(item._id)}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  title={isInBundle ? "Remove bundle" : "Remove item"}
                >
                  <Trash2 size={18} />
                </button>
              </div>
              
              {/* Price, Quantity & Total Row */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                {/* Unit Price */}
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Unit Price</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-900">{formatPrice(pricingDetails.currentPrice)}</span>
                    {pricingDetails.hasDiscount && (
                      <span className="text-xs text-gray-400 line-through">{formatPrice(pricingDetails.basePrice)}</span>
                    )}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <p className="text-xs text-gray-500 mb-0.5 text-center">Quantity</p>
                  <div className="flex items-center bg-gray-100 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity - 1, bundleId)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-200 rounded-l-lg transition-colors disabled:opacity-40"
                      disabled={item.quantity === 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 text-sm font-bold">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item._id, item.quantity + 1, bundleId)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-200 rounded-r-lg transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-0.5">Total</p>
                  <p className="text-lg font-bold text-gray-900">{formatPrice(itemTotal)}</p>
                  {pricingDetails.hasDiscount && (
                    <p className="text-xs text-green-600 font-medium">
                      Save {formatPrice(pricingDetails.savings * item.quantity)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
        <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/20">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Shopping Cart</h1>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={handleOpenCouponsModal}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Gift size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden xs:inline sm:hidden lg:inline">Available</span> Coupons
                </button>
                <Link 
                  to="/" 
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 backdrop-blur hover:bg-white/20 text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all border border-white/20"
                >
                  <Sparkles size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden xs:inline">Continue</span> Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-16 sm:py-24">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Sparkles size={20} />
              Start Shopping
              <ArrowRight size={20} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Cart Items Column */}
            <div className="xl:col-span-2 space-y-6">
              {/* Free Shipping Progress */}
              {cartTotals.totalCurrentPrice < 500 && cartTotals.totalCurrentPrice > 0 && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Truck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        Add {formatPrice(500 - cartTotals.totalCurrentPrice)} more for FREE shipping!
                      </p>
                      <p className="text-xs text-gray-500">Free express delivery on orders over AED 500</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((cartTotals.totalCurrentPrice / 500) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {cartTotals.totalCurrentPrice >= 500 && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-800">🎉 You qualify for FREE shipping!</p>
                      <p className="text-xs text-green-600">Enjoy free express delivery on this order</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Bundles Section */}
              {Object.values(grouped).map((bundle) => {
                const bundleTotals = calculateBundleTotals(bundle.items)
                
                return (
                  <div key={bundle.bundleId} className="bg-white rounded-2xl shadow-sm border border-blue-200 overflow-hidden">
                    {/* Bundle Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-blue-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Package className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Frequently Bought Together</h3>
                            <p className="text-xs text-blue-600">
                              Save {formatPrice(bundleTotals.savings)} on this bundle
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeBundleFromCart(bundle.bundleId)}
                          className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <Trash2 size={14} />
                          Remove Bundle
                        </button>
                      </div>
                    </div>

                    {/* Bundle Items */}
                    <ul className="divide-y divide-gray-100">
                      {bundle.items.map((item) => renderItem(item, true, bundle.bundleId))}
                    </ul>

                    {/* Bundle Footer */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Bundle Total:</span>
                        <div className="text-right">
                          <span className="text-lg font-bold text-gray-900">{formatPrice(bundleTotals.total)}</span>
                          {bundleTotals.savings > 0 && (
                            <span className="ml-2 text-sm text-green-600 font-medium">
                              (Save {formatPrice(bundleTotals.savings)})
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Standalone Items */}
              {filteredStandaloneItems.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {Object.keys(grouped).length > 0 && (
                    <div className="px-6 py-4 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <ShoppingBag size={18} className="text-gray-400" />
                        Individual Items
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full ml-2">
                          {filteredStandaloneItems.length}
                        </span>
                      </h3>
                    </div>
                  )}
                  <ul className="divide-y divide-gray-100">
                    {filteredStandaloneItems.map((item) => renderItem(item, false, null))}
                  </ul>
                </div>
              )}
            </div>

            {/* Order Summary Column */}
            <div className="xl:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-4">
                {/* Summary Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <CreditCard size={20} className="text-gray-400" />
                    Order Summary
                  </h2>
                </div>

                <div className="p-6 space-y-4">
                  {/* Price Breakdown */}
                  {cartTotals.totalSavings > 0 && (
                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <div className="flex items-center gap-2 mb-3">
                        <BadgePercent size={18} className="text-green-600" />
                        <span className="text-sm font-semibold text-green-800">Your Savings</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Original Price</span>
                          <span className="text-gray-400 line-through">{formatPrice(cartTotals.totalBasePrice)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Discounted Price</span>
                          <span className="text-gray-900 font-medium">{formatPrice(cartTotals.totalCurrentPrice)}</span>
                        </div>
                        <div className="flex justify-between text-sm pt-2 border-t border-green-200">
                          <span className="text-green-700 font-semibold">Total Saved</span>
                          <span className="text-green-700 font-bold">-{formatPrice(cartTotals.totalSavings)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Subtotal */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">{formatPrice(cartTotals.totalCurrentPrice)}</span>
                  </div>

                  {/* Delivery */}
                  {cartTotals.totalCurrentPrice <= 500 && deliveryOptions.length > 0 && (
                    <div className="py-3 border-b border-gray-100">
                      <label className="text-sm text-gray-600 mb-2 block">Delivery Option</label>
                      <select
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        value={selectedDelivery?._id || ""}
                        onChange={e => {
                          const found = deliveryOptions.find(opt => opt._id === e.target.value)
                          setSelectedDelivery(found)
                        }}
                      >
                        {deliveryOptions.map(opt => (
                          <option key={opt._id} value={opt._id}>
                            {opt.name} ({formatPrice(opt.charge)}) - {opt.deliveryTime}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Truck size={16} />
                      Shipping
                    </span>
                    <span className={`font-semibold ${deliveryCharge === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                      {deliveryCharge === 0 ? 'FREE' : formatPrice(deliveryCharge)}
                    </span>
                  </div>

                  {/* Protection Plans */}
                  {protectionItems.length > 0 && (
                    <div className="py-3 border-b border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield size={16} className="text-blue-600" />
                        <span className="text-sm font-semibold text-gray-900">Protection Plans</span>
                      </div>
                      <div className="space-y-2">
                        {protectionItems.map((item) => (
                          <div key={item._id} className="flex items-center justify-between bg-blue-50 p-3 rounded-xl">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate">{item.protectionData?.name || item.name}</p>
                              <p className="text-[10px] text-gray-500">{item.protectionData?.duration}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-gray-900">{formatPrice(item.price)}</span>
                              <button
                                onClick={() => removeFromCart(item._id)}
                                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* VAT Note */}
                  <div className="flex justify-between items-center py-2 text-sm">
                    <span className="text-gray-500">VAT Included</span>
                    <Check size={16} className="text-green-500" />
                  </div>

                  {/* Coupon */}
                  <div className="py-3 border-t border-gray-100">
                    <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Tag size={14} />
                      Coupon Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter code"
                        value={coupon ? coupon.code : couponInput}
                        onChange={e => setCouponInput(e.target.value)}
                        disabled={!!coupon}
                      />
                      {!coupon ? (
                        <button
                          className="px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium disabled:opacity-50 transition-colors"
                          onClick={handleApplyCoupon}
                          disabled={couponLoading || !couponInput}
                        >
                          {couponLoading ? "..." : "Apply"}
                        </button>
                      ) : (
                        <button
                          className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-medium transition-colors"
                          onClick={() => {
                            setCoupon(null);
                            setCouponDiscount(0);
                            setCouponInput("");
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    {couponError && <p className="text-red-500 text-xs mt-2">{couponError}</p>}
                    {coupon && (
                      <div className="flex justify-between items-center mt-3 p-3 bg-green-50 rounded-xl border border-green-100">
                        <span className="text-sm text-green-700 font-medium">Coupon: {coupon.code}</span>
                        <span className="text-sm text-green-700 font-bold">-{formatPrice(couponDiscount)}</span>
                      </div>
                    )}
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t-2 border-dashed border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-blue-600">{formatPrice(totalWithDeliveryTaxCoupon)}</span>
                    </div>

                    {/* Terms */}
                    <label className="flex items-start gap-3 text-sm text-gray-600 mb-4 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500" 
                        defaultChecked 
                      />
                      <span>
                        I agree to the{' '}
                        <Link to="/terms" className="text-blue-600 hover:underline">Terms of Use</Link>
                        {' '}&{' '}
                        <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                      </span>
                    </label>

                    {/* Checkout Button */}
                    <Link
                      to="/checkout"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <Lock size={18} />
                      Secure Checkout
                      <ChevronRight size={18} />
                    </Link>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Lock size={12} />
                        <span>Secure</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Shield size={12} />
                        <span>Protected</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Truck size={12} />
                        <span>Fast Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Coupons Modal */}
      {showCouponsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl relative animate-fadeIn">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-amber-400 px-6 py-5 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Available Coupons</h2>
                    <p className="text-yellow-100 text-sm">Save more on your purchase</p>
                  </div>
                </div>
                <button
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center text-white transition-colors"
                  onClick={handleCloseCouponsModal}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              {loadingCoupons ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-12 h-12 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500">Loading coupons...</p>
                </div>
              ) : couponModalError ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-red-600 font-medium">{couponModalError}</p>
                </div>
              ) : publicCoupons.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Tag className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">No coupons available at the moment.</p>
                  <p className="text-sm text-gray-400 mt-2">Check back later for new offers!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {publicCoupons.map((coupon, idx) => {
                    console.log('Rendering coupon:', coupon);
                    const color = COUPON_COLORS[idx % COUPON_COLORS.length]
                    const categories =
                      coupon.categories && coupon.categories.length > 0
                        ? coupon.categories.map((cat) => cat.name || cat).join(", ")
                        : "All Categories"
                    return (
                      <div key={coupon._id || idx} className="relative">
                        {/* Modern Coupon Card */}
                        <div className={`relative overflow-hidden rounded-2xl ${color.main} ${color.border} border-2 shadow-sm hover:shadow-md transition-all`}>
                          {/* Decorative circles for ticket effect */}
                          <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 ${color.border}`}></div>
                          <div className={`absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 ${color.border}`}></div>

                          <div className="flex flex-col sm:flex-row">
                            {/* Left Section - Discount Value */}
                            <div className={`${color.stub} px-6 py-4 sm:py-6 flex flex-col items-center justify-center sm:min-w-[140px]`}>
                              <span className="text-[10px] font-bold text-gray-700 tracking-widest mb-1">DISCOUNT</span>
                              <span className={`text-2xl sm:text-3xl font-bold ${color.text} flex items-center`}>
                                {coupon.discountType === "percentage" && <Percent className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />}
                                {coupon.discountType === "percentage"
                                  ? `${coupon.discountValue}%`
                                  : `AED ${coupon.discountValue}`}
                              </span>
                              <span className="text-[10px] text-gray-600 mt-1">OFF</span>
                            </div>

                            {/* Right Section - Details */}
                            <div className="flex-1 p-4 sm:p-6 border-l-2 border-dashed border-gray-300/50">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-600 mb-2">{coupon.description}</p>
                                  
                                  {/* Coupon Code */}
                                  <div className="flex items-center gap-2 mb-3">
                                    <span className={`inline-block bg-white border-2 ${color.border} rounded-lg px-4 py-2 font-mono text-sm font-bold ${color.text} tracking-widest`}>
                                      {coupon.code}
                                    </span>
                                    <button
                                      className={`px-4 py-2 ${color.stub} hover:brightness-95 text-gray-800 rounded-lg text-sm font-semibold transition-all`}
                                      onClick={() => handleCopyCoupon(coupon.code, coupon._id)}
                                    >
                                      {couponCopied === coupon._id ? (
                                        <span className="flex items-center gap-1">
                                          <Check size={14} />
                                          Copied!
                                        </span>
                                      ) : "Copy"}
                                    </button>
                                  </div>

                                  {/* Meta Info */}
                                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                    <span className="bg-white/50 px-2 py-1 rounded-full">
                                      Min: AED {coupon.minOrderAmount || 0}
                                    </span>
                                    <span className="bg-white/50 px-2 py-1 rounded-full flex items-center gap-1">
                                      <Clock size={10} />
                                      Valid until {new Date(coupon.validUntil).toLocaleDateString()}
                                    </span>
                                    <span className="bg-white/50 px-2 py-1 rounded-full">
                                      {categories}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart