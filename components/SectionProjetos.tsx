// components/SectionProjetos.tsx
import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

export type Projeto = {
  nome: string
  desc: string
  stack: string[]
  repo: string
  imagem: string
}

type SectionProjetosProps = {
  projetos: Projeto[]
}

const SectionProjetos = forwardRef<HTMLElement, SectionProjetosProps>(
  ({ projetos }, ref) => {
    return (
      <section
        ref={ref}
        id="projetos"
        className="min-h-screen bg-gray-950 text-white px-6 md:px-20 py-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4 text-center text-white-300"
        >
          Meus Projetos
        </motion.h2>

        <p className="max-w-3xl text-lg text-gray-400 text-center mx-auto mb-16">
          Ideias que saíram do papel, passaram pelo terminal e ganharam vida na web.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projetos.map(p => (
            <motion.div
              key={p.nome}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 group"
            >
              <img
                src={p.imagem}
                alt={p.nome}
                className="rounded-xl mb-4 h-40 w-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
              <h3 className="text-xl font-bold mb-2">{p.nome}</h3>
              <p className="text-sm text-gray-300 mb-3">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-gray-700 to-gray-600 text-xs px-2 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }
)

SectionProjetos.displayName = 'SectionProjetos'

export default SectionProjetos
