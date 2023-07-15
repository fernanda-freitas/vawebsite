'use client'
import { motion } from "framer-motion";

export default function HeroVideo({ src }) {
    console.log(src)
    return (
        <motion.div
            initial={{ opacity: 1, height: "100vh" }}
            animate={{ opacity: .8, height: "86vh" }}
            transition={{ duration: .5 }}
            className="col-span-12 w-screen fixed z-0">
            <video autoPlay loop muted className='w-full h-full object-cover'>
                <source src={src} type="video/mp4"/>
            </video>
        </motion.div>
    )
}