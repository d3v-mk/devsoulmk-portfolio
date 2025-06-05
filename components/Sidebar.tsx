import Image from 'next/image'

export default function Sidebar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col items-center py-10 shadow-lg z-50">
      {/* Foto */}
      <div className="mb-6">
        <Image
          src="/profile.png"
          alt="Foto de Murilo"
          width={100}
          height={100}
          className="rounded-full border-2 border-green-400"
        />
      </div>

      {/* Nome */}
      <h2 className="text-xl font-bold mb-6">devsoulmk</h2>

      {/* Navegação */}
      <nav className="flex flex-col gap-4">
        <button onClick={() => scrollTo('topo')} className="hover:text-green-400">Início</button>
        <button onClick={() => scrollTo('sobre')} className="hover:text-green-400">Sobre Mim</button>
        <button onClick={() => scrollTo('projetos')} className="hover:text-green-400">Projetos</button>
        <a href="mailto:devsoulmk@gmail.com" className="hover:text-green-400 mt-6">Contato</a>
      </nav>
    </aside>
  )
}
