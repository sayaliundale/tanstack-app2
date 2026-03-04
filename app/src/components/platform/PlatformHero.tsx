import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { PLATFORM_HERO_ACTIONS } from '@/constants/platform'

export function PlatformHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50/50">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                    Platform
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-[#3d342f] tracking-tight leading-[1.1]">
                    Responsible Decision Making, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 italic font-light">
                        made practical.
                    </span>
                </h1>
                <p className="max-w-3xl mx-auto text-lg lg:text-xl text-slate-500 leading-relaxed font-light mt-8">
                    RDM is a purpose-first rewards system & reflection companion
                    that helps people and organizations turn good intentions into
                    consistent actions—through goals, micro-habits, accountability,
                    and a new kind of value: meaning.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link to="/" hash="act-now">
                        <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                            Get Early Access
                        </Button>
                    </Link>
                    <Link to="/" hash="use-cases">
                        <Button
                            variant="outline"
                            className="h-14 px-10 border border-slate-200 text-slate-600 hover:text-[#3d342f] font-bold rounded-2xl text-lg hover:bg-slate-50 transition-all w-full sm:w-auto bg-white"
                        >
                            See Use Cases
                        </Button>
                    </Link>
                </div>

                <div className="pt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-6 text-sm md:text-base font-medium text-slate-400">
                    {PLATFORM_HERO_ACTIONS.map((action, idx) => (
                        <div key={action.label} className="flex items-center">
                            <span className="flex items-center gap-2 group cursor-default">
                                <action.icon size={20} className={`${action.color} group-hover:scale-110 transition-transform`} weight="duotone" />
                                <span className="group-hover:text-slate-600 transition-colors">{action.label}</span>
                            </span>
                            {idx < PLATFORM_HERO_ACTIONS.length - 1 && (
                                <span className="text-slate-200 ml-8 hidden sm:block">|</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
