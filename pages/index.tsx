import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>devsoulmk | Portfólio</title>
        <meta name="description" content="Portfólio do Murilo, devsoulmk - Desenvolvedor Fullstack apaixonado por código e café" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero />

      {/* Seção Sobre Mim */}
      <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
          Sou Murilo, conhecido como devsoulmk. Um dev fullstack que respira código, café e café com código.  
          Gosto de criar soluções intuitivas, escaláveis e com design que conversa com o usuário.
        </p>
      </section>

      {/* Seção Projetos */}
      <section className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-6">Projetos</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
          Aqui você encontra alguns dos meus trabalhos mais recentes. Código limpo, arquitetura sólida e aquela pitada de alma que só um dev de verdade tem.
        </p>
      </section>
    </>
  )
}
