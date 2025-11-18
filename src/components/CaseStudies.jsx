export default function CaseStudies() {
  const cases = [
    {
      title: "Ecommerce refresh",
      desc: "A conversion focused redesign that lifted sales and page speed.",
    },
    {
      title: "B2B lead engine",
      desc: "A clean story driven site with clear paths to book demos.",
    },
    {
      title: "Local brand launch",
      desc: "A polished presence for a new brand with great search visibility.",
    },
  ];
  return (
    <section id="work" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Recent work</h2>
          <p className="mt-4 text-slate-700 text-lg">A few examples of the outcomes our clients enjoy through WaaS.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-[28px] border border-slate-100 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-orange-200 via-rose-200 to-amber-200" />
              <div className="p-3">
                <div className="font-bold text-slate-900">{c.title}</div>
                <div className="text-slate-600 text-sm mt-1">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
