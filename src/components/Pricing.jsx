export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-300/90">Start free and upgrade when it becomes part of your routine.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold text-xl">Free</h3>
            <p className="mt-2 text-slate-300/90 text-sm">$0/mo</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200/90">
              <li>• 10 interpretations / month</li>
              <li>• Core insights & symbols</li>
              <li>• Private journal</li>
            </ul>
            <a href="#" className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-2 font-semibold w-full">Start free</a>
          </div>

          <div className="rounded-2xl border border-cyan-300/20 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_0_50px_rgba(34,211,238,0.15)]">
            <div className="inline-flex items-center text-xs uppercase tracking-wider text-cyan-300/80 border border-cyan-300/30 rounded-full px-2 py-0.5">Most popular</div>
            <h3 className="mt-3 text-white font-semibold text-xl">Pro</h3>
            <p className="mt-2 text-slate-300/90 text-sm">$12/mo</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200/90">
              <li>• Unlimited interpretations</li>
              <li>• Deeper archetype mapping</li>
              <li>• Trends, clusters, timelines</li>
              <li>• Export & integrations</li>
            </ul>
            <a href="#" className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-2 font-semibold w-full">Get Pro</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold text-xl">Team</h3>
            <p className="mt-2 text-slate-300/90 text-sm">$29/mo</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200/90">
              <li>• Pro for 5 members</li>
              <li>• Shared insights & themes</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-2 font-semibold w-full">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
