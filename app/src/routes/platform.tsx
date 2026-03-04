import { createFileRoute } from '@tanstack/react-router'
import { Navbar, Footer } from '@/components/layout'
import {
  PlatformHero,
  PlatformIntroduction,
  PlatformPhilosophy,
  PlatformFeatures,
  PlatformBenefits,
} from '@/components/platform'

export const Route = createFileRoute('/platform')({
  component: PlatformPage,
})

function PlatformPage() {
  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary/20 selection:text-primary bg-white">
      <Navbar />

      <main className="pb-12 max-w-none mx-auto">
        <section className="max-w-none mx-auto text-center">
          <PlatformHero />
          <PlatformIntroduction />
          <PlatformPhilosophy />
          <PlatformFeatures />
          <PlatformBenefits />
        </section>
      </main>

      <Footer />
    </div>
  )
}
