import { CheckCircle, Clock, HandHeart, ShieldCheck, User } from '@phosphor-icons/react'
import { inheritanceListData } from '@/constants/sogood'

export function InheritanceInspirationSection() {
    return (
        <section className="py-24 bg-emerald-50/50 border-y border-emerald-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-200/20 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/20 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight leading-tight">
                            An inheritance & <br />an inspirational gift
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-light">
                            Money can be spent. Property can be sold. But a legacy of
                            responsibility becomes a role model that never expires.
                        </p>
                        <div className="space-y-5 pt-4">
                            {inheritanceListData.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1 shadow-sm">
                                        <CheckCircle size={18} weight="fill" />
                                    </div>
                                    <span className="text-lg text-slate-600 leading-relaxed group-hover:text-[#3d342f] transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-[2rem] border border-emerald-100 shadow-sm flex flex-col justify-end h-64 hover:shadow-xl transition-all hover:-translate-y-1">
                                <User size={40} className="text-emerald-500 mb-4" weight="duotone" />
                                <h3 className="text-lg font-bold text-[#3d342f]">Personal Role Model</h3>
                            </div>
                            <div className="bg-emerald-600 p-8 rounded-[2rem] flex flex-col justify-center h-48 shadow-lg shadow-emerald-200/50 hover:shadow-xl transition-all hover:-translate-y-1">
                                <HandHeart size={40} className="text-white mb-2" weight="duotone" />
                                <h3 className="text-lg font-bold text-white">Values Story</h3>
                            </div>
                        </div>
                        <div className="space-y-6 pt-12">
                            <div className="bg-[#3d342f] p-8 rounded-[2rem] flex flex-col justify-center h-56 shadow-lg shadow-slate-300 hover:shadow-xl transition-all hover:-translate-y-1">
                                <ShieldCheck size={40} className="text-emerald-400 mb-2" weight="duotone" />
                                <h3 className="text-lg font-bold text-white">Social Trust</h3>
                            </div>
                            <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 shadow-sm flex flex-col justify-end h-72 hover:shadow-xl transition-all hover:-translate-y-1">
                                <Clock size={40} className="text-rose-500 mb-4" weight="duotone" />
                                <h3 className="text-lg font-bold text-[#3d342f]">Role Model Expire: Never</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
