import {
  CheckCircle,
  ArrowRight,
} from '@phosphor-icons/react'
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { USE_CASES_DATA } from '@/constants/use-cases'

export function UseCases() {
  return (
    <div className="flex flex-col min-h-screen pt-16 lg:pt-24 bg-slate-50/30">
      {USE_CASES_DATA.map((useCase) => (
        <section
          key={useCase.id}
          id={useCase.id}
          className={`py-24 relative overflow-hidden border-b border-slate-100 ${useCase.bg.includes('pink') ? 'bg-rose-50/40' :
            useCase.bg.includes('blue') ? 'bg-blue-50/40' :
              useCase.bg.includes('green') ? 'bg-emerald-50/40' :
                useCase.bg.includes('orange') ? 'bg-orange-50/40' :
                  'bg-slate-50/40'
            }`}
        >
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col items-center text-center mb-20">
              <div className="max-w-4xl w-full">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 px-4">
                  <div
                    className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0"
                  >
                    <useCase.icon
                      size={32}
                      className={useCase.color.replace('text-', 'text-')}
                      weight="duotone"
                    />
                  </div>
                  <h2
                    className="text-4xl lg:text-5xl font-bold text-[#3d342f] tracking-tight leading-tight"
                    title={useCase.title}
                  >
                    {useCase.title}
                  </h2>
                </div>
                <p className="text-xl lg:text-2xl font-light italic text-slate-500 mb-6 px-4">
                  {useCase.subtitle}
                </p>

                <p
                  className="text-lg text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed font-light px-4 border-t border-slate-200/50 pt-8"
                  title={useCase.description}
                >
                  {useCase.description}
                </p>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 mb-20">
                  {useCase.images?.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl group border-[6px] border-white bg-slate-100"
                    >
                      <img
                        src={img}
                        alt={`${useCase.title} visualization ${idx + 1}`}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCase.sections.map((section, idx) => (
                <Card
                  key={idx}
                  id={section.id}
                  className="border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-[2rem] overflow-hidden flex flex-col"
                >
                  <CardHeader className="bg-slate-50/50 border-b border-slate-50 pb-6 pt-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div
                        className={`w-12 h-12 rounded-2xl ${useCase.bg.includes('pink') ? 'bg-rose-100 text-rose-600' :
                          useCase.bg.includes('blue') ? 'bg-blue-100 text-blue-600' :
                            useCase.bg.includes('green') ? 'bg-emerald-100 text-emerald-600' :
                              useCase.bg.includes('orange') ? 'bg-orange-100 text-orange-600' :
                                'bg-slate-100 text-slate-600'
                          } flex items-center justify-center text-lg font-bold shadow-sm`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <h3 className="text-xl font-bold text-[#3d342f] leading-snug">
                        {section.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-8 flex-grow flex flex-col items-center px-8 pb-8">
                    <p
                      className="text-slate-500 text-base max-w-full text-center leading-relaxed font-light"
                      title={section.description}
                    >
                      {section.description}
                    </p>
                    <ul className="space-y-4 w-full text-left pt-2">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-4">
                          <CheckCircle
                            className={`flex-shrink-0 mt-0.5 ${useCase.color}`}
                            size={18}
                            weight="fill"
                          />
                          <span className="text-slate-600 text-base leading-relaxed font-light">{point}</span>
                        </li>
                      ))}
                    </ul>
                    {section.outcome && (
                      <div className={`mt-auto pt-6 w-full`}>
                        <div className={`p-5 rounded-2xl ${useCase.bg.includes('pink') ? 'bg-rose-50 border border-rose-100' :
                          useCase.bg.includes('blue') ? 'bg-blue-50 border border-blue-100' :
                            useCase.bg.includes('green') ? 'bg-emerald-50 border border-emerald-100' :
                              useCase.bg.includes('orange') ? 'bg-orange-50 border border-orange-100' :
                                'bg-slate-50 border border-slate-100'
                          } w-full text-left`}>
                          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                            Outcome
                          </p>
                          <p className="text-base text-[#3d342f] font-medium leading-relaxed">
                            {section.outcome}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-[#3d342f] text-white text-center mt-auto border-t-[8px] border-blue-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-0" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Start building purpose-driven habits—personally or at scale.
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Whether you’re an individual, a school, a hospital, or a
            corporation—RDM helps convert intent into action and action into
            impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto"
            >
              Request a Demo (Organizations)
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Join Early Access (Individuals)
            </Button>
          </div>
          <div className="mt-12">
            <Button
              variant="link"
              className="text-slate-300 hover:text-white group"
            >
              Partner with RDM (CSR/NGOs/Brands){' '}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
