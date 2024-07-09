"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'

import {TbArrowUpRight} from 'react-icons/tb'

import { motion, useScroll, useTransform } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'

const about = () => {

  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  }) 

  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])

  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className=' container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Who are we?</h1>
      </div>

      <div className='container'>
        <div className=' pt-4'>
          <motion.h2  initial='offscreen' whileInView={"onscreen"} variants={titleVariants}  className=' text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>We have great Ideas & Interior Designs</motion.h2>
          <motion.p initial='offscreen' whileInView={"onscreen"} variants={desVariants}  className=' text-2xl text-center font-medium pb-10 mt-5'>At Elegant Interiors, we specialize in transforming spaces into stunning, functional environments that reflect your unique style. With over a decade of experience, our team of dedicated designers excels in creating bespoke interiors for residential and commercial clients. We pride ourselves on our attention to detail, innovative designs, and exceptional customer service, ensuring that every project is a seamless and enjoyable experience from concept to completion.</motion.p>
        </div>
        <div className=' items-center lg:flex gap-x-8'>
          <motion.div style={{scale}} ref={ref} className=' w-full'>
            <Image src="/image/gallery1123.jpg" width={700} height={700} />
          </motion.div>
          <motion.div  initial='offscreen' whileInView={"onscreen"} variants={tagVariants} >
            <p className=' pb-8 tracking-wide mt-6'>Elegant Dwell is your go-to for bespoke interior design solutions. With a decade of expertise, we transform spaces into elegant, functional areas that reflect your personal style. Our team is committed to exceptional craftsmanship and personalized service, ensuring a smooth, enjoyable design experience. Let us bring your vision to life with creativity and precision...<br /><br />
            
            We blend creativity with functionality to craft unique spaces tailored to your needs. With years of experience, our skilled designers specialize in both residential and commercial projects. We focus on personalized service and innovative design solutions, ensuring every detail aligns with your vision. Trust us to transform your space into a stylish, practical environment you'll love.<br /><br />

            <span className=' text-xl font-extrabold tracking-tight'>Transforming your space into a stylish, practical environment you'll love is our mission.</span>
            </p>

            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">Read More <TbArrowUpRight className=' w-5 h-5 ml-2' /></Button> 
          </motion.div>
        </div>

        <div className=' lg:py-20'>
          <div className=' pt-8 pb-4'>
            <motion.h1  initial='offscreen' whileInView={"onscreen"} variants={titleVariants}  className=' text-4xl font-bold tracking-wider text-center uppercase'>Team</motion.h1>
          </div>

          <div className=' grid py-8 gap-20 lg:grid-cols-3'>
            <motion.div initial='offscreen' whileInView={"onscreen"} variants={titleVariants}  className='border-2 border-primary'>
              <div className=' p-4 text-center bg-gray-100 aspect-square dark:bg-red-500 -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile2.jpg" width={200} height={200} alt='' className=' mx-auto rounded-full' />
                <h2 className=' py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className=' text-sm'>
                  Creativity is the ability to generate, create, discover new ideas, solutions, and possibilties.
                </p>
              </div>
            </motion.div>

            <motion.div initial='offscreen' whileInView={"onscreen"} variants={desVariants}  className='border-2 border-primary'>
              <div className=' p-4 text-center bg-gray-100 aspect-square dark:bg-red-500 -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile1.jpg" width={200} height={200} alt='' className=' mx-auto rounded-full' />
                <h2 className=' py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className=' text-sm'>
                  Creativity is the ability to generate, create, discover new ideas, solutions, and possibilties.
                </p>
              </div>
            </motion.div>

            <motion.div initial='offscreen' whileInView={"onscreen"} variants={tagVariants}  className='border-2 border-primary'>
              <div className=' p-4 text-center bg-gray-100 aspect-square dark:bg-red-500 -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile3.jpg" width={200} height={200} alt='' className=' mx-auto rounded-full' />
                <h2 className=' py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className=' text-sm'>
                  Creativity is the ability to generate, create, discover new ideas, solutions, and possibilties.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default about