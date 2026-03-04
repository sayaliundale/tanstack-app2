import {
    ArrowsClockwise,
    ShieldCheck,
    Target,
} from '@phosphor-icons/react'
import { RDM_LOOP_STEPS } from '@/constants/platform'

export function PlatformIntroduction() {
    return (
        <section className="py-24 bg-blue-50/30 border-y border-blue-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight">
                                What is RDM?
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-light">
                                RDM (Responsible Decision Making) is a framework and app
                                designed to strengthen purpose, mindfulness, empathy, and
                                consistency—at the individual level and at scale for
                                institutions.
                            </p>
                            <div className="relative pl-6 py-2 mt-6 border-l-2 border-orange-200">
                                <p className="text-lg font-medium text-slate-600 italic leading-relaxed">
                                    "Build personal discipline, healthier communities, better
                                    workplaces—and convert everyday decisions into measurable
                                    positive outcomes."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-[#3d342f] flex items-center gap-3">
                                <div className="p-2 bg-orange-50 rounded-xl">
                                    <ArrowsClockwise size={28} className="text-orange-500" weight="duotone" />
                                </div>
                                RDM works through a simple loop:
                            </h3>
                            <div className="space-y-6">
                                {RDM_LOOP_STEPS.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group text-left">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-blue-600 shadow-sm transition-transform group-hover:bg-blue-50 group-hover:border-blue-100">
                                            {item.step}
                                        </div>
                                        <div className="text-left w-full">
                                            <p className="text-lg font-bold text-[#3d342f] mb-1">
                                                {item.title}
                                            </p>
                                            <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-xl md:text-2xl font-bold text-slate-400">
                                It’s not about perfection. <br />
                                <span className="text-orange-500">
                                    It’s about progress with integrity.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="space-y-6 translate-y-12">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                                    alt="Team"
                                    className="rounded-[2.5rem] h-[300px] w-full object-cover shadow-xl border border-white/50"
                                />
                                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                                        <Target size={32} className="text-orange-500" weight="duotone" />
                                    </div>
                                    <p className="font-bold text-[#3d342f]">Goal Setting</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-[#3d342f] p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center text-white hover:-translate-y-1 transition-transform">
                                    <ShieldCheck size={40} className="mb-4 text-emerald-400" weight="duotone" />
                                    <p className="font-bold uppercase tracking-widest text-sm text-slate-300">
                                        Accountability
                                    </p>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80"
                                    alt="Reflection"
                                    className="rounded-[2.5rem] h-[400px] w-full object-cover shadow-xl border border-white/50"
                                />
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/20 blur-[100px] -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
