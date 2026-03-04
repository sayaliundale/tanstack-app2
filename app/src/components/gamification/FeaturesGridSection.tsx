import { GAMIFICATION_FEATURES } from '@/constants/gamification'

export function FeaturesGridSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#3d342f] text-center mb-16">
                Key features that make gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">safer (and better)</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GAMIFICATION_FEATURES.map((card, i) => (
                    <div
                        key={i}
                        className={`
              bg-white border border-slate-200 p-8 rounded-[2.5rem] 
              hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 
              transition-all duration-300 group hover:-translate-y-1
              ${i === 0 ? 'lg:row-span-2 lg:col-span-1 flex flex-col justify-between' : 'col-span-1'}
            `}
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`bg-slate-50 w-10 h-10 rounded-lg flex items-center justify-center ${card.color} group-hover:scale-110 transition-all duration-300 shadow-sm shrink-0`}>
                                    <card.icon size={20} weight="fill" />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-[#3d342f] leading-tight ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{card.title}</h3>
                                    {card.subtitle && <p className="text-xs text-slate-400 mt-0.5">{card.subtitle}</p>}
                                </div>
                            </div>

                            <div className="mb-4" /> {/* Spacer */}

                            <ul className="space-y-3 mb-8">
                                {card.features.map((feat, j) => (
                                    <li key={j} className="text-slate-500 text-sm flex items-start gap-2">
                                        <span className={`w-1.5 h-1.5 ${card.bullet} rounded-full mt-1.5 shrink-0`} />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-slate-50 mt-auto">
                            <p className={`text-sm font-bold ${card.color.replace('text-', 'text-opacity-80 ')}`}>Benefit: <span className="text-slate-500 font-normal">{card.benefit}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
