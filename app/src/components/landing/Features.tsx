import { motion } from 'motion/react'
import { LANDING_FEATURES } from '@/constants/landing'

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-4"
          >
            Core Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight"
          >
            Built for Purpose
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed"
          >
            Everything you need to strengthen discipline, mindfulness, and
            community contribution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LANDING_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${feature.color.replace('text-', 'bg-')} bg-opacity-10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}
              >
                <feature.icon
                  size={30}
                  weight="duotone"
                  className={feature.color}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3d342f] mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
