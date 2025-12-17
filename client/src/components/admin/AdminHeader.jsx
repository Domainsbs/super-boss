"use client"

import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"
import { LogOut, User, ChevronDown, Search, Bell, MessageSquare } from "lucide-react"

const AdminHeader = () => {
  const { admin, adminLogout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [showDropdown, setShowDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    adminLogout()
    navigate("/superboss-admin/login")
  }

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname
    if (path === "/superboss-admin/dashboard") return "Dashboard"
    if (path.includes("/orders")) return "Orders"
    if (path.includes("/products")) return "Products"
    if (path.includes("/categories")) return "Categories"
    if (path.includes("/users")) return "Users"
    if (path.includes("/reviews")) return "Reviews"
    if (path.includes("/blogs")) return "Blogs"
    if (path.includes("/banners")) return "Banners"
    if (path.includes("/coupons")) return "Coupons"
    if (path.includes("/settings")) return "Settings"
    return "Admin Panel"
  }

  return (
    <header className="h-16 flex items-center justify-end px-6 ml-64 bg-gradient-to-r from-emerald-800 to-emerald-900 sticky top-0 z-40">
      {/* Left - Search Bar */}
      {/* <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
          />
        </div>
      </div> */}

      {/* Right - Notifications & Profile */}
      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        {/* <button className="relative p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <Bell className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
            3
          </span>
        </button> */}

        {/* Messages */}
        {/* <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <MessageSquare className="w-5 h-5 text-white" />
        </button> */}

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 px-4 py-2 bg-[#22ba85] rounded-full hover:bg-[#1da677] transition-colors"
          >
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{admin?.name || "Admin"}</p>
              <p className="text-xs text-white/80">{admin?.role || "Super Admin"}</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-white transition-transform ${showDropdown ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{admin?.name || "Admin"}</p>
                <p className="text-xs text-gray-500">{admin?.email || "admin@bigboss.com"}</p>
                <p className="text-xs text-emerald-600 font-medium mt-1">{admin?.role || "Super Admin"}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </header>
  )
}

export default AdminHeader
