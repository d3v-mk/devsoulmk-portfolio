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

export default function DockFooter() {
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

      const isBottom = scrollTop + windowHeight >= docHeight - 10

      const projetosEl = document.getElementById('projetos')
      let isInProjetos = false
      if (projetosEl) {
        const projetosTop = projetosEl.offsetTop
        const projetosHeight = projetosEl.offsetHeight
        isInProjetos =
          scrollTop + windowHeight / 2 >= projetosTop &&
          scrollTop < projetosTop + projetosHeight
      }

      setShowDock(!isBottom && !isInProjetos)

      if (!isBottom && !isInProjetos) {
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
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {showDock && (
        <motion.footer
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 bg-white bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-6 shadow-lg z-50 max-w-md"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          {navItems.map(({ id, icon, label, href }, index) => {
            const isLastItem = index === navItems.length - 1

            return (
              <div key={id} className="flex items-center gap-6">
                <button
                  onClick={() => scrollTo(id, href)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered('')}
                  className={`relative flex flex-col items-center justify-center
                    text-gray-800 focus:outline-none transition-transform transform
                    hover:scale-125 hover:text-green-500 cursor-pointer`}
                  aria-label={label}
                >
                  {icon}
                  <span
                    className={`absolute -bottom-1.5 w-1 h-1 rounded-full bg-green-500 transition-opacity
                    ${active === id && !href ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <AnimatePresence>
                    {hovered === id && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-2 px-3 py-1 rounded bg-gray-100 text-gray-800 text-xs whitespace-nowrap select-none shadow-md"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {!isLastItem && (
                  <span className="text-gray-500 opacity-40 text-2xl select-none">|</span>
                )}
              </div>
            )
          })}
        </motion.footer>
      )}
    </AnimatePresence>
  )
}
