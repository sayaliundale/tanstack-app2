import { LANDING_INDUSTRIES } from '@/constants/landing'
import { motion } from 'motion/react'

export function Industries() {
  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-4"
          >
            Use Cases
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight"
          >
            Industry Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl font-light text-slate-500 max-w-2xl mx-auto"
          >
            Specialized tools for your sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LANDING_INDUSTRIES.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 opacity-[0.03] text-blue-500 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                <industry.icon size={180} weight="fill" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 relative z-10 group-hover:bg-blue-500 transition-colors shadow-sm">
                <industry.icon
                  size={28}
                  className="text-blue-500 group-hover:text-white transition-colors"
                  weight="duotone"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#3d342f] mb-3 relative z-10 leading-tight">
                {industry.name}
              </h3>
              <p className="text-slate-500 font-light leading-relaxed relative z-10 flex-grow">
                Specialized features for {industry.name.toLowerCase()} success
                and engagement.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
