import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactSuccess } from '@/components/contact/ContactSuccess'

export const Route = createFileRoute('/contact')({
    component: ContactPage,
})

function ContactPage() {
    const [isSuccess, setIsSuccess] = useState(false)

    return (
        <div className="min-h-screen bg-slate-50/50 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 lg:pt-48 pb-32">
                <div className="content-container max-w-4xl">
                    <ContactHero />

                    <div className="max-w-3xl mx-auto">
                        {isSuccess ? (
                            <ContactSuccess onReset={() => setIsSuccess(false)} />
                        ) : (
                            <ContactForm onSuccess={() => setIsSuccess(true)} />
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

