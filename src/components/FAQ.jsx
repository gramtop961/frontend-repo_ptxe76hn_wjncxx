const faqs = [
  {
    q: "What is Website as a Service?",
    a: "It is a subscription model where your website is designed, built, hosted and continuously improved for a monthly fee.",
  },
  {
    q: "Why is this better than a one time project?",
    a: "You avoid a large bill and get ongoing improvements, support and updates so the site keeps delivering value.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes you can cancel when you want. You can also switch plans as your needs change.",
  },
  {
    q: "How fast can we launch?",
    a: "Most sites launch in two to four weeks depending on scope and content readiness.",
  },
  {
    q: "Do you include content and images?",
    a: "We help with structure and guidance. You can provide content or we can add content support if needed.",
  },
  {
    q: "What about SEO and analytics?",
    a: "We set up technical SEO basics and analytics so you can track results and keep improving.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#FFF4EA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Questions and answers</h2>
          <p className="mt-4 text-slate-700 text-lg">Straight answers to common questions about the WaaS approach.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-3xl bg-white border border-orange-100 p-6 shadow-[0_10px_30px_rgba(255,107,0,0.08)]">
              <div className="font-bold text-slate-900">{f.q}</div>
              <div className="text-slate-600 mt-2 text-sm">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
