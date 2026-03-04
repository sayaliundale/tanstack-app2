const statCards = [
  { value: '83%', label: 'Active engagement rate' },
  { value: '270', label: 'Actions per user/month' },
  { value: '4.2', label: 'Day average weekly usage' },
  { value: '30+', label: 'Consecutive day retention' },
]

import { motion } from 'motion/react'

export function Metrics() {
  return (
    <section className="py-32 bg-slate-900 border-t-[8px] border-emerald-500 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-emerald-400 font-bold uppercase tracking-[0.4em] mb-8 text-sm opacity-80"
        >
          Proven Performance
        </motion.div>

        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            The Platform Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 italic font-light">Engagement.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl lg:text-2xl font-light text-slate-400 leading-relaxed max-w-3xl mx-auto"
          >
            Track skill evolution and impact through advanced analytics dashboards. Turn data into actionable insights that drive your company's next big move.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-[2.5rem] py-12 px-8 flex flex-col items-center justify-center border border-slate-700/50 hover:bg-slate-800 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-2 shadow-xl"
            >
              <span className="text-5xl font-black text-white mb-4 block tracking-tighter group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-500">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center group-hover:text-slate-300 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

