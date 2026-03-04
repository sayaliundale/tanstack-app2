import { legacyAssetsData } from '@/constants/sogood'

export function LegacyAssetSection() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10 order-2 lg:order-1">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight leading-tight">
                            A legacy you can <br />
                            <span className="text-pink-600 italic font-light">leave behind.</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-light">
                            The So.Good Ledger isn’t just a tracker—it’s a legacy asset. Over years, it becomes a{' '}
                            <span className="text-[#3d342f] font-medium">“life album of responsibility”</span>:
                        </p>
                    </div>

                    <ul className="grid grid-cols-2 gap-4">
                        {legacyAssetsData.map((val, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-3 text-base text-slate-600 bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl"
                            >
                                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0" />
                                {val}
                            </li>
                        ))}
                    </ul>

                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full" />
                        <div className="pl-8 py-2">
                            <p className="text-xl text-slate-600 italic font-light leading-relaxed">
                                “Something your children and future generations can look at
                                and say: ‘This is what it means to live with purpose.’”
                            </p>
                            <p className="text-[#3d342f] font-medium mt-4">
                                It becomes an inheritance—not only of value, but of example.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative order-1 lg:order-2">
                    <div className="absolute -inset-4 bg-gradient-to-br from-pink-100 to-rose-50 rounded-[3rem] blur-2xl -z-10 opacity-70" />
                    <img
                        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80"
                        alt="Family Legacy"
                        className="rounded-[2.5rem] shadow-2xl border border-white w-full h-[500px] object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
