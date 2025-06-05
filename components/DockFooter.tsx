import { useState, useEffect } from 'react'
import { FiHome, FiUser, FiFolder } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const navItems = [
  { id: 'topo', label: 'Início', icon: <FiHome size={28} /> },
  { id: 'sobre', label: 'Sobre Mim', icon: <FiUser size={28} /> },
  { id: 'projetos', label: 'Projetos', icon: <FiFolder size={28} /> },
  {
    id: 'contato',
    label: 'WhatsApp',
    icon: <FaWhatsapp size={28} />,
    href: 'https://wa.me/5544991578192',
  },
]

export default function FooterDock() {
  const [hovered, setHovered] = useState('')
  const [active, setActive] = useState('topo')
  const [showDock, setShowDock] = useState(true)

  const scrollTo = (id: string, href?: string) => {
    if (href) {
      window.open(href, '_blank')
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActive(id)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Sumir dock no final da página
      const isBottom = scrollTop + windowHeight >= docHeight - 10
      setShowDock(!isBottom)

      // Atualizar bolinha verde conforme scroll
      let currentActive = 'topo'
      for (const { id } of navItems) {
        if (id === 'contato') continue
        const el = document.getElementById(id)
        if (!el) continue
        const offsetTop = el.offsetTop
        if (scrollTop >= offsetTop - windowHeight / 2) {
          currentActive = id
        }
      }
      setActive(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // pra atualizar no load
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {showDock && (
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-30 backdrop-blur-md rounded-full px-6 py-3 flex gap-8 shadow-[0_0_15px_rgba(72,187,120,0.6)] z-50"
        >
          {navItems.map(({ id, icon, label, href }, index) => {
            const isSeparator = index === 3 // antes do WhatsApp

            return (
              <div key={id} className="flex items-center gap-4">
                {isSeparator && (
                  <span className="text-white opacity-30 text-2xl select-none">|</span>
                )}
                <button
                  onClick={() => scrollTo(id, href)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered('')}
                  className="relative flex flex-col items-center justify-center text-white focus:outline-none transition-transform transform hover:scale-125 hover:text-green-400"
                  aria-label={label}
                >
                  {icon}
                  <span
                    className={`absolute -bottom-1.5 w-1 h-1 rounded-full bg-green-400 transition-opacity
                      ${active === id && !href ? 'opacity-100' : 'opacity-0'}`}
                  ></span>
                  <AnimatePresence>
                    {hovered === id && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-2 px-3 py-1 rounded bg-gray-800 text-xs whitespace-nowrap select-none shadow-lg"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            )
          })}
        </motion.footer>
      )}
    </AnimatePresence>
  )
}
