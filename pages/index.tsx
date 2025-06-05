import Head from 'next/head'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'

const projetos = [
  {
    nome: 'PanoPoker',
    desc: 'Plataforma de pôquer online com FastAPI, WebSocket e amor no código.',
    stack: ['FastAPI', 'WebSocket', 'Jetpack Compose'],
    repo: 'https://github.com/devsoulmk/panopoker',
    imagem: '/img/panopoker.png',
  },
  // Você pode adicionar mais projetos aqui
]

export default function Home() {
  const scrollToProjetos = () => {
    const el = document.getElementById('projetos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>devsoulmk | Portfólio</title>
        <meta name="description" content="Portfólio do Murilo, devsoulmk - Desenvolvedor Fullstack apaixonado por código e café" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Sidebar />

      <main className="ml-64">
        {/* Seção Hero */}
        <section id="topo">
          <Hero>
            <button
              onClick={scrollToProjetos}
              className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition"
            >
              Ver Projetos
            </button>
          </Hero>
        </section>

        {/* Seção Sobre Mim */}
        <section id="sobre" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 md:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Sobre Mim
          </motion.h2>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
            Sou Murilo, conhecido como devsoulmk. Um dev fullstack que respira código, café e café com código.
            Gosto de criar soluções intuitivas, escaláveis e com design que conversa com o usuário.
          </p>
        </section>

        {/* Seção Projetos */}
        <section id="projetos" className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-6 md:px-20 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Projetos
          </motion.h2>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-300 mb-8">
            Aqui você encontra alguns dos meus trabalhos mais recentes. Código limpo, arquitetura sólida e aquela pitada de alma que só um dev de verdade tem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.map((p, i) => (
              <div key={i} className="bg-gray-700 p-4 rounded-xl shadow-md hover:scale-105 transform transition">
                <img src={p.imagem} alt={p.nome} className="rounded mb-4" />
                <h3 className="text-xl font-bold">{p.nome}</h3>
                <p className="text-gray-300">{p.desc}</p>
                <p className="text-sm text-gray-400 mt-2">Stack: {p.stack.join(', ')}</p>
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 inline-block">
                  Ver código
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Rodapé */}
        <footer className="bg-gray-900 text-white p-6 text-center">
          <p>&copy; {new Date().getFullYear()} devsoulmk. Feito com café ☕ e Next.js 🚀</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://github.com/devsoulmk" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/devsoulmk" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:devsoulmk@gmail.com" className="hover:text-blue-400">
              Email
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
