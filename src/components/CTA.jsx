export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Ready to transform how you understand your dreams?</h3>
          <p className="mt-4 text-slate-300/90">Join thousands gaining clarity, confidence, and calm through nightly reflection.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold">Create your free account</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">Compare plans</a>
          </div>
        </div>
      </div>
    </section>
  )
}
