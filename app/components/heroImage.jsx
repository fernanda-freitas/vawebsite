import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage({ src, pathName }) {
    return (
        <motion.div layoutId={pathName} className="col-span-12 w-screen h-screen fixed z-0">
            <Image src={src} className='w-full h-full object-cover' alt="Hero image"/>
        </motion.div>
    )
}