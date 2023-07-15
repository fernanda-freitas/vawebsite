'use client'
import { motion } from "framer-motion";

import Image from "next/image"
import Link from "next/link"
import HeroImage from "../../components/heroImage"
import heroProjectImage from '../../../public/images/hero-image.png'
import projectVideo from '../../../public/videos/zanadprojectvideo.mp4'
import zanad01 from '../../../public/images/zanad01.svg'
import zanad02 from '../../../public/images/zanad02.jpg'
import zanad03 from '../../../public/images/zanad03.png'
import zanad04 from '../../../public/images/zanad04.png'
import zanad05 from '../../../public/images/zanad05.png'
import zanad06 from '../../../public/images/zanad06.png'
import zanad07 from '../../../public/images/zanad07.png'
import zanad08 from '../../../public/images/zanad08.jpg'

export default function ProjectPage() {
    return (
        <main className="grid grid-cols-4 md:grid-cols-12">
            <HeroImage src={heroProjectImage}/>
            <motion.div
                initial={{ marginTop: "100vh" }}
                animate={{ marginTop: "86vh" }}
                transition={{ delay: .5, duration: .5 }}
                className="col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 pt-25 md:pb-150 lg:pt-50 lg:pb-200 z-10 px-2.5 md:px-15 lg:px-5 pb-100 bg-white">
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
            </motion.div>
            <section className="col-span-12 z-10">
                <Image src={zanad01} alt="Zanad iconography and brand look and feel" className='object-cover w-full h-auto bg-white'/>
            </section>
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 z-10 bg-white py-100">
                <p className="col-span-6 col-start-6 text-p3 md:text-p2 lg:text-p1 font-normal text-black">We began by conducting an in-depth analysis of Zanad's brand values, vision, and objectives. This information was used to develop a comprehensive brand strategy that focused on the studios strengths and unique selling points. We then created a bold and adult visual identity that contrasted with a kaleidoscope of visuals.</p>
            </section>
            <section className="col-span-12 z-10">
                <Image src={zanad02} alt="Zanad iconography and brand look and feel" className='object-cover w-full h-auto'/>
            </section>
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 px-2.5 md:px-15 lg:px-5 z-10 bg-white py-25 md:py-50 lg:py-100">
                <Image src={zanad03} className="col-span-12 md:col-span-6 w-full" alt="A picture on the left side of the page showcasing the project made for the Zanad client"/>
                <Image src={zanad04} className="col-span-12 md:col-span-6 w-full" alt="A picture on the right side of the page showcasing the project made for Zanad client"/>
            </section>
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 py-20 md:py-50 lg:py-100 z-10 px-2.5 md:px-15 lg:px-5 z-10 bg-gray-100">
                <div className="col-span-12 md:col-span-10 md:col-start-2 w-full pb-100">
                    <video autoPlay loop muted className='w-full h-full object-cover'>
                        <source src={projectVideo} type="video/mp4"/>
                    </video>
                </div>
                <div className="col-span-12 md:col-span-10 md:col-start-2 w-full grid grid-flow-col align-middle">
                    <Image src={zanad05} className="object-contain mr-50" alt="Mobile screen showcasing the mobile version of project"/>
                    <Image src={zanad06} className="object-contain" alt="Mobile screen showcasing the mobile version of project"/>
                    <Image src={zanad07} className="object-contain ml-50" alt="Mobile screen showcasing the mobile version of project"/>
                </div>
            </section>
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 py-25 lg:pt-100 lg:pb-50 z-10 px-2.5 md:px-15 lg:px-5 z-10 bg-white">
                <Image src={zanad08} className="col-span-12 w-full" alt="A picture on the left side of the page showcasing the project made for the Zanad client"/>
            </section>
        </main>
    )
}