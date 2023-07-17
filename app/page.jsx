'use client'
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Title from "./components/title";
import Label from "./components/label";
import ThumbnailCard from './components/thumbnail'
import HeroVideo from './components/heroVideo'
import heroVideo from '../public/videos/homepagevideo.mp4'
import ThumbnailCardImg01 from './../public/images/thumbnail01.png'
import ThumbnailCardImg02 from './../public/images/thumbnail02.png'
import ThumbnailCardImg03 from './../public/images/hero-image.png'
import ThumbnailCardImg04 from './../public/images/thumbnail04.png'
import ThumbnailCardImg05 from './../public/images/thumbnail05.png'

export default function Home() {
  const pathName = usePathname()

  const projects = [
    {
      id: 1,
      image: ThumbnailCardImg01,
      title: 'Fairly Normal',
      year: '2021',
      pageLink: '#'
    },
    {
      id: 2,
      image: ThumbnailCardImg02,
      title: 'A Ginjinha Espinheira',
      year: '2021',
      pageLink: '#'
    },
    {
      id: 3,
      image: ThumbnailCardImg03,
      title: 'Zanad',
      year: '2021',
      pageLink: '/work/zanad'
    },
    {
      id: 4,
      image: ThumbnailCardImg04,
      title: 'A Ginjinha Espinheira',
      year: '2021',
      pageLink: '#'
    },
    {
      id: 5,
      image: ThumbnailCardImg05,
      title: 'Rosior',
      year: '2022',
      pageLink: '#'
    }
  ]

  return (
    <AnimatePresence mode="wait" >
      <main className='grid grid-cols-4 md:grid-cols-12 relative'>
        <HeroVideo src={heroVideo}/> 
        <motion.div
          initial={{ marginTop: "100vh" }}
          animate={{ marginTop: "86vh" }}
          transition={{ duration: .5 }}
          className="col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 pb-100 pt-25 md:pb-150 lg:pt-50 lg:pb-200 z-10 px-2.5 md:px-15 lg:px-5 bg-black">
          <Label extraClasses={'col-span-12 md:col-span-1 text-white'}>About</Label>
          <div className='col-span-12 md:col-start-6 md:col-span-7'>
            <Title extraClasses={'text-white'}>We are a forward-looking studio, made up of designers & developers working on innovative brands, experiences and digital products.</Title>
          </div>
        </motion.div>
        <section className='col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 z-10 px-2.5 md:px-15 lg:px-5 bg-black'>
          <div className='col-span-12 md:col-span-6'>
            <Label extraClasses={'text-white'}>Latest projects</Label>
            <Title extraClasses={'text-white'}>Our work ranges from Brand Design and Art Direction,to Digital Product Design and Web Development.</Title>
          </div>

          {/* {projects.map((project) => (
            <motion.div 
              layoutId={project.pageLink} 
              key={project.id} 
              animate={{ scale: 1 }}
              className="col-span-12 md:col-span-6 group transition-all duration-300 ease-in-out md:mb-100 hover:cursor-pointer">
              <ThumbnailCard image={project.image} title={project.title} year={project.year} pageLink={project.pageLink}/>
            </motion.div>
          ))} */}
          {projects.map((project) => (
            <motion.div 
              key={pathName} 
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="col-span-12 md:col-span-6 group transition-all duration-300 ease-in-out md:mb-100 hover:cursor-pointer">
              <ThumbnailCard image={project.image} title={project.title} year={project.year} pageLink={project.pageLink}/>
            </motion.div>
          ))}
        </section>
        <section className='col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 z-10 px-2.5 md:px-15 lg:px-5 bg-black'>
          <div className='col-span-12 md:col-span-6 md:col-start-7 my-100'>
            <Title extraClasses={'text-white'}>+351 215 678 231.</Title>
            <Title extraClasses={'text-white'}>info@v-a.pt</Title>
          </div>
        </section>
      </main>
    </AnimatePresence>
  )
}