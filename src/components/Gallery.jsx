import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const run = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/gallery`)
        const data = await res.json()
        setImages(data)
      } catch (e) { console.error(e) }
    }
    run()
  }, [])

  return (
    <section id="gallery" className="py-20 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F2E9]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Gallery</h2>
        <p className="mt-2 text-white/70">A glimpse into our craft.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <img src={img.url} alt={img.alt || 'gallery'} className="w-full h-48 md:h-56 object-cover hover:scale-105 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
