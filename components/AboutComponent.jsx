"use client"

import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'

const AboutComponent = () => {
  return (
    <div className=' container py-12 xl:py-24 h-[auto]'>
        <div className='grid lg:grid-cols-2 place-items-center'>

            <motion.div  initial='offscreen' whileInView={"onscreen"} variants={titleVariants} >
                <Image src="/image/aboutfront.png" width={900} height={500} alt='about' className=' max-md:hidden' />
            </motion.div>

            <div className=' items-center'>

                <motion.h2 initial='offscreen' whileInView={"onscreen"} variants={titleVariants}  className='px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl'>We are an award winning company</motion.h2>

                <motion.p  initial='offscreen' whileInView={"onscreen"} variants={desVariants} className=' px-12 text-xl tracking-wider uppercase text-gray-500 mt-3'>Excellence in Interior Innovation 2024</motion.p>

                <motion.p  initial='offscreen' whileInView={"onscreen"} variants={tagVariants}  className='px-12 pb-4 mt-4'>This award is given to our company for its outstanding creativity and innovation in interior design, transforming spaces with unique, sophisticated, and functional solutions that enhance aesthetic appeal and improve quality of life for our clients.</motion.p>

                <motion.p  initial='offscreen' whileInView={"onscreen"} variants={tagVariants}   className='px-12 pb-4' >Our dedication to quality and meticulous attention to detail have earned us recognition. By consistently delivering aesthetically pleasing and functional interiors, we have not only satisfied our clients but also inspired the industry, making us a leader in interior design innovation.</motion.p>

            </div>
        </div>
    </div>
  )
}

export default AboutComponent