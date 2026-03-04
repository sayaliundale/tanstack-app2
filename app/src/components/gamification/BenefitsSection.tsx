import { GameController, Heart, Trophy, Users } from '@phosphor-icons/react'

export function BenefitsSection() {
    return (
        <section className="w-full bg-[#091B26] text-white py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full" />

            <div className="content-container relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">The benefits: for players, families, and society</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Users className="text-blue-400" /> For Players
                        </h3>
                        <ul className="space-y-3 text-gray-300 text-sm font-light">
                            <li>• More control, less regret</li>
                            <li>• Better focus, calmer mood</li>
                            <li>• Rewards that feel meaningful</li>
                            <li>• A healthier relationship with gaming</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Heart className="text-rose-400" /> For Parents & Families
                        </h3>
                        <ul className="space-y-3 text-gray-300 text-sm font-light">
                            <li>• Clear boundaries and safety tools</li>
                            <li>• Less worry about excessive play</li>
                            <li>• Transparent systems instead of hidden mechanics</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Trophy className="text-amber-400" /> For Corporates & Institutions
                        </h3>
                        <ul className="space-y-3 text-gray-300 text-sm font-light">
                            <li>• “Game Afternoon” wellbeing programs</li>
                            <li>• Kiosk mode for safe engagement</li>
                            <li>• Culture-building through positive micro-challenges</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <GameController className="text-emerald-400" /> For the Future of Gaming
                        </h3>
                        <ul className="space-y-3 text-gray-300 text-sm font-light">
                            <li>• Trust-first design</li>
                            <li>• Player wellbeing as a feature</li>
                            <li>• A better standard for digital entertainment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
