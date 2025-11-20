import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const run = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/testimonials`)
        const data = await res.json()
        setItems(data)
      } catch (e) { console.error(e) }
    }
    run()
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F2E9]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Words From Our Clients</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 text-white/90"
            >
              <p className="text-white/90">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/70">— {t.name}{t.title ? `, ${t.title}` : ''}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
