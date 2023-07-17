import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <div className="fixed top-0 z-20 block md:flex justify-between w-full py-25 px-2.5 md:px-15 lg:px-5 pb-25 text-black md:text-white md:mix-blend-difference">
            <div className="flex justify-between">
                <Link href="/" className="font-normal text-label3 md:text-label1 uppercase">V-a studio</Link>
                <div onClick={toggleMenu} className="md:hidden flex flex-col space-y-2 cursor-pointer">
                    <span className="w-8 h-0.5 bg-black"></span>
                    <span className="w-8 h-0.5 bg-black"></span>
                </div>
            </div>
            <ul className="hidden md:flex space-x-50">
                <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">Work</Link></li>
                <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">About</Link></li>
                <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">Contact</Link></li>
            </ul>
            {open && (
                <ul className="flex flex-col md:hidden mt-8 space-y-8">
                    <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">Work</Link></li>
                    <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">About</Link></li>
                    <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">Contact</Link></li>
                </ul>
            )}
        </div>
    )
}