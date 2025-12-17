"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Settings,
  Tag,
  ImageIcon,
  Percent,
  ChevronDown,
  ChevronRight,
  Palette,
  Shield,
  Calculator,
  Ruler,
  Box,
  Layers,
  BookOpen,
  Truck,
  Phone,
  Star,
  TrendingUp,
  Cog,
  ShoppingBag,
  RefreshCw,
  LogOut,
  Mail,
  Gift,
  Home,
} from "lucide-react"

const AdminSidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { adminLogout } = useAuth()
  const [openDropdowns, setOpenDropdowns] = useState({
    productSystem: false,
    products: false,
    categories: false,
    brands: false,
    volumes: false,
    warranty: false,
    colors: false,
    units: false,
    tax: false,
    sizes: false,
    orders: false,
    blogs: false,
    subcategories: false,
    subcategories2: false,
    subcategories3: false,
    subcategories4: false,
    coupons: false,
    reviews: false,
    stockAdjustment: false,
    seoSettings: false,
    deliveryCharges: false,
  })

  // Auto-open dropdowns based on current route
  useEffect(() => {
    const path = location.pathname
    const newOpenDropdowns = { ...openDropdowns }

    if (
      path.includes("/superboss-admin/products") ||
      path.includes("/superboss-admin/categories") ||
      path.includes("/superboss-admin/brands") ||
      path.includes("/superboss-admin/volumes") ||
      path.includes("/superboss-admin/warranty") ||
      path.includes("/superboss-admin/colors") ||
      path.includes("/superboss-admin/units") ||
      path.includes("/superboss-admin/tax") ||
      path.includes("/superboss-admin/sizes") ||
      path.includes("/superboss-admin/subcategories")
    ) {
      newOpenDropdowns.productSystem = true
    }

    if (path.includes("/superboss-admin/orders")) {
      newOpenDropdowns.orders = true
    }

    if (path.includes("/superboss-admin/blogs")) {
      newOpenDropdowns.blogs = true
    }

    if (path.includes("/superboss-admin/reviews")) {
      newOpenDropdowns.reviews = true
    }

    if (path.includes("/superboss-admin/stock-adjustment")) {
      newOpenDropdowns.stockAdjustment = true
    }

    if (path.includes("/superboss-admin/delivery-charges")) {
      newOpenDropdowns.deliveryCharges = true
    }

    setOpenDropdowns(newOpenDropdowns)
  }, [location.pathname])

  const handleLogout = () => {
    adminLogout()
    navigate("/superboss-admin/login")
  }

  const toggleDropdown = (dropdown, e) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }))
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const isDropdownActive = (items) => {
    return items?.some((item) => {
      if (item.items) {
        return isDropdownActive(item.items)
      }
      return location.pathname === item.path
    })
  }

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/superboss-admin/dashboard",
    },
    {
      title: "Orders",
      icon: ShoppingCart,
      dropdown: "orders",
      items: [
        { title: "Create Order", path: "/superboss-admin/orders/create" },
        { title: "New Orders", path: "/superboss-admin/orders/new" },
        { title: "Confirmed", path: "/superboss-admin/orders/confirmed" },
        { title: "Processing", path: "/superboss-admin/orders/processing" },
        { title: "Ready for Shipment", path: "/superboss-admin/orders/ready-for-shipment" },
        { title: "On the Way", path: "/superboss-admin/orders/on-the-way" },
        { title: "Delivered", path: "/superboss-admin/orders/delivered" },
        { title: "On Hold", path: "/superboss-admin/orders/on-hold" },
        { title: "Cancelled", path: "/superboss-admin/orders/cancelled" },
        { title: "Deleted", path: "/superboss-admin/orders/deleted" },
      ],
    },
    {
      title: "Product System",
      icon: Layers,
      dropdown: "productSystem",
      items: [
        {
          title: "Products",
          icon: Package,
          dropdown: "products",
          items: [
            { title: "List Products", path: "/superboss-admin/products" },
            { title: "Add Bulk Products", path: "/superboss-admin/products/bulk-add" },
          ],
        },
        {
          title: "Categories",
          icon: Tag,
          dropdown: "categories",
          items: [
            { title: "List Categories", path: "/superboss-admin/categories" },
            { title: "Add Category", path: "/superboss-admin/categories/add" },
            { title: "Trash Categories", path: "/superboss-admin/categories/trash" },
            { title: "Category Slider", path: "/superboss-admin/categories/slider" },
          ],
        },
        {
          title: "Sub Categories",
          icon: Tag,
          dropdown: "subcategories",
          items: [
            { title: "List Sub Categories", path: "/superboss-admin/subcategories" },
            { title: "Add Sub Category", path: "/superboss-admin/subcategories/add" },
            { title: "Trash Sub Categories", path: "/superboss-admin/subcategories/trash" },
          ],
        },
        {
          title: "Sub Categories 2",
          icon: Tag,
          dropdown: "subcategories2",
          items: [
            { title: "List Sub Categories 2", path: "/superboss-admin/subcategories-2" },
            { title: "Add Sub Category 2", path: "/superboss-admin/subcategories-2/add" },
          ],
        },
        {
          title: "Sub Categories 3",
          icon: Tag,
          dropdown: "subcategories3",
          items: [
            { title: "List Sub Categories 3", path: "/superboss-admin/subcategories-3" },
            { title: "Add Sub Category 3", path: "/superboss-admin/subcategories-3/add" },
          ],
        },
        {
          title: "Sub Categories 4",
          icon: Tag,
          dropdown: "subcategories4",
          items: [
            { title: "List Sub Categories 4", path: "/superboss-admin/subcategories-4" },
            { title: "Add Sub Category 4", path: "/superboss-admin/subcategories-4/add" },
          ],
        },
        {
          title: "Brands",
          icon: Tag,
          dropdown: "brands",
          items: [
            { title: "List Brands", path: "/superboss-admin/brands" },
            { title: "Add Brand", path: "/superboss-admin/brands/add" },
          ],
        },
        {
          title: "Volumes",
          icon: Box,
          dropdown: "volumes",
          items: [
            { title: "List Volumes", path: "/superboss-admin/volumes" },
            { title: "Add Volume", path: "/superboss-admin/volumes/add" },
          ],
        },
        {
          title: "Warranty",
          icon: Shield,
          dropdown: "warranty",
          items: [
            { title: "List Warranty", path: "/superboss-admin/warranty" },
            { title: "Add Warranty", path: "/superboss-admin/warranty/add" },
          ],
        },
        {
          title: "Colors",
          icon: Palette,
          dropdown: "colors",
          items: [
            { title: "List Colors", path: "/superboss-admin/colors" },
            { title: "Add Color", path: "/superboss-admin/colors/add" },
          ],
        },
        {
          title: "Units",
          icon: Ruler,
          dropdown: "units",
          items: [
            { title: "List Units", path: "/superboss-admin/units" },
            { title: "Add Unit", path: "/superboss-admin/units/add" },
          ],
        },
        {
          title: "Tax",
          icon: Calculator,
          dropdown: "tax",
          items: [
            { title: "List Tax", path: "/superboss-admin/tax" },
            { title: "Add Tax", path: "/superboss-admin/tax/add" },
          ],
        },
        {
          title: "Sizes",
          icon: Ruler,
          dropdown: "sizes",
          items: [
            { title: "List Sizes", path: "/superboss-admin/sizes" },
            { title: "Add Size", path: "/superboss-admin/sizes/add" },
          ],
        },
      ],
    },
    {
      title: "Users",
      icon: Users,
      path: "/superboss-admin/users",
    },
    {
      title: "Reviews",
      icon: Star,
      dropdown: "reviews",
      items: [
        { title: "All Reviews", path: "/superboss-admin/reviews" },
        { title: "Pending Reviews", path: "/superboss-admin/reviews/pending" },
        { title: "Approved Reviews", path: "/superboss-admin/reviews/approved" },
        { title: "Rejected Reviews", path: "/superboss-admin/reviews/rejected" },
      ],
    },
    {
      title: "Stock Adjustment",
      icon: TrendingUp,
      dropdown: "stockAdjustment",
      items: [
        { title: "Price Adjustment", path: "/superboss-admin/stock-adjustment/price-adjustment" },
        { title: "Reports", path: "/superboss-admin/stock-adjustment/reports" },
      ],
    },
    {
      title: "Delivery Charges",
      icon: Truck,
      dropdown: "deliveryCharges",
      items: [
        { title: "List Charges", path: "/superboss-admin/delivery-charges" },
        { title: "Add Charge", path: "/superboss-admin/delivery-charges/add" },
      ],
    },
    {
      title: "Request Callbacks",
      icon: Phone,
      path: "/superboss-admin/request-callbacks",
    },
    {
      title: "Blogs",
      icon: BookOpen,
      dropdown: "blogs",
      items: [
        { title: "All Blogs", path: "/superboss-admin/blogs" },
        { title: "Add Blog", path: "/superboss-admin/blogs/add" },
        { title: "Blog Categories", path: "/superboss-admin/blogs/categories" },
        { title: "Add Blog Category", path: "/superboss-admin/blogs/categories/add" },
        { title: "Blog Topics", path: "/superboss-admin/blogs/topics" },
        { title: "Add Blog Topic", path: "/superboss-admin/blogs/topics/add" },
        { title: "Blog Rating", path: "/superboss-admin/blogs/rating" },
      ],
    },
    {
      title: "Banners",
      icon: ImageIcon,
      path: "/superboss-admin/banners",
    },
    {
      title: "Home Sections",
      icon: Home,
      path: "/superboss-admin/home-sections",
    },
    {
      title: "Offer Pages",
      icon: Gift,
      path: "/superboss-admin/offer-pages",
    },
    {
      title: "Coupons",
      icon: Percent,
      path: "/superboss-admin/coupons/all",
    },
    {
      title: "SEO Settings",
      icon: Cog,
      path: "/superboss-admin/seo-settings/redirects",
    },
    {
      title: "Email Templates",
      icon: Mail,
      path: "/superboss-admin/email-templates",
    },
    {
      title: "Newsletter",
      icon: Users,
      path: "/superboss-admin/newsletter-subscribers",
    },
    {
      title: "Reset Cache",
      icon: RefreshCw,
      path: "/superboss-admin/reset-cache",
    },
  ]

  const renderMenuItem = (item, level = 0) => {
    const isItemActive = item.path ? isActive(item.path) : isDropdownActive(item.items)

    if (item.dropdown) {
      return (
        <div key={item.title}>
          <button
            onClick={(e) => toggleDropdown(item.dropdown, e)}
            className={`w-full flex items-center justify-between px-4 py-3 mx-2 rounded-xl transition-all duration-200 ${
              isItemActive
                ? "bg-[#22ba85] text-white"
                : "text-white/80 hover:bg-white/10"
            }`}
            style={{ width: "calc(100% - 16px)" }}
          >
            <div className="flex items-center gap-3">
              {item.icon && <item.icon size={20} />}
              <span className="text-sm font-medium">{item.title}</span>
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                openDropdowns[item.dropdown] ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openDropdowns[item.dropdown] ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-4 mt-1 space-y-1 border-l-2 border-white/20 pl-2">
              {item.items.map((subItem) =>
                subItem.dropdown ? (
                  renderNestedDropdown(subItem, level + 1)
                ) : (
                  <Link
                    key={subItem.title}
                    to={subItem.path}
                    className={`flex items-center gap-2 px-4 py-2 mx-2 rounded-lg text-sm transition-all duration-200 ${
                      isActive(subItem.path)
                        ? "bg-[#22ba85] text-white font-medium"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )
    }

    return (
      <Link
        key={item.title}
        to={item.path}
        className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-all duration-200 ${
          isActive(item.path)
            ? "bg-[#22ba85] text-white font-semibold shadow-lg"
            : "text-white/80 hover:bg-white/10"
        }`}
      >
        {item.icon && <item.icon size={20} />}
        <span className="text-sm font-medium">{item.title}</span>
      </Link>
    )
  }

  const renderNestedDropdown = (item, level) => {
    const isItemActive = isDropdownActive(item.items)

    return (
      <div key={item.title}>
        <button
          onClick={(e) => toggleDropdown(item.dropdown, e)}
          className={`w-full flex items-center justify-between px-4 py-2 mx-2 rounded-lg transition-all duration-200 ${
            isItemActive
              ? "bg-white/20 text-[#22ba85]"
              : "text-white/70 hover:bg-white/10"
          }`}
          style={{ width: "calc(100% - 16px)" }}
        >
          <div className="flex items-center gap-2">
            {item.icon && <item.icon size={16} />}
            <span className="text-sm">{item.title}</span>
          </div>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              openDropdowns[item.dropdown] ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            openDropdowns[item.dropdown] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="ml-4 mt-1 space-y-1">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                to={subItem.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs transition-all duration-200 ${
                  isActive(subItem.path)
                    ? "bg-[#22ba85] text-white font-medium"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{subItem.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-64 bg-gradient-to-b from-emerald-800 via-emerald-900 to-emerald-950 h-screen fixed left-0 top-0 z-50 flex flex-col">
      {/* Logo Section */}
      <div className="p-5 flex-shrink-0">
        <Link to="/superboss-admin/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Big Boss</h1>
            <p className="text-[10px] text-emerald-300">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* Navigation Menu - Scrollable */}
      <nav className="flex-1 overflow-y-auto py-2 space-y-1 admin-scrollbar px-1">
        {menuItems.map((item) => renderMenuItem(item))}
      </nav>

      {/* Logout Button - Fixed at Bottom */}
      <div className="flex-shrink-0 p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white hover:bg-red-500/80 transition-all duration-200"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Log out</span>
        </button>
      </div>
    </div>
  )
}

export default AdminSidebar
