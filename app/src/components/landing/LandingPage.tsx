import { Navbar } from '../layout/Navbar'
import { Hero } from './Hero'
import { InfoCards } from './InfoCards'
import { Partners } from './Partners'
import { ValueProp } from './ValueProp'
import { Metrics } from './Metrics'
import { CaseStudies } from './CaseStudies'

import { Testimonials } from './Testimonials'
import { StoriesOfChange } from './StoriesOfChange'
import { Footer } from '../layout/Footer'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
        <Partners />
        <ValueProp />
        <Metrics />
        <CaseStudies />
        <Testimonials />
        <StoriesOfChange />
      </main>
      <Footer />
    </div>
  )
}
