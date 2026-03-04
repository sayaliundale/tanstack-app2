import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sogood/HeroSection'
import { IntroSection } from '@/components/sogood/IntroSection'
import { WhyRecordSection } from '@/components/sogood/WhyRecordSection'
import { SocialCurrencySection } from '@/components/sogood/SocialCurrencySection'
import { LegacyAssetSection } from '@/components/sogood/LegacyAssetSection'
import { InheritanceInspirationSection } from '@/components/sogood/InheritanceInspirationSection'
import { PrivacySection } from '@/components/sogood/PrivacySection'
import { FinalThoughtSection } from '@/components/sogood/FinalThoughtSection'

export const Route = createFileRoute('/sogood')({
  component: SoGoodPage,
})

function SoGoodPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pb-0 overflow-x-hidden">
        <HeroSection />
        <IntroSection />
        <WhyRecordSection />
        <SocialCurrencySection />
        <LegacyAssetSection />
        <InheritanceInspirationSection />
        <PrivacySection />
        <FinalThoughtSection />
      </main>

      <Footer />
    </div>
  )
}

