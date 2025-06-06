// components/Hero.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import type { ReactNode } from 'react'

export default function Hero({ children }: { children?: ReactNode }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-950 text-white overflow-hidden">
      
      {/* Avatar com efeito hover direto na foto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6 inline-block rounded-full cursor-pointer
                   transition-transform duration-300 ease-in-out
                   hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(0,255,153,0.8)]"
      >
        <Image
          src="/profile.png"
          alt="Foto de Murilo"
          width={120}
          height={120}
          className="rounded-full border-4 border-green-500 shadow-md"
        />
        {/* Bolinha online piscando */}
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-ping"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </motion.div>

      {/* Nome com efeito digitado */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-4"
      >
        <span className="text-white">
          <Typewriter
            words={['Prazer, devsoulmk.']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </span>
      </motion.h1>

      {/* Texto de apresentação */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-2xl text-gray-400 text-center space-y-6 mt-4"
      >
        <p className="text-lg md:text-xl">
          Minha alma é desenvolvedora. Simples assim. Sou o Murilo, desenvolvedor apaixonado por código, café e paz.
        </p>
      </motion.div>

      {/* Children renderizado aqui, tipo o botão */}
      {children && (
        <div className="mt-8">
          {children}
        </div>
      )}
    </section>
  )
}
