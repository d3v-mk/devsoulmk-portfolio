// components/SectionSobre.tsx
import { motion } from 'framer-motion'
import {
  SiPython, SiPostgresql, SiKotlin, SiNextdotjs, SiReact, SiTailwindcss,
} from 'react-icons/si'

const iconMap = {
  SiPython: <SiPython size={32} color="#3776AB" />,
  SiPostgresql: <SiPostgresql size={32} color="#336791" />,
  SiKotlin: <SiKotlin size={32} color="#7F52FF" />,
  SiNextdotjs: <SiNextdotjs size={32} color="white" />,
  SiReact: <SiReact size={32} color="#61DAFB" />,
  SiTailwindcss: <SiTailwindcss size={32} color="#38B2AC" />,
}

type Skill = {
  name: string
  icon: string
  isImg?: boolean
}

export default function SectionSobre({ skills }: { skills: Skill[] }) {
  return (
    <motion.section
      className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-gray-100 flex flex-col items-center justify-center px-6 md:px-20 py-28 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ marginTop: '0' }}
    >
      <h2 className="text-5xl font-extrabold mb-8">Sobre Mim</h2>

      <p className="max-w-3xl text-xl text-gray-300 text-center mb-10 leading-relaxed">
        Meu nome é Murilo, mas a galera me chama de MK.
        Tenho mais experiência no backend, mas também me aventuro no front quando a missão pede.
        Gosto de soluções simples, mas que funcionam.
        Curto transformar ideias em projetos.
      </p>

      <h3 className="text-3xl font-semibold mb-6">Skills</h3>

      <p className="text-gray-400 text-base mb-10 text-center max-w-xl leading-relaxed">
        Tecnologias que uso no dia a dia. Da API ao layout, sempre buscando o equilíbrio entre performance e praticidade.
      </p>

      <div className="flex flex-wrap justify-center gap-14 max-w-4xl">
        {skills.map(({ name, icon, isImg }) => (
          <div key={name} className="flex flex-col items-center gap-3">
            {isImg
              ? <img src={icon} alt={name} className="w-8 h-8" />
              : iconMap[icon as keyof typeof iconMap] || <span>❓</span>}
            <span className="text-base text-gray-200 font-medium">{name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
