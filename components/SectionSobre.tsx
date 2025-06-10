// components/SectionSobre.tsx
import { motion } from 'framer-motion'
import {
  SiPython,
  SiPostgresql,
  SiKotlin,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

type Skill = {
  name: string
  icon: string
  isImg?: boolean
}

type SectionSobreProps = {
  skills: Skill[]
}

const iconMap = {
  SiPython: <SiPython size={40} color="#3776AB" />,
  SiPostgresql: <SiPostgresql size={40} color="#336791" />,
  SiKotlin: <SiKotlin size={40} color="#7F52FF" />,
  SiNextdotjs: <SiNextdotjs size={40} color="white" />,
  SiReact: <SiReact size={40} color="#61DAFB" />,
  SiTailwindcss: <SiTailwindcss size={40} color="#38B2AC" />,
}

const SectionSobre = ({ skills }: SectionSobreProps) => (
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
      Meu nome é Murilo, mas a galera me chama de "MK".
      Tenho mais experiência no backend, mas também me aventuro no front quando a missão pede.
      Gosto de soluções simples, mas que funcionam.
      Curto transformar ideias em projetos.
    </p>

    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-2xl font-semibold mb-4 mt-4 text-center"
    >
      Skills
    </motion.h3>

    <p className="text-gray-400 text-sm mb-6 text-center max-w-xl">
      Tecnologias que uso no dia a dia 
      <div />
      Da API ao layout, sempre buscando o equilíbrio entre performance e praticidade.
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

export default SectionSobre
