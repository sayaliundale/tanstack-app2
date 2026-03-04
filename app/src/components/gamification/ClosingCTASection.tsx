import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function ClosingCTASection() {
    return (
        <section className="pb-24 px-6 md:px-12 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3d342f] leading-tight">
                    A new kind of <span className="text-blue-600">gaming culture</span>
                </h2>
                <div className="text-xl text-slate-600 font-light space-y-2">
                    <p>
                        So, in summary, with RDM we are entering a future where the best games will not just be the most addictive—they’ll be the most respectful of the human mind.
                    </p>
                    <p className="font-bold text-slate-900">
                        Responsible Gaming with RDM is how we keep gaming:
                    </p>
                    <ul className="flex flex-wrap justify-center gap-4 text-blue-600 font-bold text-xl">
                        <span>joyful rewarding and safe for everyone.</span>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                    <Link to="/contact">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-10 rounded-full text-lg shadow-xl shadow-blue-200">
                            Join the Movement
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
