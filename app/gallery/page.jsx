const Gallery = () => {
  return (
    <div className=' container py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className=" flex flex-col gap-4">
        <div>
          <img src="/image/badroom.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
        <div>
          <img src="/image/gallery2.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
        <div>
          <img src="/image/gallery.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
      </div>

      <div className=" flex flex-col gap-4">
        <div>
          <img src="/image/swiper1.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
        <div>
          <img src="/image/gallery11.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
        <div>
          <img src="/image/living.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
      </div>

      <div className=" flex flex-col gap-4">
        <div>
          <img src="/image/gallery14.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
        <div>
          <img src="/image/gallery15.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
        <div>
          <img src="/image/gallery12.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
      </div>

      <div className=" flex flex-col gap-4">
        <div>
          <img src="/image/gallery7.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
        <div>
          <img src="/image/gallery11.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
        <div>
          <img src="/image/gallery3.jpg" alt="" className=" h-auto max-w-full rounded-lg hover:scale-90 transition-all" />
        </div>
      </div>
    </div>
  )
}

export default Gallery