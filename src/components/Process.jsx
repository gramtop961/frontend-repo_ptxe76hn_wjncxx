const steps = [
  {
    title: "Discover",
    text: "We learn about your goals and brand then outline the best path forward.",
  },
  {
    title: "Design",
    text: "We create a modern layout and content structure that tells your story.",
  },
  {
    title: "Build",
    text: "We develop, connect and prepare everything for launch and growth.",
  },
  {
    title: "Evolve",
    text: "We keep improving based on data and your changing priorities.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">How it works</h2>
          <p className="mt-4 text-slate-700 text-lg">From first chat to ongoing improvements the process is simple and guided.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition bg-gradient-to-b from-white to-slate-50">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-white font-extrabold">{i + 1}</div>
              <h3 className="mt-4 font-bold text-slate-900 text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
