import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    return (
        <>
          <motion.div 
            className="absolute top-0 left-0 right-0 bg-black z-20"
            animate={open ? {bottom: 0} : {}}
            transition={open ? {duration: .8, ease: "easeInOut"} : {}}
            >
          </motion.div>
          <div className="fixed top-0 z-20 block md:flex justify-between w-full py-25 px-2.5 md:px-15 lg:px-5 pb-25 text-black md:text-white md:mix-blend-difference">
              <div className="flex justify-between items-center -mt-4 z-20">
                  <Link href="/" className={`font-normal text-label3 md:text-label1 uppercase ${open ? 'text-white' : 'text-black'} md:text-white`}>V-a studio</Link>
                  <div onClick={toggleMenu} className="md:hidden flex flex-col space-y-2 py-4 px-2 cursor-pointer">
                      <motion.span 
                        className={`w-8 h-0.5 ${open? 'translate-y-p5 bg-white' : 'bg-black'}`}
                        animate={ open ? { rotate: '45deg', translateY: '5px'} : {rotate: '0deg', translateY: '0px'}}
                        transition={{delay: .25}}
                        >
                      </motion.span>
                      <motion.span 
                        className={`w-8 h-0.5 ${open? '-translate-y-p5 bg-white' : 'bg-black'}`}
                        animate={ open ? { rotate: '-45deg', translateY: '-5px'} : {rotate: '0deg', translateY: '0px'}}
                        transition={{delay: .25}}
                        >
                      </motion.span>
                  </div>
              </div>
              <ul className="hidden md:flex space-x-50">
                  <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">Work</Link></li>
                  <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">About</Link></li>
                  <li><Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase">Contact</Link></li>
              </ul>
              <ul className="flex flex-col md:hidden mt-8 space-y-8 z-20">
                  <motion.li
                    className="relative"
                    initial={{left: "-300px"}}
                    animate={open ? { left: "0px" } : {}}
                    transition={open ? {delay: .3, ease: "easeInOut"} : {delay: 0}}
                    >
                    <Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase text-white">Work</Link>
                  </motion.li>
                  <motion.li
                    className="relative"
                    initial={{left: "-300px"}}
                    animate={open ? { left: "0px" } : {}}
                    transition={open ? {delay: .4, ease: "easeInOut"} : {delay: .05}}
                    >
                    <Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase text-white">About</Link>
                  </motion.li>
                  <motion.li
                    className="relative"
                    initial={{left: "-300px"}}
                    animate={open ? { left: "0px" } : {}}
                    transition={open ? {delay: .48, ease: "easeInOut"} : {delay: .1}}
                    >
                    <Link href="#" className="text-heading1 font-loose md:text-label1 md:font-normal uppercase text-white">Contact</Link>
                  </motion.li>
              </ul>
          </div>
        </>
    )
}