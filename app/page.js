import Image from 'next/image'
import heroImage from '../public/images/hero-video.png'

export default function Home() {
  
  return (
    <>
      <header className='col-span-12 -mx-5'>
        <Image src={heroImage} alt="hero image" className='object-cover w-full'/>
      </header>
      <div className='col-start-5 col-span-7'>
        <h1 className='text-heading1 font-loose text-white'>We are a forward-looking studio, made up of designers & developers working on innovative brands, experiences and digital products.</h1>
      </div>
    </>
  )
}
