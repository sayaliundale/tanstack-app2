import { Lock } from '@phosphor-icons/react'
import { privacyOptionsData } from '@/constants/sogood'

export function PrivacySection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-10 mb-16">
                <div className="w-20 h-20 bg-blue-50 rounded-[1.5rem] flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                    <Lock size={40} weight="duotone" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight leading-tight">
                        Private by design. <br />
                        <span className="text-blue-600 italic font-light">
                            Shareable by choice.
                        </span>
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl mx-auto">
                        You decide what becomes visible—and to whom. Your So.Good Ledger can be:
                    </p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                {privacyOptionsData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-4"
                    >
                        <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-600 mb-2">
                            <item.icon size={24} weight="duotone" />
                        </div>
                        <h3 className="text-lg font-bold text-[#3d342f]">
                            {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
