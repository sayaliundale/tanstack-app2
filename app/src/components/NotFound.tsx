import { Link } from '@tanstack/react-router'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center p-8 text-center pt-32">
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p className="text-xl mb-8 text-muted-foreground">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-lg hover:shadow-primary/25 bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-6 py-3 h-auto"
                >
                    Go Back Home
                </Link>
            </main>
            <Footer />
        </div>
    )
}
