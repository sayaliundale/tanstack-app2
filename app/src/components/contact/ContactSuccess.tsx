import { motion } from 'motion/react'
import { CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

interface ContactSuccessProps {
    onReset: () => void
}

export function ContactSuccess({ onReset }: ContactSuccessProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-blue-100"
        >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} weight="duotone" />
            </div>
            <h2 className="text-2xl font-bold text-[#091B26] mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for reaching out. Our team will review your message and get back to you shortly.
            </p>
            <Button
                onClick={onReset}
                className="bg-[#0074E4] hover:bg-[#005bb5] text-white rounded-full px-8 py-2"
            >
                Send Another Message
            </Button>
        </motion.div>
    )
}
