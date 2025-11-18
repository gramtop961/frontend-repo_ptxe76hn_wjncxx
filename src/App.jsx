import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Value from './components/Value';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Value />
        <Features />
        <Pricing />
        <Process />
        <SocialProof />
        <CaseStudies />
        <FAQ />
        <Contact />
      </main>
      <footer className="py-10 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-orange-400 to-rose-500"></div>
            <span className="font-semibold">BrightSites</span>
          </div>
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} BrightSites. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
