"use client"

import { Link } from "react-router-dom"
import { Facebook, Instagram, Plus, Minus, Linkedin } from "lucide-react"
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
      <footer className={`hidden md:block bg-[#f5f5f5] text-gray-800 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          {/* First Section - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1 - Top Categories */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide">TOP CATEGORIES</h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                {categories.slice(0, 8).map((category) => (
                  <li key={category._id}>
                    <Link to={generateShopURL({ parentCategory: category.name })} className="hover:text-blue-600 hover:underline transition-colors">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - More Categories */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide">MORE CATEGORIES</h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                {categories.slice(8, 16).map((category) => (
                  <li key={category._id}>
                    <Link to={generateShopURL({ parentCategory: category.name })} className="hover:text-blue-600 hover:underline transition-colors">
                      {category.name}
                    </Link>
                  </li>
                ))}
                {categories.length < 8 && subCategories.slice(0, 8).map((subCategory) => (
                  <li key={`sub-${subCategory._id}`}>
                    <Link to={generateShopURL({ 
                      parentCategory: subCategory.category?.name || '', 
                      subCategory: subCategory.name 
                    })} className="hover:text-blue-600 hover:underline transition-colors">
                      {subCategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Legal */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide">LEGAL</h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                <li>
                  <Link to="/refund-return" className="hover:text-blue-600 hover:underline transition-colors">
                    Refund and Return
                  </Link>
                </li>
                <li>
                  <Link to="/cookies-policy" className="hover:text-blue-600 hover:underline transition-colors">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:text-blue-600 hover:underline transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-blue-600 hover:underline transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer-policy" className="hover:text-blue-600 hover:underline transition-colors">
                    Disclaimer Policy
                  </Link>
                </li>
                <li>
                  <Link to="/voucher-terms" className="hover:text-blue-600 hover:underline transition-colors">
                    Voucher Terms 
                  </Link>
                </li>
                <li>
                  <Link to="/delivery-terms" className="hover:text-blue-600 hover:underline transition-colors">
                    Delivery Terms 
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Support */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide">SUPPORT</h3>
              <ul className="space-y-2.5 text-gray-700 text-sm">
                <li>
                  <Link to="/about" className="hover:text-blue-600 hover:underline transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-600 hover:underline transition-colors">
                    Contact Us
                  </Link>
                </li>
                {/* <li>
                  <a href="https://blog.grabatoz.ae/" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline transition-colors">
                    Blog
                  </a>
                </li> */}
                <li>
                  <Link to="/shop" className="hover:text-blue-600 hover:underline transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/track-order" className="hover:text-blue-600 hover:underline transition-colors">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-blue-600 hover:underline transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-blue-600 hover:underline transition-colors">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="hover:text-blue-600 hover:underline transition-colors">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:text-blue-600 hover:underline transition-colors font-semibold">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Section - Newsletter, Disclaimer, Social Icons */}
          <div className="border-t border-gray-300 pt-8">
            <div className="text-center mb-6">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                BE THE FIRST TO GET PROMO OFFERS AND REWARD PERKS STRAIGHT TO YOUR INBOX
              </h3>
              
              {/* Newsletter Form */}
              <form className="max-w-2xl mx-auto mb-6" onSubmit={handleNewsletterSubmit}>
                <div className="flex gap-2 justify-center">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="flex-1 max-w-md px-4 py-2.5 bg-white placeholder-gray-400 rounded border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={newsletterEmail}
                    onChange={handleNewsletterInput}
                    required
                  />
                  <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded px-8 py-2.5 text-sm transition-colors">
                    Sign up
                  </button>
                </div>
              </form>
              {showNewsletterModal && (
                <NewsletterModal
                  email={newsletterEmail}
                  onClose={() => setShowNewsletterModal(false)}
                />
              )}

              {/* Disclaimer Text */}
              <p className="text-xs text-gray-600 mb-4 max-w-4xl mx-auto">
                Your email address will be used to send you Electronics Newsletters and emails about Super Boss's products, services, sales, and special offers. You can unsubscribe at any time by clicking on the unsubscribe link in each email. For more information on our use of your personal information and your rights, see our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-xs text-gray-600 mb-6">
                This site is protected by reCAPTCHA and the Google <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link to="/terms-conditions" className="text-blue-600 hover:underline">Terms of Service</Link> apply.
              </p>

              {/* Social Icons & App Badges */}
              <div className="flex justify-center items-center gap-8 mb-6">
                {/* Social Icons */}
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#"  className="text-gray-600 hover:text-black transition-colors" aria-label="X (Twitter)">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" role="img">
                      <path d="M18.25 2h3.5l-7.66 8.73L24 22h-6.87l-5.02-6.58L6.3 22H2.8l8.2-9.34L0 2h7.04l4.54 6.02L18.25 2z" />
                    </svg>
                  </a>
                  <a href="#"  className="text-gray-600 hover:text-red-600 transition-colors">
                    <FontAwesomeIcon icon={faYoutube} style={{width: '24px', height: '24px'}} />
                  </a>
                  <a href="#"  className="text-gray-600 hover:text-red-600 transition-colors">
                    <FontAwesomeIcon icon={faPinterest} style={{width: '24px', height: '24px'}} />
                  </a>
                  <a href="#"  className="text-gray-600 hover:text-pink-600 transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>

                {/* Mobile App Images */}
                <div className="flex items-center gap-2">
                  <img src="https://res.cloudinary.com/dyfhsu5v6/image/upload/v1757938965/google_pj1cxc.webp" alt="Google Play" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Desktop Bottom Footer */}
      <section className="hidden md:block bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs text-gray-600">
            {/* Copyright Text - Left Column */}
            <div className="md:col-span-1">
              <p>SuperBoss.com © Copyright 1997-2025 SuperBoss, LLC. All rights reserved.</p>
            </div>

            {/* Payment Methods - Center Column */}
            <div className="flex justify-center items-center">
              <img src="/1.svg" alt="Payment Methods" className="h-10 w-auto" />
            </div>

            {/* Links - Right Column */}
            <div className="flex flex-col items-center md:items-end gap-3">
           
              <p className="font-semibold text-center md:text-right">
                Developed By <a href="https://techsolutionor.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Tech Solutionor</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Footer - Only visible on mobile */}
      <footer className="md:hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Categories Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("categories")}
            className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-base font-semibold text-gray-900">Categories</span>
            {openSections.categories ? <Minus size={18} className="text-gray-600" /> : <Plus size={18} className="text-gray-600" />}
          </button>
          {openSections.categories && (
            <div className="px-4 pb-3 bg-gray-50">
              <ul className="space-y-2.5 grid grid-cols-2 gap-x-3">
                {categories.slice(0, 12).map((category) => (
                  <li key={category._id}>
                    <Link 
                      to={generateShopURL({ parentCategory: category.name })} 
                      className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Quick Links Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("legal")}
            className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-base font-semibold text-gray-900">Quick Links</span>
            {openSections.legal ? <Minus size={18} className="text-gray-600" /> : <Plus size={18} className="text-gray-600" />}
          </button>
          {openSections.legal && (
            <div className="px-4 pb-3 bg-gray-50">
              <ul className="space-y-2.5">
                <li>
                  <Link to="/about" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/track-order" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Login / Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Policies Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("support")}
            className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-base font-semibold text-gray-900">Policies</span>
            {openSections.support ? <Minus size={18} className="text-gray-600" /> : <Plus size={18} className="text-gray-600" />}
          </button>
          {openSections.support && (
            <div className="px-4 pb-3 bg-gray-50">
              <ul className="space-y-2.5">
                <li>
                  <Link to="/refund-return" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Refund & Return
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies-policy" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer-policy" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Disclaimer Policy
                  </Link>
                </li>
                <li>
                  <Link to="/voucher-terms" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Voucher Terms
                  </Link>
                </li>
                <li>
                  <Link to="/delivery-terms" className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1">
                    Delivery Terms
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Connect Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("connect")}
            className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-base font-semibold text-gray-900">Follow Us</span>
            {openSections.connect ? <Minus size={18} className="text-gray-600" /> : <Plus size={18} className="text-gray-600" />}
          </button>
          {openSections.connect && (
            <div className="px-4 pb-4 bg-gray-50">
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://www.facebook.com/grabatozae/"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="text-[#1877F2]" />
                </a>
                <a
                  href="https://x.com/GrabAtoz"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-gray-800 hover:shadow-md transition-all"
                  aria-label="X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-black fill-current" role="img">
                    <path d="M18.25 2h3.5l-7.66 8.73L24 22h-6.87l-5.02-6.58L6.3 22H2.8l8.2-9.34L0 2h7.04l4.54 6.02L18.25 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/grabatoz/"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-pink-500 hover:shadow-md transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="text-[#E4405F]" />
                </a>
                <a
                  href="https://www.linkedin.com/company/grabatozae"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-blue-700 hover:shadow-md transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="text-[#0A66C2]" />
                </a>
                <a
                  href="https://www.pinterest.com/grabatoz/"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-red-600 hover:shadow-md transition-all"
                  aria-label="Pinterest"
                >
                  <FontAwesomeIcon icon={faPinterest} style={{width: '18px', height: '18px', color: '#E60023'}} />
                </a>
                <a
                  href="https://www.tiktok.com/@grabatoz"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-gray-800 hover:shadow-md transition-all"
                  aria-label="TikTok"
                >
                  <FontAwesomeIcon icon={faTiktok} style={{width: '18px', height: '18px', color: '#000'}} />
                </a>
                <a
                  href="https://www.youtube.com/@grabAtoZ"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-red-600 hover:shadow-md transition-all"
                  aria-label="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} style={{width: '18px', height: '18px', color: '#FF0000'}} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Newsletter Section - Always Visible */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4">
          <h3 className="text-sm font-bold text-gray-900 text-center mb-3">
            GET EXCLUSIVE OFFERS
          </h3>
          <form className="max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={newsletterEmail}
                onChange={handleNewsletterInput}
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg px-4 py-2 text-sm transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
          {showNewsletterModal && (
            <NewsletterModal
              email={newsletterEmail}
              onClose={() => setShowNewsletterModal(false)}
            />
          )}
        </div>

        {/* Bottom Section - Always Visible */}
        <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white py-6 px-4">
          <div className="text-center mb-4">
            <h3 className="text-base font-bold mb-3">Download Our App</h3>
            <div className="flex justify-center gap-3">
              <img src="https://res.cloudinary.com/dyfhsu5v6/image/upload/v1757938965/google_pj1cxc.webp" alt="Google Play" className="h-10" />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center mb-4">
            <img src="/1.svg" alt="Payment Methods" className="h-10 w-auto opacity-90" />
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-white/90 space-y-1">
            <p>© 2025 SuperBoss.com. All rights reserved.</p>
            <p>Developed by <a href="https://techsolutionor.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white font-semibold">Tech Solutionor</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer