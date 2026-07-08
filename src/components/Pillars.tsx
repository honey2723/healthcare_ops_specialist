import { Shield, BarChart2, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    color: 'blue',
    tag: 'Pillar 01',
    title: 'Compliance Rigor',
    subtitle: 'Zero-Risk Data Governance',
    body: 'Specialized in US and Canadian data privacy frameworks. Every workflow, onboarding process, and platform interaction is audited against HIPAA and PIPEDA standards — eliminating compliance exposure before it becomes a liability.',
    points: ['HIPAA Privacy & Security Auditing', 'PIPEDA Compliance (Canada)', 'Front-End Revenue Cycle Management', 'Cross-Border Billing Architecture (US vs. CA)'],
  },
  {
    icon: BarChart2,
    color: 'teal',
    tag: 'Pillar 02',
    title: 'Data Intelligence',
    subtitle: 'Industrial Engineering Precision',
    body: 'Industrial Engineering background applied directly to clinic operations. From KPI dashboards to SQL-integrated reporting, every process is mapped, measured, and optimized — compressing reporting cycles from days to hours.',
    points: ['Workflow Mapping & Lean Optimization', 'Power BI / Looker Studio Dashboards', 'SQL & BigQuery Data Pipelines', 'AppSheet Low-Code Applications'],
  },
  {
    icon: Heart,
    color: 'rose',
    tag: 'Pillar 03',
    title: 'Patient Advocacy',
    subtitle: 'A Decade of Global Health Leadership',
    body: 'Years of hands-on work with international healthcare organizations — from UN summits to global cardiology leadership forums — deliver communication skills that translate complex clinical situations into clear, compassionate patient interactions.',
    points: ['Healthcare Non-Profit Founding & Leadership', 'UN High-Level Meeting Representation', 'Patient Registry & Data Modeling', 'Stakeholder Management across 3 continents'],
  },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    border: 'border-blue-200',
    dot: 'bg-blue-500',
  },
  teal: {
    bg: 'bg-teal-50',
    icon: 'text-teal-600',
    badge: 'bg-teal-100 text-teal-700',
    border: 'border-teal-200',
    dot: 'bg-teal-500',
  },
  rose: {
    bg: 'bg-rose-50',
    icon: 'text-rose-500',
    badge: 'bg-rose-100 text-rose-700',
    border: 'border-rose-200',
    dot: 'bg-rose-500',
  },
};

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3">Why Hire Hannah</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Three Pillars of Excellence</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            What separates a premium healthcare VA from a general assistant: a rare combination of technical rigor, regulatory expertise, and deep human empathy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => {
            const c = colorMap[p.color as keyof typeof colorMap];
            const Icon = p.icon;
            return (
              <div
                key={p.tag}
                className={`bg-white rounded-2xl p-8 border ${c.border} hover:shadow-xl transition-shadow duration-300 flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={c.icon} />
                </div>

                <span className={`text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${c.badge} self-start mb-3`}>
                  {p.tag}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{p.title}</h3>
                <p className={`text-sm font-medium mb-4 ${c.icon}`}>{p.subtitle}</p>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{p.body}</p>

                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 shrink-0`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
