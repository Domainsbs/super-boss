"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../context/AuthContext"
import { CheckCircle, Clock, Package, Truck, AlertTriangle } from "lucide-react"

import config from "../config/config"
const UserOrders = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState("")

  // Check for success message from URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const success = params.get("success")
    const orderId = params.get("orderId")

    if (success === "true" && orderId) {
      setSuccessMessage(`Order #${orderId.slice(-6)} has been placed successfully!`)

      // Clear success message after 5 seconds
      const timer = setTimeout(() => {
        setSuccessMessage("")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [location])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
      return
    }

    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          setError("Please log in to view your orders")
          setLoading(false)
          return
        }

        const { data } = await axios.get(`${config.API_URL}/api/orders/myorders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setOrders(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching orders:", error)
        setError(error.response?.data?.message || "Failed to load your orders. Please try again later.")
        setLoading(false)
      }
    }

    fetchOrders()
  }, [isAuthenticated, navigate])

  const getStatusIcon = (status) => {
    switch (status) {
      case "Processing":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "Shipped":
        return <Package className="h-5 w-5 text-blue-500" />
      case "Out for Delivery":
        return <Truck className="h-5 w-5 text-purple-500" />
      case "Delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 flex justify-center items-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your orders...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <Package size={28} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              My Orders
            </h1>
          </div>
          <p className="text-gray-600 ml-14">Track and manage all your orders</p>
        </div>

      {successMessage && (
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 rounded-xl flex items-center shadow-sm">
          <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
          <span className="font-medium">{successMessage}</span>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl shadow-sm">
          <span className="font-medium">{error}</span>
        </div>
      )}

      {orders.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-purple-100">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package size={48} className="text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">No orders yet</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            You haven't placed any orders yet. Start shopping to see your orders here!
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl transition-all duration-200">
              {/* Order Header */}
              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h2 className="text-lg font-bold text-gray-900">Order #{order._id.slice(-6)}</h2>
                      <span className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-purple-600 border border-purple-200">
                        {order.orderItems.length} {order.orderItems.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Placed on {new Date(order.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center px-4 py-2 bg-white rounded-xl border border-purple-200 shadow-sm">
                      {getStatusIcon(order.status)}
                      <span className="ml-2 text-sm font-semibold text-gray-900">{order.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="px-6 py-4">
                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                  <Package className="h-4 w-4 mr-2 text-purple-600" />
                  Order Items
                </h3>
                <ul className="divide-y divide-gray-100">
                  {order.orderItems.map((item) => (
                    <li key={item._id} className="py-4 flex hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                      <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-gray-200">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">{item.name}</h4>
                          <p className="text-sm font-bold text-purple-600 ml-4">AED {item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center mt-2">
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                            Qty: {item.quantity}
                          </span>
                          <span className="text-xs text-gray-400 ml-2">
                            Subtotal: AED {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Footer */}
              <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-blue-50 border-t border-purple-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex-1">
                    {order.trackingId && (
                      <div className="flex items-center text-sm mb-2 sm:mb-0">
                        <Truck className="h-4 w-4 mr-2 text-purple-600" />
                        <span className="font-medium text-gray-700">Tracking ID: </span>
                        <span className="text-gray-900 ml-1 font-mono bg-white px-2 py-1 rounded border border-purple-200">{order.trackingId}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        AED {order.totalPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

export default UserOrders
