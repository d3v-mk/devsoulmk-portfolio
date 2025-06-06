// components/DockFooter.tsx
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

      // Detectar seção projetos
      const projetosEl = document.getElementById('projetos')
      let isInProjetos = false
      if (projetosEl) {
        const projetosTop = projetosEl.offsetTop
        const projetosHeight = projetosEl.offsetHeight
        // Se a viewport tá dentro da seção projetos (ou perto dela)
        isInProjetos = scrollTop + windowHeight / 2 >= projetosTop && scrollTop < projetosTop + projetosHeight
      }

      setShowDock(!isBottom && !isInProjetos)

      // Atualizar bolinha verde conforme scroll (só se dock estiver visível)
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
      } else {
        setActive('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // pra rodar na carga
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
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 backdrop-blur-md rounded-full px-6 py-3 flex gap-8 shadow-lg z-50"
        >
          {navItems.map(({ id, icon, label, href }, index) => {
            const isSeparator = index === 3

            return (
              <div key={id} className="flex items-center gap-4">
                {isSeparator && (
                  <span className="text-gray-500 opacity-40 text-2xl select-none">|</span>
                )}
                <button
                  onClick={() => scrollTo(id, href)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered('')}
                  className="relative flex flex-col items-center justify-center text-gray-800 focus:outline-none transition-transform transform hover:scale-125 hover:text-green-500"
                  aria-label={label}
                >
                  {icon}
                  <span
                    className={`absolute -bottom-1.5 w-1 h-1 rounded-full bg-green-500 transition-opacity
                      ${active === id && !href ? 'opacity-100' : 'opacity-0'}`}
                  ></span>
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
              </div>
            )
          })}
        </motion.footer>
      )}
    </AnimatePresence>
  )
}
