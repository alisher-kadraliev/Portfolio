import React from 'react'
import { gridItems } from '@/app/data'
import { GlobeDemo } from './ui/GlobeDemo'

const Grid = () => {
    return (
        <section className='z-10 relative'>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-10 w-1/2'>
                    <div className="flex bg-[url(/b1.svg)] rounded-xl h-[300px] bg-black-100 border-white-100/30 border">
                        <h2 className='p-10 font-bold text-3xl mt-auto w-4/3'>I prioritize client collaboration</h2>
                    </div>
                    <div className="flex bg-[url(/b1.svg)] rounded-xl h-[300px] bg-black-100 border-white-100/30 border">
                        <h2 className='p-10 font-bold text-3xl mt-auto w-4/3'>I prioritize client collaboration</h2>
                    </div>
                </div>
                <div className="flex w-1/2 overflow-hidden h-[640px] rounded-xl justify-center bg-black-100 border-white-100/30 border">
                    <h2 className='absolute z-10 text-center pt-6 font-bold text-3xl'>I'm very flexible with time zone communications </h2>
                    <GlobeDemo></GlobeDemo>
                </div>
            </div>
        </section>

    )
}

export default Grid