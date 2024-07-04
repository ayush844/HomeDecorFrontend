"use client"

import React from 'react'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import MobileNavigation from './MobileNavigation'

const Header = () => {
  return (
    <header>
      <div className=' container mx-0 sm:mx-auto py-0 sm:py-2'>
        <div className='flex items-center justify-between gap-2'>
          {/* LOGO */}
          <Logo />
          <div className='flex items-center gap-x-6'>

            {/* NAV options */}
            <Nav containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all' underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />

            {/* THEME TOGGLE */}
            <ThemeToggler  />

            {/* Mobile Nav options */}
            <div className=' xl:hidden'>
              <MobileNavigation />
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header