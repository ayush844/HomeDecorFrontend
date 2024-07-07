"use client"

import Image from "next/image";
import { Button } from "./ui/button"
import { TbArrowUpRight } from "react-icons/tb";

import { desVariants, tagVariants, titleVariants } from '@/utils/animation'

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className='container py-12 xl:py-24 h-auto text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
      <div className=' lg:w-1/2 xl:py-14 lg:py-8'>

        <motion.p initial='offscreen' whileInView={"onscreen"} variants={titleVariants} className=' tracking-widest uppercase'>
          Offers for Best Interior
        </motion.p>

        <motion.h1 initial='offscreen' whileInView={"onscreen"} variants={desVariants}  className='h1'>
          Make your home a <br /> piece of art
        </motion.h1>

        <motion.p initial='offscreen' whileInView={"onscreen"} variants={tagVariants}  className='pb-6 text-muted-foreground xl:pb-10 '>Transform your living space with our exquisite home decor collections. Discover the beauty of thoughtfully curated interiors that reflect your personal style and create a sanctuary of comfort and elegance. Elevate your home with timeless pieces that bring warmth and sophistication to every room.</motion.p>

        <motion.div initial='offscreen' whileInView={"onscreen"} variants={tagVariants} >
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            BOOK NOW <TbArrowUpRight className="w-5 h-5 ml-2 " />
          </Button>
        </motion.div>



      </div>

      <div className=' w-1/2'>
        <Image src="/image/hall.png" width={800} height={500} alt="" className=" absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block" />
      </div>

    </div>
  )
}

export default HeroSection