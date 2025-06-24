import { useRef } from 'react'
import Hero from '@/components/Hero'
import DockFooter from '@/components/DockFooter'
import SectionSobre from '@/components/SectionSobre'
import SectionProjetos from '@/components/SectionProjetos'
import { skills, projetos } from '@/data/Projetos'

export default function Home() {
  const projetosRef = useRef<HTMLElement | null>(null)

  return (
    <>
      <main className="relative flex flex-col overflow-x-hidden">
        <section id="topo" className="relative z-0">
          <Hero />
        </section>

        <section className="relative z-10">
          <SectionSobre skills={skills} />
        </section>

        <section id="projetos" className="relative z-10">
          <SectionProjetos ref={projetosRef} projetos={projetos} />
        </section>
      </main>

      {/* Dock footer agora fora do main, fixado no body */}
      <DockFooter />

      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} devmk. Feito com café ☕ e Next.js 🚀
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/devsoulmk"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/devsoulmk"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:devsoulmk@gmail.com" className="link">
            Email
          </a>
        </div>
      </footer>
    </>
  )
}
