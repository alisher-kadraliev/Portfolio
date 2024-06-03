import React from 'react'

const MagicButton = () => {
    return (
        <button className="relative mt-10 hover:scale-110 duration-300 transition-all inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:scale-90">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22c55e_0%,#fff_50%,#22c55e_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950  px-3 py-1 text-sm font-medium dark:text-white backdrop-blur-3xl">
                Show my work
            </span>
        </button>
    )
}

export default MagicButton