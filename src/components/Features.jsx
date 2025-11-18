import { Brain, Sparkles, ShieldCheck, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    desc: 'Extract emotions, symbols, and archetypes using advanced language models tuned for dream analysis.'
  },
  {
    icon: Sparkles,
    title: 'Personalized Meanings',
    desc: 'Context-aware interpretations based on your history, mood, and recurring themes.'
  },
  {
    icon: ShieldCheck,
    title: 'Private & Secure',
    desc: 'Your dreams are encrypted in transit and at rest, with strict privacy controls.'
  },
  {
    icon: BarChart3,
    title: 'Growth Tracking',
    desc: 'Spot patterns over time with timelines, clusters, and sentiment trends.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What makes Dream Oracle different</h2>
          <p className="mt-4 text-slate-300/90 max-w-2xl mx-auto">A calm, focused interface with powerful analysis capabilities designed specifically for dreams.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
