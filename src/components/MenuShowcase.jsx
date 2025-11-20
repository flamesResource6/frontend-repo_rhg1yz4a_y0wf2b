import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['Canapés', 'Mains', 'Desserts']

const MenuCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group relative rounded-2xl overflow-hidden bg-[#1A1A1A] border border-white/10"
  >
    {item.image_url && (
      <img src={item.image_url} alt={item.title} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
    )}
    <div className="p-5">
      <h4 className="text-[#F5F2E9] font-medium text-lg">{item.title}</h4>
      <p className="text-white/70 text-sm mt-1">{item.description}</p>
      {item.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-white/70 border border-white/10">{t}</span>
          ))}
        </div>
      ) : null}
    </div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
  </motion.div>
)

const MenuShowcase = () => {
  const [active, setActive] = useState('Canapés')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/menu`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchMenu()
  }, [])

  const filtered = items.filter(i => i.category === active)

  return (
    <section id="menu" className="relative py-20 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F2E9]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Signature Menu</h2>
            <p className="mt-2 text-white/70">A curated selection crafted for memorable experiences.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full border ${active===c? 'bg-[#D5C28A] text-[#0B0B0B] border-transparent':'border-white/10 text-white/80 hover:bg-white/5'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <MenuCard key={item.title + idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuShowcase
