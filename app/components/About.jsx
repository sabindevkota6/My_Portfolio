/* About component
   - shows personal introduction and skills section
   - uses framer motion for smooth scroll animations
   - displays profile image, description, info cards, and tools
*/

import React from 'react'
import { assets, toolsData } from '@/assets/assets' // images and data arrays
import Image from 'next/image' // Next.js optimized image component
import { infoList } from '@/assets/assets.js' // array of info cards data
import { motion } from "motion/react" // animation library for scroll effects

// About component - receives isDarkMode prop to switch between light/dark styling
const About = ({ isDarkMode }) => {
  return (
    // Main container with scroll animations - fades in when scrolled into view
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
      {/* Section header - "Introduction" subtitle */}
      <motion.h4
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      {/* Main title - "About Me" */}
      <motion.h2 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
        className='text-center text-5xl font-Ovo'
      >
        About Me
      </motion.h2>

      {/* Main content container - flex layout for image and text side by side */}
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
      >
        {/* Profile image section - scales up slightly when scrolled into view */}
        <motion.div
          initial={{opacity:0, scale:0.9}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>
        
        {/* Text content section - contains description, info cards, and tools */}
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6, delay:0.8}}
          className='flex-1'
        >
          {/* Personal description paragraph */}
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am an enthusiastic developer who loves turning
            ideas into reality and I'm always eager to learn
            new technologies. I am pursuing a career in 
            full-stack development and I am particularly 
            interested in working with the MERN stack.
          </p>
              
          {/* Info cards grid - maps through infoList array to show skills/interests */}
          <motion.ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8, delay:1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map(({icon, iconDark, title, description}, index) => (
              // Individual info card - hover effects include scaling and shadow
              <motion.li 
                whileHover={{scale:1.05}}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 
                cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500
                hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                key={index}
              >
                {/* Icon switches between light/dark based on theme */}
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools section title */}
          <motion.h4
            initial={{y:20, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.5, delay:1.3}}
            className='my-6 text-gray-700 font-Ovo dark:text-white/80'
          >
            Tools I use
          </motion.h4>

          {/* Tools grid - horizontal list of tool icons */}
          <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5, delay:1.6}}
            className='flex items-center gap-3 sm:gap-5'
          >
            {toolsData.map((tool, index) => (
              // Individual tool icon - scales on hover with upward movement
              <motion.li 
                whileHover={{scale:1.1}}
                className='flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About