import React from 'react'
import Link from 'next/link'
const Tech = () => {
  return (
     <div className="flex gap-10 max-lg:flex-wrap max-lg:justify-center max-lg:h-auto max-lg:py-10 justify-between items-center rounded-xl h-[300px] dark:bg-black-100 border-white-100/30 border">
          <div className='pl-5'>
              <p>I constantly try to improve</p>
              <h2 className='font-bold text-3xl mt-auto w-4/3 max-lg:w-full text-center max-md:text-xl'>My tech stack</h2>
          </div>
          <div className='grid grid-cols-2 gap-7 pr-5'>
              <Link target='_blank' href="https://nextjs.org/" className=' bg-gray-100/50 dark:bg-[#10132E] rounded-xl p-3 hover:text-green-500 transition-all duration-300 ease-in-out text-center hover:scale-105'>Next.js</Link>
              <Link target='_blank' href="https://laravel.com/" className=' bg-gray-100/50 dark:bg-[#10132E] rounded-xl p-3 hover:text-green-500 transition-all duration-300 ease-in-out text-center hover:scale-105'>Laravel</Link>
              <Link target='_blank' href="https://www.mongodb.com/" className=' bg-gray-100/50 dark:bg-[#10132E] rounded-xl p-3 hover:text-green-500 transition-all duration-300 ease-in-out text-center hover:scale-105'>MongoDB</Link>
              <Link target='_blank' href="https://tailwindcss.com/" className=' bg-gray-100/50 dark:bg-[#10132E] rounded-xl p-3 hover:text-green-500 transition-all duration-300 ease-in-out text-center hover:scale-105'>Tailwind</Link>
              <Link target='_blank' href="https://www.typescriptlang.org/" className=' bg-gray-100/50 dark:bg-[#10132E] rounded-xl p-3 hover:text-green-500 transition-all duration-300 ease-in-out text-center hover:scale-105'>TypeScript</Link>
          </div>
      </div>
  )
}

export default Tech