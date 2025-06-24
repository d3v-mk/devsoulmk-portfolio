// data/portfolio.tsx
export type Skill = {
  name: string
  icon: string // vai ser a string do nome do ícone ou o caminho da imagem
  isImg?: boolean // flag pra saber se é imagem (true) ou react-icon (false)
}

export type Projeto = {
  nome: string
  desc: string
  stack: string[]
  repo: string
  imagem: string
}

export const skills: Skill[] = [
  { name: 'Python', icon: 'SiPython' },
  { name: 'PostgreSQL', icon: 'SiPostgresql' },
  { name: 'FastAPI', icon: '/img/fastapi-logo.svg', isImg: true },
  { name: 'Compose', icon: '/img/jetpackcompose-original.svg', isImg: true },
  { name: 'Kotlin', icon: 'SiKotlin' },
  { name: 'Next.js', icon: 'SiNextdotjs' },
  { name: 'React', icon: 'SiReact' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
]

export const projetos: Projeto[] = [
  {
    nome: 'The Gentlemans Club',
    desc: 'Landing Page para barbearia, 100% responsiva',
    stack: ['Vite', 'React', 'Tailwind'],
    repo: 'https://github.com/d3v-mk/NaRegua/tree/main/backend',
    imagem: '/img/thegent.png',
  },
  {
    nome: 'Panopoker Front Android',
    desc: 'Simplesmente uma plataforma de poker online com real money para android desenvolvida 100% solo',
    stack: ['Kotlin', 'Jetpack Compose'],
    repo: 'https://github.com/d3v-mk/backend',
    imagem: '/img/pano_front.jpeg',
  },

]
