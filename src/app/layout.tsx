import type { ReactNode } from 'react'
import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header' // Importando o componente Header
import Footer from '@/components/footer'

const inter = Open_Sans({ subsets: ['latin'] })

interface Metadata {
  title: string
  description: string
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog treinamento'
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Header /> {/* Usando o componente Header apenas uma vez */}
      <body className={inter.className}>{children}</body>
      <Footer />
    </>
  )
}

export default RootLayout
