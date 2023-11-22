/* eslint-disable @typescript-eslint/member-delimiter-style */
import './globals.css'
import Head from 'next/head'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Favicon from '@/public/favicon.ico'

interface Metadata {
  title: string
  description: string
  keywords: string[]
  metadataBase: string
  icons: Array<{ rel: string; url: string }>
  openGraph: {
    title: string
    images: string[]
  }
  robots: {
    index: boolean
    follow: boolean
    nocache: boolean
    googleBot: {
      index: boolean
      follow: boolean
      noimageindex: boolean
    }
  }
}

export const metadata: Metadata = {
  title: 'Meu Site - Aprendendo NextJS',
  description: 'Site completo para praticar nextjs com sujeito programador',
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  icons: [{ rel: 'icon', url: Favicon.src }],
  metadataBase: 'https://meusite.com',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito',
    images: [
      'https://sujeitoprogramador.com/wp-content/uploads/2023/06/softsk-1024x576.jpg'
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <Head>
        <link rel="icon" href="/src/public/favicon.ico" />
      </Head>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
