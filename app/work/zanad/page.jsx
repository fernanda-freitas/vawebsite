'use client'
import { motion } from "framer-motion";

import Image from "next/image"
import Link from "next/link"

import Label from "@/app/components/label";
import Paragraph from "@/app/components/paragraph";
import HeroImage from "../../components/heroImage"

import heroProjectImage from './../../../public/images/hero-image.png'
import projectVideo from './../../../public/videos/zanadprojectvideo.mp4'
import zanad01 from './../../../public/images/zanad01.svg'
import zanad02 from './../../../public/images/zanad02.jpg'
import zanad03 from './../../../public/images/zanad03.png'
import zanad04 from './../../../public/images/zanad04.png'
import zanad05 from './../../../public/images/zanad05.png'
import zanad06 from './../../../public/images/zanad06.png'
import zanad07 from './../../../public/images/zanad07.png'
import zanad08 from './../../../public/images/zanad08.jpg'

export default function ProjectPage() {

    return (
        <main className="grid grid-cols-4 md:grid-cols-12">
            <HeroImage src={heroProjectImage}/>
            <motion.div
                initial={{ marginTop: "100vh" }}
                animate={{ marginTop: "86vh" }}
                transition={{ delay: .7, duration: .3 }}
                className="col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 pt-25 md:pb-150 lg:pt-50 lg:pb-200 z-10 px-2.5 md:px-15 lg:px-5 pb-100 bg-white">
                <div className="col-span-12 md:col-span-3">
                    <Label extraClasses={'block text-black'}>Zanad</Label>
                    <Label extraClasses={'text-black opacity-50'}>Branding for an Animation Production Studio</Label>
                </div>
                <div className="col-span-12 md:col-span-3 md:col-start-7">
                    <Label extraClasses={'block text-black'}>Scope</Label>
                    <Label extraClasses={'text-black opacity-50'}>Strategy, Branding, Graphic Design, UI/UX & Development</Label>
                </div>
                <div className="col-span-12 md:col-span-3 md:col-start-10">
                    <Label extraClasses={'block text-black'}>Client</Label>
                    <Label extraClasses={'text-black opacity-50'}>Zanad</Label>
                    <Link href="https://zanad.tv/" target="_blank" className="font-normal text-label3 md:text-label1 uppercase text-black block opacity-50">www.zanad.tv</Link>
                </div>
                <div className="col-span-12 md:col-span-6 mt-150">
                    <Paragraph extraClasses={'text-black'}>Open House is an architecture event that takes place in many cities across the world. During a weekend, selected public and private spaces open their doors for thousands of visitors. In this fast-paced event, everyone wants to visit as many locations as possible, but the available places are limited.</Paragraph>
                </div>
            </motion.div>
            <section className="col-span-12 z-10">
                <Image src={zanad01} alt="Zanad iconography and brand look and feel" className='object-cover w-full h-auto bg-white'/>
            </section>
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 z-10 bg-white py-100">
                <Paragraph extraClasses={'col-span-6 col-start-6 text-black'}>We began by conducting an in-depth analysis of Zanads brand values, vision, and objectives. This information was used to develop a comprehensive brand strategy that focused on the studios strengths and unique selling points. We then created a bold and adult visual identity that contrasted with a kaleidoscope of visuals.</Paragraph>
            </section>
            <section className="col-span-12 z-10">
                <Image src={zanad02} alt="Various Instagram posts of the zanad tv account" className='object-cover w-full h-auto'/>
            </section>
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 px-2.5 md:px-15 lg:px-5 z-10 bg-white py-25 md:py-50 lg:py-100">
                <Image src={zanad03} className="col-span-12 md:col-span-6 w-full" alt="Screenshot of the produced website showcasing the project"/>
                <Image src={zanad04} className="col-span-12 md:col-span-6 w-full" alt="Screenshot of the produced website showcasing the project"/>
            </section>
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 py-20 md:py-50 lg:py-100 z-10 px-2.5 md:px-15 lg:px-5 z-10 bg-gray-100">
                <div className="col-span-12 md:col-span-10 md:col-start-2 w-full pb-100">
                    <video autoPlay loop muted className='w-full h-full object-cover'>
                        <source src={projectVideo} type="video/mp4"/>
                    </video>
                </div>
                <div className="col-span-12 md:col-span-10 md:col-start-2 grid grid-cols-4 md:grid-cols-12 gap-20 md:gap-x-50 items-center flex">
                    <Image src={zanad05} className="object-contain col-span-2 md:col-span-4 self-center" alt="Mobile screen showcasing the mobile version of website"/>
                    <Image src={zanad06} className="object-contain col-span-2 md:col-span-4 self-center" alt="Mobile screen showcasing the mobile version of website"/>
                    <Image src={zanad07} className="object-contain col-span-2 col-start-3 md:col-span-4 self-center" alt="Mobile screen showcasing the mobile version of website"/>
                </div>
            </section>
            <section className="col-span-12 grid grid-cols-4 md:grid-cols-12 py-25 lg:pt-100 lg:pb-50 z-10 px-2.5 md:px-15 lg:px-5 z-10 bg-white">
                <Image src={zanad08} className="col-span-12 w-full" alt="A simple business card for Zanad containing the logotype and person's information"/>
            </section>
        </main>
    )
}