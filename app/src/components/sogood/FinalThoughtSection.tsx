export function FinalThoughtSection() {
    return (
        <section className="pb-24 px-6 md:px-12 max-w-6xl mx-auto">
            <div className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-bold text-[#3d342f]">
                        What does So.Good Ledger really mean?
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-blue-600 leading-relaxed">
                        Build wealth if you want. <br />
                        <span className="font-medium">But build legacy without fail.</span>
                    </p>
                </div>

                <div className="w-px h-24 bg-slate-200 hidden md:block" />
                <div className="w-full h-px bg-slate-200 md:hidden block" />

                <div className="flex-1">
                    <p className="text-lg text-slate-500 leading-relaxed font-light">
                        The So.Good Ledger helps you leave behind something rarer than
                        success:{' '}
                        <span className="text-[#3d342f] font-medium">a record of goodness</span>{' '}
                        that future generations can inherit—and be inspired to exceed.
                    </p>
                </div>
            </div>
        </section>
    )
}
