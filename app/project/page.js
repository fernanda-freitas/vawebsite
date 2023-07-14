import Image from "next/image"
import heroProjectImage from '../../public/images/project-hero.png'

export default function About() {
    return (
        <main className="grid grid-cols-4 md:grid-cols-12">
            <header className='col-span-12 w-full fixed z-0'>
                <Image src={heroProjectImage} alt="hero image" className='object-cover w-full h-100vh'/>
            </header>

            <section className='mt-86vh col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 pb-100 pt-25 md:pb-150 lg:pt-50 lg:pb-200 z-10 px-2.5 md:px-15 lg:px-5 bg-white'>
                <span className='col-span-12 md:col-span-1 font-normal text-label3 md:text-label1 uppercase text-black'>About</span>
                <div className='col-span-12 md:col-start-6 md:col-span-7'>
                    <h1 className='text-heading3 md:text-heading1 font-loose text-black'>We are a forward-looking studio, made up of designers & developers working on innovative brands, experiences and digital products.</h1>
                </div>
            </section>
        </main>
    )
}