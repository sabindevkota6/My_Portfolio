/* Footer component
   - displays logo, email contact, and social links
   - switches logo based on dark/light theme
   - includes copyright and social media navigation  
*/

import React from 'react'
import Image from 'next/image' // Next.js optimized image component
import { assets } from '@/assets/assets' // images and icons

// Footer component - receives isDarkMode prop for theme switching
const Footer = ({ isDarkMode }) => {
  return (
    // Main footer container with top margin
    <div className='mt-20'>
      {/* Header section with logo and email */}
      <div className='text-center'>
        {/* Logo that switches between light and dark versions */}
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        {/* Email contact link with icon */}
        <div>
            <a href="mailto:sabindevkota6@gmail.com" className='flex items-center gap-2 mx-auto w-max'>
              <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
              sabindevkota6@gmail.com
            </a>
        </div>
      </div>

      {/* Footer bottom section with copyright and social links */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400
      mx-[10%] mt-12 py-6'>
        {/* Copyright text */}
        <p>© 2025 Sabin Devkota. All rights reserved.</p>
        {/* Social media links list */}
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/sabindevkota6">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/sabindevkota6">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer