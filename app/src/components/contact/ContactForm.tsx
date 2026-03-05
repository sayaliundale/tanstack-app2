import { useState } from 'react'

interface ContactFormProps {
    onSuccess: () => void
}

export function ContactForm({ onSuccess }: ContactFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget // Capture form reference before async operation
        setStatus('loading')
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            onSuccess()
            form.reset() // Use captured reference
        } catch (error) {
            console.error('Submission error:', error)
            setStatus('error')
        }
    }

    return (
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] relative z-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

            <div className="p-8 md:p-12 border-b border-slate-100/50 bg-slate-50/50 rounded-t-[2.5rem]">
                <h2 className="text-3xl font-black text-slate-900 font-display tracking-tight">Send us a message</h2>
                <p className="mt-3 text-lg font-light text-slate-500 leading-relaxed max-w-xl">
                    Fill out the form below and our dedicated team will get back to you within 24 hours.
                </p>
            </div>

            <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3 group">
                            <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-[0.2em] pl-1 transition-colors group-focus-within:text-blue-500">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your full name"
                                required
                                className="w-full h-14 rounded-2xl border-2 border-slate-100 bg-white/50 px-6 text-lg placeholder:text-slate-400 shadow-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 hover:border-slate-200"
                            />
                        </div>
                        <div className="space-y-3 group">
                            <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-[0.2em] pl-1 transition-colors group-focus-within:text-blue-500">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@company.com"
                                required
                                className="w-full h-14 rounded-2xl border-2 border-slate-100 bg-white/50 px-6 text-lg placeholder:text-slate-400 shadow-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 hover:border-slate-200"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 group">
                        <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-[0.2em] pl-1 transition-colors group-focus-within:text-blue-500">
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="What is this regarding?"
                            required
                            className="w-full h-14 rounded-2xl border-2 border-slate-100 bg-white/50 px-6 text-lg placeholder:text-slate-400 shadow-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 hover:border-slate-200"
                        />
                    </div>

                    <div className="space-y-3 group">
                        <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-[0.2em] pl-1 transition-colors group-focus-within:text-blue-500">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us more about your inquiry..."
                            required
                            rows={5}
                            className="w-full min-h-[140px] rounded-2xl border-2 border-slate-100 bg-white/50 p-6 text-lg placeholder:text-slate-400 shadow-sm transition-all resize-y focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 hover:border-slate-200"
                        />
                    </div>

                    {status === 'error' && (
                        <div className="rounded-2xl border border-red-200 bg-red-50/80 p-5 text-red-600 flex items-center gap-3">
                            <span className="text-xl">⚠️</span>
                            <p className="font-medium">Something went wrong. Please try again.</p>
                        </div>
                    )}

                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="relative w-full h-16 cursor-pointer overflow-hidden rounded-2xl bg-slate-900 text-xl font-bold text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:bg-black hover:shadow-[0_15px_25px_-10px_rgba(0,0,0,0.5)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
