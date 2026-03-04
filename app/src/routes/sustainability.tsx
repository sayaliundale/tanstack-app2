import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Bicycle,
  CaretRight,
  GlobeHemisphereWest,
  GraduationCap,
  House,
  Leaf,
  Storefront,
} from '@phosphor-icons/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { SUSTAINABILITY_BENEFITS } from '@/constants/sustainability'
import { motion } from 'motion/react'

export const Route = createFileRoute('/sustainability')({
  component: SustainabilityPage,
})

function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col font-sans text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-900">
      <Navbar />

      <main className="flex-grow pb-0">
        <section>
          {/* Hero Section */}
          <div className="bg-slate-50 relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-slate-100 mb-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/20 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-8"
              >
                <Leaf size={18} weight="fill" className="text-emerald-500" />
                Environmental Impact
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl lg:text-7xl font-bold text-[#3d342f] tracking-tight leading-tight mb-12"
              >
                Sustainability <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 italic font-light pr-4 pb-4">Engagement</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] shadow-xl shadow-emerald-900/5 border border-white/50"
              >
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Definition
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light text-balance">
                  A structured way to motivate and measure everyday eco-positive
                  actions—by rewarding people for choices that{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold">
                    reduce waste, emissions, and resource consumption.
                  </span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 mt-12"
              >
                {[
                  { icon: House, label: "Home" },
                  { icon: Storefront, label: "Work" },
                  { icon: GraduationCap, label: "School" },
                  { icon: Bicycle, label: "Travel" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 hover:scale-105 hover:shadow-md transition-all">
                    <item.icon size={22} className="text-emerald-500" weight="duotone" />
                    <span className="font-bold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            {/* Benefits Headline */}
            <div className="mb-24 text-center max-w-4xl mx-auto space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight"
              >
                The RDM Advantage
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed"
              >
                How we transform environmental commitment into measurable impact through our scientific framework.
              </motion.p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {SUSTAINABILITY_BENEFITS.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-emerald-100/50 group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon size={30} weight="duotone" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#3d342f] mb-4 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-lg text-slate-500 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}

              {/* Special CTA Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-emerald-500 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-emerald-500/20 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <GlobeHemisphereWest size={64} className="mb-6 relative z-10 animate-pulse drop-shadow-md" weight="duotone" />
                <h4 className="text-3xl font-bold mb-4 relative z-10">Join the Mission</h4>
                <p className="text-emerald-50 mb-8 font-light relative z-10 text-lg">
                  Ready to turn eco-awareness into eco-action?
                </p>
                <Link to="/" hash="contact" className="w-full relative z-10">
                  <Button size="lg" className="w-full">
                    Get Started <CaretRight size={20} weight="bold" className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Impact Statement - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden text-center border-t-[8px] border-emerald-500"
          >
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-0" />
            <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
              <p className="text-sm font-bold opacity-50 uppercase tracking-[0.4em] text-emerald-400">
                Our Global Commitment
              </p>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                Bridging the gap between{' '}
                <span className="text-emerald-400">ecological awareness</span>{' '}
                and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic font-light">daily action.</span>
              </h3>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  )
}

