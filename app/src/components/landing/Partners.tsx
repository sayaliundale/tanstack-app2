import { motion } from 'motion/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { PARTNERS } from '@/constants/partners'

export function Partners() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section id="partners" className="section-padding bg-white overflow-hidden border-y border-slate-50">
      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            Our Network
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-[#3d342f] mb-8 font-display"
          >
            Trusted by Forward-Thinking Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-500 font-light text-balance"
          >
            We partner with global leaders and innovators to redefine the gold standard for engagement and purpose-driven growth.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative px-4"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {PARTNERS.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-6"
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full rounded-[2.5rem] p-6 bg-slate-50 border border-slate-100 transition-all shadow-sm hover:shadow-premium group"
                  >
                    <div className="flex-1 text-center">
                      <h3 className="text-lg font-bold text-[#3d342f] mb-6 transition-colors group-hover:text-primary font-display">
                        {partner.name}
                      </h3>
                      <div className="w-full aspect-[16/9] rounded-[1.5rem] overflow-hidden bg-white flex items-center justify-center p-6 shadow-sm group-hover:shadow-md transition-all">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden xl:block">
              <CarouselPrevious className="-left-16 h-12 w-12 border-slate-100 bg-white text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm" />
              <CarouselNext className="-right-16 h-12 w-12 border-slate-100 bg-white text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

