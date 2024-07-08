import Image from 'next/image'
import { TbArrowNarrowRight } from 'react-icons/tb'

const CatalogueSection = () => {

    const items = [
        {
            id: "01",
            category: "BEDROOM SETUP",
            title: "Cossy Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "A serene, minimalist bedroom with soft tones, natural light, and cozy furnishings."
        },
        {
            id: "02",
            category: "KITCHEN SETUP",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "A modern, functional kitchen with sleek cabinetry, ample storage, and state-of-the-art appliances."
        },
        {
            id: "03",
            category: "DROWING SETUP",
            title: "Family Drowing Room",
            image: "/image/drowing.jpg",
            description: "A stylish, inviting living room with comfortable seating, elegant décor, and warm lighting."
        },
        {
            id: "04",
            category: "LIVING SETUP",
            title: "Clean Family Room",
            image: "/image/living.jpg",
            description: "A contemporary living room featuring chic furnishings, vibrant accents, and an open layout."
        }
    ]

  return (
    <div className=' grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x'>
        {
            items.map((item)=>(
                <div key={item.id} className=' relative overflow-hidden group'>
                    <div className=''>
                        <Image src={item.image} alt="" width={380} height={100} className=' w-full' />
                    </div>

                    <div className=' absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12'>
                        <div className=' flex justify-between pb-4'>
                            <p className=' text-sm'>{item.category}</p>
                            <span className=' text-sm'>{item.id}</span>
                        </div>
                        <a className=' block text-xl font-semibold' href="">{item.title}</a>
                        <p className=' py-4'>{item.description}</p>

                        <a className=' inline-flex items-center font-medium' href="">See Details <TbArrowNarrowRight className=' ml-2' /></a>
                    </div>

                    <div className=' inset-0 bg-red-500 flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-2xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden'>
                        <p className=' tracking-wider -rotate-90'>{item.category}</p>
                        <span>{item.id}</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CatalogueSection