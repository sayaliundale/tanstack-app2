import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50/50">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full -z-10" />

            <div className="content-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8"
                >
                    Transforming Play
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl lg:text-8xl font-bold text-[#3d342f] tracking-tight leading-[1.1] mb-12 font-display"
                >
                    Play Smarter. <br />
                    <span className="text-primary italic">Stay in Control.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-4xl mx-auto text-lg lg:text-xl text-slate-500 leading-relaxed font-light mb-12 text-balance"
                >
                    RDM transforms gaming from a loop of compulsion into a platform for growth. We help users uplift themselves and their communities through responsible decisions and mindful play.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-[2.5rem] border border-primary/10 shadow-premium mb-12 relative"
                >
                    <Quote className="absolute -top-4 -left-4 text-primary w-12 h-12 rotate-180 opacity-20" />
                    <p className="text-xl md:text-2xl text-slate-700 italic font-light leading-relaxed">
                        "Responsible Gaming is simple: You stay in control—of your time, money, and intent—while still enjoying the fun."
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center"
                >
                    <Link to="/contact">
                        <Button className="h-16 px-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                            Get Started
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
