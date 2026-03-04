import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants/footer'

interface FooterProps {
  className?: string
  id?: string
}

export function Footer({ className, id }: FooterProps) {
  return (
    <footer id={id} className={`bg-slate-950 text-white overflow-hidden py-24 ${className || ''}`}>
      <div className="content-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-xl">
                R
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                RDM
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 text-lg leading-relaxed font-light">
              Empowering organizations to drive engagement and impact through human-centric design and behavioral science.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <social.icon size={20} weight="fill" className="text-slate-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(FOOTER_LINKS).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <h4 className="font-black mb-6 text-white uppercase tracking-[0.2em] text-xs font-display">
                {category}
              </h4>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link}>
                    {category === 'Company' && link === 'About Us' ? (
                      <Link
                        to="/about"
                        className="text-slate-400 hover:text-primary transition-all text-base font-light hover:translate-x-1 inline-block"
                      >
                        {link}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-slate-400 hover:text-primary transition-all text-base font-light hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">RDM Inc.</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

