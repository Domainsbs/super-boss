import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971508604360"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 md:bottom-8 right-4 z-[9998]"
      aria-label="Chat on WhatsApp"
      style={{ transition: 'transform 0.2s' }}
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-14 h-14 rounded-full border-2 hover:scale-110"
        style={{ background: '#25D366' }}
      />
    </a>
  )
}

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main Content - with proper constraints */}
      <main className="flex-1 w-full">
        <div className="max-w-[1920px] mx-auto">
          <Outlet />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

export default Layout
