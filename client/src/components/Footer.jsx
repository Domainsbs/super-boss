"use client"

import { Link } from "react-router-dom"
import { Facebook, Instagram, Plus, Minus, Linkedin, Mail, Phone, MapPin, ArrowRight, Heart, Send } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"
import { faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { useState, useEffect } from "react"
import axios from "axios"
import { generateShopURL } from "../utils/urlUtils"

import config from "../config/config"
import NewsletterModal from "./NewsletterModal";

const API_BASE_URL = `${config.API_URL}`

const Footer = ({ className = "" }) => {
  // State for mobile accordion sections
  const [openSections, setOpenSections] = useState({
    categories: false,
    legal: false,
    support: false,
    connect: false,
  })
  const [categories, setCategories] = useState([])
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [subCategories, setSubCategories] = useState([])
  const [columnCount, setColumnCount] = useState(5)

  // Update column count based on screen width and zoom level
  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth

      if (width >= 1536) {
        // 2xl screens - adjust based on viewport width (increases when zooming out)
        if (width >= 2200) {
          // 75% zoom or less
          setColumnCount(6)
        } else if (width >= 1920) {
          // 80% zoom
          setColumnCount(5)
        } else if (width >= 1700) {
          // 90% zoom
          setColumnCount(5)
        } else {
          // 100% zoom
          setColumnCount(5)
        }
      } else {
        setColumnCount(5)
      }
    }

    updateColumnCount()
    window.addEventListener("resize", updateColumnCount)
    return () => window.removeEventListener("resize", updateColumnCount)
  }, [])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/categories`)
      const validCategories = data.filter((cat) => {
        const isValid =
          cat &&
          typeof cat === "object" &&
          cat.name &&
          typeof cat.name === "string" &&
          cat.name.trim() !== "" &&
          cat.isActive !== false &&
          !cat.isDeleted &&
          !cat.name.match(/^[0-9a-fA-F]{24}$/) && // Not an ID
          !cat.parentCategory // Only include parent categories
        return isValid
      })
      validCategories.sort((a, b) => a.name.localeCompare(b.name))
      setCategories(validCategories)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const fetchSubCategories = async () => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/subcategories`)
      setSubCategories(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching subcategories:", error)
    }
  }

  const getSubCategoriesForCategory = (categoryId) => {
    return subCategories.filter((sub) => sub.category?._id === categoryId)
  }

  useEffect(() => {
    fetchCategories()
    fetchSubCategories()
  }, [])

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleNewsletterInput = (e) => setNewsletterEmail(e.target.value);
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) setShowNewsletterModal(true);
  };

  return (
    <>
      {/* Desktop Footer - Hidden on mobile */}
      <footer className={`hidden md:block text-white relative overflow-hidden ${className}`}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700"></div>
        
        {/* Floating animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-1/2 w-32 h-32 bg-lime-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Main Footer Content */}
        <div className="relative z-10 pt-12 pb-8">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            {/* Newsletter Section - Premium Design */}
            <div className="relative mb-14">
              <div className="bg-gradient-to-r from-blue-400/30 via-blue-500/20 to-blue-400/30 backdrop-blur-md rounded-3xl p-1">
                <div className="bg-blue-600/40 backdrop-blur-sm rounded-[22px] p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-lime-400 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-lime-300 to-lime-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                          <Mail className="w-8 h-8 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight">Subscribe to Our Newsletter</h3>
                        <p className="text-blue-100 text-sm lg:text-base mt-1">Get exclusive deals and latest updates delivered to your inbox</p>
                      </div>
                    </div>
                    <form className="flex w-full lg:w-auto gap-3" onSubmit={handleNewsletterSubmit}>
                      <div className="relative flex-1 lg:w-96">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full pl-5 pr-5 py-4 text-base bg-white placeholder-gray-400 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-lime-400/50 shadow-xl border-2 border-white/50"
                          value={newsletterEmail}
                          onChange={handleNewsletterInput}
                          required
                        />
                      </div>
                      <button type="submit" className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-yellow-600 text-blue-800 font-black rounded-2xl px-8 py-4 text-base flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-lime-400/25">
                        <span className="hidden sm:inline">Subscribe</span>
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {showNewsletterModal && (
              <NewsletterModal
                email={newsletterEmail}
                onClose={() => setShowNewsletterModal(false)}
              />
            )}

            <div className="grid grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
              {/* Column 1 - Brand & Social */}
              <div className="flex flex-col">
                {/* Logo */}
                <div className="mb-6">
                  <img src="/seenalif.png" alt="Seenalif" className="w-32 lg:w-36 xl:w-40 h-auto object-contain" />
                </div>
                
                {/* Tagline */}
                <p className="text-blue-100 text-sm lg:text-base mb-6 leading-relaxed">
                  Your one-stop destination for quality products at amazing prices. Shop with confidence!
                </p>

                {/* Social Icons - Premium Grid */}
                <div className="grid grid-cols-4 gap-3">
                  <a href="https://www.facebook.com/grabatozae/" target="_blank" className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-lime-400 hover:to-lime-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-lime-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/20">
                    <Facebook className="w-5 h-5 text-white group-hover:text-blue-700" />
                  </a>
                  <a href="https://x.com/GrabAtoz" target="_blank" className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-lime-400 hover:to-lime-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-lime-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/20" aria-label="X (Twitter)">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white group-hover:text-blue-700" role="img">
                      <path d="M18.25 2h3.5l-7.66 8.73L24 22h-6.87l-5.02-6.58L6.3 22H2.8l8.2-9.34L0 2h7.04l4.54 6.02L18.25 2z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/grabatoz/" target="_blank" className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-lime-400 hover:to-lime-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-lime-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/20">
                    <Instagram className="w-5 h-5 text-white group-hover:text-blue-700" />
                  </a>
                  <a href="https://www.linkedin.com/company/grabatozae" target="_blank" className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-lime-400 hover:to-lime-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-lime-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/20">
                    <Linkedin className="w-5 h-5 text-white group-hover:text-blue-700" />
                  </a>
                  <a href="https://www.pinterest.com/grabatoz/" target="_blank" className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-lime-400 hover:to-lime-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-lime-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/20">
                    <FontAwesomeIcon icon={faPinterest} className="w-5 h-5 text-white group-hover:text-blue-700" />
                  </a>
                  <a href="https://www.tiktok.com/@grabatoz" target="_blank" className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-lime-400 hover:to-lime-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-lime-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/20">
                    <FontAwesomeIcon icon={faTiktok} className="w-5 h-5 text-white group-hover:text-blue-700" />
                  </a>
                  <a href="https://www.youtube.com/@grabAtoZ" target="_blank" className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-lime-400 hover:to-lime-500 rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-lime-400 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/20">
                    <FontAwesomeIcon icon={faYoutube} className="w-5 h-5 text-white group-hover:text-blue-700" />
                  </a>
                </div>
              </div>

              {/* Column 2 - Top Categories */}
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xl font-black mb-6 flex items-center gap-3">
                  <span className="w-10 h-1.5 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full"></span>
                  Top Categories
                </h3>
                <ul className="space-y-3 text-blue-100 text-sm lg:text-base">
                  {categories.slice(0, 8).map((category) => (
                    <li key={category._id}>
                      <Link to={generateShopURL({ parentCategory: category.name })} className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{category.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Legal */}
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xl font-black mb-6 flex items-center gap-3">
                  <span className="w-10 h-1.5 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full"></span>
                  Legal
                </h3>
                <ul className="space-y-3 text-blue-100 text-sm lg:text-base">
                  <li>
                    <Link to="/refund-return" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Refund and Return</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookies-policy" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Cookies Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Terms & Conditions</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Privacy Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/disclaimer-policy" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Disclaimer Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/track-order" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Track Order</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/voucher-terms" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Voucher Terms</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/delivery-terms" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Delivery Terms</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4 - Support */}
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xl font-black mb-6 flex items-center gap-3">
                  <span className="w-10 h-1.5 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full"></span>
                  Support
                </h3>
                <ul className="space-y-3 text-blue-100 text-sm lg:text-base">
                  <li>
                    <Link to="/about" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Contact Us</span>
                    </Link>
                  </li>
                  <li>
                    <a href="https://blog.grabatoz.ae/" rel="noopener noreferrer" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Blog</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/shop" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Shop</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Register</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Wishlist</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="hover:text-lime-400 transition-all duration-300 flex items-center gap-2 group font-bold">
                      <span className="w-2 h-2 bg-lime-400/50 rounded-full group-hover:bg-lime-400 group-hover:scale-125 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">Cart</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Desktop Bottom Footer - Premium Design */}
      <section className="hidden md:block bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-[1440px] mx-auto flex flex-row justify-between items-center gap-3 lg:gap-6 xl:gap-8 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-5 lg:py-6">
          {/* 1st Column: Text */}
          <div className="flex-1 min-w-0 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-lime-500 rounded-lg flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 text-blue-700 fill-blue-700" />
            </div>
            <p className="text-sm text-white font-medium"> 2025 Powered By Super Boss Trading LLC</p>
          </div>

          {/* 2nd Column: Payment Methods */}
          <div className="flex-1 flex justify-center min-w-0">
            <div className="bg-white rounded-xl px-6 py-3 shadow-xl">
              <img src="/1.svg" alt="Payment Methods" className="h-8 lg:h-10 w-auto object-contain" />
            </div>
          </div>

          {/* 3rd Column: Developer Credit */}
          <div className="flex-1 flex justify-end items-center min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm text-white font-medium">Developed By <a href="https://techsolutionor.com" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition-colors font-bold">Tech Solutionor</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Footer - Only visible on mobile */}
      <footer className="md:hidden bg-gradient-to-b from-blue-50 to-white">
        {/* Mobile Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-white font-bold">Subscribe to Newsletter</h3>
              <p className="text-blue-100 text-xs">Get exclusive deals delivered to you</p>
            </div>
          </div>
          <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-xl text-sm bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
              value={newsletterEmail}
              onChange={handleNewsletterInput}
              required
            />
            <button type="submit" className="bg-lime-400 hover:bg-lime-500 text-blue-700 font-bold rounded-xl px-4 py-3 transition-colors duration-300">
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Categories Section */}
        <div className="border-b border-blue-100">
          <button
            onClick={() => toggleSection("categories")}
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-blue-50 transition-colors"
          >
            <span className="text-lg font-semibold text-blue-900 flex items-center gap-2">
              <span className="w-6 h-1 bg-blue-500 rounded-full"></span>
              Categories
            </span>
            {openSections.categories ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-blue-500" />}
          </button>
          {openSections.categories && (
            <div className="px-4 pb-4 bg-white">
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link to={`/shop?parentCategory=${category._id}`} className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                      <ArrowRight className="w-3 h-3 text-blue-400" />
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Legal Section */}
        <div className="border-b border-blue-100">
          <button
            onClick={() => toggleSection("legal")}
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-blue-50 transition-colors"
          >
            <span className="text-lg font-semibold text-blue-900 flex items-center gap-2">
              <span className="w-6 h-1 bg-blue-500 rounded-full"></span>
              Legal
            </span>
            {openSections.legal ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-blue-500" />}
          </button>
          {openSections.legal && (
            <div className="px-4 pb-4 bg-white">
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="https://blog.grabatoz.ae/" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Blog
                  </a>
                </li>
                <li>
                  <Link to="/shop" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Support Section */}
        <div className="border-b border-blue-100">
          <button
            onClick={() => toggleSection("support")}
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-blue-50 transition-colors"
          >
            <span className="text-lg font-semibold text-blue-900 flex items-center gap-2">
              <span className="w-6 h-1 bg-blue-500 rounded-full"></span>
              Support
            </span>
            {openSections.support ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-blue-500" />}
          </button>
          {openSections.support && (
            <div className="px-4 pb-4 bg-white">
              <ul className="space-y-3">
                <li>
                  <Link to="/refund-return" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Refund and Return
                  </Link>
                </li>
                <li>
                  <Link to="/cookies-policy" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer-policy" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Disclaimer Policy
                  </Link>
                </li>
                <li>
                  <Link to="/track-order" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-gray-700 hover:text-blue-500 flex items-center gap-2 transition-colors font-semibold">
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Connect Section */}
        <div className="border-b border-blue-100">
          <button
            onClick={() => toggleSection("connect")}
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-blue-50 transition-colors"
          >
            <span className="text-lg font-semibold text-blue-900 flex items-center gap-2">
              <span className="w-6 h-1 bg-blue-500 rounded-full"></span>
              Connect
            </span>
            {openSections.connect ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-blue-500" />}
          </button>
          {openSections.connect && (
            <div className="px-4 pb-4 bg-white">
              <div className="mb-4">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/grabatozae/"
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="text-white" />
                  </a>
                  <a
                    href="https://x.com/GrabAtoz"
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="X (Twitter)"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" role="img">
                      <path d="M18.25 2h3.5l-7.66 8.73L24 22h-6.87l-5.02-6.58L6.3 22H2.8l8.2-9.34L0 2h7.04l4.54 6.02L18.25 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/grabatoz/"
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/grabatozae"
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0A66C2] hover:bg-[#084d94] shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                  <a
                    href="https://www.pinterest.com/grabatoz/"
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-[#E60023] hover:bg-[#c4001e] shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Pinterest"
                  >
                    <FontAwesomeIcon icon={faPinterest} className="text-white" style={{ width: '20px', height: '20px' }} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@grabatoz"
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-black hover:bg-gray-900 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="TikTok"
                  >
                    <FontAwesomeIcon icon={faTiktok} className="text-white" style={{ width: '20px', height: '20px' }} />
                  </a>
                  <a
                    href="https://www.youtube.com/@grabAtoZ"
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-[#FF0000] hover:bg-[#cc0000] shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="text-white" style={{ width: '20px', height: '20px' }} />
                  </a>
                </div>



              </div>
            </div>
          )}
        </div>

        {/* Shop On The Go Section - Always Visible */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-6 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-lime-400/10 rounded-full"></div>

          {/* Payment Methods */}
          <div className="flex justify-center mb-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <img src="/1.svg" alt="Payment Methods" className="h-8 w-auto" />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <p className="text-blue-100 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-lime-400 fill-lime-400" />
              2025 Powered By Super Boss Trading LLC
            </p>
            <p className="mt-2 text-blue-100">Developed By <a href="https://techsolutionor.com" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 transition-colors font-medium">Tech Solutionor</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
