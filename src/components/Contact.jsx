export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Book a consultation</h2>
            <p className="mt-4 text-slate-700 text-lg">Tell us about your goals and we will reply with next steps and a suggested plan.</p>
            <div className="mt-8 rounded-3xl bg-[#FFF4EA] border border-orange-100 p-6">
              <ul className="space-y-3 text-slate-700 text-sm">
                <li>• Fast response and friendly guidance</li>
                <li>• Clear recommendations and no pressure</li>
                <li>• Secure form and private information</li>
              </ul>
            </div>
          </div>
          <form className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 grid gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-800">Name</label>
              <input id="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-800">Email</label>
              <input id="email" type="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-800">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us about your project" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold px-6 py-3 hover:shadow-lg hover:-translate-y-0.5 transition">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
