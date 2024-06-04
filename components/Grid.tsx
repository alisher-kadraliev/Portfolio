import { GlobeDemo } from './ui/GlobeDemo'
import Tech from './GridComponents/Tech'
import CurrentWork from './GridComponents/CurrentWork'
import Email from './GridComponents/Email'
import Empty from './GridComponents/EmptyText'
import SocialMedia from './GridComponents/SocialMedia'

const Grid = () => {
    return (
        <section className='z-10 relative'>
            <div className='flex max-lg:flex-wrap gap-10'>
                <div className='flex flex-col gap-10 w-1/2 max-lg:w-full'>
                    <Tech />
                    <SocialMedia />
                </div>
                <div className="flex w-1/2 max-lg:w-full overflow-hidden h-[544px] max-lg:h-auto rounded-xl justify-center bg-black-100 dark:border-white-100/30 border">
                    <h2 className='absolute z-10 text-center pt-6 font-bold text-3xl max-lg:text-xl max-lg:px-4'>I'm very flexible with time zone communications </h2>
                    <GlobeDemo></GlobeDemo>
                </div>
            </div>
            <div className="flex max-lg:flex-wrap gap-10 mt-10">
                <div className="flex w-1/2 max-lg:w-full overflow-hidden h-[544px] max-lg:h-auto rounded-xl justify-start items-center bg-black-100 dark:border-white-100/30 border">
                    <CurrentWork />
                </div>
                <div className='flex flex-col gap-10 w-1/2 max-lg:w-full'>
                    <Empty />
                    <Email />
                </div>
            </div>
        </section>

    )
}

export default Grid