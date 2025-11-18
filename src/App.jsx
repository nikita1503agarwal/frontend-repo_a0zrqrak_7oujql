import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Starry subtle background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(59,130,246,0.07),_transparent_30%),_radial-gradient(circle_at_80%_10%,_rgba(168,85,247,0.07),_transparent_30%),_radial-gradient(circle_at_50%_80%,_rgba(236,72,153,0.06),_transparent_30%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Dream Oracle AI. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
