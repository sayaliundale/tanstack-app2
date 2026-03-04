import { motion } from 'motion/react'

export function ContactHero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Connectivity
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#3d342f] mb-8 font-display tracking-tight leading-[1.1]">
                Let's Start a <span className="text-primary italic">Conversation</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed text-balance">
                Whether you have questions about the RDM framework or want to see a live demo, our team is here to help you drive meaningful change.
            </p>
        </motion.div>
    )
}

