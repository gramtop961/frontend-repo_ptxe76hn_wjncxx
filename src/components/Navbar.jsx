import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#value", label: "Value" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#process", label: "Process" },
    { href: "#work", label: "Work" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 shadow-inner"></div>
              <span className="font-extrabold tracking-tight text-white text-lg">BrightSites</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition">Get Started</a>
            </nav>
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              <Menu size={24} />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 bg-white/5 text-white/90 hover:bg-white/10 transition text-sm">
                    {item.label}
                  </a>
                ))}
                <a href="#pricing" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 bg-white text-slate-900 font-semibold text-center">Get Started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
