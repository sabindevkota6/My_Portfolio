import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { infoList } from '@/assets/assets.js'
const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'><Image src={assets.user_image} alt='user' className='w-full rounded-3xl' /></div>
        <div className='flex-1'>
        <p className='mb-10 max-w-2xl font-Ovo'>
            I am an enthusiastic developer who loves turning
             ideas into reality and I'm always eager to learn
              new technologies. I am pursuing a career in 
              full-stack development and I am particularly 
              interested in working with the MERN stack.</p>
              
              <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description},
                    index)=>(
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                     key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-grey-700'>{title}</h3>
                    <p className='text-grey-600 text-sm'>{description}</p>
                    </li>
                ))}
             
              </ul>
</div>

      </div>

    </div>
  )
}

export default About
