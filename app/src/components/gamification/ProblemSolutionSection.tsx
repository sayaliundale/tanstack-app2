import { Brain, Clock, Heart, ShieldCheck, Warning } from '@phosphor-icons/react'

export function ProblemSolutionSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3d342f] leading-tight">
                        Why Responsible Gaming is the <span className="text-blue-600">need of the hour</span>
                    </h2>
                    <div className="space-y-6 text-slate-600 text-lg">
                        <p>
                            Today’s digital world runs on attention. Games are competing for it every second.
                        </p>
                        <p>
                            Gaming is a beloved escape—fun, social, and highly engaging. Yet the same design patterns that make games exciting can also make players lose track of time, chase wins, overspend, or play under stress. In fact, modern games can trap people in endless loops that encourage binge playing and sleep loss.
                        </p>
                        <p>
                            Aggressive monetization and high-stimulation visuals can fuel compulsive behaviour, overspending, and harm to mental health, while toxic interactions and weak age restrictions strain relationships and contribute to an unhealthy gaming culture.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Sessions are getting longer and more habit-forming",
                                "Microtransactions and “stake-to-win” loops can blur the line between fun and financial risk",
                                "Stress and loneliness push people toward impulsive play as coping",
                                "Children and young adults are exposed earlier than ever to high-stimulation design",
                                "Families, employers, and regulators are asking: “How do we keep gaming joyful without letting it become harmful?”"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Warning className="text-red-500 mt-1 shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] relative shadow-2xl shadow-slate-200/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-[2.5rem] opacity-50" />
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">The Answer</h3>
                        <p className="text-slate-700 text-lg leading-relaxed mb-6 relative z-10 font-medium">
                            Responsible Gaming is the answer—not by reducing fun, but by engineering safety into fun.
                        </p>
                        <p className="text-slate-600 relative z-10">
                            With RDM (Responsible Decision Making), Responsible Gaming becomes more than a policy page. It becomes a built-in experience that protects players, strengthens wellbeing, and rewards healthy play habits.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Clock, label: "Time", color: "text-rose-500" },
                            { icon: Heart, label: "Mood", color: "text-amber-500" },
                            { icon: ShieldCheck, label: "Money", color: "text-emerald-500" },
                            { icon: Brain, label: "Intent", color: "text-blue-500" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                                <item.icon className={item.color} size={32} />
                                <span className="text-base font-medium text-slate-600 uppercase tracking-widest text-center">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
