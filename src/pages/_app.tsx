// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Devmk | Portfólio</title>
        <meta
          name="description"
          content="Portfólio do Murilo, devsoulmk - Desenvolvedor Fullstack apaixonado por código e café"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="devsoulmk | Portfólio" />
        <meta
          property="og:description"
          content="Portfólio do Murilo, devsoulmk - Desenvolvedor Fullstack apaixonado por código e café"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Aqui você pode adicionar wrappers globais, providers, contextos, etc */}

      <Component {...pageProps} />
    </>
  )
}
