import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  focusArea: string;
  quote: string;
  name: string;
  organization: string;
  jobTitle: string;
}

const testimonials: Testimonial[] = [
  {
    focusArea: 'Compliance, Data Integrity & Workforce Management',
    quote:
      'Hannah successfully managed a team of 13–15 interns, overseeing both the onboarding of new team members and the offboarding of departing interns. She ensured all processes remained compliant, maintained the security and integrity of sensitive client and organizational data, and created a seamless experience for everyone involved.',
    name: 'Rhian Lois Evans Wight',
    organization: 'Retreat Counselling',
    jobTitle: 'CEO',
  },
  {
    focusArea: 'Data Intelligence & Strategic Action',
    quote:
      'She has an analytical mind, a strong grasp of complex data, and the critical thinking skills to transform information into meaningful strategies. Under her leadership, our data initiatives became clearer and actionable, often driving decisions at both the department and at organization-level.',
    name: 'Christian M. Anuta',
    organization: 'Ramon Aboitiz Foundation, Inc.',
    jobTitle: 'Program Excellence Director',
  },
  {
    focusArea: 'Healthcare Domain Knowledge & Strategic Advocacy',
    quote:
      "She's caring, informed, smart, driven and asks insightful questions and would contribute to the richness of the discussions and interactions… Ms. Amora has long been a patient advocate for high-quality care… She will bring experience, creativity, and strategic thinking.",
    name: 'Bistra Zheleva',
    organization: "Children's HeartLink",
    jobTitle: 'VP of Global Strategy & Advocacy',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigate = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => {
      setActive(next);
      setVisible(true);
    }, 280);
  }, []);

  const prev = () => navigate((active - 1 + testimonials.length) % testimonials.length);
  const next = () => navigate((active + 1) % testimonials.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigate((active - 1 + testimonials.length) % testimonials.length);
      }
      if (e.key === 'ArrowRight') {
        navigate((active + 1) % testimonials.length);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, navigate]);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-3">Peer Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Others Say</h2>
        </div>

        {/* Card */}
        <div className="relative">
          <div
            className="bg-slate-50 border border-slate-200 rounded-2xl px-8 py-10 sm:px-12 sm:py-12 shadow-sm transition-all duration-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)' }}
          >
            {/* Focus area badge */}
            <div className="mb-7 text-center">
              <span className="inline-block px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-xs font-semibold tracking-widest uppercase text-teal-700">
                {t.focusArea}
              </span>
            </div>

            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <Quote size={28} className="text-teal-400 rotate-180" />
            </div>

            {/* Quote text */}
            <blockquote className="text-slate-700 text-lg sm:text-xl leading-relaxed text-center italic mb-8">
              "{t.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="text-center border-t border-slate-200 pt-6">
              <p className="font-bold text-slate-900 text-base">{t.name}</p>
              <p className="text-slate-500 text-sm mt-0.5">
                {t.jobTitle} &mdash; {t.organization}
              </p>
            </div>
          </div>

          {/* Navigation arrows — outside the card on wide screens */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-8" role="tablist" aria-label="Testimonial indicators">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => navigate(i)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${
                i === active ? 'w-6 bg-teal-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Count label */}
        <p className="text-center text-slate-400 text-xs mt-4 tabular-nums">
          {active + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
}
