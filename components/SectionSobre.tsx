// components/SectionSobre.tsx
import { motion } from 'framer-motion'
import { SiPython, SiPostgresql, SiKotlin, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'

type Skill = {
  name: string
  icon: string          // nome do ícone ou caminho da imagem
  isImg?: boolean       // true = imagem, false = react-icon
}

type SectionSobreProps = {
  skills: Skill[]
}

const iconMap = {
  SiPython: <SiPython size={40} color="#3776AB" />,        // azul Python
  SiPostgresql: <SiPostgresql size={40} color="#336791" />, // azul PG
  SiKotlin: <SiKotlin size={40} color="#7F52FF" />,        // roxo Kotlin
  SiNextdotjs: <SiNextdotjs size={40} color="white" />,    // branco Next.js
  SiReact: <SiReact size={40} color="#61DAFB" />,           // azul React
  SiTailwindcss: <SiTailwindcss size={40} color="#38B2AC" />, // teal Tailwind
}


export default function SectionSobre({ skills }: SectionSobreProps) {
  return (
    <section
      id="sobre"
      className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-gray-100 flex flex-col items-center justify-center px-6 md:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Sobre Mim
      </motion.h2>

      <p className="max-w-3xl text-lg leading-relaxed text-gray-300 mb-8 text-center">
        Meu nome é Murilo, conhecido como devsoulmk. Tenho mais experiência em backend, principalmente com Python, mas também me aventuro no front quando necessário. Trabalho em ritmo acelerado e gosto de estar sempre produtivo.
      </p>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
        {skills.map(({ name, icon, isImg }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            {isImg ? (
              <img src={icon} alt={name} className="w-10 h-10" />
            ) : (
              iconMap[icon as keyof typeof iconMap] || <span>❓</span>
            )}
            <span className="text-sm text-gray-200">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
