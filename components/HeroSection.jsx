import Image from "next/image";
import { Button } from "./ui/button"
import { TbArrowUpRight } from "react-icons/tb";

const HeroSection = () => {
  return (
    <div className='container py-12 xl:py-24 h-auto text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
      <div className=' lg:w-1/2 xl:py-14 lg:py-8'>

        <p className=' tracking-widest uppercase'>Offers for Best Interior</p>

        <h1 className='h1'>
          Make your home a <br /> piece of art
        </h1>

        <p className='pb-6 text-muted-foreground xl:pb-10 '>Transform your living space with our exquisite home decor collections. Discover the beauty of thoughtfully curated interiors that reflect your personal style and create a sanctuary of comfort and elegance. Elevate your home with timeless pieces that bring warmth and sophistication to every room.</p>

        <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
          BOOK NOW <TbArrowUpRight className="w-5 h-5 ml-2 " />
        </Button>

      </div>

      <div className=' w-1/2'>
        <Image src="/image/hall.png" width={800} height={500} alt="" className=" absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block" />
      </div>

    </div>
  )
}

export default HeroSection