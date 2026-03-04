import { RDM_PHILOSOPHY } from '@/constants/philosophy'

export function PlatformPhilosophy() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight">
                        RDM Philosophy
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-500 font-light italic">
                        "When purpose is clear, discipline becomes natural."
                    </p>
                </div>

                <div className="bg-rose-50/50 p-8 md:p-12 rounded-[3rem] border border-rose-100/50 relative overflow-hidden text-left">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/50 blur-3xl rounded-full" />
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light relative z-10">
                        Most people don’t fail because they lack talent. They fail
                        because life becomes reactive—attention is fragmented,
                        motivation fluctuates, and goals lose meaning. <br />
                        <span className="font-medium text-[#3d342f] mt-6 block md:text-2xl text-xl leading-relaxed">
                            RDM makes responsible decision-making a daily system, not
                            an occasional inspiration.
                        </span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {RDM_PHILOSOPHY.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center gap-4"
                    >
                        <div
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color.replace('bg-', 'bg-').replace('-100', '-50')} shadow-sm group-hover:scale-110 transition-transform duration-300`}
                        >
                            <item.icon size={32} weight="duotone" className={item.color.replace('bg-', 'text-').replace('-100', '-600')} />
                        </div>
                        <h3 className="text-lg font-bold text-[#3d342f]">
                            {item.title}
                        </h3>
                        <p className="text-slate-500 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
