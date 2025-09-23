/* Header component
   - displays hero section with profile image and introduction
   - includes animated text and call-to-action buttons
   - contains contact and resume download links
*/

import { assets } from '@/assets/assets' // images and icons
import Image from 'next/image' // Next.js optimized image component
import React from 'react'
import { motion } from "motion/react" // animation library for scroll effects

// Header component - main hero section with animated intro
const Header = () => {
  return (
    // Main container - full screen height with centered content
    <div className='w-11/12 max-w-3xl text-center
     mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      
      {/* Profile image with spring animation */}
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt=''
         className='rounded-full w-32' />
         </motion.div>

         {/* Greeting text with hand wave icon */}
         <motion.h3
         initial={{y: -20, opacity:0}}
          whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
          className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Sabin Devkota. 
            <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>

            {/* Main title - job role and location */}
            <motion.h1
            initial={{y: -30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 0.8, delay: 0.5}}
            className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Full-stack Developer based in Nepal.
            </motion.h1>

                {/* Description paragraph */}
                <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration: 0.6, delay: 0.7}}
                className='max-w-2xl mx-auto font-Ovo'>
                    I am a full-stack developer from Kathmandu-Nepal with a passion for creating beautiful and functional web applications.
                </motion.p>

                {/* Call-to-action buttons - contact and resume download */}
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    {/* Contact button with arrow icon */}
                    <motion.a
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1}}
                    href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>
                    
                    {/* Resume download button with download icon */}
                    <motion.a
                     initial={{y: 30, opacity: 0}}
                     whileInView={{y: 0, opacity: 1}}
                     transition={{duration: 0.6, delay: 1}}
                     href="/Sabin Devkota.CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
                </div>
    </div>
  )
}

export default Header
