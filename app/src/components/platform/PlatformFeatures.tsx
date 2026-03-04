import { PLATFORM_FEATURES } from '@/constants/platform'

export function PlatformFeatures() {
    return (
        <section className="py-24 bg-emerald-50/50 border-y border-emerald-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/20 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/20 blur-[120px] rounded-full -z-10" />

            <div
                id="features"
                className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
            >
                <div className="space-y-16">
                    <div className="text-center md:text-left space-y-4 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight">
                            Core Features
                        </h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed">
                            Everything you need to master your consistency and scale
                            impact.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {PLATFORM_FEATURES.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                            >
                                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300 shrink-0">
                                    <feature.icon
                                        size={28}
                                        weight="duotone"
                                        className="text-emerald-600 group-hover:text-white transition-colors duration-300"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-[#3d342f] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-light">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
