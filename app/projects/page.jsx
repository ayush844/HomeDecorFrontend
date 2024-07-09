import Image from "next/image"

const projects = [
  {
    id: 1,
    name: 'Drawing room for family time',
    description: 'Bedroom with a clean and comfortable design for your family. Charming whit a modern design.',
    image: '/image/project3.jpg',
    link: ''
  },
  {
    id: 2,
    name: 'Elegant Kitchen Space',
    description: 'A sleek and modern kitchen designed for functionality and style. Perfect for cooking and entertaining.',
    image: '/image/project2.jpg',
    link: ''
},
{
    id: 3,
    name: 'Cozy Bedroom Retreat',
    description: 'A warm and inviting bedroom designed for relaxation. Features a contemporary design with comfortable furnishings.',
    image: '/image/project.jpg',
    link: ''
}
]

const Projects = () => {
  return (
    <div>
      <div className=" bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className=" container py-64 text-6xl font-semibold tracking-widest text-white">Our Projects</h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {
          projects.map((project)=>(
            <div key={project.id} className=" relative overflow-hidden rounded-xl group">
              <div>
                <Image src={project.image} width={480} height={380} alt="" className="w-full" />
              </div>
              <div className=" absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
                <h1 className=" text-2xl font-semibold">{project.name}</h1>
                <p className="py-4">{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects