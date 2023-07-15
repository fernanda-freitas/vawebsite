import Image from "next/image";

export default function HeroImage({ src }) {
    return (
        <div className="col-span-12 w-screen h-screen fixed z-0">
            <Image src={src} className='w-full h-full object-cover' alt="Hero image"/>
        </div>
    )
}