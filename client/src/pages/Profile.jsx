import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { User, Mail, Phone, LogOut, Package } from "lucide-react"

const Profile = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="profile-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" />
                    <circle cx="12" cy="12" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100" height="100" fill="url(#profile-pattern)" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <User size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">My Profile</h1>
                  <p className="text-purple-100 mt-1">Manage your account settings and preferences</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* User Info Section */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100 hover:border-purple-300 transition-all duration-200">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
                  <User size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-purple-600">Full Name</p>
                  <p className="font-semibold text-gray-900 text-lg">{user?.name}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100 hover:border-purple-300 transition-all duration-200">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
                  <Mail size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-purple-600">Email Address</p>
                  <p className="font-semibold text-gray-900 text-lg">{user?.email}</p>
                </div>
              </div>

              {user?.phone && (
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100 hover:border-purple-300 transition-all duration-200">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-purple-600">Phone Number</p>
                    <p className="font-semibold text-gray-900 text-lg">{user.phone}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Quick Links
              </h2>
              <button
                onClick={() => navigate("/orders")}
                className="w-full text-left px-6 py-4 bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 rounded-xl transition-all duration-200 border border-purple-100 hover:border-purple-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-gray-900">View My Orders</span>
                  </div>
                  <svg className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="w-full text-left px-6 py-4 bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 rounded-xl transition-all duration-200 border border-purple-100 hover:border-purple-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium text-gray-900">My Cart</span>
                  </div>
                  <svg className="h-5 w-5 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Logout Button */}
            <div className="mt-8 pt-6 border-t border-purple-100">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
              >
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
