import { Link, createFileRoute } from '@tanstack/react-router'
import {
  CaretRight,
  Leaf,
  Recycle,
} from '@phosphor-icons/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { GREEN_LOYALTY_BENEFITS } from '@/constants/loyalty'

export const Route = createFileRoute('/green-loyalty')({
  component: GreenLoyaltyPage,
})

function GreenLoyaltyPage() {
  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col font-sans text-slate-900 selection:bg-green-500/20 selection:text-green-900">
      <Navbar />

      <main className="flex-grow pb-0">
        <section>
          {/* Hero Section */}
          <div className="bg-slate-50 relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-slate-100 mb-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-400/20 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/20 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-8">
                <Recycle size={18} weight="fill" className="text-green-500" />
                Sustainable Commerce
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#3d342f] tracking-tight leading-tight mb-12">
                Green <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 italic font-light pr-4 pb-4">Loyalty</span>
              </h1>

              <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] shadow-xl shadow-green-900/5 border border-white/50">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Definition
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light text-balance">
                  A loyalty model that rewards customers for sustainable choices
                  and verified eco-actions—so loyalty is earned not only by
                  spending, but by{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 font-bold">
                    reducing impact and supporting responsible supply chains.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            {/* Benefits Headline */}
            <div className="mb-24 text-center max-w-4xl mx-auto space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight">
                Benefits (via RDM)
              </h3>
              <p className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed">
                Rewarding the choices that protect our collective future.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {GREEN_LOYALTY_BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-green-100/50 group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon size={30} weight="duotone" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#3d342f] mb-4 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-lg text-slate-500 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              ))}

              {/* Special CTA Card */}
              <div className="bg-green-600 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-green-500/20 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <Leaf size={64} className="mb-6 relative z-10 animate-pulse drop-shadow-md" weight="duotone" />
                <h4 className="text-3xl font-bold mb-4 relative z-10">Go Green</h4>
                <p className="text-green-50 mb-8 font-light relative z-10 text-lg border-t border-green-500/30 pt-4">
                  Evolve your loyalty program into a force for global good.
                </p>
                <Link to="/" hash="contact" className="w-full relative z-10">
                  <Button size="lg" className="w-full">
                    Get Started <CaretRight size={20} className="ml-2" weight="bold" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Impact Statement - Full Width */}
          <div className="w-full bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden text-center border-t-[8px] border-green-500">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full -z-0" />
            <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
              <p className="text-sm font-bold opacity-50 uppercase tracking-[0.4em] text-green-400">
                Our Goal
              </p>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                Rewarding customers for{' '}
                <span className="text-green-400">reducing impact</span> and
                supporting{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 italic font-light">responsible supply chains.</span>
              </h3>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
