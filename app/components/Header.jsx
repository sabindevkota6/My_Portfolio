import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt=''
         className='rounded-full w-32' />

         </div>
         <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Sabin Devkota. 
            <Image src={assets.hand_icon} alt='' className='w-6' />
            </h3>

            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Full-stack Developer based in Nepal.
            </h1>
                <p className='max-w-2xl mx-auto font-Ovo'>
                    I am a full-stack developer from Kathmandu-Nepal with a passion for creating beautiful and functional web applications.
                </p>
                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
                    <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
                </div>
    </div>
  )
}

export default Header
