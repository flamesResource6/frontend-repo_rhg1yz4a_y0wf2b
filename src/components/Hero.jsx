import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop"
      >
        <source src="https://cdn.coverr.co/videos/coverr-plated-dish-2949/1080p.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0B0B0B]/50 to-[#0B0B0B]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-[clamp(36px,6vw,72px)] leading-tight font-semibold tracking-tight text-[#F5F2E9] font-serif"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Bespoke Catering for Extraordinary Occasions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-[#D5C28A]/90 text-lg sm:text-xl"
        >
          Weddings • Corporate Galas • Private Chef’s Table
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3 text-[#0B0B0B] bg-[#D5C28A] font-medium">
            <span className="relative z-10">Book a Tasting</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a href="#menu" className="inline-flex items-center gap-2 rounded-full px-7 py-3 border border-[#D5C28A]/50 text-[#F5F2E9] hover:bg-white/5 transition">
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Luxury grain */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(213,194,138,0.08), transparent 40%)' }} />
    </section>
  )
}

export default Hero
