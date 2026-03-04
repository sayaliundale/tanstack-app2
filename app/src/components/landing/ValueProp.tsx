import { Button } from '@/components/ui/button'
import valuePropMockup from '@/assets/value_prop_mockup.png'
import { motion } from 'motion/react'
import { CheckCircle } from '@phosphor-icons/react'

const features = [
  "Guided Mindfulness Reflection",
  "Purpose-Driven Habit Tracking",
  "Gamified Contribution System",
  "Real-time Impact Analytics"
]

export function ValueProp() {
  return (
    <section id="what-is-rdm" className="py-24 bg-slate-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-400/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Column 1: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 to-emerald-500/10 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative bg-white/60 backdrop-blur-md p-4 rounded-[2.5rem] shadow-xl shadow-sky-900/5 border border-white/50">
              <img
                src={valuePropMockup}
                alt="RDM Platform Visualization"
                className="w-full h-auto rounded-3xl"
              />
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-emerald-900/10 border border-white/50 hidden md:flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <CheckCircle size={28} weight="duotone" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Success Rate</div>
                  <div className="text-2xl font-bold text-slate-900">+42% Growth</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 2: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              The RDM Philosophy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#3d342f] mb-8 leading-[1.2]"
            >
              What exactly <br />is <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">RDM?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed mb-10"
            >
              RDM is a <span className="text-[#3d342f] font-bold">purpose-first habit + rewards system</span> that strengthens discipline, mindfulness, and contribution—using guided reflection and a new kind of reward: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 font-bold italic">Reward for Purpose.</span>
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 font-medium bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 shrink-0">
                    <CheckCircle size={20} weight="duotone" />
                  </div>
                  <span className="text-sm md:text-base leading-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-16 px-12 text-lg font-bold rounded-2xl bg-sky-500 hover:bg-sky-600 text-white shadow-xl shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

