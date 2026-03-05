import { motion } from 'motion/react'
import { CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

interface ContactSuccessProps {
    onReset: () => void
}

export function ContactSuccess({ onReset }: ContactSuccessProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-12 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-500" />

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.2)] border border-green-200/50"
            >
                <CheckCircle size={48} weight="fill" />
            </motion.div>

            <h2 className="text-3xl font-black text-slate-900 mb-4 font-display">Message Received!</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto font-light leading-relaxed">
                Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
            </p>

            <Button
                onClick={onReset}
                className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-slate-900 text-white font-semibold shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl active:scale-[0.98]"
            >
                Send Another Message
            </Button>
        </motion.div>
    )
}
