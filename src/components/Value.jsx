import { ShieldCheck, RefreshCcw, Clock, CreditCard } from "lucide-react";

const items = [
  {
    icon: CreditCard,
    title: "No large start cost",
    desc: "Start strong without the heavy up front investment and keep capital free for growth.",
  },
  {
    icon: Clock,
    title: "Predictable monthly pricing",
    desc: "A single subscription covers everything from hosting to improvements.",
  },
  {
    icon: RefreshCcw,
    title: "Always updated",
    desc: "Your site evolves with your business and stays fresh without extra bills.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous support",
    desc: "We monitor, secure and maintain your site so you can focus on your customers.",
  },
];

export default function Value() {
  return (
    <section id="value" className="relative py-24 bg-[#FFF4EA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Why WaaS is smarter</h2>
          <p className="mt-4 text-slate-700 text-lg">Skip slow projects and get an always improving website that adapts to your goals with clear and fair pricing.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl bg-white border border-orange-100 shadow-[0_10px_30px_rgba(255,107,0,0.08)] p-6 hover:shadow-[0_14px_40px_rgba(255,107,0,0.14)] hover:-translate-y-0.5 transition">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
