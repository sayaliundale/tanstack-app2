import { Link, createFileRoute } from '@tanstack/react-router'
import {
  CaretRight,
  Trophy,
} from '@phosphor-icons/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import fanData from '@/constants/fandata'

export const Route = createFileRoute('/fan-engagement')({
  component: FanEngagementPage,
})

function FanEngagementPage() {
  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary/20 selection:text-primary bg-white">
      <Navbar />

      <main className="pb-12 max-w-none mx-auto">
        <section className="max-w-none mx-auto text-center">
          {/* Hero Section */}
          <div className="bg-[#FFF1F2] mb-20 w-full relative overflow-hidden pt-32 lg:pt-48 pb-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-100/40 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/30 blur-[150px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-10">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                <Trophy size={18} weight="fill" />
                Sports & Entertainment
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-black tracking-tight leading-tight">
                Fan <br />
                <span className="text-rose-600">Engagement</span>
              </h1>

              <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/50 shadow-xl shadow-rose-900/5">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Definition
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed font-light">
                  Bridge the gap between the stands and the field by{' '}
                  <span className="text-rose-600 font-bold">
                    connecting your audience to the core values
                  </span>{' '}
                  of your event, turning passive spectators into active
                  participants.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            {/* Benefits Headline */}
            <div className="mb-20 text-center space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
                Benefits (via RDM)
              </h3>
              <p className="text-xl text-gray-500 font-light">
                Turning the passion of the crowd into a journey of shared
                impact.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {fanData.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start text-left hover:bg-white hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div
                    className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-${benefit.color.split('-')[1]}-200`}
                  >
                    <benefit.icon size={28} weight="bold" />
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-4 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              ))}

              {/* Special CTA Card */}
              <div className="bg-rose-600 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-rose-100 group">
                <Trophy size={64} className="mb-6 animate-pulse" />
                <h4 className="text-3xl font-bold mb-4">Unite the Crowd</h4>
                <p className="text-rose-50 mb-8 font-light">
                  Bring your fans closer to your values and your vision.
                </p>
                <Link to="/" hash="contact" className="w-full">
                  <Button size="lg" className="w-full">
                    Get in Touch <CaretRight size={20} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Impact Statement - Full Width */}
          <div className="w-full bg-[#091B26] text-white py-24 md:py-32 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />
            <div className="content-container relative z-10 space-y-8">
              <p className="text-xl md:text-2xl font-light opacity-80 uppercase tracking-[0.2em]">
                Our Goal
              </p>
              <h3 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl mx-auto">
                Connecting the <span className="text-rose-400">passion</span>{' '}
                of the fans to the{' '}
                <span className="italic">purpose of the team.</span>
              </h3>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
