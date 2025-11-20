import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-[#D5C28A] font-semibold tracking-wide">Éclat Catering</a>
        <div className="hidden sm:flex items-center gap-6 text-[#F5F2E9]/90">
          <a href="#menu" className="hover:text-white transition">Menu</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="#contact" className="ml-4 rounded-full px-4 py-2 text-sm bg-[#D5C28A] text-[#0B0B0B]">Inquire</a>
      </nav>
    </header>
  )
}

export default Navbar
