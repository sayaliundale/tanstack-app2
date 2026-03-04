import { Link, createFileRoute } from '@tanstack/react-router'
import {
  CaretRight,
  CheckCircle,
  IdentificationBadge,
  Lightbulb,
  PresentationChart,
  ShieldCheck,
  Target,
  Users,
} from '@phosphor-icons/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/attendee-engagement')({
  component: AttendeeEngagementPage,
})

function AttendeeEngagementPage() {
  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary/20 selection:text-primary bg-white">
      <Navbar />

      <main className="pb-12 max-w-none mx-auto">
        <section className="max-w-none mx-auto text-center">
          {/* Hero Section */}
          <div className="bg-[#F0FDFA] mb-20 w-full relative overflow-hidden pt-24 pb-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/40 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/30 blur-[150px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-10">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                <IdentificationBadge size={18} weight="fill" />
                Events & Conferences
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-black tracking-tight leading-tight">
                Attendee <br />
                <span className="text-teal-600">Engagement</span>
              </h1>

              <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/50 shadow-xl shadow-teal-900/5">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Definition
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed font-light">
                  Make your audience the true stars of the show by turning
                  events into{' '}
                  <span className="text-teal-600 font-bold">
                    participatory landmarks
                  </span>{' '}
                  through interactive learning paths and collective challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            {/* Benefits Headline */}
            <div className="mb-20 text-center space-y-4">
              <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight">
                Benefits (via RDM)
              </h3>
              <p className="text-xl text-gray-500 font-light">
                Ensuring your event leaves a lasting, measurable footprint.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {[
                {
                  icon: Lightbulb,
                  title: 'Learning Paths',
                  desc: 'Engage attendees through interactive learning paths and gamified content delivery.',
                  color: 'bg-teal-500',
                },
                {
                  icon: Target,
                  title: 'Collective Missions',
                  desc: 'Drive community participation with collective challenges that achieve shared goals.',
                  color: 'bg-indigo-500',
                },
                {
                  icon: Users,
                  title: 'High-Level Networking',
                  desc: 'Foster meaningful connections through purposeful, value-driven interaction tools.',
                  color: 'bg-blue-500',
                },
                {
                  icon: ShieldCheck,
                  title: 'Measurable Impact',
                  desc: 'Track and record the positive social and environmental footprint of your event.',
                  color: 'bg-emerald-500',
                },
                {
                  icon: CheckCircle,
                  title: 'Lasting Footprint',
                  desc: "Ensure your event's impact lives on through verifiable records in the So.Good Ledger.",
                  color: 'bg-sky-500',
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start text-left hover:bg-white hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div
                    className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-${benefit.color.split('-')[1]}-200`}
                  >
                    <benefit.icon size={28} weight="bold" />
                  </div>
                  <h4 className="text-2xl font-black text-black mb-4 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              ))}

              {/* Special CTA Card */}
              <div className="bg-teal-600 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-teal-100 group">
                <PresentationChart size={64} className="mb-6 animate-pulse" />
                <h4 className="text-3xl font-black mb-4">Elevate Your Event</h4>
                <p className="text-teal-50 mb-8 font-light">
                  Transform spectators into stakeholders of your event's legacy.
                </p>
                <Link to="/" hash="contact" className="w-full">
                  <Button size="lg" className="w-full">
                    Get Started <CaretRight size={20} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Impact Statement - Full Width */}
          <div className="w-full bg-[#091B26] text-white py-24 md:py-32 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent" />
            <div className="content-container relative z-10 space-y-8">
              <p className="text-xl md:text-2xl font-light opacity-80 uppercase tracking-[0.2em]">
                The Result
              </p>
              <h3 className="text-4xl md:text-6xl font-black leading-tight max-w-5xl mx-auto">
                From passive <span className="text-teal-400">spectators</span>{' '}
                to <span className="italic">active players</span> in shared
                impact.
              </h3>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
