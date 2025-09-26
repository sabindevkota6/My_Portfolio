/* Contact component
   - shows contact form with email integration  
   - uses web3forms API to handle form submissions
   - includes animated inputs and success/error messages
   - Microsoft Clarity tracking for form interactions and submissions
*/

import React from 'react'
import { assets } from '@/assets/assets' // images and icons
import Image from 'next/image' // Next.js optimized image component  
import { useState } from 'react' // react hooks for state management
import {motion} from "motion/react" // animation library for scroll effects
import { clarityEvents } from '../utils/clarity.js' // Import clarity tracking for form events

// Contact component - handles contact form and email submission
const Contact = () => {
  
  // useState: tracks form submission status (sending, success, error messages)
  const [result, setResult] = useState("");
  // useState: tracks if user has started interacting with the form
  const [formStarted, setFormStarted] = useState(false);

  // Track when user starts filling the form - fires only once per session
  const handleFormStart = () => {
    if (!formStarted) {
      clarityEvents.contactFormStart(); // Track form engagement start
      setFormStarted(true);
    }
  };

  // Form submission handler - sends email via web3forms API with tracking
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add API key to form data for web3forms service
    formData.append("access_key", "90e4fb98-e709-4714-89b4-5fe789fca90a");

    try {
      // Send form data to web3forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      // Handle API response - show success or error message
      if (data.success) {
        setResult("Form Submitted Successfully");
        // Track successful form submission with Clarity
        clarityEvents.contactFormSubmit(true);
        event.target.reset();
        setFormStarted(false); // Reset form started state for new submissions
      } else {
        console.log("Error", data);
        setResult(data.message);
        // Track failed form submission with error details
        clarityEvents.contactFormSubmit(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("An error occurred. Please try again.");
      // Track form submission error for debugging
      clarityEvents.contactFormSubmit(false);
    }
  };
  
  return (
    // Main container with background image and scroll animations
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]
    dark:bg-none'>

      {/* Section subtitle */}
      <motion.h4 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>
      
      {/* Main title */}
      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-Ovo'>Get in Touch</motion.h2>

      {/* Description paragraph */}
      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> If you'd like to discuss a project 
        or just want to say hi, feel free to reach out!</motion.p>

        {/* Contact form - handles submission with animations and tracking */}
        <motion.form 
        
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}

        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            {/* Input fields grid - name and email side by side */}
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
               
                {/* Name input with slide-in animation and form start tracking */}
                <motion.input 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0 , opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                type="text" placeholder="Enter your name" required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white 
                dark:bg-darkHover/30 dark:border-white/90' 
                name='name'
                onFocus={handleFormStart} /* Track when user starts interacting with form */
                />
                
                {/* Email input with slide-in animation from right and form start tracking */}
                <motion.input 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0 , opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                type="email" placeholder="Enter your email" required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white 
                dark:bg-darkHover/30 dark:border-white/90' 
                name='email'
                onFocus={handleFormStart} /* Track when user starts interacting with form */
                />
            </div>

            {/* Message textarea with slide-up animation and form start tracking */}
            <motion.textarea 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            rows='6' placeholder="Enter your message" required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
            dark:bg-darkHover/30 dark:border-white/90 dark:placeholder:text-white/50' 
            name='message'
            onFocus={handleFormStart} /* Track when user starts interacting with form */
            ></motion.textarea>

            {/* Submit button with hover scale effect and arrow icon */}
            <motion.button 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2
             bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500
             dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit now
             <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

             {/* Form submission result message */}
             <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact