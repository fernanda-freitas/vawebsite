import Link from "next/link"

export default function Footer({colorVariant}) {
    return (
        <footer className={`relative grid grid-cols-4 md:grid-cols-12 gap-2.5 md:gap-15 lg:gap-5 z-10 px-2.5 md:px-15 lg:px-5 pb-25 flex justify-between w-full ${colorVariant}`}>
            <span className="hidden md:inline col-span-6 font-normal text-label3 md:text-label1 uppercase">© V–A StudIo 2021</span>
            <div className="col-span-6 flex space-x-30">
                <Link href="#" className="font-normal text-label3 md:text-label1 uppercase">Linkedin</Link>
                <Link href="#" className="font-normal text-label3 md:text-label1 uppercase">Behance</Link>
                <Link href="#" className="font-normal text-label3 md:text-label1 uppercase">Instagram</Link>
            </div>
        </footer>
    )
}