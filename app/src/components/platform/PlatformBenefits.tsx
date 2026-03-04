import {
    Buildings,
    CheckCircle,
    User,
} from '@phosphor-icons/react'
import {
    PLATFORM_BENEFITS_INDIVIDUALS,
    PLATFORM_BENEFITS_ORGANIZATIONS,
} from '@/constants/platform'

export function PlatformBenefits() {
    return (
        <section
            id="benefits"
            className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16"
        >
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight">
                    Overall Benefits
                </h2>
                <p className="text-xl text-slate-500 font-light leading-relaxed">
                    Why RDM works for everyone.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* For Individuals */}
                <div className="bg-rose-50/50 rounded-[3rem] p-10 md:p-16 border border-rose-100 flex flex-col gap-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-rose-50 flex flex-shrink-0 items-center justify-center">
                            <User size={32} className="text-rose-500" weight="duotone" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#3d342f] text-left">
                            For Individuals
                        </h3>
                    </div>
                    <div className="space-y-5 text-left">
                        {PLATFORM_BENEFITS_INDIVIDUALS.map((benefit, idx) => (
                            <div key={idx} className="flex gap-4 items-start group text-left">
                                <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 flex-shrink-0 flex items-center justify-center group-hover:bg-rose-500 transition-colors duration-300">
                                    <CheckCircle
                                        size={14}
                                        className="text-rose-600 group-hover:text-white transition-colors duration-300"
                                        weight="fill"
                                    />
                                </div>
                                <p className="text-lg text-slate-600 font-light leading-relaxed text-left w-full">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* For Organizations */}
                <div className="bg-blue-50/50 rounded-[3rem] p-10 md:p-16 border border-blue-100 flex flex-col gap-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-blue-50 flex flex-shrink-0 items-center justify-center">
                            <Buildings
                                size={32}
                                className="text-blue-500"
                                weight="duotone"
                            />
                        </div>
                        <h3 className="text-3xl font-bold text-[#3d342f] text-left">
                            For Organizations
                        </h3>
                    </div>
                    <div className="space-y-5 text-left">
                        {PLATFORM_BENEFITS_ORGANIZATIONS.map((benefit, idx) => (
                            <div key={idx} className="flex gap-4 items-start group text-left">
                                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                                    <CheckCircle
                                        size={14}
                                        className="text-blue-600 group-hover:text-white transition-colors duration-300"
                                        weight="fill"
                                    />
                                </div>
                                <p className="text-lg text-slate-600 font-light leading-relaxed text-left w-full">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
