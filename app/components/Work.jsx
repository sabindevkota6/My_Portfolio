/* Work component
   - displays portfolio projects in an interactive grid
   - shows project cards with hover effects and external links
   - includes a call-to-action to view all projects on GitHub
*/

import { assets } from '@/assets/assets' // images and icons
import { workData } from '@/assets/assets' // array of project data
import React from 'react'
import Image from 'next/image' // Next.js optimized image component
import {motion} from "motion/react" // animation library for scroll effects

// Work component - receives isDarkMode prop for theme switching
const Work = ({ isDarkMode }) => {
  return (

    // Main container with scroll animations
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}

      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>


      {/* Section subtitle */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
      
      {/* Main title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>My latest Works</motion.h2>

      {/* Description paragraph */}
      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}

      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> Welcome to my web development portfolio! Here, you'll find a curated 
        selection of my latest projects that showcase my skills and expertise in creating dynamic and user-friendly 
        websites and web-applications. Each project reflects my commitment to quality, innovation, 
        and attention to detail. Feel free to explore and see how I can bring your ideas 
        to life through effective web solutions.
         </motion.p>

         {/* Projects grid - maps through workData array to create project cards */}
         <motion.div 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.6, delay:0.9}}

         className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
            {workData.map((project, index) => (

            // Individual project card with background image and hover effects
            <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index} 
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
              relative cursor-pointer group'
              style={{ backgroundImage: `url(${project.bgImage})` }}
              onClick={() => project.url && window.open(project.url, '_blank')}>
                {/* Project info overlay - slides up on hover */}
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex
                items-center justify-between duration-500 group-hover:bottom-7'>
                {/* Project title and description */}
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                {/* External link button with hover effect */}
                <div className='border rounded-full border-black w-9
                aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt= 'send icon' className='w-5' />
                    </div>
                    </div>
            </motion.div>
            ))}
         </motion.div>

         {/* View all projects button - links to GitHub repositories */}
         <motion.a 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.6 }}

         href="https://github.com/sabindevkota6?tab=repositories"
         target="_blank"
         rel="noopener noreferrer"
         className='w-max flex items-center justify-center gap-2 text-gray-700
         border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
         dark:text-white dark:border-white dark:hover:bg-darkHover'>View All Projects 
         <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right Arrow' className='w-4' /></motion.a>


    </motion.div>
  )
}

export default Work
