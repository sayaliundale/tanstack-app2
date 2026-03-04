import { createFileRoute } from '@tanstack/react-router'
import { UseCases } from '@/components/landing/UseCases'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const Route = createFileRoute('/use-cases')({
    component: UseCasesPage,
})

function UseCasesPage() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
            <Navbar />
            <main>
                <UseCases />
            </main>
            <Footer />
        </div>
    )
}
