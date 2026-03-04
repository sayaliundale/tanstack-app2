import { whyRecordGoodWorkData } from '@/constants/sogood'

export function WhyRecordSection() {
    return (
        <section className="py-24">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight">
                    Why record good work?
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-light">
                    Because good work compounds—when it can be seen, remembered,
                    and built upon.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
                {whyRecordGoodWorkData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-6"
                    >
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                            <item.icon size={28} weight="duotone" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#3d342f] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
