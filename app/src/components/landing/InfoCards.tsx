import { motion } from 'motion/react'
import { HOW_IT_WORKS_STEPS } from '@/constants/landing'

export function InfoCards() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-4"
          >
            The Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight"
          >
            How it Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed"
          >
            A simple 5-step system designed to turn good intentions into lifelong habits through our proprietary RDM framework.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 p-10 rounded-[2.5rem] border border-white/50 backdrop-blur-md shadow-xl flex flex-col h-full relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >


              <div
                className={`relative z-10 w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform`}
              >
                <step.icon size={30} weight="duotone" />
              </div>

              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-bold text-[#3d342f] mb-4 leading-tight group-hover:text-amber-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-200 w-full relative z-10">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${step.color}`} />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {step.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

