import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[86vh] w-full bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-orange-600/40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="grid lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur-md border border-white/20 mb-6">
              <span className="h-2 w-2 rounded-full bg-lime-300 animate-pulse" />
              <span>Website as a Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-sm">
              Subscription websites that grow with your business
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl">
              Launch a premium site without a large start cost. One predictable monthly fee covers design, development, hosting and ongoing improvements.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="inline-flex items-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition">
                View pricing
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-black/30 text-white px-6 py-3 font-semibold border border-white/20 hover:bg-black/40 transition">
                Book a consultation
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                ['Predictable', 'pricing'],
                ['Always', 'updated'],
                ['Ongoing', 'support'],
                ['SEO', 'ready'],
              ].map(([a,b]) => (
                <div key={a} className="rounded-2xl bg-white/10 border border-white/20 p-3 text-sm text-white/90 backdrop-blur-md">
                  <div className="font-bold">{a}</div>
                  <div className="text-white/80">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[28px] bg-white/10 border border-white/20 backdrop-blur-md p-6 shadow-2xl">
              <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-orange-200 to-rose-200 shadow-inner" />
              <div className="mt-4 text-white/90 text-sm">
                Clean modern design with fast performance and SEO best practices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
