import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, useAnimationControls } from 'framer-motion'

export default function ProjectThumbnail({ title, year, image, pageLink }) {
    const router = useRouter()
    const controls = useAnimationControls()
    
    const handleAnimation = async () => {
        controls.set({
            position: 'relative',
            right: 0,
            top: 0,
            left: 0,
            bottom: 0,
            // width: '100%'
        })
        await controls.start({
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            // width: '100vw',
            transition: { duration: 5 }
        })
        router.push(pageLink)
    }

    return (
        <div className='col-span-12 md:col-span-6 block group transition-all duration-300 ease-in-out md:mb-100 hover:cursor-pointer' onClick={handleAnimation}>
                <motion.div 
                    // initial={{ opacity: 1 }}
                    // animate={{ opacity: 0 }}
                    // exit={{ opacity: 1 }}
                    // transition={{ duration: 2, ease: 'easeOut' }}
                    animate={controls}
                    >
                    <Image src={image} alt="project thumbnail image showcasing the studio work" className='object-cover col-span-6 aspect-4/3 w-full'/>
                </motion.div>
            <div className='flex justify-between mt-25'>
                <div className='font-normal text-label3 md:text-label2 lg:text-label1 uppercase'>
                    <span className='font-normal text-label3 md:text-label2 lg:text-label1 uppercase text-white'>{title}</span>
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
                </div>
                <span className="font-normal text-label3 md:text-label2 lg:text-label1 uppercase text-white opacity-50">{year}</span>
            </div>
        </div>
    )
}