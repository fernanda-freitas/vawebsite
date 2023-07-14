'use client'
import { usePathname } from "next/navigation"

export default function ClientComponent( {content} ) {
    const pathname = usePathname()
    const isHomepage = pathname === '/'

    return (
        <div className={`grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 mx-2.5 md:mx-15 lg:mx-5 ${isHomepage ? 'bg-black' : 'bg-white'}`}>
            {content}
        </div>
    )
}