/* Services component
   - displays service cards with hover animations
   - shows web development offerings and skills
   - includes links to read more about each service
*/

import { assets } from '@/assets/assets' // images and icons
import { serviceData } from '@/assets/assets' // array of services data
import React from 'react'
import Image from 'next/image' // Next.js optimized image component
import {motion} from "motion/react" // animation library for scroll effects

// Services component - shows offered web development services
const Services = () => {
  return (

    // Main container with scroll animations
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}

    id= "services" className='w-full px-[12%] py-10 scroll-mt-20'>
      
      {/* Section subtitle */}
      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      
      className='text-center mb-2 text-lg font-Ovo'>What do I offer?</motion.h4>

      {/* Main title */}
      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}
      className='text-center text-5xl font-Ovo'>My Services</motion.h2>

      {/* Description paragraph */}
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}

      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> I provide web development services using technologies like Java, Python, HTML, CSS, JavaSctipt, React.js, Next.js, and more.
        I am particularly interested in working with the MERN stack.
         </motion.p>

         {/* Services grid - maps through serviceData array to create cards */}
         <motion.div 
         initial={{opacity: 0}}
         whileInView={{opacity: 1}}
         transition={{delay: 0.9, duration: 0.6}}
         className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index)=>(
                
                // Individual service card with hover effects
                <motion.div 
                whileHover={{scale:1.05}}
                key={index}
                className='border border-gray-400 rounded-lg px-8 py-12 
                hover:shadow-black cursor-pointer hover:bg-lightHover 
                hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'> 
                {/* Service icon */}
                <Image src={icon} alt='' className='w-10'/>
                {/* Service title */}
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                {/* Service description */}
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                {/* Read more link with arrow icon */}
                <a href={link}
                target="_blank" 
                rel="noopener noreferrer" 
                className='flex items-center gap-2 text-sm mt-5'>Read more
                     <Image alt='' src={assets.right_arrow}className='w-4'/></a>
                </motion.div>

            ))}
         </motion.div>


    </motion.div>
  )
}

export default Services
