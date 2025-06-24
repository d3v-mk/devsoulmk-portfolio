// components/Hero.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import type { ReactNode } from 'react'

export default function Hero({ children }: { children?: ReactNode }) {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white pb-32"
      style={{ minHeight: '100vh', maxHeight: '100vh' }} // SEGURA 100vh FIXO
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6 inline-block rounded-full cursor-pointer transition-transform hover:scale-110 hover:shadow-[0_0_30px_8px_rgba(0,255,153,0.8)]"
      >
        <Image
          src="/profile.png"
          alt="Foto de Murilo"
          width={140}
          height={140}
          className="rounded-full border-4 border-green-500 shadow-lg"
          priority
        />
        <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-ping" />
        <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 max-w-full break-words"
      >
        <Typewriter
          words={['Prazer, devsoulmk.']}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={120}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-2xl text-gray-400 text-center space-y-6 mt-4 px-4"
      >
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Minha alma é desenvolvedora. Simples assim. Sou o Murilo, apaixonado por código, café e paz.
        </p>
      </motion.div>

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      )}
    </section>
  )
}
