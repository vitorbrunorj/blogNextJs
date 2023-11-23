/* eslint-disable @typescript-eslint/member-delimiter-style */
import './globals.css'
import Head from 'next/head'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Favicon from '@/public/favicon.ico'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})
interface MyMetadata {
  title: string
  description: string
  keywords: string[]
  metadataBase: string
  icons: Array<{ rel: string; url: string }>
  openGraph: {
    title: string
    images: Array<{ url: string; width: number; height: number; alt: string }>
    url: string
    sitename: string
    locale: string
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

export const metadata: MyMetadata = {
  title: 'Meu Site - Aprendendo NextJS',
  description: 'Site completo para praticar nextjs com sujeito programador',
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  icons: [{ rel: 'icon', url: Favicon.src }],
  metadataBase: 'https://meusite.com',
  openGraph: {
    title: 'Aprendendo Next JS com Sujeito',
    url: 'https://meusite.com',
    sitename: 'Meu Site',
    images: [
      {
        url: 'https://sujeitoprogramador.com/wp-content/uploads/2023/06/softsk-1024x576.jpg',
        width: 1260,
        height: 800,
        alt: 'COLOCAR O NOME DO SITE'
      }
    ],
    locale: 'pt_BR'
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
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/ico" />
        </Head>
      </Head>
      <body className={openSans.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
