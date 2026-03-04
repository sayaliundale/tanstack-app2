import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50/50">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-400/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                    So.Good Ledger
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-[#3d342f] tracking-tight leading-[1.1]">
                    Your goodness,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">made visible.</span> <br />
                    Your legacy, <span className="italic font-light">made permanent.</span>
                </h1>
                <p className="max-w-3xl mx-auto text-lg lg:text-xl text-slate-500 leading-relaxed font-light mt-8">
                    The So.Good Ledger is RDM’s living record of responsible
                    actions, meaningful choices, and contributions—capturing the
                    good you do in a way that’s structured, measurable, and
                    shareable{' '}
                    <span className="text-blue-600 font-medium">
                        (only when you choose).
                    </span>
                </p>

                <div className="pt-10 flex justify-center">
                    <Link to="/" hash="act-now">
                        <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95">
                            Start Your Ledger
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
