import { GAMIFICATION_OUTCOMES } from '@/constants/gamification'

export function CoreOutcomesSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="bg-emerald-50 rounded-[4rem] p-10 md:p-16 my-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#3d342f] mb-6">What <span className="text-blue-600">Responsible Gaming</span> means in RDM</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">RDM-style Responsible Gaming is designed around four outcomes:</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {GAMIFICATION_OUTCOMES.map((item, i) => (
                        <div key={i} className={`p-8 rounded-[2.5rem] border ${item.border} ${item.bg} shadow-xl ${item.shadow} hover:-translate-y-1 transition-all duration-300`}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`${item.color} bg-slate-50 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0`}>
                                    <item.icon size={24} weight="duotone" />
                                </div>
                                <h3 className="text-xl font-bold text-[#3d342f] leading-tight">{item.title}</h3>
                            </div>
                            {item.intro && <p className="text-slate-600 mb-4">{item.intro}</p>}
                            {item.features ? (
                                <ul className="space-y-2">
                                    {item.features.map((feat, j) => (
                                        <li key={j} className="text-slate-500 flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
