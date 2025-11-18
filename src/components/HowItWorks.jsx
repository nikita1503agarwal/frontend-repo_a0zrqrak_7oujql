import { ListChecks, MessageSquare, Compass } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">How it works</h2>
            <p className="mt-4 text-slate-300/90">A simple, guided flow that turns your nightly stories into actionable insights.</p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <ListChecks size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">1. Capture</h3>
              <p className="mt-2 text-slate-300/90 text-sm">Record your dream in the morning with optional mood, context, and tags to enrich interpretation.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <MessageSquare size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">2. Interpret</h3>
              <p className="mt-2 text-slate-300/90 text-sm">AI highlights symbols, emotions, Jungian archetypes, and possible meanings tailored to you.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <Compass size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">3. Integrate</h3>
              <p className="mt-2 text-slate-300/90 text-sm">Turn insights into small experiments, reflections, and goals. Track themes and growth over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
