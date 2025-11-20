import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuShowcase from './components/MenuShowcase'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0B0B0B] text-white">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
