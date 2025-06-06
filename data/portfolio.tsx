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
    nome: 'PanoPoker backend',
    desc: 'Repositório em Python com FastAPI, responsável pela lógica, regras de negócio, APIs e integração com banco de dados.',
    stack: ['FastAPI', 'WebSocket'],
    repo: 'https://github.com/d3v-mk/backend',
    imagem: '/img/panopoker.png',
  },
  {
    nome: 'Panopoker Frontend Android',
    desc: 'Jetpack Compose que consome a API do backend para oferecer a experiência do usuário.',
    stack: ['Kotlin', 'Jetpack Compose'],
    repo: 'https://github.com/devsoulmk/portfolio',
    imagem: 'https://source.unsplash.com/400x300/?portfolio,developer',
  },
  {
    nome: 'Portfolio do Dev',
    desc: 'Esse mesmo portfólio aqui. Feito com carinho e Tailwind na veia.',
    stack: ['Next.js', 'Framer Motion', 'Tailwind'],
    repo: 'https://github.com/devsoulmk/portfolio',
    imagem: 'https://source.unsplash.com/400x300/?portfolio,developer',
  },
]
