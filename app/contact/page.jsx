"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { TbArrowUpRight } from "react-icons/tb"
import { useState } from "react"


function classNames(...classes){
  return classes.filter(Boolean).join(' ')
}


const Contact = () => {

  const [agreed, setAgreed] = useState(false);

  return (
    <div className=" px-6 py-24 sm:py-32 lg:px-8">
      <div className=" mx-auto max-w-2xl text-center">
        <h2 className=" text-3xl font-bold tracking-tight sm:text-4xl">Contact Sales</h2>
        <p className=" mt-2 text-lg leading-8 text-muted-foreground">Please feel free to ask anything</p>
      </div>
      <form className=" mx-auto mt-16 max-w-xl sm:mt-20">
        <div className=" grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className=" mt-2.5">
            <Input type='name' id="firstname" placeholder="First Name" />
          </div>
          <div className=" mt-2.5">
            <Input type='name' id="lastname" placeholder="Last Name" />
          </div>
          <div className="sm:col-span-2">
            <div className=" mt-2.5">
              <Input type='name' id="Company" placeholder="Company" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className=" mt-2.5">
              <Textarea placeholder="Type Your Message Here..." />
            </div>
          </div>

          <div className="mt-10">
            <Button type="submit" className=" flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" > Let's Talk <TbArrowUpRight className=" w-5 h-5 ml-2" /></Button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Contact