import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { User, Mail, Phone, LogOut, Trash2, Shield, Package, Heart, AlertTriangle, ShoppingCart, ChevronRight, Calendar, Award, MapPin } from "lucide-react"
import { useToast } from "../context/ToastContext"
import axios from "axios"
import config from "../config/config"

const API_BASE_URL = `${config.API_URL}/api`

const Profile = () => {
  const { user, logout, token } = useAuth()
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showVerifyModal, setShowVerifyModal] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [isRequestingDelete, setIsRequestingDelete] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const handleRequestDeletion = async () => {
    setIsRequestingDelete(true)
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/request-account-deletion`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      showToast(response.data.message + " (Email may take 5-6 minutes to arrive. Check spam folder if not received.)", "success")
      setShowDeleteModal(false)
      setShowVerifyModal(true)
    } catch (error) {
      showToast(
        error.response?.data?.message || "Failed to send verification code. Please try again.",
        "error"
      )
    } finally {
      setIsRequestingDelete(false)
    }
  }

  const handleVerifyDeletion = async (e) => {
    e.preventDefault()
    
    if (verificationCode.length !== 6) {
      showToast("Please enter a valid 6-digit code", "error")
      return
    }

    setIsDeleting(true)
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/verify-account-deletion`,
        { code: verificationCode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      showToast(response.data.message, "success")
      setTimeout(() => {
        logout()
        navigate("/")
      }, 2000)
    } catch (error) {
      showToast(
        error.response?.data?.message || "Failed to verify code. Please try again.",
        "error"
      )
    } finally {
      setIsDeleting(false)
    }
  }

  const handleCancelDeletion = () => {
    setShowDeleteModal(false)
    setShowVerifyModal(false)
    setVerificationCode("")
  }

  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return "U"
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)
  }

  // Format join date
  const formatDate = (date) => {
    if (!date) return "N/A"
    return new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  const menuItems = [
    { id: "overview", label: "Overview", icon: User },
    { id: "orders", label: "My Orders", icon: Package, action: () => navigate("/orders") },
    { id: "wishlist", label: "Wishlist", icon: Heart, action: () => navigate("/wishlist") },
    { id: "cart", label: "Shopping Cart", icon: ShoppingCart, action: () => navigate("/cart") },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Top Section - Profile Card */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Banner with Pattern */}
            <div className="h-32 sm:h-40 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 relative">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              {/* Floating Shapes */}
              <div className="absolute top-4 right-8 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-8 right-24 w-8 h-8 bg-white/10 rounded-full"></div>
              <div className="absolute top-8 right-40 w-6 h-6 bg-white/10 rounded-full"></div>
            </div>

            {/* Profile Info */}
            <div className="relative px-6 sm:px-8 pb-6">
              {/* Avatar */}
              <div className="absolute -top-12 sm:-top-16 left-6 sm:left-8">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-400 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-xl ring-4 ring-white">
                    {getInitials(user?.name)}
                  </div>
                  {user?.isEmailVerified && (
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Shield size={16} className="text-white" />
                    </div>
                  )}
                </div>
              </div>

              {/* User Details */}
              <div className="pt-14 sm:pt-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">{user?.name}</h1>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-slate-500">
                    <span className="flex items-center gap-1.5 text-sm">
                      <Mail size={14} />
                      {user?.email}
                    </span>
                    {user?.phone && (
                      <span className="flex items-center gap-1.5 text-sm">
                        <Phone size={14} />
                        {user.phone}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    {user?.isEmailVerified && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        <Shield size={12} />
                        Verified
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                      <Award size={12} />
                      {user?.isAdmin ? "Administrator" : "Member"}
                    </span>
                    {user?.createdAt && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                        <Calendar size={12} />
                        Joined {formatDate(user.createdAt)}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-xl transition-all duration-200 font-medium group"
                >
                  <LogOut size={18} className="group-hover:rotate-12 transition-transform" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-4 sticky top-24">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-3">Navigation</h3>
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action || (() => setActiveTab(item.id))}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                      activeTab === item.id && !item.action
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} className={activeTab === item.id && !item.action ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </nav>

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-3">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-3 px-3">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-xl p-4 text-center">
                    <Package size={24} className="mx-auto text-blue-600 mb-2" />
                    <p className="text-xs text-slate-500">Orders</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 text-center">
                    <Heart size={24} className="mx-auto text-pink-500 mb-2" />
                    <p className="text-xs text-slate-500">Wishlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            {/* Account Details Card */}
            <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100">
                <h2 className="text-lg font-semibold text-slate-800">Account Details</h2>
                <p className="text-sm text-slate-500 mt-1">Your personal information and preferences</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="group bg-slate-50 hover:bg-blue-50/50 rounded-xl p-4 transition-colors duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <User size={18} className="text-blue-600" />
                      </div>
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Full Name</span>
                    </div>
                    <p className="text-slate-800 font-semibold pl-13">{user?.name}</p>
                  </div>

                  {/* Email */}
                  <div className="group bg-slate-50 hover:bg-blue-50/50 rounded-xl p-4 transition-colors duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Mail size={18} className="text-blue-600" />
                      </div>
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Email Address</span>
                    </div>
                    <p className="text-slate-800 font-semibold pl-13 break-all">{user?.email}</p>
                  </div>

                  {/* Phone */}
                  <div className="group bg-slate-50 hover:bg-purple-50/50 rounded-xl p-4 transition-colors duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Phone size={18} className="text-purple-600" />
                      </div>
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Phone Number</span>
                    </div>
                    <p className="text-slate-800 font-semibold pl-13">{user?.phone || "Not provided"}</p>
                  </div>

                  {/* Account Type */}
                  <div className="group bg-slate-50 hover:bg-amber-50/50 rounded-xl p-4 transition-colors duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <Award size={18} className="text-amber-600" />
                      </div>
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Account Type</span>
                    </div>
                    <p className="text-slate-800 font-semibold pl-13">{user?.isAdmin ? "Administrator" : "Customer"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden border border-red-100">
              <div className="px-6 py-5 bg-red-50/50 border-b border-red-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <AlertTriangle size={18} className="text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-800">Danger Zone</h2>
                    <p className="text-sm text-slate-500">Irreversible account actions</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-red-50/50 rounded-xl border border-red-100">
                  <div>
                    <h3 className="font-semibold text-slate-800">Delete Account</h3>
                    <p className="text-sm text-slate-500 mt-1">Permanently remove your account and all associated data</p>
                  </div>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-medium whitespace-nowrap"
                  >
                    <Trash2 size={16} />
                    <span>Delete Account</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Delete Account</h3>
                <p className="text-sm text-slate-500">This action is permanent</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-4">
              Are you sure? This will permanently delete:
            </p>
            
            <ul className="space-y-2 mb-5">
              {["All personal data & preferences", "Complete order history", "Wishlist & saved items", "Account access forever"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-amber-800">
                <strong>⚠️ Note:</strong> A 6-digit code will be sent to verify this action.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCancelDeletion}
                className="flex-1 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestDeletion}
                disabled={isRequestingDelete}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-medium disabled:opacity-50"
              >
                {isRequestingDelete ? "Sending..." : "Send Code"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verification Code Modal */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Verify Deletion</h3>
                <p className="text-sm text-slate-500">Enter the code sent to your email</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-4 text-sm">
              We sent a 6-digit code to <strong className="text-slate-800">{user?.email}</strong>
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-5">
              <p className="text-xs text-blue-700">
                📧 Email may take 5-6 minutes. Check spam folder if needed.
              </p>
            </div>

            <form onSubmit={handleVerifyDeletion}>
              <div className="mb-5">
                <input
                  type="text"
                  maxLength={6}
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ""))}
                  className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-center text-2xl tracking-[0.5em] font-bold text-slate-800"
                  placeholder="••••••"
                  required
                />
                <p className="text-xs text-slate-400 mt-2 text-center">Code expires in 10 minutes</p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleCancelDeletion}
                  className="flex-1 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isDeleting || verificationCode.length !== 6}
                  className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-medium disabled:opacity-50"
                >
                  {isDeleting ? "Deleting..." : "Confirm Delete"}
                </button>
              </div>
            </form>

            <button
              onClick={handleRequestDeletion}
              disabled={isRequestingDelete}
              className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
            >
              {isRequestingDelete ? "Sending..." : "Resend verification code"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
