import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#pillars' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Skills', href: '#skills' },
  { label: 'Impact', href: '#advocacy' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className={`font-semibold text-sm tracking-widest uppercase transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}
          style={{ color: scrolled ? '#0f172a' : 'white' }}>
          Hannah Amora
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-teal-500 ${
                scrolled ? 'text-slate-600' : 'text-white/80'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-sm font-semibold bg-teal-500 text-white hover:bg-teal-400 transition-colors"
          >
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden"
          style={{ color: scrolled ? '#0f172a' : 'white' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-teal-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-full text-sm font-semibold bg-teal-500 text-white text-center hover:bg-teal-400 transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
