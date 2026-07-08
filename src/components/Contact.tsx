import { Mail, Phone, MapPin, Linkedin, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  'Clinical Inbox & Calendar Management',
  'HIPAA / PIPEDA Compliance Auditing',
  'Revenue Cycle Management Support',
  'KPI Dashboard Engineering',
  'Compliance Training Facilitation',
  'Data Governance & Workflow Optimization',
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Let's Work Together</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to optimize your clinic operations?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-lg">
            Let's connect and build the operational infrastructure your practice deserves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Services + contact info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Services Available</h3>
            <ul className="space-y-3 mb-10">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle size={15} className="text-teal-400 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <a
                href="mailto:hyamora@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <Mail size={16} className="text-teal-400" />
                </div>
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">hyamora@gmail.com</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone size={16} className="text-teal-400" />
                </div>
                <span className="text-slate-300 text-sm">+63 922 827 2382</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin size={16} className="text-teal-400" />
                </div>
                <span className="text-slate-300 text-sm">Cebu City, Philippines · Available Globally</span>
              </div>

              <a
                href="https://linkedin.com/in/hannahamora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin size={16} className="text-blue-400" />
                </div>
                <span className="text-slate-300 text-sm group-hover:text-white transition-colors">linkedin.com/in/hannahamora</span>
              </a>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-white font-bold text-xl mb-2">Start a Conversation</h3>
            <p className="text-slate-400 text-sm mb-7 leading-relaxed">
              Whether you run a telehealth startup, a private clinic, or a multi-practitioner office — I help you build the operational backbone so you can focus entirely on patient care.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-teal-400 font-semibold uppercase tracking-wide mb-1">Immediate Availability</p>
                <p className="text-slate-200 text-sm">Currently accepting new engagements for Q2 2026. US & Canadian timezone coverage available.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wide mb-1">Engagement Types</p>
                <p className="text-slate-200 text-sm">Project-based, part-time retainer, or full-time virtual operations partner.</p>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hyamora@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-teal-500 text-white font-semibold text-sm hover:bg-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/25 group"
              >
                Send an Email
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/hannahamora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
