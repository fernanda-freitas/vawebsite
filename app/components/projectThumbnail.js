import Image from 'next/image'
import Link from 'next/link'

export default function projectThumbnail({ title, year, image }) {
    return (
        <Link href="#" className='col-span-12 md:col-span-6 block group transition-all duration-300 ease-in-out'>
            <Image src={image} alt="hero image" className='object-cover col-span-6 aspect-4/3'/>
            <div className='flex justify-between mt-25'>
                <div className='font-normal text-label3 md:text-label2 lg:text-label1 uppercase'>
                    <span className='font-normal text-label3 md:text-label2 lg:text-label1 uppercase text-white'>{title}</span>
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
                </div>
                <span class="font-normal text-label3 md:text-label2 lg:text-label1 uppercase text-white opacity-50">{year}</span>
            </div>
        </Link>
    )
}