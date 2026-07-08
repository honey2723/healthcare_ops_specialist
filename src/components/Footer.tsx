export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Hannah Almira Amora. Healthcare Operations Manager.
        </p>
        <div className="flex items-center gap-4">
          {['#pillars', '#timeline', '#skills', '#advocacy', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="text-slate-500 text-xs capitalize hover:text-slate-300 transition-colors"
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
