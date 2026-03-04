import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { STORIES } from '@/constants/stories'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export function StoriesOfChange() {
  return (
    <section className="section-padding bg-slate-50/50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-400/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-4"
          >
            Our Community
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight"
          >
            Stories of Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl font-light text-slate-500 leading-relaxed"
          >
            Tips, stories, and inspiration from our community on how to make a lasting impact.
          </motion.p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {STORIES.map((story, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-0 md:pl-6"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[2.5rem] p-8 h-full shadow-sm hover:shadow-xl transition-all cursor-pointer group border border-slate-100 flex flex-col"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {story.type}
                      </span>
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-sm">
                        R
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#3d342f] mb-6 leading-relaxed flex-grow group-hover:text-blue-600 transition-colors">
                      {story.title}
                    </h3>

                    <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-slate-50">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-blue-500 font-bold text-sm group-hover:gap-3 transition-all">
                      Read More <ArrowUpRight size={16} />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden xl:block">
              <CarouselPrevious className="-left-16 h-12 w-12 border-slate-200 bg-white text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-md" />
              <CarouselNext className="-right-16 h-12 w-12 border-slate-200 bg-white text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-md" />
            </div>
          </Carousel>
        </div>

        <div className="flex justify-center mt-20">
          <Button
            size="lg"
            variant="outline"
          >
            View all articles
          </Button>
        </div>
      </div>
    </section>
  )
}

