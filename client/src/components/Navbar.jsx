"use client"

import { useState, useEffect, useRef } from "react"

import config from "../config/config"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { generateShopURL } from "../utils/urlUtils"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  Menu,
  X,
  Home,
  Grid3X3,
  UserCircle,
  HelpCircle,
  Package,
  ChevronDown,
  ChevronRight,
  Truck,
} from "lucide-react"
import axios from "axios"

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const { cartCount } = useCart()
  const { wishlist } = useWishlist()
  const navigate = useNavigate()
  const location = useLocation()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const searchInputRef = useRef(null)
  const searchDropdownRef = useRef(null)
  const mobileSearchInputRef = useRef(null)
  const mobileSearchDropdownRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const profileRef = useRef(null)
  const profileButtonRef = useRef(null)
  const [visibleCategoriesCount, setVisibleCategoriesCount] = useState(8)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const moreDropdownTimeoutRef = useRef(null)
  const [hoveredMoreCategory, setHoveredMoreCategory] = useState(null)
  const moreCategoryTimeoutRef = useRef(null)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [hoveredCategoryInDropdown, setHoveredCategoryInDropdown] = useState(null)
  const categoriesDropdownRef = useRef(null)
  // Tiny in-memory cache to speed up repeated candidate lookups during typing
  const liveSearchCacheRef = useRef(new Map())

  // Fetch categories and subcategories from API
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${config.API_URL}/api/categories`)
      setCategories(Array.isArray(data) ? data.filter((cat) => cat.isActive !== false) : [])
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const fetchSubCategories = async () => {
    try {
      const { data } = await axios.get(`${config.API_URL}/api/subcategories`)
      setSubCategories(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching subcategories:", error)
    }
  }

  const getSubCategoriesForCategory = (categoryId) => {
    return subCategories.filter((sub) => sub.category?._id === categoryId)
  }

  const toggleMobileCategory = (categoryId) => {
    setExpandedMobileCategory(expandedMobileCategory === categoryId ? null : categoryId)
  }

  // Handle "More" dropdown hover with delay to prevent flickering
  const handleMoreDropdownEnter = () => {
    if (moreDropdownTimeoutRef.current) {
      clearTimeout(moreDropdownTimeoutRef.current)
    }
    setIsMoreDropdownOpen(true)
  }

  const handleMoreDropdownLeave = () => {
    moreDropdownTimeoutRef.current = setTimeout(() => {
      setIsMoreDropdownOpen(false)
      setHoveredMoreCategory(null) // Also close any open subcategory dropdown
    }, 150) // Small delay to allow cursor movement to dropdown
  }

  // Handle subcategory dropdown hover within "More" dropdown
  const handleMoreCategoryEnter = (categoryId) => {
    if (moreCategoryTimeoutRef.current) {
      clearTimeout(moreCategoryTimeoutRef.current)
    }
    setHoveredMoreCategory(categoryId)
  }

  const handleMoreCategoryLeave = () => {
    moreCategoryTimeoutRef.current = setTimeout(() => {
      setHoveredMoreCategory(null)
    }, 150) // Small delay to allow cursor movement to subcategory dropdown
  }

  // Function to check if search query matches a product's SKU (or name) exactly
  const findExactProductMatch = async (query) => {
    if (!query || query.trim().length === 0) return null

    const normalized = query.trim().toLowerCase()
    try {
      // 1) Try exact SKU lookup via dedicated endpoint (more reliable than fuzzy search)
      const skuCandidates = Array.from(
        new Set([query.trim(), query.trim().toUpperCase(), query.trim().toLowerCase()]),
      )
      try {
        const skuResp = await axios.post(`${config.API_URL}/api/products/by-skus`, { skus: skuCandidates })
        if (Array.isArray(skuResp.data) && skuResp.data.length > 0) {
          // Prefer exact case-insensitive match if multiple
          const exactSku = skuResp.data.find(
            (p) => p.sku && String(p.sku).trim().toLowerCase() === normalized,
          )
          return exactSku || skuResp.data[0]
        }
      } catch (e) {
        // ignore and fall back to search
      }

      // 2) Fallback to existing search endpoint and scan results
      const { data } = await axios.get(
        `${config.API_URL}/api/products?search=${encodeURIComponent(query.trim())}&limit=50`,
      )

      // First, try exact SKU match (case-insensitive)
      const exactSkuMatch = data.find(
        (product) => product.sku && String(product.sku).trim().toLowerCase() === normalized,
      )
      if (exactSkuMatch) return exactSkuMatch

      // Fallback: exact name match (to preserve prior behavior)
      const exactNameMatch = data.find(
        (product) => product.name && String(product.name).trim().toLowerCase() === normalized,
      )
      return exactNameMatch || null
    } catch (error) {
      console.error("Error finding exact product match:", error)
      return null
    }
  }

  // Instant search effect with progressive fallback (words → characters)
  useEffect(() => {
    const q = searchQuery.trim()
    if (q.length === 0) {
      setSearchResults([])
      setShowSearchDropdown(false)
      setSearchLoading(false)
      return
    }

    let cancelled = false
    setSearchLoading(true)

    // Build candidate queries: full, then drop trailing words, then drop trailing characters
    const buildCandidates = (input) => {
      const unique = new Set()
      const out = []
      const push = (s) => {
        const v = s.trim()
        if (v && !unique.has(v)) {
          unique.add(v)
          out.push(v)
        }
      }

      push(input)
      const words = input.split(/\s+/)
      // Word-prefix candidates (drop last word progressively)
      for (let i = words.length - 1; i >= 1; i--) {
        push(words.slice(0, i).join(" "))
        if (out.length >= 4) break
      }
      // Character-prefix candidates (strategic trims instead of letter-by-letter for speed)
      const base = words[0]
      if (base && base.length > 3) {
        const p70 = base.slice(0, Math.max(3, Math.floor(base.length * 0.7)))
        const p50 = base.slice(0, Math.max(3, Math.floor(base.length * 0.5)))
        push(p70)
        push(p50)
      }
      return out
    }

    const fetchResults = async () => {
      try {
        const candidates = buildCandidates(q)
        for (const cand of candidates) {
          try {
            // 1) Check tiny in-memory cache first
            const cached = liveSearchCacheRef.current.get(cand)
            if (cached) {
              if (!cancelled) {
                if (Array.isArray(cached) && cached.length > 0) {
                  setSearchResults(cached)
                  setShowSearchDropdown(true)
                  return
                }
              }
            }

            // 2) Fallback to API
            const { data } = await axios.get(`${config.API_URL}/api/products?search=${encodeURIComponent(cand)}&limit=5`)
            if (cancelled) return
            // Cache result (including empty) to speed up subsequent key strokes
            liveSearchCacheRef.current.set(cand, Array.isArray(data) ? data : [])
            // Simple cache pruning
            if (liveSearchCacheRef.current.size > 100) {
              liveSearchCacheRef.current.clear()
            }

            if (Array.isArray(data) && data.length > 0) {
              setSearchResults(data)
              setShowSearchDropdown(true)
              return
            }
          } catch (_) {
            // ignore and try next candidate
          }
        }
        // No candidates found
        setSearchResults([])
        setShowSearchDropdown(false)
      } finally {
        if (!cancelled) setSearchLoading(false)
      }
    }

    const timeout = setTimeout(fetchResults, 180)
    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [searchQuery])

  // Hide dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      const clickedInside =
        (searchDropdownRef.current && searchDropdownRef.current.contains(e.target)) ||
        (searchInputRef.current && searchInputRef.current.contains(e.target)) ||
        (mobileSearchDropdownRef.current && mobileSearchDropdownRef.current.contains(e.target)) ||
        (mobileSearchInputRef.current && mobileSearchInputRef.current.contains(e.target))

      if (!clickedInside) {
        setShowSearchDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  useEffect(() => {
    fetchCategories()
    fetchSubCategories()
  }, [])

  // Close categories dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesDropdownRef.current && !categoriesDropdownRef.current.contains(event.target)) {
        setIsCategoriesOpen(false)
        setHoveredCategoryInDropdown(null)
      }
    }

    if (isCategoriesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCategoriesOpen])

  // Responsive categories count based on screen size
  useEffect(() => {
    const updateVisibleCategories = () => {
      const width = window.innerWidth
      if (width >= 1536) {
        // 2xl screens
        setVisibleCategoriesCount(10)
      } else if (width >= 1280) {
        // xl screens
        setVisibleCategoriesCount(8)
      } else if (width >= 1024) {
        // lg screens
        setVisibleCategoriesCount(6)
      } else if (width >= 768) {
        // md screens
        setVisibleCategoriesCount(4)
      } else {
        setVisibleCategoriesCount(8) // mobile - show all in mobile menu
      }
    }

    updateVisibleCategories()
    window.addEventListener("resize", updateVisibleCategories)
    return () => window.removeEventListener("resize", updateVisibleCategories)
  }, [])

  // Close profile dropdown on outside click (desktop only)
  useEffect(() => {
    if (!isProfileOpen) return
    function handleProfileClick(e) {
      // Only run on md+ screens
      if (window.innerWidth < 768) return
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(e.target)
      ) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleProfileClick)
    return () => document.removeEventListener("mousedown", handleProfileClick)
  }, [isProfileOpen])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (moreDropdownTimeoutRef.current) {
        clearTimeout(moreDropdownTimeoutRef.current)
      }
      if (moreCategoryTimeoutRef.current) {
        clearTimeout(moreCategoryTimeoutRef.current)
      }
    }
  }, [])

  // Check if current path is an admin route
  const isAdminRoute = location.pathname.startsWith("/admin")

  // Don't render navbar for admin routes
  if (isAdminRoute) {
    return null
  }

  const handleLogout = () => {
    logout()
    navigate("/")
    setIsProfileOpen(false)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // First, check if the search query matches a product exactly
      const exactMatch = await findExactProductMatch(searchQuery.trim())

      if (exactMatch) {
        // Navigate to product details page
        navigate(`/product/${exactMatch.slug || exactMatch._id}`)
        setShowSearchDropdown(false)
        // Optionally clear search query
        // setSearchQuery("");
      } else {
        // Navigate to shop page with search results
        navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
        setShowSearchDropdown(false)
        // setSearchQuery("") // Optionally clear
      }
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setExpandedMobileCategory(null) // Reset expanded category when menu closes
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setExpandedMobileCategory(null)
  }

  const handleMobileSearchOpen = () => {
    setIsMobileSearchOpen(true)
  }
  const handleMobileSearchClose = () => {
    setIsMobileSearchOpen(false)
  }

  return (
    <>
      {/* Desktop Navbar - Canva Style Purple to Blue Gradient */}
      <header className="hidden md:block bg-white shadow-sm sticky top-0 z-[100]">
        {/* Top Bar: Logo | Search | Sign In | Cart - Purple to Blue Gradient */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between py-4 gap-2">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <div className="text-white font-bold text-2xl">
                  <img src="/bigboss.png" alt="Big Boss Logo" className="h-16 w-auto" />
                </div>
              </Link>
              
              {/* Enhanced Categories Dropdown Button - Moved closer to search */}
              <div className="relative ml-2" ref={categoriesDropdownRef}>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="bg-white text-purple-600 hover:bg-gray-50 rounded-lg px-4 py-2.5 transition-all flex items-center gap-2 shadow-md hover:shadow-lg border border-white/20 font-semibold"
                  aria-label="Categories"
                >
                  <Grid3X3 size={20} strokeWidth={2.5} />
                  <span className="text-sm font-semibold">Categories</span>
                  <ChevronDown size={16} className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>

                  {/* Categories Dropdown Menu - Smart Width & Height */}
                  {isCategoriesOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-lg py-3 px-3 z-[110] border border-gray-200 w-[98vw] max-w-[1200px] max-h-[calc(100vh-120px)] overflow-y-auto categories-scrollbar">
                      <h3 className="text-xs font-bold text-gray-900 mb-2 pb-2 border-b border-gray-200">
                        All Categories
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-2">
                        {categories.map((parentCategory) => {
                          const categorySubCategories = getSubCategoriesForCategory(parentCategory._id)
                          return (
                            <div
                              key={parentCategory._id}
                              className="relative"
                              onMouseEnter={() => setHoveredCategoryInDropdown(parentCategory._id)}
                              onMouseLeave={() => setHoveredCategoryInDropdown(null)}
                            >
                              <Link
                                to={generateShopURL({ parentCategory: parentCategory.name })}
                                className="flex flex-col items-center gap-1.5 p-2 hover:bg-gray-50 rounded-lg transition-all group border border-transparent hover:border-primary-200 hover:shadow-sm"
                                onClick={() => {
                                  setIsCategoriesOpen(false)
                                  setHoveredCategoryInDropdown(null)
                                }}
                              >
                                {parentCategory.image ? (
                                  <div className="w-14 h-14 flex items-center justify-center bg-white rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                                    <img
                                      src={parentCategory.image}
                                      alt={parentCategory.name}
                                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                                    <span className="text-2xl">📦</span>
                                  </div>
                                )}
                                <div className="flex flex-col items-center gap-0.5 w-full">
                                  <span className="text-[11px] font-medium text-gray-700 group-hover:text-primary-600 transition-colors text-center line-clamp-2 leading-tight w-full">
                                    {parentCategory.name}
                                  </span>
                                  {categorySubCategories.length > 0 && (
                                    <span className="text-[9px] text-gray-400 flex items-center gap-0.5">
                                      {categorySubCategories.length} items <ChevronRight size={10} className="text-gray-400" />
                                    </span>
                                  )}
                                </div>
                              </Link>

                              {/* Subcategories Dropdown - appears on hover, smart positioning */}
                              {hoveredCategoryInDropdown === parentCategory._id && categorySubCategories.length > 0 && (
                                <div className="absolute left-full top-0 ml-1 bg-white shadow-2xl rounded-lg py-2 px-2 z-[115] border border-gray-200 w-[300px] max-h-[350px] overflow-y-auto categories-scrollbar">
                                  <h4 className="text-[10px] font-bold text-gray-900 mb-1.5 pb-1 border-b border-gray-200">
                                    {parentCategory.name}
                                  </h4>
                                  <div className="grid grid-cols-2 gap-1.5">
                                    {categorySubCategories.map((subCategory) => (
                                      <Link
                                        key={subCategory._id}
                                        to={generateShopURL({ 
                                          parentCategory: parentCategory.name, 
                                          subcategory: subCategory.name 
                                        })}
                                        className="flex items-center gap-1.5 p-1.5 hover:bg-gray-50 rounded-lg transition-all group"
                                        onClick={() => {
                                          setIsCategoriesOpen(false)
                                          setHoveredCategoryInDropdown(null)
                                        }}
                                      >
                                        {subCategory.image ? (
                                          <div className="w-7 h-7 flex items-center justify-center bg-white rounded overflow-hidden border border-gray-100 flex-shrink-0">
                                            <img
                                              src={subCategory.image}
                                              alt={subCategory.name}
                                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                                            />
                                          </div>
                                        ) : (
                                          <div className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded flex-shrink-0">
                                            <span className="text-xs">📦</span>
                                          </div>
                                        )}
                                        <span className="text-[10px] text-gray-700 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1 leading-tight">
                                          {subCategory.name}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

              {/* Search Bar - Reduced width */}
              <div className="flex-1 max-w-2xl">
                <form onSubmit={handleSearch} className="relative">
                  <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
                    <input
                      type="text"
                      placeholder="Search all of Super Boss"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-5 py-3 outline-none text-sm text-gray-700 placeholder-gray-500"
                      ref={searchInputRef}
                      onFocus={() => {
                        if (searchResults.length > 0) setShowSearchDropdown(true)
                      }}
                    />
                    {searchLoading && (
                      <span className="pr-3">
                        <svg
                          className="animate-spin h-5 w-5 text-purple-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                      </span>
                    )}
                    <button
                      type="submit"
                      className="p-3 hover:bg-gray-50 transition-colors rounded-full"
                      aria-label="Search"
                    >
                      <Search size={22} className="text-gray-600" />
                    </button>
                  </div>

                  {/* Autocomplete Dropdown */}
                  {showSearchDropdown && searchResults.length > 0 && (
                    <div
                      ref={searchDropdownRef}
                      className="absolute left-0 right-0 bg-white border border-gray-200 shadow-lg rounded-lg z-[110] mt-2 max-h-96 overflow-y-auto"
                    >
                      {searchResults.map((product) => (
                        <Link
                          key={product._id}
                          to={`/product/${product.slug || product._id}`}
                          className="flex items-start gap-4 px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
                          onClick={() => setShowSearchDropdown(false)}
                        >
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-16 h-16 object-contain rounded"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 text-sm line-clamp-2">{product.name}</div>
                            <div className="text-xs text-gray-500 line-clamp-2">{product.description}</div>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to={`/shop?search=${encodeURIComponent(searchQuery.trim())}`}
                        className="block text-center text-primary-600 hover:underline py-2 text-sm font-medium"
                        onClick={() => setShowSearchDropdown(false)}
                      >
                        View all results
                      </Link>
                    </div>
                  )}
                </form>
              </div>

              {/* Right Side: Sign In + Cart - iHerb style */}
              <div className="flex items-center gap-3">
                {/* Sign In / Account Button */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors px-3 py-2"
                    ref={profileButtonRef}
                  >
                    <User size={24} />
                    <div className="flex flex-col items-start">
                      <span className="text-sm leading-tight">
                        {isAuthenticated ? 'Hi, ' + (user?.name?.split(' ')[0] || 'Account') : 'Sign In'}
                      </span>
                      {isAuthenticated && (
                        <span className="text-sm font-semibold leading-tight flex items-center">
                          Account <ChevronDown size={14} className="ml-1" />
                        </span>
                      )}
                      {!isAuthenticated && (
                        <span className="text-sm font-semibold leading-tight flex items-center">
                          Create Account <ChevronDown size={14} className="ml-1" />
                        </span>
                      )}
                    </div>
                  </button>

                  {isProfileOpen && (
                    <div
                      ref={profileRef}
                      className="absolute right-0 w-64 py-2 mt-2 bg-white rounded-lg shadow-xl z-[110] border border-gray-200"
                    >
                      {isAuthenticated ? (
                        <>
                          <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                            <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                            <p className="text-xs text-gray-500">{user?.email}</p>
                          </div>
                          <Link
                            to="/profile"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <UserCircle size={18} className="text-gray-600" />
                            My Profile
                          </Link>
                          <Link
                            to="/orders"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Package size={18} className="text-gray-600" />
                            My Orders
                          </Link>
                          <Link
                            to="/track-order"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Truck size={18} className="text-gray-600" />
                            Track Order
                          </Link>
                          <Link
                            to="/wishlist"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Heart size={18} className="text-gray-600" />
                            <div className="flex items-center justify-between flex-1">
                              <span>Wishlist</span>
                              {wishlist.length > 0 && (
                                <span className="bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                  {wishlist.length}
                                </span>
                              )}
                            </div>
                          </Link>
                          <hr className="my-2" />
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="block px-4 py-3 text-sm font-semibold text-primary-600 hover:bg-gray-50"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            Sign In
                          </Link>
                          <Link
                            to="/register"
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            Create Account
                          </Link>
                          <hr className="my-2" />
                          <Link
                            to="/track-order"
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Truck size={18} className="text-gray-600" />
                            Track Order
                          </Link>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Cart - iHerb style with badge */}
                <Link to="/cart" className="relative text-white hover:text-gray-200 transition-colors px-2 py-2">
                  <div className="relative">
                    <ShoppingCart size={32} />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Categories Navigation - HIDDEN (Categories moved to dropdown icon) */}
        <div className="bg-white border-b border-gray-200 hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6 h-16">
              {/* Display limited categories horizontally */}
              {categories.slice(0, visibleCategoriesCount).map((parentCategory, index) => {
                const categorySubCategories = getSubCategoriesForCategory(parentCategory._id)
                const totalVisible = Math.min(categories.length, visibleCategoriesCount)
                // Position dropdown to the right for last 2 categories, left for others
                const isNearEnd = index >= totalVisible - 2
                
                return (
                  <div
                    key={parentCategory._id}
                    className="relative flex-shrink-0"
                    onMouseEnter={() => setHoveredCategory(parentCategory._id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <Link
                      to={generateShopURL({ parentCategory: parentCategory.name })}
                      className="text-gray-700 hover:text-primary-600 font-medium whitespace-nowrap text-sm transition-colors flex items-center gap-1"
                    >
                      {parentCategory.name}
                      {categorySubCategories.length > 0 && (
                        <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </Link>
                    
                    {/* Dropdown for subcategories with images - Smart positioning */}
                    {hoveredCategory === parentCategory._id && categorySubCategories.length > 0 && (
                      <div className={`absolute top-full mt-0 bg-white shadow-2xl rounded-lg py-3 px-4 z-[105] border border-gray-200 min-w-[700px] ${isNearEnd ? 'right-0' : 'left-0'}`}>
                        <h3 className="text-sm font-bold text-gray-900 mb-2 pb-1 border-b border-gray-200">
                          {parentCategory.name}
                        </h3>
                        <div className="grid grid-cols-4 gap-3">
                          {categorySubCategories.map((subCategory) => (
                            <Link
                              key={subCategory._id}
                              to={generateShopURL({ 
                                parentCategory: parentCategory.name, 
                                subcategory: subCategory.name 
                              })}
                              className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
                              onClick={() => setHoveredCategory(null)}
                            >
                              {subCategory.image ? (
                                <div className="w-20 h-20 mb-2 flex items-center justify-center bg-white rounded-lg overflow-hidden border border-gray-100">
                                  <img
                                    src={subCategory.image}
                                    alt={subCategory.name}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                                  />
                                </div>
                              ) : (
                                <div className="w-20 h-20 mb-2 flex items-center justify-center bg-gray-100 rounded-lg">
                                  <span className="text-xl">📦</span>
                                </div>
                              )}
                              <span className="text-xs text-center text-gray-700 group-hover:text-primary-600 font-medium transition-colors duration-200 line-clamp-2">
                                {subCategory.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}

              {/* More dropdown for overflow categories */}
              {categories.length > visibleCategoriesCount && (
                <div className="relative flex-shrink-0">
                  <button 
                    className="text-gray-700 hover:text-primary-600 font-medium whitespace-nowrap text-sm transition-colors flex items-center gap-1"
                    onMouseEnter={handleMoreDropdownEnter}
                    onMouseLeave={handleMoreDropdownLeave}
                  >
                    More
                    <ChevronDown size={16} className="text-gray-400" />
                  </button>
                  
                  {isMoreDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-0 bg-white shadow-xl rounded-lg py-2 min-w-48 z-[105] border border-gray-200"
                      onMouseEnter={handleMoreDropdownEnter}
                      onMouseLeave={handleMoreDropdownLeave}
                    >
                      {categories.slice(visibleCategoriesCount).map((parentCategory) => {
                        const categorySubCategories = getSubCategoriesForCategory(parentCategory._id)
                        return (
                          <div
                            key={parentCategory._id}
                            className="relative"
                            onMouseEnter={() => handleMoreCategoryEnter(parentCategory._id)}
                            onMouseLeave={handleMoreCategoryLeave}
                          >
                            <Link
                              to={generateShopURL({ parentCategory: parentCategory.name })}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                              onClick={() => {
                                setIsMoreDropdownOpen(false)
                                setHoveredMoreCategory(null)
                              }}
                            >
                              <span>{parentCategory.name}</span>
                              {categorySubCategories.length > 0 && (
                                <ChevronRight size={16} className="text-gray-400" />
                              )}
                            </Link>
                            
                            {/* Subcategories dropdown for More items - Always to the left */}
                            {hoveredMoreCategory === parentCategory._id && categorySubCategories.length > 0 && (
                              <div className="absolute right-full top-0 mr-1 bg-white shadow-2xl rounded-lg py-3 px-4 z-[106] border border-gray-200 min-w-[700px]">
                                <h3 className="text-sm font-bold text-gray-900 mb-2 pb-1 border-b border-gray-200">
                                  {parentCategory.name}
                                </h3>
                                <div className="grid grid-cols-4 gap-3">
                                  {categorySubCategories.map((subCategory) => (
                                    <Link
                                      key={subCategory._id}
                                      to={generateShopURL({ 
                                        parentCategory: parentCategory.name, 
                                        subcategory: subCategory.name 
                                      })}
                                      className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
                                      onClick={() => {
                                        setIsMoreDropdownOpen(false)
                                        setHoveredMoreCategory(null)
                                      }}
                                    >
                                      {subCategory.image ? (
                                        <div className="w-20 h-20 mb-2 flex items-center justify-center bg-white rounded-lg overflow-hidden border border-gray-100">
                                          <img
                                            src={subCategory.image}
                                            alt={subCategory.name}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
                                          />
                                        </div>
                                      ) : (
                                        <div className="w-20 h-20 mb-2 flex items-center justify-center bg-gray-100 rounded-lg">
                                          <span className="text-xl">📦</span>
                                        </div>
                                      )}
                                      <span className="text-xs text-center text-gray-700 group-hover:text-primary-600 font-medium transition-colors duration-200 line-clamp-2">
                                        {subCategory.name}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navbar - Shown only on Mobile */}
      <header className="md:hidden bg-white shadow-sm sticky top-0 z-50">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          {/* Hamburger Menu */}
          <button onClick={toggleMobileMenu} className="p-2">
            <Menu size={24} className="text-gray-700" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/bigboss.png" alt="Big Boss Logo" className="h-8" />
          </Link>

          {/* Search Icon */}
          <button className="p-2" onClick={handleMobileSearchOpen} aria-label="Open search">
            <Search size={24} className="text-gray-700" />
          </button>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50">
          <div className="w-full bg-white p-4 shadow-md relative">
            <div className="flex items-center gap-2">
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  if (searchQuery.trim()) {
                    // Check for exact match on mobile too
                    const exactMatch = await findExactProductMatch(searchQuery.trim())

                    if (exactMatch) {
                      navigate(`/product/${exactMatch.slug || exactMatch._id}`)
                    } else {
                      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
                    }

                    handleMobileSearchClose()
                  }
                }}
                className="flex-1 relative"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-lime-500"
                    autoFocus
                    ref={mobileSearchInputRef}
                    onFocus={() => {
                      if (searchResults.length > 0) setShowSearchDropdown(true)
                    }}
                  />
                  {/* Loading spinner */}
                  {searchLoading && (
                    <span className="absolute right-16 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="animate-spin h-5 w-5 text-lime-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                    </span>
                  )}
                  <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
                    <Search size={18} />
                  </button>
                </div>
                {/* Mobile Autocomplete Dropdown */}
                {showSearchDropdown && searchResults.length > 0 && (
                  <div
                    ref={mobileSearchDropdownRef}
                    className="absolute left-0 right-0 bg-white border border-gray-200 shadow-lg rounded z-50 mt-2 max-h-96 overflow-y-auto overflow-x-hidden"
                  >
                    {searchResults.map((product) => (
                      <Link
                        key={product._id}
                        to={`/product/${product.slug || product._id}`}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
                        onClick={() => {
                          setShowSearchDropdown(false)
                          handleMobileSearchClose()
                        }}
                      >
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-12 h-12 object-contain rounded flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-sm break-words">{product.name}</div>
                          <div className="text-xs text-gray-500 break-words line-clamp-2">{product.description}</div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to={`/shop?search=${encodeURIComponent(searchQuery.trim())}`}
                      className="block text-center text-lime-600 hover:underline py-2 text-sm font-medium"
                      onClick={() => {
                        setShowSearchDropdown(false)
                        handleMobileSearchClose()
                      }}
                    >
                      View all results
                    </Link>
                  </div>
                )}
              </form>
              <button onClick={handleMobileSearchClose} className="ml-2 p-2" aria-label="Close search">
                <X size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Side Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu}></div>

          {/* Drawer */}
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 bg-primary-600 text-white">
              <div className="flex items-center">
                <UserCircle size={24} className="text-white mr-2" />
                {isAuthenticated ? (
                  <span className="text-white">{`Hello, ${user?.name || "User"}`}</span>
                ) : (
                  <button
                    onClick={() => {
                      closeMobileMenu()
                      navigate('/login')
                    }}
                    className="text-white font-medium hover:text-white/90 transition-colors"
                  >
                    Hello, <span className="underline">Sign in</span>
                  </button>
                )}
              </div>
              <button onClick={closeMobileMenu} className="p-1">
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-4">
              {/* Quick Actions */}
              <div className="mb-6">
                <Link
                  to="/orders"
                  className="flex items-center py-3 text-gray-700 hover:bg-gray-50 rounded-lg px-2"
                  onClick={closeMobileMenu}
                >
                  <Package size={20} className="mr-3" />
                  <strong>My Orders</strong>
                </Link>
                <Link
                  to="/track-order"
                  className="flex items-center py-3 text-gray-700 hover:bg-gray-50 rounded-lg px-2"
                  onClick={closeMobileMenu}
                >
                  <Truck size={20} className="mr-3" />
                  <strong>Track Order</strong>
                </Link>
                <Link
                  to="/help"
                  className="flex items-center py-3 text-gray-700 hover:bg-gray-50 rounded-lg px-2"
                  onClick={closeMobileMenu}
                >
                  <HelpCircle size={20} className="mr-3" />
                  <strong>Help Center</strong>
                </Link>
              </div>

              {/* Shop by Category */}
              <div>
                <div className="flex items-center justify-between mb-4 bg-primary-600 text-white rounded px-3 py-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-white">
                    <Grid3X3 size={18} className="text-white" />
                    All Category
                  </h3>
                  <Link to="/shop" className="text-sm text-white hover:text-white/90" onClick={closeMobileMenu}>
                    See All
                  </Link>
                </div>

                {/* Dynamic Categories List for Mobile */}
                <div className="space-y-2">
                  {/* All In One */}
                  {/* <Link
                    to="/shop"
                    className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={closeMobileMenu}
                  >
                    <div className="flex items-center">
                      <Grid3X3 size={16} className="mr-3" />
                      <span>All Categories</span>
                    </div>
                    <span className="text-gray-400 text-2xl font-bold">›</span>
                  </Link> */}

                  {/* Dynamic Categories with Click-to-Expand */}
                  {categories.map((parentCategory) => {
                    const categorySubCategories = getSubCategoriesForCategory(parentCategory._id)
                    const isExpanded = expandedMobileCategory === parentCategory._id

                    return (
                      <div key={parentCategory._id}>
                        {/* Parent Category Item */}
            <div className="flex items-center justify-between py-3 px-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                          <Link
                            to={generateShopURL({ parentCategory: parentCategory.name })}
                            className="flex items-center flex-1"
                            onClick={closeMobileMenu}
                          >
              <strong>{parentCategory.name}</strong>
                          </Link>

                          {/* Toggle button for subcategories */}
                          {categorySubCategories.length > 0 ? (
                            <button
                              onClick={() => toggleMobileCategory(parentCategory._id)}
                              aria-label={isExpanded ? "Collapse subcategories" : "Expand subcategories"}
                              aria-expanded={isExpanded}
                              className="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary-600 text-white shadow-sm hover:bg-lime-600 active:scale-95 transition"
                           >
                              {isExpanded ? (
                                <ChevronDown size={20} className="text-white" />
                              ) : (
                                <ChevronRight size={20} className="text-white" />
                              )}
                            </button>
                          ) : (
                            <span className="text-gray-400 text-2xl font-bold">›</span>
                          )}
                        </div>

                        {/* Subcategories - Only show when expanded */}
                        {isExpanded && categorySubCategories.length > 0 && (
          <div className="ml-4 space-y-2 pb-2">
                            {categorySubCategories.map((subCategory) => (
                              <Link
                                key={subCategory._id}
                                to={generateShopURL({
                                  parentCategory: parentCategory.name,
                                  subcategory: subCategory.name,
                                })}
                                className="flex items-center gap-3 py-2 px-2 text-red-600 hover:bg-gray-50 rounded-lg"
                                onClick={closeMobileMenu}
                              >
                                {subCategory.image ? (
                                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                                    <img
                                      src={subCategory.image}
                                      alt={subCategory.name}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg">
                                    <span className="text-lg">📦</span>
                                  </div>
                                )}
            <strong className="text-sm">{subCategory.name}</strong>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex items-center justify-around py-2">
          {/* Home */}
          <Link to="/" className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-lime-500">
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>

          {/* Shop */}
          <Link to="/shop" className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-lime-500">
            <Grid3X3 size={20} />
            <span className="text-xs mt-1">Shop</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-lime-500 relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold hover:text-lime-500">
                {cartCount}
              </span>
            )}
            <span className="text-xs mt-1">Cart</span>
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-lime-500 relative"
            aria-label="Wishlist"
          >
            <Heart size={20} className="" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
            <span className="text-xs mt-1">WishList</span>
          </Link>

          {/* Account */}
          <Link
            to={isAuthenticated ? "/profile" : "/login"}
            className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-lime-500"
          >
            <UserCircle size={20} />
            <span className="text-xs mt-1">Account</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
