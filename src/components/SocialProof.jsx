export default function SocialProof() {
  return (
    <section id="social" className="py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <p className="text-lg sm:text-xl">“BrightSites delivered a beautiful site that keeps getting better every month. The process is simple and the support is excellent.”</p>
              <div className="mt-4 font-semibold">Alex Johnson</div>
              <div className="text-white/70 text-sm">Founder at NorthPeak</div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-white/70 text-sm">Trusted by teams at</div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Airtide','Peakly','Novafox','Cleric','Orbitel','Solance','Turner','Looply'].map((n) => (
                <div key={n} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center font-semibold tracking-wide">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
