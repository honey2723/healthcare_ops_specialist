import { Heart, Globe, Users, DollarSign, Award, Mic } from 'lucide-react';

const stats = [
  { icon: DollarSign, value: '$590K', label: 'USD Clinical Investment Secured', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Users, value: '148', label: 'Pediatric Surgeries Funded', color: 'text-rose-500', bg: 'bg-rose-50' },
  { icon: Globe, value: '9', label: 'Major Public Events Organized', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Award, value: '1', label: 'Guinness World Record Attempt', color: 'text-amber-600', bg: 'bg-amber-50' },
];

const stages = [
  {
    icon: Mic,
    event: '1st Congenital Heart Leadership Summit',
    location: 'Barcelona, Spain',
    detail: 'Represented patient and caregiver perspectives on the global cardiac care stage alongside international cardiologists.',
  },
  {
    icon: Globe,
    event: "UN 3rd High-Level Meeting on NCDs",
    location: 'New York City, USA',
    detail: "Advocated for pediatric congenital heart patients at the United Nations' global non-communicable disease forum.",
  },
];

export default function Advocacy() {
  return (
    <section id="advocacy" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-rose-500 text-sm font-semibold tracking-widest uppercase mb-3">Community Impact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Advocacy & Patient Impact</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Founded <span className="font-semibold text-slate-700">Let It Echo, Inc.</span> — a non-profit dedicated to families living with Congenital Heart Defects. A decade of advocacy that reached international healthcare stages and changed 148 lives.
          </p>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-slate-50 rounded-2xl p-5 flex flex-col items-center text-center border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                  <Icon size={20} className={s.color} />
                </div>
                <div className={`text-2xl font-extrabold mb-1 ${s.color}`}>{s.value}</div>
                <div className="text-xs text-slate-500 leading-tight">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main feature card */}
        <div className="rounded-2xl overflow-hidden border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-slate-50 mb-10">
          <div className="p-8 sm:p-10">
            <div className="flex items-start gap-5 mb-7">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center shrink-0">
                <Heart size={26} className="text-rose-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Let It Echo, Inc.</h3>
                <p className="text-slate-500 text-sm">Founded December 2012 · Active until July 2018</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Mission & Operations</h4>
                <ul className="space-y-2.5">
                  {[
                    'Built and managed a community registry database for healthcare research and data-backed medical resource narratives.',
                    'Developed stakeholder management relationships across national and international healthcare institutions.',
                    'Organized 9 large-scale public events, mobilizing volunteer networks and civic groups.',
                    'Secured a landmark medical partnership funding 148 pediatric open-heart surgeries.',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Clinical Investment Breakdown</h4>
                <div className="bg-white rounded-xl border border-rose-100 p-5 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Medical Partnership Secured</span>
                      <span className="font-bold text-slate-900">$590,000 USD</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-rose-100">
                      <div className="h-full rounded-full bg-rose-400" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Surgeries Funded</span>
                      <span className="font-bold text-slate-900">148 Patients</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-rose-100">
                      <div className="h-full rounded-full bg-rose-300" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 pt-1">All patients: pediatric Congenital Heart Defect cases requiring surgical intervention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* International stages */}
        <div>
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5 text-center">International Representation</h4>
          <div className="grid sm:grid-cols-2 gap-5">
            {stages.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.event} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex gap-4 hover:shadow-sm transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm leading-snug mb-0.5">{s.event}</p>
                    <p className="text-xs text-teal-600 font-medium mb-2">{s.location}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
