import { motion } from 'motion/react'

export function ContactHero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-200/50 text-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-sm"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Let's Connect
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-8 font-display tracking-tight leading-[1.1]">
                Start your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent italic pr-2">Conversation</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed text-balance">
                Whether you have questions about the framework or want to see a live demo, our team is ready to help you drive meaningful change.
            </p>
        </motion.div>
    )
}
