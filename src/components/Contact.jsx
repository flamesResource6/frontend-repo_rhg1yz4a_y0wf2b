import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (res.ok) setStatus('Thank you — we will be in touch shortly.')
      else setStatus('Something went wrong. Please try again.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Unable to send right now. Please email us directly.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0B0B0B]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F2E9]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Begin Your Experience</h2>
        <p className="mt-2 text-white/70">Tell us about your event and we’ll curate a bespoke menu.</p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="name" required placeholder="Name" className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"/>
          <input name="email" type="email" required placeholder="Email" className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"/>
          <input name="phone" placeholder="Phone" className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"/>
          <input name="event_date" placeholder="Event Date" className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"/>
          <input name="guest_count" type="number" placeholder="Guest Count" className="bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"/>
          <div className="sm:col-span-2">
            <textarea name="message" rows="5" placeholder="Tell us more about your vision..." className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40"></textarea>
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[#0B0B0B] bg-[#D5C28A] font-medium">Request Proposal</button>
            <p className="text-sm text-white/70">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
