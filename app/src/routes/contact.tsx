import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactSuccess } from '@/components/contact/ContactSuccess'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const Route = createFileRoute('/contact')({
    component: ContactPage,
})

function ContactPage() {
    const [isSuccess, setIsSuccess] = useState(false)

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col relative">
            <Navbar />

            <main className="flex-grow relative z-10">
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 blur-[150px] rounded-full -z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/20 blur-[150px] rounded-full -z-10 pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                        <ContactHero />

                        <div className="mt-12 max-w-3xl mx-auto relative">
                            {isSuccess ? (
                                <ContactSuccess onReset={() => setIsSuccess(false)} />
                            ) : (
                                <ContactForm onSuccess={() => setIsSuccess(true)} />
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
