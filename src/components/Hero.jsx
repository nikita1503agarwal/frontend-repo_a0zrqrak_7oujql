import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15),_transparent_60%)]" />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full grid lg:grid-cols-2 gap-10">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            Decode your dreams with AI clarity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl mx-auto lg:mx-0"
          >
            Dream Oracle interprets your dreams using advanced language models and psychology-informed prompts to surface meaning, emotions, and growth insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-[0_10px_40px_rgba(255,255,255,0.15)]">
              Start free
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 text-slate-300/80 text-sm"
          >
            No credit card required • Secure & private • Built for growth
          </motion.div>
        </div>

        <div className="relative hidden lg:block" aria-hidden>
          {/* Decorative gradient orbs */}
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 opacity-40 blur-3xl" />
          <div className="absolute bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-orange-400 via-purple-500 to-blue-500 opacity-40 blur-3xl" />
        </div>
      </div>

      {/* Gradient overlay to soften Spline, won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80" />
    </section>
  )
}
