import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { motion } from 'motion/react'
import { TESTIMONIALS } from '@/constants/testimonials'
import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-4"
          >
            Endorsements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight"
          >
            Trusted by Leaders
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {TESTIMONIALS.map((t, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="flex flex-col items-center">
                    <div className="w-full bg-white/60 backdrop-blur-md rounded-[3rem] p-10 md:p-16 relative overflow-hidden group border border-slate-100 shadow-xl shadow-sky-900/5 hover:shadow-2xl transition-all duration-500">
                      <Quote className="absolute top-10 left-10 text-sky-500/10 w-24 h-24 -rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-700" />

                      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                        <div className="mb-10">
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-8 border-white shadow-lg shadow-black/5 mx-auto mb-8 bg-slate-50 grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img
                              src={t.image}
                              alt={t.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <blockquote className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed text-balance mb-12 italic">
                          "{t.quote}"
                        </blockquote>

                        <div>
                          <h3 className="text-xl font-bold text-[#3d342f] leading-tight mb-2">
                            {t.name}
                          </h3>
                          <p className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-1">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 border-slate-200 bg-white hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 w-14 h-14 transition-all shadow-md" />
              <CarouselNext className="static translate-y-0 border-slate-200 bg-white hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 w-14 h-14 transition-all shadow-md" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

