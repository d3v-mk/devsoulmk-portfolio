// pages/index.tsx
import Head from 'next/head'
import { useRef } from 'react'
import Hero from '../components/Hero'
import DockFooter from '../components/DockFooter'
import SectionSobre from '../components/SectionSobre'
import SectionProjetos from '../components/SectionProjetos'
import { skills, projetos } from '../data/portfolio'

export default function Home() {
  const projetosRef = useRef<HTMLElement | null>(null)

  const scrollToProjetos = () => {
    projetosRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>devsoulmk | Portfólio</title>
        <meta
          name="description"
          content="Portfólio do Murilo, devsoulmk - Desenvolvedor Fullstack apaixonado por código e café"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* SEO turbo */}
        <meta property="og:title" content="devsoulmk | Portfólio" />
        <meta
          property="og:description"
          content="Portfólio do Murilo, devsoulmk - Desenvolvedor Fullstack apaixonado por código e café"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        {/* Hero */}
        <section id="topo">
          <Hero>

          </Hero>
        </section>

        {/* Sobre Mim */}
        <SectionSobre skills={skills} />

        {/* Projetos - ref com forwardRef */}
        <SectionProjetos ref={projetosRef} projetos={projetos} />
      </main>

      <DockFooter />

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} devsoulmk. Feito com café ☕ e Next.js 🚀
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://github.com/devsoulmk"
            className="hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/devsoulmk"
            className="hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:devsoulmk@gmail.com" className="hover:text-blue-400">
            Email
          </a>
        </div>
      </footer>
    </>
  )
}
