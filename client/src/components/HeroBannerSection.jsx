"use client"

import { Link } from "react-router-dom"
import BannerSlider from "./BannerSlider"

const HeroBannerSection = ({ banners, bannerCards, mobileBanners, deviceType }) => {
  // Filter banners based on device type for desktop
  const filteredBanners = banners?.filter(
    (banner) => banner.deviceType && banner.deviceType.toLowerCase() === deviceType?.toLowerCase()
  ) || []

  // For mobile, use mobileBanners if provided, otherwise fall back to filtered banners or all banners
  const mobileDisplayBanners = mobileBanners && mobileBanners.length > 0 
    ? mobileBanners 
    : (filteredBanners.length > 0 ? filteredBanners : banners || [])

  // Get the first banner card for right side (or use default)
  const rightBannerCard = bannerCards && bannerCards.length > 0 ? bannerCards[0] : null
  
  // Default right banner image if no banner card
  const defaultRightBannerImage = "https://i.pinimg.com/564x/9f/25/7d/9f257dd357b5697e99274f5a7410f3a0.jpg"
  
  // Render right side static banner
  const renderRightBanner = () => {
    if (rightBannerCard) {
      const imageSrc = rightBannerCard.image?.startsWith('http') 
        ? rightBannerCard.image 
        : `${import.meta.env.VITE_API_URL || ''}${rightBannerCard.image}`
      
      const content = (
        <div className="w-full h-full overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt={rightBannerCard.title || "Promotional Banner"}
            className="w-full h-full object-fill"
          />
        </div>
      )

      // Check if banner card has a valid link
      if (rightBannerCard.link && rightBannerCard.link.trim() !== "") {
        const link = rightBannerCard.link.trim()
        const isExternal = link.startsWith("http://") || link.startsWith("https://")

        if (isExternal) {
          return (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer hover:opacity-95 transition-opacity"
            >
              {content}
            </a>
          )
        } else {
          return (
            <Link to={link} className="block w-full h-full cursor-pointer hover:opacity-95 transition-opacity">
              {content}
            </Link>
          )
        }
      }

      return content
    }

    // Default static banner
    return (
      <div className="w-full h-full overflow-hidden rounded-xl">
        <img
          src={defaultRightBannerImage}
          alt="Promotional Banner"
          className="w-full h-full object-fill"
        />
      </div>
    )
  }

  // Mobile view - show slider with proper padding and styling
  if (deviceType?.toLowerCase() === "mobile") {
    return (
      <section className="w-full py-3 px-3">
        <BannerSlider banners={mobileDisplayBanners} />
      </section>
    )
  }

  // Desktop view - Left slider + Right static banner (fixed dimensions)
  return (
    <section className="w-full py-4 px-4 lg:px-6">
      <div className=" w-full mx-auto">
        <div className="flex gap-4 items-stretch" style={{ height: '380px' }}>
          {/* Left Banner Slider - Fixed width, takes remaining space */}
          <div 
            className="flex-1 min-w-0 overflow-hidden rounded-2xl"
            style={{ 
              minWidth: '0',
              maxWidth: 'calc(100% - 340px)'
            }}
          >
            <BannerSlider banners={filteredBanners} fixedHeight={380} />
          </div>

          {/* Right Static Banner - Fixed 320px width */}
          <div 
            className="hidden lg:block flex-shrink-0 overflow-hidden"
            style={{ 
              width: '320px',
              height: '380px'
            }}
          >
            {renderRightBanner()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBannerSection
