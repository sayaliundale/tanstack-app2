import { Link, createFileRoute } from '@tanstack/react-router'
import {
  CaretRight,
  ChartBar,
  CheckCircle,
  CloudArrowUp,
  Database,
  FileText,
  PresentationChart,
  ShieldCheck,
} from '@phosphor-icons/react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/sustainability-reporting')({
  component: SustainabilityReportingPage,
})

function SustainabilityReportingPage() {
  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary/20 selection:text-primary bg-white">
      <Navbar />

      <main className="pb-12 max-w-none mx-auto">
        <section className="max-w-none mx-auto text-center">
          {/* Hero Section */}
          <div className="bg-[#F1F5F9] mb-20 w-full relative overflow-hidden pt-24 pb-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-200/50 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/30 blur-[150px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-10">
              <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                <ChartBar size={18} weight="fill" />
                Data & Transparency
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-black tracking-tight leading-tight">
                Sustainability <br />
                <span className="text-slate-700">Reporting</span>
              </h1>

              <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/50 shadow-xl shadow-slate-900/5">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Definition
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed font-light">
                  A data-driven system that transforms individual and collective
                  goodness into{' '}
                  <span className="text-slate-700 font-bold">
                    transparent, verifiable impact reports
                  </span>{' '}
                  for organizations, investors, and stakeholders.
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
                Providing clear, verifiable proof of environmental and social
                contribution.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {[
                {
                  icon: CloudArrowUp,
                  title: 'Real-Time Data',
                  desc: 'Provides automated, real-time data for ESG and CSR disclosures and internal monitoring.',
                  color: 'bg-blue-600',
                },
                {
                  icon: ShieldCheck,
                  title: 'Verified Credibility',
                  desc: 'Increases credibility via verified ledger entries (immutable proof of action).',
                  color: 'bg-indigo-600',
                },
                {
                  icon: Database,
                  title: 'Impact Narratives',
                  desc: 'Aggregates small individual habits into large-scale, compelling impact narratives.',
                  color: 'bg-emerald-600',
                },
                {
                  icon: CheckCircle,
                  title: 'Simplified Compliance',
                  desc: 'Simplifies compliance with global sustainability standards and various frameworks.',
                  color: 'bg-slate-700',
                },
                {
                  icon: PresentationChart,
                  title: 'Stakeholder Trust',
                  desc: 'Builds stakeholder trust through radical transparency and continuous progress tracking.',
                  color: 'bg-sky-600',
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start text-left hover:bg-white hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div
                    className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-${benefit.color.split('-')[1] || benefit.color.split('-')[0]}-200`}
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
              <div className="bg-slate-800 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white shadow-xl shadow-slate-200 group">
                <FileText size={64} className="mb-6 animate-pulse" />
                <h4 className="text-3xl font-bold mb-4">
                  Radical Transparency
                </h4>
                <p className="text-slate-300 mb-8 font-light">
                  Turn your organization's goodness into verifiable impact data.
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-transparent" />
            <div className="content-container relative z-10 space-y-8">
              <p className="text-xl md:text-2xl font-light opacity-80 uppercase tracking-[0.2em]">
                Our Methodology
              </p>
              <h3 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl mx-auto">
                Transforming <span className="text-slate-400">goodness</span>{' '}
                into <span className="italic">verifiable impact assets.</span>
              </h3>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}
