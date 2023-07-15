import Image from "next/image"
import Link from "next/link"
import heroProjectImage from '../../public/images/project-hero.png'
import zanadImage from '../../public/images/zanad-img.png'
import zanadSocial from '../../public/images/zanad-social.jpg'

export default function About() {
    return (
        <main className="grid grid-cols-4 md:grid-cols-12">
            <header className='col-span-12 w-full fixed z-0'>
                <Image src={heroProjectImage} alt="Zanad project hero image" className='object-cover w-full h-100vh'/>
            </header>

            <section className='mt-86vh col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 pb-100 pt-25 md:pb-150 lg:pt-50 lg:pb-200 z-10 px-2.5 md:px-15 lg:px-5 bg-white'>
                <div className="col-span-12 md:col-span-3">
                    <span className="font-normal text-label3 md:text-label1 uppercase block text-black">Zanad</span>
                    <span className="font-normal text-label3 md:text-label1 uppercase text-black opacity-50">Branding for an Animation Production Studio</span>
                </div>
                <div className="col-span-12 md:col-span-3 md:col-start-7">
                    <span className="font-normal text-label3 md:text-label1 uppercase block text-black">Scope</span>
                    <span className="font-normal text-label3 md:text-label1 uppercase text-black opacity-50">Strategy, Branding, Graphic Design, UI/UX & Development</span>
                </div>
                <div className="col-span-12 md:col-span-3 md:col-start-10">
                    <span className="font-normal text-label3 md:text-label1 uppercase block text-black">Client</span>
                    <span className="font-normal text-label3 md:text-label1 uppercase text-black block opacity-50">Zanad</span>
                    <Link href="https://zanad.tv/" target="_blank" className="font-normal text-label3 md:text-label1 uppercase text-black block opacity-50">www.zanad.tv</Link>
                </div>
                <div className="col-span-12 md:col-span-6 mt-150">
                    <p className="text-p3 md:text-p2 lg:text-p1 font-normal text-black">Open House is an architecture event that takes place in many cities across the world. During a weekend, selected public and private spaces open their doors for thousands of visitors. In this fast-paced event, everyone wants to visit as many locations as possible, but the available places are limited.</p>
                </div>
            </section>

            <section className="col-span-12 z-10">
                <Image src={zanadImage} alt="Zanad iconography and brand look and feel" className='object-cover w-full h-auto'/>
            </section>
            
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 z-10 py-100 bg-white">
                <p className="col-span-6 col-start-6 text-p3 md:text-p2 lg:text-p1 font-normal text-black">We began by conducting an in-depth analysis of Zanad's brand values, vision, and objectives. This information was used to develop a comprehensive brand strategy that focused on the studios strengths and unique selling points. We then created a bold and adult visual identity that contrasted with a kaleidoscope of visuals.</p>
            </section>

            <section className="col-span-12 z-10">
                <Image src={zanadSocial} alt="Zanad iconography and brand look and feel" className='object-cover w-full h-auto'/>
            </section>
        </main>
    )
}