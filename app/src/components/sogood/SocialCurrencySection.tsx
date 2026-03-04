import { socialCurrencyData } from '@/constants/sogood'

export function SocialCurrencySection() {
    return (
        <section className="py-24 bg-rose-50/50 border-y border-rose-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200/20 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-200/20 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight">
                        Social currency that actually matters
                    </h2>
                    <p className="text-xl text-rose-600/80 italic font-light">
                        "Likes fade. Titles change. But your choices define your identity."
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {socialCurrencyData.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-[2rem] border border-rose-100/50 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 hover:shadow-xl transition-all duration-300 shadow-sm hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-slate-200 ${item.color}`}>
                                <item.icon size={28} weight="fill" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#3d342f] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center max-w-3xl mx-auto border-t border-rose-100 pt-12">
                    <p className="text-xl md:text-2xl font-medium text-slate-500">
                        This is not about showing off.{' '}
                        <span className="text-rose-500 italic font-light">
                            It’s about making goodness contagious.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
