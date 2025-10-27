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
      <footer className="md:hidden bg-white">
        {/* Categories Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("categories")}
            className="w-full flex justify-between items-center p-4 text-left"
          >
            <span className="text-lg font-semibold text-gray-900">Categories</span>
            {openSections.categories ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          {openSections.categories && (
            <div className="px-4 pb-4">
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link to={`/shop?parentCategory=${category._id}`} className="text-gray-700 hover:text-orange-500">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Legal Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("legal")}
            className="w-full flex justify-between items-center p-4 text-left"
          >
            <span className="text-lg font-semibold text-gray-900">Legal</span>
            {openSections.legal ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          {openSections.legal && (
            <div className="px-4 pb-4">
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-700 hover:text-orange-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-700 hover:text-orange-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                   <a href="https://blog.grabatoz.ae/" rel="noopener noreferrer" className="text-gray-700 hover:text-orange-500">
    Blog
  </a>
                </li>
                <li>
                  <Link to="/shop" className="text-gray-700 hover:text-orange-500">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-700 hover:text-orange-500">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-gray-700 hover:text-orange-500">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Support Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection("support")}
            className="w-full flex justify-between items-center p-4 text-left"
          >
            <span className="text-lg font-semibold text-gray-900">Support</span>
            {openSections.support ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          {openSections.support && (
            <div className="px-4 pb-4">
              <ul className="space-y-3">
                <li>
                  <Link to="/refund-return" className="text-gray-700 hover:text-orange-500">
                    Refund and Return
                  </Link>
                </li>
                <li>
                  <Link to="/cookies-policy" className="text-gray-700 hover:text-orange-500">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-gray-700 hover:text-orange-500">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-700 hover:text-orange-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer-policy" className="text-gray-700 hover:text-orange-500">
                    Disclaimer Policy
                  </Link>
                </li>
                <li>
                  <Link to="/track-order" className="text-gray-700 hover:text-orange-500">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="text-gray-700 hover:text-orange-500">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-gray-700 hover:text-orange-500 font-semibold">
                    Cart
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
            className="w-full flex justify-between items-center p-4 text-left"
          >
            <span className="text-lg font-semibold text-gray-900">Connect</span>
            {openSections.connect ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          {openSections.connect && (
            <div className="px-4 pb-4">
              <div className="mb-4">
                {/* <h4 className="text-sm font-semibold text-gray-900 mb-3">Connect With Us</h4> */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/grabatozae/"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="text-[#1877F2]" />
                  </a>
                  <a
                    href="https://x.com/GrabAtoz"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100"
                    aria-label="X (Twitter)"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-black fill-current" role="img">
                      <path d="M18.25 2h3.5l-7.66 8.73L24 22h-6.87l-5.02-6.58L6.3 22H2.8l8.2-9.34L0 2h7.04l4.54 6.02L18.25 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/grabatoz/"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-[#E4405F]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/grabatozae"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-[#0A66C2]" />
                  </a>
                  <a
                    href="https://www.pinterest.com/grabatoz/"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100"
                    aria-label="Pinterest"
                  >
                    <FontAwesomeIcon icon={faPinterest} style={{width: '20px', height: '20px', color: '#E60023'}} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@grabatoz"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100"
                    aria-label="TikTok"
                  >
                    <FontAwesomeIcon icon={faTiktok} style={{width: '20px', height: '20px', color: '#000'}} />
                  </a>
                  <a
                    href="https://www.youtube.com/@grabAtoZ"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-100"
                    aria-label="YouTube"
                  >
                    <FontAwesomeIcon icon={faYoutube} style={{width: '20px', height: '20px', color: '#FF0000'}} />
                  </a>
                </div>


            
              </div>
            </div>
          )}
        </div>

        {/* Shop On The Go Section - Always Visible */}
        <div className="bg-[#1F1F39] text-white p-6">
          <h3 className="text-xl font-bold text-center mb-4">Shop On The Go</h3>
          <div className="flex justify-center space-x-4 mb-6 ">
            <img src="/google_play.png" alt="Google Play" className="h-8" />
            <img src="/app_store.png" alt="App Store" className="h-8" />
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center mb-4">
            <img src="/1.svg" alt="Payment Methods" className="h-8 w-auto" />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-300">
            <p> 2025 Grabatoz powered by Crown Excel.</p>
            <p className="mt-1">Develop By <a href="https://techsolutionor.com" target="_blank" rel="noopener noreferrer">Tech Solutionor</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer