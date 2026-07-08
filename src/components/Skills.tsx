import { Stethoscope, Settings, Wrench } from 'lucide-react';

type Category = {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
  skills: string[];
};

const categories: Category[] = [
  {
    id: 'healthcare',
    icon: Stethoscope,
    label: 'Healthcare Systems',
    description: 'Clinical platforms, compliance frameworks, and patient-facing operational infrastructure.',
    color: 'blue',
    skills: [
      'EHR/EMR Workflows',
      'HIPAA/PIPEDA Compliance',
      'Telehealth Platforms (Jane App)',
      'Patient Management Systems',
      'Clinical Workflow Optimization',
      'Patient Advocacy',
      'Virtual Team Management',
      'Quality Assurance',
    ],
  },
  {
    id: 'operations',
    icon: Settings,
    label: 'Operations & Methodologies',
    description: 'Process engineering, continuous improvement, and performance management frameworks.',
    color: 'teal',
    skills: [
      'Lean Six Sigma',
      'Process Mapping',
      'Quality Management Systems (QMS)',
      'Change Management',
      'Risk Assessment',
      'Continuous Improvement (KAIZEN)',
      'Standard Operating Procedures (SOPs)',
      'Performance Metrics',
    ],
  },
  {
    id: 'software',
    icon: Wrench,
    label: 'Software & Tools',
    description: 'Technology stack powering data analytics, reporting, and clinical administration.',
    color: 'emerald',
    skills: [
      'Google Workspace',
      'CRM Systems',
      'Data Analytics Tools',
      'Looker Studio',
      'Microsoft Office Suite',
      'Power BI',
      'SQL / BigQuery',
      'AppSheet (Low-Code)',
    ],
  },
];

const colorMap = {
  blue: {
    header: 'bg-blue-50 border-blue-100',
    icon: 'bg-blue-100 text-blue-600',
    chip: 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100',
    dot: 'bg-blue-500',
    title: 'text-blue-700',
  },
  teal: {
    header: 'bg-teal-50 border-teal-100',
    icon: 'bg-teal-100 text-teal-600',
    chip: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100',
    dot: 'bg-teal-500',
    title: 'text-teal-700',
  },
  emerald: {
    header: 'bg-emerald-50 border-emerald-100',
    icon: 'bg-emerald-100 text-emerald-600',
    chip: 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100',
    dot: 'bg-emerald-500',
    title: 'text-emerald-700',
  },
};

const coreCompetencies = [
  'Clinical Workflow Optimization',
  'Process Improvement',
  'HIPAA & PIPEDA Compliance',
  'Quality Assurance',
  'Patient Advocacy',
  'Virtual Team Management',
  'Cross-functional Team Leadership',
  'Stakeholder Management',
  'EHR/EMR Systems',
  'CRM Implementation',
  'Data Analytics & Dashboard Reporting',
  'Telehealth Platforms (Jane App)',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3">Competency Matrix</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            A comprehensive breakdown of technical capabilities across healthcare systems, operational methodologies, and software tools.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => {
            const c = colorMap[cat.color as keyof typeof colorMap];
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                {/* Card header */}
                <div className={`px-6 py-5 border-b ${c.header}`}>
                  <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center mb-3`}>
                    <Icon size={18} />
                  </div>
                  <h3 className={`font-bold text-base ${c.title} mb-1`}>{cat.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{cat.description}</p>
                </div>

                {/* Skill chips */}
                <div className="p-5 flex flex-wrap gap-2 flex-1 content-start">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-default ${c.chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core competencies full-width strip */}
        <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-5 text-center">Core Competencies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {coreCompetencies.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium hover:border-teal-300 hover:text-teal-700 transition-colors cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
