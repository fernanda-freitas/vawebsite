'use client'
import { motion } from "framer-motion";

import ThumbnailCard from './components/thumbnail'
import HeroVideo from './components/heroVideo'
import heroVideo from '../public/videos/homepagevideo.mp4'
import ThumbnailCardImg01 from './../public/images/thumbnail01.png'
import ThumbnailCardImg02 from './../public/images/thumbnail02.png'
import ThumbnailCardImg03 from './../public/images/thumbnail03.png'
import ThumbnailCardImg04 from './../public/images/thumbnail04.png'
import ThumbnailCardImg05 from './../public/images/thumbnail05.png'

export default function Home() {
  
  return (
    <main className='grid grid-cols-4 md:grid-cols-12'>
      <HeroVideo src={heroVideo}/> 
      <motion.div
        initial={{ marginTop: "100vh" }}
        animate={{ marginTop: "86vh" }}
        transition={{ duration: .5 }}
        className="col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 pb-100 pt-25 md:pb-150 lg:pt-50 lg:pb-200 z-10 px-2.5 md:px-15 lg:px-5 bg-black">
        <span className='col-span-12 md:col-span-1 font-normal text-label3 md:text-label1 uppercase text-white'>About</span>
        <div className='col-span-12 md:col-start-6 md:col-span-7'>
          <h1 className='text-heading3 md:text-heading1 font-loose text-white'>We are a forward-looking studio, made up of designers & developers working on innovative brands, experiences and digital products.</h1>
        </div>
      </motion.div>
      <section className='col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 z-10 px-2.5 md:px-15 lg:px-5 bg-black'>
        <div className='col-span-12 md:col-span-6'>
          <span className='font-normal text-label3 md:text-label1 uppercase text-white'>Latest projects</span>
          <h1 className='text-heading3 md:text-heading1 font-loose text-white mt-20'>We are a forward-looking studio, made up of designers & developers working on innovative brands, experiences and digital products.</h1>
        </div>
        <ThumbnailCard image={ThumbnailCardImg01} title="Fairly Normal" year="2021" pageLink={"#"}/>
        <ThumbnailCard image={ThumbnailCardImg02} title="A Ginjinha Espinheira" year="2021" pageLink={"#"}/>
        <ThumbnailCard image={ThumbnailCardImg03} title="Zanad" year="2023" pageLink={"/work/zanad"}/>
        <ThumbnailCard image={ThumbnailCardImg04} title="Radical Futures" year="2022" pageLink={"#"}/>
        <ThumbnailCard image={ThumbnailCardImg05} title="Rosior" year="2022" pageLink={"#"}/>
      </section>
      <section className='col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 z-10 px-2.5 md:px-15 lg:px-5 bg-black'>
        <div className='col-span-12 md:col-span-6 md:col-start-7 my-100'>
          <h2 className='text-heading3 md:text-heading1 font-loose text-white'>+351 215 678 231</h2>
          <h2 className='text-heading3 md:text-heading1 font-loose text-white'>info@v-a.pt</h2>
        </div>
      </section>
    </main>
  )
}