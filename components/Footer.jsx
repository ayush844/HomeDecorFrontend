"use client"

import Link from 'next/link'
import { Input } from './ui/input'

import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'



const Footer = () => {
  return (
    <div className=' bg-red-500'>
      <div className=' container lg:grid lg:grid-cols-2 py-14'>
        <div className=' grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3'>
          <motion.div  initial='offscreen' whileInView={"onscreen"} variants={titleVariants} >
            <h2 className=' pb-4 text-xl font-semibold uppercase'>Company</h2>
            <div className=' flex flex-col'>
              <Link href="/" className='py-1 hover:underline'>About Us</Link>
              <Link href="/" className='py-1 hover:underline'>Press</Link>
              <Link href="/" className='py-1 hover:underline'>Careers</Link>
              <Link href="/" className='py-1 hover:underline'>Contacts</Link>
            </div>
          </motion.div>
          <motion.div initial='offscreen' whileInView={"onscreen"} variants={desVariants} >
            <h2 className=' pb-4 text-xl font-semibold uppercase'>Development</h2>
            <div className=' flex flex-col'>
              <Link href="/" className='py-1 hover:underline'>Documentation</Link>
              <Link href="/" className='py-1 hover:underline'>Reference</Link>
              <Link href="/" className='py-1 hover:underline'>Changelog</Link>
              <Link href="/" className='py-1 hover:underline'>Status</Link>
            </div>
          </motion.div>
          <motion.div  initial='offscreen' whileInView={"onscreen"} variants={tagVariants} >
            <h2 className=' pb-4 text-xl font-semibold uppercase'>Connect</h2>
            <div className=' flex flex-col'>
              <Link href="/" className='py-1 hover:underline'>Instagram</Link>
              <Link href="/" className='py-1 hover:underline'>Twitter</Link>
              <Link href="/" className='py-1 hover:underline'>Linkedin</Link>
              <Link href="/" className='py-1 hover:underline'>Facebook</Link>
            </div>
          </motion.div>
        </div>

        <motion.div  initial='offscreen' whileInView={"onscreen"} variants={titleVariants} >
          <p className=' pb-4 text-xl font-semibold'>Stay Updated</p>
          <div className='relative lg:max-w-sm'>
            <Input type="name" id="first name" placeholder="Email Address" />
            <button className=' absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary'>Subscribe</button>
          </div>
          <p className=' pt-4 text-gray-800'>
            By subscribing to our newsletter, you agree to recieve email from us. Your personal data will be stored and proccessed in accordance with our privacy policy and you can unsubscribe at any time.
          </p>
        </motion.div>
      </div>

      {}

    </div>
  )
}

export default Footer