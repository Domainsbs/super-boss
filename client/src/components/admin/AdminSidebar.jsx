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
  LogOut,
  Heart,
  CreditCard,
  Gift,
  Mail,
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
    coupons: false,
    reviews: false,
    stockAdjustment: false,
  })

  // Auto-open dropdowns based on current route
  useEffect(() => {
    const path = location.pathname
    const newOpenDropdowns = { ...openDropdowns }

    if (
      path.includes("/admin/products") ||
      path.includes("/admin/add-product") ||
      path.includes("/admin/categories") ||
      path.includes("/admin/add-category") ||
      path.includes("/admin/trash-categories") ||
      path.includes("/admin/brands") ||
      path.includes("/admin/add-brand") ||
      path.includes("/admin/volumes") ||
      path.includes("/admin/add-volume") ||
      path.includes("/admin/warranty") ||
      path.includes("/admin/add-warranty") ||
      path.includes("/admin/colors") ||
      path.includes("/admin/add-color") ||
      path.includes("/admin/units") ||
      path.includes("/admin/add-unit") ||
      path.includes("/admin/tax") ||
      path.includes("/admin/add-tax") ||
      path.includes("/admin/sizes") ||
      path.includes("/admin/add-size") ||
      path.includes("/admin/subcategories") ||
      path.includes("/admin/add-subcategory")
    ) {
      newOpenDropdowns.productSystem = true
    }

    if (
      path.includes("/admin/orders") ||
      path.includes("/admin/orders/new") ||
      path.includes("/admin/orders/online") ||
      path.includes("/admin/orders/received") ||
      path.includes("/admin/orders/confirmed") ||
      path.includes("/admin/orders/processing") ||
      path.includes("/admin/orders/ready-for-shipment") ||
      path.includes("/admin/orders/on-the-way") ||
      path.includes("/admin/orders/delivered") ||
      path.includes("/admin/orders/on-hold") ||
      path.includes("/admin/orders/cancelled") ||
      path.includes("/admin/orders/deleted") ||
      path.includes("/admin/orders/create")
    ) {
      newOpenDropdowns.orders = true
    }

    if (
      path.includes("/admin/blogs") ||
      path.includes("/admin/add-blog") ||
      path.includes("/admin/blog-topics") ||
      path.includes("/admin/add-blog-topic") ||
      path.includes("/admin/blog-categories") ||
      path.includes("/admin/add-blog-category") ||
      path.includes("/admin/blog-rating")
    ) {
      newOpenDropdowns.blogs = true
    }

    if (path.includes("/admin/coupons")) {
      newOpenDropdowns.coupons = true
    }

    if (path.includes("/admin/reviews")) {
      newOpenDropdowns.reviews = true
    }

    if (path.includes("/admin/stock-adjustment")) {
      newOpenDropdowns.stockAdjustment = true
    }

    if (path.includes("/admin/products") || path.includes("/admin/add-product")) {
      newOpenDropdowns.products = true
    }
    if (
      path.includes("/admin/categories") ||
      path.includes("/admin/add-category") ||
      path.includes("/admin/trash-categories")
    ) {
      newOpenDropdowns.categories = true
    }
    if (path.includes("/admin/brands") || path.includes("/admin/add-brand")) {
      newOpenDropdowns.brands = true
    }
    if (path.includes("/admin/volumes") || path.includes("/admin/add-volume")) {
      newOpenDropdowns.volumes = true
    }
    if (path.includes("/admin/warranty") || path.includes("/admin/add-warranty")) {
      newOpenDropdowns.warranty = true
    }
    if (path.includes("/admin/colors") || path.includes("/admin/add-color")) {
      newOpenDropdowns.colors = true
    }
    if (path.includes("/admin/units") || path.includes("/admin/add-unit")) {
      newOpenDropdowns.units = true
    }
    if (path.includes("/admin/tax") || path.includes("/admin/add-tax")) {
      newOpenDropdowns.tax = true
    }
    if (path.includes("/admin/sizes") || path.includes("/admin/add-size")) {
      newOpenDropdowns.sizes = true
    }
    if (path.includes("/admin/subcategories") || path.includes("/admin/add-subcategory")) {
      newOpenDropdowns.subcategories = true
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
    return items?.some(item => {
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
      path: "/admin/dashboard",
    },
    {
      title: "Orders",
      icon: ShoppingCart,
      dropdown: "orders",
      items: [
        { title: "Create Order", path: "/admin/orders/create" },
        { title: "New Orders", path: "/admin/orders/new" },
        { title: "Confirmed", path: "/admin/orders/confirmed" },
        { title: "Processing", path: "/admin/orders/processing" },
        { title: "Ready for Shipment", path: "/admin/orders/ready-for-shipment" },
        { title: "On the Way", path: "/admin/orders/on-the-way" },
        { title: "Delivered", path: "/admin/orders/delivered" },
        { title: "On Hold", path: "/admin/orders/on-hold" },
        { title: "Cancelled", path: "/admin/orders/cancelled" },
        { title: "Deleted", path: "/admin/orders/deleted" },
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
          section: "products",
          items: [
            { title: "List Products", path: "/admin/products" },
            { title: "Add Product", path: "/admin/products/add" },
            { title: "Add Bulk Products", path: "/admin/products/bulk-add" },
          ],
        },
        {
          title: "Categories",
          icon: Tag,
          dropdown: "categories",
          section: "categories",
          items: [
            { title: "List Categories", path: "/admin/categories" },
            { title: "Add Category", path: "/admin/categories/add" },
            { title: "Trash Categories", path: "/admin/categories/trash" },
          ],
        },
        {
          title: "Sub Categories",
          icon: Tag,
          dropdown: "subcategories",
          section: "subcategories",
          items: [
            { title: "List Sub Categories", path: "/admin/subcategories" },
            { title: "Add Sub Category", path: "/admin/subcategories/add" },
          ],
        },
        {
          title: "Brands",
          icon: Tag,
          dropdown: "brands",
          section: "brands",
          items: [
            { title: "List Brands", path: "/admin/brands" },
            { title: "Add Brand", path: "/admin/brands/add" },
          ],
        },
        {
          title: "Volumes",
          icon: Box,
          dropdown: "volumes",
          section: "volumes",
          items: [
            { title: "List Volumes", path: "/admin/volumes" },
            { title: "Add Volume", path: "/admin/volumes/add" },
          ],
        },
        {
          title: "Warranty",
          icon: Shield,
          dropdown: "warranty",
          section: "warranty",
          items: [
            { title: "List Warranty", path: "/admin/warranty" },
            { title: "Add Warranty", path: "/admin/warranty/add" },
          ],
        },
        {
          title: "Colors",
          icon: Palette,
          dropdown: "colors",
          section: "colors",
          items: [
            { title: "List Colors", path: "/admin/colors" },
            { title: "Add Color", path: "/admin/colors/add" },
          ],
        },
        {
          title: "Units",
          icon: Ruler,
          dropdown: "units",
          section: "units",
          items: [
            { title: "List Units", path: "/admin/units" },
            { title: "Add Unit", path: "/admin/units/add" },
          ],
        },
        {
          title: "Tax",
          icon: Calculator,
          dropdown: "tax",
          section: "tax",
          items: [
            { title: "List Tax", path: "/admin/tax" },
            { title: "Add Tax", path: "/admin/tax/add" },
          ],
        },
        {
          title: "Sizes",
          icon: Ruler,
          dropdown: "sizes",
          section: "sizes",
          items: [
            { title: "List Sizes", path: "/admin/sizes" },
            { title: "Add Size", path: "/admin/sizes/add" },
          ],
        },
      ],
    },
    {
      title: "Users",
      icon: Users,
      path: "/admin/users",
    },
    {
      title: "Reviews",
      icon: Star,
      dropdown: "reviews",
      items: [
        { title: "All Reviews", path: "/admin/reviews" },
        { title: "Pending Reviews", path: "/admin/reviews/pending" },
        { title: "Approved Reviews", path: "/admin/reviews/approved" },
        { title: "Rejected Reviews", path: "/admin/reviews/rejected" },
      ],
    },
    {
      title: "Stock Adjustment",
      icon: TrendingUp,
      dropdown: "stockAdjustment",
      items: [
        { title: "Price Adjustment", path: "/admin/stock-adjustment/price-adjustment" },
        { title: "Reports", path: "/admin/stock-adjustment/reports" },
      ],
    },
    {
      title: "Delivery Charges",
      icon: Truck,
      dropdown: "deliveryCharges",
      items: [
        { title: "List Delivery Charges", path: "/admin/delivery-charges" },
        { title: "Add Delivery Charge", path: "/admin/delivery-charges/add" },
      ],
    },
    {
      title: "Request Callbacks",
      icon: Phone,
      path: "/admin/request-callbacks",
    },
    {
      title: "Blogs",
      icon: BookOpen,
      dropdown: "blogs",
      items: [
        { title: "Blogs", path: "/admin/blogs" },
        { title: "Add Blog", path: "/admin/blogs/add" },
        { title: "Blog Categories", path: "/admin/blogs/categories" },
        { title: "Add Blog Category", path: "/admin/blogs/categories/add" },
        { title: "Blog Topics", path: "/admin/blogs/topics" },
        { title: "Add Blog Topic", path: "/admin/blogs/topics/add" },
        { title: "Blog Rating", path: "/admin/blogs/rating" },
      ],
    },
    {
      title: "Banners",
      icon: ImageIcon,
      path: "/admin/banners",
    },
    {
      title: "Coupons",
      icon: Percent,
      dropdown: "coupons",
      items: [{ title: "All Coupons", path: "/admin/coupons/all" }],
    },
    {
      title: "Email Templates",
      icon: Mail,
      path: "/admin/email-templates",
    },
    {
      title: "Newsletter",
      icon: Users,
      path: "/admin/newsletter-subscribers",
    },
    // {
    //   title: "Settings",
    //   icon: Settings,
    //   path: "/admin/settings",
    // },
  ]

  const renderMenuItem = (item, level = 0) => {
    const paddingLeft = level === 0 ? "pl-5" : level === 1 ? "pl-8" : "pl-12"

    // Special case: Dropdown with only one item (e.g., Coupons)
    if (item.dropdown && item.items && item.items.length === 1) {
      const subItem = item.items[0]
      return (
        <Link
          key={item.title}
          to={subItem.path}
          className={`flex items-center gap-3 ${paddingLeft} py-3 rounded-lg mx-3 transition-all duration-200 ${
            isActive(subItem.path)
              ? "bg-yellow-400 text-emerald-900 font-semibold shadow-md"
              : "text-white/90 hover:bg-white/10"
          }`}
        >
          {item.icon && <item.icon size={20} />}
          <span className="text-sm">{item.title}</span>
        </Link>
      )
    }

    if (item.dropdown) {
      const dropdownActive = isDropdownActive(item.items)
      return (
        <div key={item.title}>
          <button
            onClick={(e) => toggleDropdown(item.dropdown, e)}
            className={`w-full flex items-center justify-between ${paddingLeft} pr-4 py-3 rounded-lg mx-3 transition-all duration-200 ${
              dropdownActive
                ? "bg-white/10 text-yellow-400"
                : "text-white/90 hover:bg-white/10"
            }`}
            style={{ width: "calc(100% - 24px)" }}
          >
            <div className="flex items-center gap-3">
              {item.icon && <item.icon size={20} />}
              <span className="text-sm font-medium">{item.title}</span>
            </div>
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${openDropdowns[item.dropdown] ? "rotate-180" : ""}`}
            />
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${openDropdowns[item.dropdown] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="py-1">
              {item.items.map((subItem) => renderMenuItem(subItem, level + 1))}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <Link
          key={item.title}
          to={item.path}
          className={`flex items-center gap-3 ${paddingLeft} py-2.5 rounded-lg mx-3 transition-all duration-200 ${
            isActive(item.path)
              ? "bg-yellow-400 text-emerald-900 font-semibold shadow-md"
              : "text-white/80 hover:bg-white/10 hover:text-white"
          }`}
        >
          {level === 0 && item.icon && <item.icon size={20} />}
          <span className={`${level === 0 ? "text-sm font-medium" : "text-sm"}`}>{item.title}</span>
        </Link>
      )
    }
  }

  return (
    <div className="w-64 bg-gradient-to-b from-emerald-800 via-emerald-900 to-emerald-950 h-screen fixed left-0 top-0 z-50 shadow-2xl flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10 flex-shrink-0">
        <Link to="/admin/dashboard" className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <Package className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Big Boss</h1>
            <p className="text-xs text-emerald-300">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* Navigation Menu - Scrollable */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-1 admin-scrollbar">
        {menuItems.map((item, index) => (
          <div key={index}>
            {item.dropdown ? (
              renderMenuItem(item)
            ) : (
              <Link
                to={item.path}
                className={`flex items-center gap-3 pl-5 py-3 rounded-lg mx-3 transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-yellow-400 text-emerald-900 font-semibold shadow-md"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <item.icon size={20} />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Logout Button at Bottom - Fixed */}
      <div className="flex-shrink-0 p-4 border-t border-white/10 bg-emerald-950/80">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 hover:text-red-200 transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Log out</span>
        </button>
      </div>
    </div>
  )
}

export default AdminSidebar
