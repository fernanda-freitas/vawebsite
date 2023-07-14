import Image from 'next/image'
import ProjectThumb from './components/projectThumbnail'
import heroImage from '../public/images/hero-video.png'
import projectThumb01 from '../public/images/thumbnail01.png'
import projectThumb02 from '../public/images/thumbnail02.png'
import projectThumb03 from '../public/images/thumbnail03.png'
import projectThumb04 from '../public/images/thumbnail04.png'

export default function Home() {
  
  return (
    <div className='grid grid-cols-4 md:grid-cols-12'>
      <header className='col-span-12 w-full fixed z-0'>
        <Image src={heroImage} alt="hero image" className='object-cover w-full h-86vh'/>
      </header>

      {/* About */}
      <div className='mt-86vh col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 pb-100 pt-25 md:pb-150 lg:pt-50 lg:pb-200 z-10 px-2.5 md:px-15 lg:px-5 bg-black'>
        <span className='col-span-12 md:col-span-1 font-normal text-label3 md:text-label1 uppercase text-white'>About</span>
        <div className='col-span-12 md:col-start-6 md:col-span-7'>
          <h1 className='text-heading3 md:text-heading1 font-loose text-white'>We are a forward-looking studio, made up of designers & developers working on innovative brands, experiences and digital products.</h1>
        </div>
      </div>
      
      {/* Projects */}
      <div className='col-span-12 grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 pb-100 pt-25 md:pb-150 lg:pt-50 lg:pb-200 z-10 px-2.5 md:px-15 lg:px-5 bg-black'>
        <div className='col-span-12 md:col-span-6'>
          <span className='font-normal text-label3 md:text-label1 uppercase text-white'>Latest projects</span>
          <h1 className='text-heading3 md:text-heading1 font-loose text-white mt-20'>We are a forward-looking studio, made up of designers & developers working on innovative brands, experiences and digital products.</h1>
        </div>
        <ProjectThumb image={projectThumb01} title="Project 01" year="2023"/>
        <ProjectThumb image={projectThumb02} title="Project 02" year="2023"/>
        <ProjectThumb image={projectThumb03} title="Project 03" year="2023"/>
        <ProjectThumb image={projectThumb04} title="Project 04" year="2023"/>
      </div>
    </div>
  )
}