const plans = [
  {
    name: "Starter",
    price: "$99/mo",
    tagline: "Launch fast with the essentials",
    features: [
      "Custom single page",
      "Hosting and CDN",
      "Basic SEO setup",
      "Email support",
    ],
    cta: "Start Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$199/mo",
    tagline: "Best for growing brands",
    features: [
      "Up to 8 pages",
      "Blog or updates section",
      "Performance and analytics",
      "Priority support",
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$399/mo",
    tagline: "All inclusive for scale",
    features: [
      "Unlimited pages",
      "Advanced integrations",
      "A/B experiments",
      "Dedicated success manager",
    ],
    cta: "Go Scale",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#FFF4EA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Simple plans built for clarity</h2>
          <p className="mt-4 text-slate-700 text-lg">Fair transparent pricing without hidden fees. Cancel any time.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`${plan.highlighted ? 'bg-gradient-to-b from-orange-500 to-rose-500 text-white' : 'bg-white text-slate-900'} rounded-3xl border ${plan.highlighted ? 'border-transparent shadow-[0_20px_50px_rgba(255,107,0,0.35)]' : 'border-orange-100 shadow-[0_10px_30px_rgba(255,107,0,0.08)]'} p-6 flex flex-col`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-extrabold tracking-tight">{plan.name}</h3>
                <div className="text-3xl font-extrabold">{plan.price}</div>
              </div>
              <p className={`mt-1 ${plan.highlighted ? 'text-white/90' : 'text-slate-600'} text-sm`}>{plan.tagline}</p>
              <ul className={`mt-6 space-y-3 text-sm ${plan.highlighted ? 'text-white' : 'text-slate-700'}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 items-start">
                    <span className={`mt-1 inline-block h-2 w-2 rounded-full ${plan.highlighted ? 'bg-white' : 'bg-orange-500'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contact" className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold ${plan.highlighted ? 'bg-white text-slate-900 hover:bg-orange-50' : 'bg-slate-900 text-white hover:bg-slate-800'} transition`}>
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
