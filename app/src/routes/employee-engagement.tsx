import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Briefcase,
  CaretRight,
  ChartBar,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Users,
} from '@phosphor-icons/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/employee-engagement')({
  component: EmployeeEngagementPage,
})

function EmployeeEngagementPage() {
  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col font-sans text-slate-900 selection:bg-blue-500/20 selection:text-blue-900">
      <Navbar />

      <main className="flex-grow pb-0">
        <section>
          {/* Hero Section */}
          <div className="bg-slate-50 relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-slate-100 mb-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/20 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm mb-8">
                <Briefcase size={18} weight="fill" className="text-blue-500" />
                Workplace & Culture
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#3d342f] tracking-tight leading-tight mb-12">
                Employee <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 italic font-light pr-4 pb-4">Engagement</span>
              </h1>

              <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-white/50">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Definition
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light text-balance">
                  A culture and performance system where employees feel
                  recognized, aligned, and motivated—through{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 font-bold">
                    consistent progress, wellbeing habits, and values-driven
                    contributions
                  </span>
                  , not just annual reviews.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            {/* Benefits Headline */}
            <div className="mb-24 text-center max-w-4xl mx-auto space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-[#3d342f] tracking-tight">
                Benefits (via RDM)
              </h3>
              <p className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed">
                Fostering a sense of purpose and productivity in every team
                member.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {[
                {
                  icon: Users,
                  title: 'Reinforce Culture',
                  desc: 'Reinforces culture daily through micro-recognition and team challenges.',
                  color: 'bg-blue-500',
                  shadow: 'shadow-blue-100/50'
                },
                {
                  icon: Target,
                  title: 'Improve Productivity',
                  desc: 'Strengthens self-management + accountability through consistent reflection loops.',
                  color: 'bg-indigo-500',
                  shadow: 'shadow-indigo-100/50'
                },
                {
                  icon: Globe,
                  title: 'CSR Participation',
                  desc: 'Increases participation in ESG/CSR through opt-in missions with meaningful rewards.',
                  color: 'bg-emerald-500',
                  shadow: 'shadow-emerald-100/50'
                },
                {
                  icon: Heart,
                  title: 'Boost Retention',
                  desc: 'Increases belonging and purpose—employees can donate rewards to their favorite charities.',
                  color: 'bg-rose-500',
                  shadow: 'shadow-rose-100/50'
                },
                {
                  icon: ChartBar,
                  title: 'Leadership Insights',
                  desc: 'Provides leadership with aggregated cultural insights without invading individual privacy.',
                  color: 'bg-orange-500',
                  shadow: 'shadow-orange-100/50'
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg ${benefit.shadow} group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon size={30} weight="duotone" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#3d342f] mb-4 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-lg text-slate-500 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              ))}

              {/* Special CTA Card */}
              <div className="bg-blue-600 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-blue-500/20 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <Lightbulb size={64} className="mb-6 relative z-10 animate-pulse drop-shadow-md" weight="duotone" />
                <h4 className="text-3xl font-bold mb-4 relative z-10">Empower Your Team</h4>
                <p className="text-blue-50 mb-8 font-light relative z-10 text-lg border-t border-blue-500/30 pt-4">
                  Transform your workspace into a mission-driven community.
                </p>
                <Link to="/" hash="contact" className="w-full relative z-10">
                  <Button size="lg" className="w-full">
                    Get a Demo <CaretRight size={20} className="ml-2" weight="bold" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Impact Statement - Full Width */}
          <div className="w-full bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden text-center border-t-[8px] border-blue-500">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-0" />
            <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
              <p className="text-sm font-bold opacity-50 uppercase tracking-[0.4em] text-blue-400">
                Our Goal
              </p>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                Aligning every{' '}
                <span className="text-blue-400">team member</span> with a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic font-light">shared core mission.</span>
              </h3>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
