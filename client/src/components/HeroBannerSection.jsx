"use client"

import { Link } from "react-router-dom"
import BannerSlider from "./BannerSlider"

const HeroBannerSection = ({ banners, deviceType }) => {
  // Filter banners based on device type
  const filteredBanners = banners?.filter(
    (banner) => banner.deviceType && banner.deviceType.toLowerCase() === deviceType?.toLowerCase()
  ) || []

  // Static banner images - update these paths as needed
  const leftBannerImage = "/tabby.png"
  const rightBannerImage = "/tamara.png"
  
  // Optional: Add links for static banners (set to null or "" if no link needed)
  const leftBannerLink = null
  const rightBannerLink = null

  // Render a side banner (left or right)
  const renderSideBanner = (imageSrc, link, position) => {
    const content = (
      <div className="relative w-full h-full overflow-hidden rounded-lg group">
        <img
          src={imageSrc}
          alt={`${position} Banner`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    )

    // Check if banner has a valid link
    if (link && link.trim() !== "") {
      const isExternal = link.startsWith("http://") || link.startsWith("https://")

      if (isExternal) {
        return (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full cursor-pointer"
          >
            {content}
          </a>
        )
      } else {
        return (
          <Link to={link} className="block w-full h-full cursor-pointer">
            {content}
          </Link>
        )
      }
    }

    return content
  }

  // Mobile view - only show slider (no side banners)
  if (deviceType?.toLowerCase() === "mobile") {
    return (
      <BannerSlider banners={filteredBanners} />
    )
  }

  // Desktop view - show side banners + slider
  return (
    <section className="w-full">
      <div className="flex gap-2 px-2 py-2 items-center">
        {/* Left Static Banner */}
        <div className="hidden lg:flex w-[220px] xl:w-[280px] flex-shrink-0 h-[200px] sm:h-[280px] md:h-[320px] lg:h-[350px]">
          {renderSideBanner(leftBannerImage, leftBannerLink, "left")}
        </div>

        {/* Middle Banner Slider */}
        <div className="flex-1 min-w-0">
          <BannerSlider banners={filteredBanners} />
        </div>

        {/* Right Static Banner */}
        <div className="hidden lg:flex w-[220px] xl:w-[280px] flex-shrink-0 h-[200px] sm:h-[280px] md:h-[320px] lg:h-[350px]">
          {renderSideBanner(rightBannerImage, rightBannerLink, "right")}
        </div>
      </div>
    </section>
  )
}

export default HeroBannerSection
