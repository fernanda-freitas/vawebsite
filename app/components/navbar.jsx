import Link from "next/link"

export default function Navbar() {
    return (
        <div className="fixed top-0 z-20 flex justify-between w-full py-25 px-2.5 md:px-15 lg:px-5 pb-25 text-white mix-blend-difference">
            <Link href="/" className="font-normal text-label3 md:text-label1 uppercase">V-a studio</Link>
            <div className="flex space-x-50">
                <Link href="#" className="font-normal text-label3 md:text-label1 uppercase">Work</Link>
                <Link href="#" className="font-normal text-label3 md:text-label1 uppercase">About</Link>
                <Link href="#" className="font-normal text-label3 md:text-label1 uppercase">Contact</Link>
            </div>
        </div>
    )
}