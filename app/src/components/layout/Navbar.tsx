import { useState, useEffect } from 'react'
import { CaretDown, List, X } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'
import { NAV_LINKS } from '@/constants/navigation'
import { buttonVariants } from '@/components/ui/button'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent',
      )}
    >
      <div className="content-container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 flex-shrink-0 group"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
            R
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 font-display">RDM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group py-2">
              {link.subItems ? (
                <>
                  <button className="flex items-center gap-1.5 text-[15px] font-semibold text-slate-600 hover:text-primary transition-colors cursor-pointer whitespace-nowrap">
                    {link.name}
                    <CaretDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </button>

                  <div className="absolute top-full left-0 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 min-w-[240px]">
                    <div className="bg-white rounded-2xl shadow-premium border border-slate-100 p-2 overflow-hidden">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href.startsWith('/') ? (subItem.href as any) : undefined}
                          href={!subItem.href.startsWith('/') ? subItem.href : undefined}
                          className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.href as any}
                  className="text-[15px] font-semibold text-slate-600 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/contact"
            className={buttonVariants({ variant: "default" })}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 overflow-hidden xl:hidden shadow-2xl"
          >
            <div className="content-container py-8 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="border-b border-slate-50 last:border-none">
                  {link.subItems ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-4 text-lg font-bold text-slate-900"
                        onClick={() => setExpandedItem(expandedItem === link.name ? null : link.name)}
                      >
                        {link.name}
                        <CaretDown
                          size={20}
                          className={cn('transition-transform duration-300', expandedItem === link.name && 'rotate-180')}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: expandedItem === link.name ? 'auto' : 0, opacity: expandedItem === link.name ? 1 : 0 }}
                        className="overflow-hidden bg-slate-50/50 rounded-2xl mb-4"
                      >
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href.startsWith('/') ? (subItem.href as any) : undefined}
                            className="block py-3 px-6 text-slate-600 font-medium hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <Link
                      to={link.href as any}
                      className="block py-4 text-lg font-bold text-slate-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className={buttonVariants({ size: "lg", className: "w-full" })}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

