import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

type Role = {
  id: string;
  period: string;
  status?: 'current';
  title: string;
  org: string;
  location: string;
  category: 'healthcare' | 'data' | 'leadership';
  bullets: string[];
};

const roles: Role[] = [
  {
    id: 'retreat',
    period: 'Feb 2026 – Jun 2026',
    title: 'Clinical Operations Coordinator',
    org: 'RETREAT Counselling',
    location: 'Canada · Remote',
    category: 'healthcare',
    bullets: [
      'Coordinated day-to-day operations between the CEO, clinical staff, and administrative teams for a fast-growing mental health practice.',
      'Implemented a patient management CRM system, improving appointment scheduling efficiency by 60%.',
      'Conducted rigorous compliance audits, ensuring strict adherence to Canadian healthcare privacy regulations (PIPEDA).',
      'Developed standardized operating procedures (SOPs) that reduced staff onboarding time by 50%.',
      'Streamlined clinical documentation workflows, significantly reducing the administrative burden on therapists.',
    ],
  },
  {
    id: 'brightroot',
    period: 'Feb 2026 – Present',
    status: 'current',
    title: 'Healthcare Training Specialist',
    org: 'BrightRoot VA',
    location: 'Remote',
    category: 'healthcare',
    bullets: [
      'Standardized compliance protocols by designing and facilitating HIPAA & PIPEDA training for over 90 healthcare virtual assistants.',
      'Improved operational quality by establishing performance metrics and gamified assessments to ensure high levels of data privacy comprehension.',
      'Drove clinical support excellence by monitoring trainee performance and reinforcing security standards across all cohorts.',
    ],
  },
  {
    id: 'bantay',
    period: 'Feb 2026 – Present',
    status: 'current',
    title: 'Impact & Data Intelligence Lead',
    org: 'Project Bantay Bayan',
    location: 'Philippines · Remote',
    category: 'data',
    bullets: [
      'Appointed interim council member, leading data governance policy formulation during regulatory registration.',
      'Establish workflow controls and data integrity frameworks for the entity\'s operational launch.',
    ],
  },
  {
    id: 'rafi-lead',
    period: 'Feb 2023 – Jul 2025',
    title: 'Operations Excellence Lead',
    org: 'Ramon Aboitiz Foundation, Inc.',
    location: 'Cebu, Philippines',
    category: 'data',
    bullets: [
      'Led organizational transformation initiatives impacting 21 business units and over 500 employees.',
      'Established a comprehensive service delivery framework that improved operational efficiency by 80%.',
      'Designed and executed training programs for over 100 staff members on operational best practices.',
    ],
  },
  {
    id: 'rafi-senior',
    period: 'Oct 2022 – Feb 2023',
    title: 'Senior Operations Officer',
    org: 'Ramon Aboitiz Foundation, Inc.',
    location: 'Cebu, Philippines',
    category: 'data',
    bullets: [
      'Optimized reporting processes, reducing data turnaround time from 5 days down to just 1 day.',
      'Implemented rigorous quality control measures ensuring data accuracy, reporting integrity, and compliance.',
      'Coordinated with multiple departments to standardize operational procedures across the organization.',
    ],
  },
  {
    id: 'springrain',
    period: 'Oct 2020 – Dec 2021',
    title: 'Database Operations Manager',
    org: 'Spring Rain Global',
    location: 'Remote',
    category: 'data',
    bullets: [
      'Led the digital transformation and modernization of healthcare documentation systems.',
      'Managed quality assurance (QA) for the end-to-end implementation of specialized healthcare management software.',
      'Achieved 80% digitalization of clinical and operational documents, eliminating legacy paper trails.',
      'Ensured the successful launch of 13 healthcare modules within strict timeline and budget constraints.',
    ],
  },
  {
    id: 'letitecho',
    period: 'Dec 2012 – Jul 2018',
    title: 'President & Founding Patient Advocate',
    org: 'Let It Echo, Inc.',
    location: 'Philippines (International reach)',
    category: 'leadership',
    bullets: [
      'Founded non-profit supporting Congenital Heart Defect families — managed healthcare stakeholders internationally.',
      'Represented patient advocates at the 1st Congenital Heart Leadership Summit (Barcelona) and UN 3rd High-Level Meeting (New York).',
      'Secured $590,000 USD in medical partnerships funding life-saving surgeries for 148 pediatric patients.',
    ],
  },
];

const categoryColors = {
  healthcare: { label: 'Healthcare', dot: 'bg-blue-500', tag: 'bg-blue-100 text-blue-700' },
  data: { label: 'Data & Tech', dot: 'bg-teal-500', tag: 'bg-teal-100 text-teal-700' },
  leadership: { label: 'Leadership', dot: 'bg-rose-500', tag: 'bg-rose-100 text-rose-700' },
};

function RoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(role.status === 'current');
  const c = categoryColors[role.category];

  return (
    <div className={`relative bg-white rounded-xl border transition-all duration-200 ${expanded ? 'border-slate-200 shadow-md' : 'border-slate-100 hover:border-slate-200 hover:shadow-sm'}`}>
      <button
        className="w-full text-left px-6 py-5 flex items-start gap-4"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${role.status === 'current' ? 'bg-teal-50' : 'bg-slate-50'}`}>
          <Briefcase size={16} className={role.status === 'current' ? 'text-teal-600' : 'text-slate-400'} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.tag}`}>{c.label}</span>
            {role.status === 'current' && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                Active
              </span>
            )}
          </div>
          <h3 className="font-bold text-slate-900 text-base leading-snug">{role.title}</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
            <span className="text-sm text-teal-600 font-medium">{role.org}</span>
            <span className="text-slate-400 text-sm">{role.location}</span>
          </div>
          <p className="text-slate-400 text-xs mt-1">{role.period}</p>
        </div>

        <div className="shrink-0 mt-1 text-slate-400">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-5 pt-0 border-t border-slate-50">
          <ul className="space-y-2 mt-4">
            {role.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 shrink-0`} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Timeline() {
  const [filter, setFilter] = useState<'all' | 'healthcare' | 'data' | 'leadership'>('all');

  const filtered = filter === 'all' ? roles : roles.filter((r) => r.category === filter);

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3">Career Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Two decades of operational excellence across healthcare, data governance, and patient advocacy.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(['all', 'healthcare', 'data', 'leadership'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize ${
                filter === f
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {f === 'all' ? 'All Roles' : categoryColors[f].label}
            </button>
          ))}
        </div>

        {/* Timeline line + cards */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-100 hidden sm:block" />
          <div className="space-y-4 sm:pl-0">
            {filtered.map((role) => (
              <div key={role.id} className="relative sm:pl-14">
                <div className="hidden sm:flex absolute left-0 top-5 w-10 h-10 rounded-full border-4 border-white bg-slate-50 items-center justify-center">
                  <span className={`w-3 h-3 rounded-full ${categoryColors[role.category].dot}`} />
                </div>
                <RoleCard role={role} />
              </div>
            ))}
          </div>
        </div>

        {/* Education callout */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
              <ExternalLink size={16} className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Education & Certifications</h4>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                {[
                  'BS Industrial Engineering — University of San Carlos | Concentration in Operations Management and Process Optimization',
                  'Data Analytics Certificate — Eskwelabs | Focus on healthcare data analysis and operational metrics',
                  'Lean Six Sigma Green Belt',
                  'HIPAA & PIPEDA Compliance Awareness Training',
                  'Gen AI 3-Day Training',
                  'Reports Automation and Data Visuals',
                  'Google Data Studio Dashboard Development',
                ].map((e) => (
                  <div key={e} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
