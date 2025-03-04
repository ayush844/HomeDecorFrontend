"use client"

import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"

const ThemeToggler = () => {

    const {theme, setTheme} = useTheme();

  return (
    <div>
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark') }>
            <SunIcon className=" h-[0.9rem] w-[0.9rem] sm:h-[1.2rem] sm:w-[1.2rem] scale-0 rotate-90 transition-all dark:rotate-0 dark:scale-100"/>
            <MoonIcon className=" h-[0.9rem] w-[0.9rem] sm:h-[1.2rem] sm:w-[1.2rem] absolute scale-100 rotate-0 transition-all dark:rotate-90 dark:scale-0"/>
        </Button>
    </div>
  )
}

export default ThemeToggler


// scale-0 rotate-90 transition-all dark:rotate-0 dark:scale-100

// scale-100 rotate-0 transition-all dark:rotate-90 dark:scale-0