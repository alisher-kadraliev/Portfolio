"use client"
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import ds from '@/public/ds.svg'
import Image from 'next/image'
const Ds = () => {
    const [url, setUrl] = useState('alishe0_0')
    const [isText, setIsText] = useState(false)
    const Copyds = () => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(url)
            setTimeout(() => {
                setIsText(true)
                setTimeout(() => {
                    setIsText(false)
                }, 2000)
            })
        
        }

    }
    return (
        <div className='relative'>
            {isText && <p className='absolute -top-4 -right-8 font-bold -rotate-12 text-sm black:text-white'>Copied</p>}
            <div onClick={Copyds}><Image src={ds} alt='discord' width={55} height={55} className='cursor-pointer hover:scale-105 easy-in-out duration-300 transition-all'></Image></div>
        </div>
    )
}

export default Ds