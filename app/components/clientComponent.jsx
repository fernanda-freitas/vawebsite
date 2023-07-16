'use client'
import { usePathname } from 'next/navigation'

import Navbar from './navbar'
import Footer from './footer'

export default function ClientComponent({content}) {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

    return(
      <>
        <Navbar />
          {content}
        <Footer colorVariant={isHomepage ? 'bg-black text-white' : 'bg-white text-black'}/>
      </>
    )
}