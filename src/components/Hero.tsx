import { ArrowDown, Shield, BarChart2, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-300 text-xs font-semibold tracking-widest uppercase">Available for new engagements</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            The Strategic Bridge Between{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Clinical Systems
            </span>{' '}
            and Patient Care.
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
            Process-oriented Healthcare Operations Manager with 20+ years streamlining clinical workflows, ensuring HIPAA/PIPEDA compliance, and leading cross-functional teams.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-teal-500 text-white font-semibold text-sm hover:bg-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/25 active:scale-95"
            >
              Schedule a Consultation
            </a>
            <a
              href="#timeline"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
            >
              View Experience
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '90+', label: 'VAs Trained' },
              { value: '$590K', label: 'Medical Funds Secured' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-slate-400 text-xs tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo + badge cards */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Photo */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/73cd2f2b-7d6c-499b-a16b-ac7c147ecee0.jpeg"
                alt="Hannah Almira Amora"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge: HIPAA */}
            <div className="absolute -left-6 top-8 bg-white rounded-xl px-3 py-2.5 shadow-xl flex items-center gap-2 animate-float">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <Shield size={16} className="text-blue-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">HIPAA / PIPEDA</div>
                <div className="text-[10px] text-slate-400">Compliance Certified</div>
              </div>
            </div>

            {/* Floating badge: Power BI */}
            <div className="absolute -right-6 top-1/3 bg-white rounded-xl px-3 py-2.5 shadow-xl flex items-center gap-2 animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                <BarChart2 size={16} className="text-teal-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Power BI · SQL</div>
                <div className="text-[10px] text-slate-400">Data Intelligence</div>
              </div>
            </div>

            {/* Floating badge: Non-profit */}
            <div className="absolute -left-4 bottom-6 bg-white rounded-xl px-3 py-2.5 shadow-xl flex items-center gap-2 animate-float">
              <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
                <Heart size={16} className="text-rose-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">148 Lives</div>
                <div className="text-[10px] text-slate-400">Pediatric Surgeries Funded</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#pillars"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
