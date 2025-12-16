"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { ShoppingBag, Users, DollarSign, Package, ArrowRight, Eye, Calendar } from "lucide-react"
import { adminAPI } from "../../services/api"

const AdminDashboard = () => {
  const { admin } = useAuth()
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    totalRevenue: 0,
  })
  const [recentOrders, setRecentOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  const formatPrice = (price) => {
    return `AED ${price.toLocaleString()}`
  }

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return "Good Morning"
    if (hour < 17) return "Good Afternoon"
    return "Good Evening"
  }

  // Format current date
  const formatDate = () => {
    return currentTime.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const statsData = await adminAPI.getDashboardStats()
        setStats(statsData)
        const ordersData = await adminAPI.getRecentOrders()
        setRecentOrders(ordersData)
        setLoading(false)
      } catch (error) {
        setError("Failed to load dashboard data. Please try again later.")
        setLoading(false)
      }
    }
    fetchDashboardData()

    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
          <p className="text-white/70">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-500/20 text-red-200 p-4 rounded-xl border border-red-500/30">{error}</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Calendar className="w-4 h-4" />
            <span>{formatDate()}</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {getGreeting()},<br />
            <span className="text-yellow-400">{admin?.name || "Admin"}!</span>
          </h1>
          <p className="text-white/70 mb-6">
            Great to see you again. Here's a quick look at your store's activity.
          </p>
          <Link 
            to="/superboss-admin/orders/new" 
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
          >
            View New Orders
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Today's Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">New Orders</span>
              <span className="text-2xl font-bold text-emerald-600">{stats.totalOrders}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Revenue</span>
              <span className="text-xl font-bold text-emerald-600">{formatPrice(stats.totalRevenue)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-lg">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-medium">+12%</span>
            <span className="text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">{formatPrice(stats.totalRevenue)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl shadow-lg">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-medium">+8%</span>
            <span className="text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Products</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalProducts}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl shadow-lg">
              <Package className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-medium">+5%</span>
            <span className="text-gray-400 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Users</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-xl shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-medium">+15%</span>
            <span className="text-gray-400 ml-2">from last month</span>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Your Recent Orders</h2>
              <p className="text-sm text-gray-500 mt-1">Latest transactions from your store</p>
            </div>
            <Link 
              to="/superboss-admin/orders/new" 
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
            >
              <Eye className="w-4 h-4" />
              View all
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Order#
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {recentOrders.length > 0 ? (
                recentOrders.map((order, index) => (
                  <tr key={order._id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link 
                        to={`/superboss-admin/orders/${order._id}`}
                        className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                      >
                        #{order._id.slice(-6)}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">{new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {order.deliveryType === "pickup" ? (
                        <div className="text-sm text-gray-900 font-medium">{order.pickupDetails?.location || "N/A"}</div>
                      ) : (
                        <div className="text-sm text-gray-900 font-medium">{order.shippingAddress?.name || "N/A"}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-gray-900">{formatPrice(order.totalPrice)}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    No recent orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
