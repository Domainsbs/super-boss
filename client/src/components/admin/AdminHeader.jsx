"use client"

import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"
import { 
  LogOut, 
  User, 
  ChevronDown, 
  Search, 
  Bell, 
  MessageSquare,
  Menu,
  Settings,
  HelpCircle
} from "lucide-react"

const AdminHeader = () => {
  const { admin, adminLogout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [showDropdown, setShowDropdown] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    adminLogout()
    navigate("/superboss-admin/login")
  }

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname
    if (path === "/admin/dashboard") return "Dashboard"
    if (path.includes("/admin/orders")) return "Orders"
    if (path.includes("/admin/products")) return "Products"
    if (path.includes("/admin/users")) return "Users"
    if (path.includes("/admin/categories")) return "Categories"
    if (path.includes("/admin/brands")) return "Brands"
    if (path.includes("/admin/reviews")) return "Reviews"
    if (path.includes("/admin/blogs")) return "Blogs"
    if (path.includes("/admin/banners")) return "Banners"
    if (path.includes("/admin/coupons")) return "Coupons"
    if (path.includes("/admin/settings")) return "Settings"
    return "Admin Panel"
  }

  // Mock notifications
  const notifications = [
    { id: 1, title: "New Order #2431", message: "A new order has been placed", time: "2 min ago", unread: true },
    { id: 2, title: "Low Stock Alert", message: "Product XYZ is running low", time: "1 hour ago", unread: true },
    { id: 3, title: "Review Pending", message: "5 new reviews need approval", time: "3 hours ago", unread: false },
  ]

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header className="h-20 flex items-center justify-between px-6 ml-64 bg-gradient-to-r from-emerald-800 to-emerald-900 sticky top-0 z-40">
      {/* Left Section - Page Title */}
      <div className="flex items-center gap-4">
        <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
          <h2 className="text-xl font-semibold text-white">{getPageTitle()}</h2>
        </div>
      </div>

      {/* Center Section - Search Bar */}
      {/* <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
          />
        </div>
      </div> */}

      {/* Right Section - Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative">
          {/* <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          >
            <Bell className="w-5 h-5 text-white" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                {unreadCount}
              </span>
            )}
          </button> */}

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
              <div className="px-4 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <h3 className="font-semibold">Notifications</h3>
                <p className="text-xs text-emerald-100">{unreadCount} unread notifications</p>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                      notif.unread ? "bg-emerald-50/50" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {notif.unread && (
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                      )}
                      <div className={notif.unread ? "" : "ml-5"}>
                        <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{notif.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 bg-gray-50 text-center">
                <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Messages */}
        {/* <button className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
          <MessageSquare className="w-5 h-5 text-white" />
        </button> */}

        {/* Admin User Info */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 px-4 py-2 bg-white rounded-full hover:shadow-lg transition-all duration-200"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
              <User className="w-5 h-5 text-emerald-900" />
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-semibold text-gray-900">{admin?.name || "Admin User"}</p>
              <p className="text-xs text-emerald-600 font-medium">Super Admin</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
          </button>

          {/* Profile Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
              <div className="px-4 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-emerald-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{admin?.name || "Admin User"}</p>
                    <p className="text-xs text-emerald-100">{admin?.email || "admin@bigboss.com"}</p>
                  </div>
                </div>
              </div>
              
              <div className="py-2">
                <button
                  onClick={() => navigate("/admin/settings")}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span className="text-sm">Settings</span>
                </button>
                <button
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span className="text-sm">Help & Support</span>
                </button>
              </div>

              <div className="border-t border-gray-100 py-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors lg:hidden">
          <Menu className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Click outside to close dropdowns */}
      {(showDropdown || showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowDropdown(false)
            setShowNotifications(false)
          }}
        />
      )}
    </header>
  )
}

export default AdminHeader
