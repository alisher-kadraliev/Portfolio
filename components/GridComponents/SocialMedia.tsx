import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { BackgroundGradient } from '@/components/ui/Card3dEffect'
import Ds from '@/components/GridComponents/Ds'
const SocialMedia = () => {
    return (
        <>
            <BackgroundGradient className='rounded-[22px] flex gap-6 p-4 sm:p-10 bg-white dark:bg-black-100 justify-center items-center flex-col'>
                <h2 className='font-bold text-3xl mt-auto max-md:text-xl'>My Social Media</h2>
                <div className='flex gap-4 max-lg:flex-wrap max-lg:justify-center'>
                    <SocialIcon target='_blank' url="https://www.linkedin.com/in/alisher-kadraliev-9a4ab524b" className='hover:scale-105 easy-in-out duration-300 transition-all' />
                    <SocialIcon target='_blank' url="https://github.com/alisher-kadraliev" className='hover:scale-105 easy-in-out duration-300 transition-all' />
                    <SocialIcon target='_blank' url="https://www.instagram.com/alisher_dev_x/" className='hover:scale-105 easy-in-out duration-300 transition-all' />
                    <SocialIcon target='_blank' url="https://x.com/software32076" className='hover:scale-105 easy-in-out duration-300 transition-all' />
                    <Ds />
                </div>
            </BackgroundGradient>
        </>
    )
}

export default SocialMedia