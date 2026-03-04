import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { HERO_STEPS } from '@/constants/landing'
import { ArrowRight } from '@phosphor-icons/react'
import { ArrowRight as LucideArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-slate-50 border-b border-slate-100 pt-20 pb-10 lg:pt-24 lg:pb-12">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-400/20 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/20 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-4 lg:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Revolutionizing Decision Making
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#3d342f] tracking-tight leading-[1.05] mb-5 lg:mb-6"
          >
            Main Flow of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500 italic font-light inline-block pr-8 pb-3">
              Responsible Decisions
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6 lg:mb-8"
          >
            {HERO_STEPS.map((step, idx) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <span
                  style={{ backgroundColor: `${step.color}10`, color: step.color, borderColor: `${step.color}30` }}
                  className="px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-bold border bg-white/60 backdrop-blur-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  {step.label}
                </span>
                {idx < HERO_STEPS.length - 1 && (
                  <ArrowRight size={18} weight="bold" className="text-slate-300 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl xl:text-2xl text-slate-600 leading-relaxed font-light text-balance mb-8 max-w-3xl"
          >
            Turn good intentions into consistent habits—for yourself, your team, or your community with our data-driven RDM framework.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Early Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Request a Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
