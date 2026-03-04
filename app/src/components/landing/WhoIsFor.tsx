import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { WHO_IS_FOR_TABS } from '@/constants/tabs'

export function WhoIsFor() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0074E40A] p-8 md:p-10 rounded-[3rem] shadow-md border border-gray-100">
          <div className="text-center mb-2">
            <h2 className="text-4xl font-light text-[#091B26]">Who is for?</h2>
          </div>

          <Tabs defaultValue="employee" className="w-full">
            <div className="flex justify-start mb-0 overflow-x-auto pt-0 pb-0 scrollbar-hide px-2">
              <TabsList className="inline-flex w-fit bg-transparent gap-1.5">
                {WHO_IS_FOR_TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="px-10 py-2 text-sm md:text-lg font-light text-black rounded-full transition-all duration-300 hover:bg-[#0066FF] hover:text-white data-active:bg-[#0066FF] data-active:text-white data-active:shadow-xl data-active:shadow-blue-500/30 after:hidden ring-0 outline-none"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {WHO_IS_FOR_TABS.map((tab) => (
              <TabsContent
                key={tab.id}
                value={tab.id}
                className="mt-[-4px] outline-none"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="flex flex-col items-start text-left order-2 lg:order-1">
                    <h3 className="text-black text-2xl font-bold mt-0 mb-1">
                      {tab.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#091B26] leading-relaxed font-light mt-12 mb-0 max-w-md">
                      {tab.headline} {tab.paragraph}
                    </p>
                  </div>
                  <div className="relative order-1 lg:order-2">
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-white shadow-xl border border-gray-100 p-4">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
