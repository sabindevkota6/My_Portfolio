/* Navbar component with Microsoft Clarity tracking
   - responsive navigation with mobile menu and theme toggle
   - changes background on scroll for better visibility
   - includes logo, navigation links, and contact button
   - tracks theme toggle, menu interactions, and navigation clicks
   - monitors user behavior patterns in navigation
*/

import { assets } from '@/assets/assets' // images and icons
import Image from 'next/image' // Next.js optimized image component
import React, { useEffect, useRef, useState } from 'react' // react hooks
import { clarityEvents } from '@/utils/clarity.js' // Microsoft Clarity tracking utilities

// Navbar component - receives theme props and setters
const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  // useState: tracks if user has scrolled to change navbar background
  const [isScroll, setIsScroll] = useState(false)

  // useRef: direct access to mobile menu DOM element for animations
  const sideMenuRef = useRef();

  // Opens mobile side menu by sliding it in from right with tracking
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
    clarityEvents.menuToggle(true); // Track menu opening
  }

  // Closes mobile side menu by sliding it back to right with tracking
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
    clarityEvents.menuToggle(false); // Track menu closing
  }

  // Enhanced theme toggle with tracking
  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    clarityEvents.themeToggle(newTheme);
  }

  // Navigation link click tracking
  const handleNavClick = (sectionName) => {
    clarityEvents.sectionView(sectionName);
    closeMenu(); // Close mobile menu if open
  }

// useEffect: listens for scroll events to update navbar background
useEffect(() => {
  const handleScroll = () => {
    setIsScroll(window.scrollY > 50)
  }

  // Set initial state and add listener
  handleScroll() // This checks the initial scroll position immediately
  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

  return (
    <>
    {/* Background decoration image - hidden in dark mode */}
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src= {assets.header_bg_color} alt='' className='w-full'/>
    </div>

    {/* Main navigation bar - fixed position with conditional background */}
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
    items-center justify-between z-50 transition-all duration-500 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white-thin/50": ""}`}>
        
        {/* Logo - switches between light/dark versions with tracking */}
        <a href="#top" onClick={() => handleNavClick('home')}>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' 
            className='w-28 cursor-pointer mr-14'/>
        </a>
        
        {/* Desktop navigation menu - hidden on mobile with tracking */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
           ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><a className='font-Ovo' href="#top" onClick={() => handleNavClick('home')}>Home</a></li>
            <li><a className='font-Ovo' href="#about" onClick={() => handleNavClick('about')}>About me</a></li>
            <li><a className='font-Ovo' href="#services" onClick={() => handleNavClick('services')}>Services</a></li>
            <li><a className='font-Ovo' href="#work" onClick={() => handleNavClick('work')}>My Work</a></li>
            <li><a className='font-Ovo' href="#contact" onClick={() => handleNavClick('contact')}>Contact me</a></li>
        </ul>

        {/* Right side controls - theme toggle, contact button, mobile menu with tracking */}
        <div className='flex items-center gap-4'>
          {/* Theme toggle button - switches between sun/moon icons with tracking */}
          <button onClick={handleThemeToggle}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer' />
          </button>

            {/* Contact button - hidden on mobile with tracking */}
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 
            border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
            onClick={() => clarityEvents.contactButtonClick()}>Contact 
              <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' /></a>

            {/* Mobile menu trigger - only visible on mobile */}
            <button className='block md:hidden ml-3' onClick= {openMenu}>
              <Image src={ isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* Mobile side menu - slides in from right on mobile devices with tracking */}
        <ul  ref={sideMenuRef} className=' flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
        dark:bg-darkHover dark:text-white'>

          {/* Close button for mobile menu */}
          <div className='absolute top-6 right-6' onClick= {closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          {/* Mobile navigation links - each closes menu on click with tracking */}
          <li><a className='font-Ovo' onClick={() => handleNavClick('home')} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={() => handleNavClick('about')} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={() => handleNavClick('services')} href="#services">Services</a></li>
          <li><a className='font-Ovo' onClick={() => handleNavClick('work')} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={() => handleNavClick('contact')} href="#contact">Contact me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
