import { Palette, Code2, Server, Wrench, Shield, Search, Headphones } from "lucide-react";

const features = [
  { icon: Palette, title: "Design", text: "Custom design that fits your brand with attention to detail and clarity." },
  { icon: Code2, title: "Development", text: "Modern stack, fast performance and clean semantic structure." },
  { icon: Server, title: "Hosting", text: "Global hosting with CDN and backups for speed and reliability." },
  { icon: Wrench, title: "Maintenance", text: "Improvements and updates included so your site keeps getting better." },
  { icon: Shield, title: "Security", text: "Monitoring, patches and best practices to keep things safe." },
  { icon: Search, title: "SEO", text: "Technical fundamentals and guidance so you can be discovered." },
  { icon: Headphones, title: "Support", text: "Friendly responsive help when you need it by people who care." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Everything you need is included</h2>
          <p className="mt-4 text-slate-700 text-lg">Your subscription bundles all the essentials so your website stays fast, secure and effective.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
