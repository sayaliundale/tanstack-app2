import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

export function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-[#091B26] rounded-[4rem] p-12 md:p-24 text-center shadow-2xl shadow-blue-900/10"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 -z-0">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]"></div>
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-white leading-tight"
            >
              Ready to Inspire <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Action?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-50 max-w-2xl text-center mb-12 font-light leading-relaxed text-balance"
            >
              Join hundreds of organizations using RDM to engage their audiences
              and drive meaningful impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Started Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
              >
                Book a Demo
                <ArrowRight size={20} weight="bold" className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
