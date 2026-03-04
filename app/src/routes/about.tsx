import { Link, createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'motion/react'
import { Target, Heart, Lightning, ShieldCheck, Users } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/about')({
  component: EthicalCodePage,
})

function EthicalCodePage() {
  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col">
      <Navbar />

      <main className="flex-grow pb-0">
        {/* Page Header */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/30 blur-[150px] rounded-full -z-10" />
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rose-400/30 blur-[150px] rounded-full -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-400/20 blur-[150px] rounded-full -z-10" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-bold uppercase tracking-widest mb-8 shadow-sm"
            >
              <Target size={16} className="text-rose-500" weight="fill" />
              Our Journey
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8"
            >
              Vision & <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 italic font-light pr-4 pb-4">Mission</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl lg:text-3xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed"
            >
              Building a world where responsible choices are the standard, powered by the <span className="font-semibold text-slate-800">science of human behavior.</span>
            </motion.p>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50/50 p-10 md:p-16 rounded-[3rem] border border-blue-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-200/20 blur-3xl rounded-full -z-10 transition-transform group-hover:scale-110 duration-700" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-50 shrink-0">
                  <Target size={32} weight="duotone" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Vision</h2>
              </div>
              <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed italic relative z-10">
                "To create a world where responsible choices are visible, valued, and contagious—and where doing good becomes a daily habit, not an occasional event."
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-rose-50/50 p-10 md:p-16 rounded-[3rem] border border-rose-100 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rose-200/20 blur-3xl rounded-full -z-10 transition-transform group-hover:scale-110 duration-700" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-rose-600 shadow-sm border border-rose-50 shrink-0">
                  <Heart size={32} weight="duotone" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Mission</h2>
              </div>
              <p className="text-lg font-light text-slate-500 mb-8 relative z-10">
                Empowering people and institutions to build a culture of:
              </p>
              <ul className="space-y-5 relative z-10">
                {[
                  "Purpose-driven performance",
                  "Mindful living and empathy",
                  "Measurable positive impact",
                  "Transparent micro-giving",
                  "Stronger communities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 flex-shrink-0 flex items-center justify-center">
                      <Lightning size={14} className="text-rose-600" weight="fill" />
                    </div>
                    <span className="text-lg text-slate-600 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Genesis Section */}
        <section className="py-24 bg-emerald-50/50 border-y border-emerald-100/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/20 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/20 blur-[120px] rounded-full -z-10" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
              >
                The Genesis of RDM
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl font-light text-slate-500 leading-relaxed italic"
              >
                RDM was born from a simple observation: Most systems reward results, but ignore the <span className="text-emerald-600 font-medium">daily choices</span> that lead to them.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Old Paradigm
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Track Results</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">Only focusing on the final outcome, regardless of the path taken.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900 p-12 rounded-[2.5rem] shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                  The RDM Way
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Track Responsibility</h3>
                <p className="text-lg text-slate-300 font-light leading-relaxed">Rewarding the integrity, effort, and intent that builds long-term success.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Goodness Network CTA - Full Width */}
        <section className="w-full bg-slate-900 py-24 md:py-32 text-center relative overflow-hidden border-t-[8px] border-emerald-500">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-0" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight leading-tight">
              Ready to build a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic font-light">Goodness Network?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/" hash="contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Partner With Us
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="outline" size="lg" className="w-full sm:w-auto mt-4 sm:mt-0">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main >

      <Footer />
    </div >
  )
}

