import { createFileRoute } from '@tanstack/react-router'
import { Sparkle } from '@phosphor-icons/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/gamification/HeroSection'
import { ProblemSolutionSection } from '@/components/gamification/ProblemSolutionSection'
import { CoreOutcomesSection } from '@/components/gamification/CoreOutcomesSection'
import { FeaturesGridSection } from '@/components/gamification/FeaturesGridSection'
import { BenefitsSection } from '@/components/gamification/BenefitsSection'
import { ClosingCTASection } from '@/components/gamification/ClosingCTASection'

export const Route = createFileRoute('/gamification')({
  component: GamificationPage,
})

function GamificationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pb-32 overflow-x-hidden">
        <HeroSection />
        <ProblemSolutionSection />
        <CoreOutcomesSection />
        <FeaturesGridSection />
        <BenefitsSection />
        <ClosingCTASection />
      </main>

      <Footer />
    </div>
  )
}

function ScaleIcon(props: any) {
  return <Sparkle {...props} />
}

