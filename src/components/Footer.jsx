const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-white/60">© {new Date().getFullYear()} Éclat Catering. All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
          <a href="#" aria-label="Pinterest" className="hover:text-white">Pinterest</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
