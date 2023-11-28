import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Head from 'next/head'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Favicon from '@/public/favicon.ico'
import { Open_Sans as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { ThemeProvider } from './_components/theme-provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

const metadata = {
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

export interface OpenGraph {
  title: string
  url: string
  sitename: string
  images: Array<{
    url: string
    width: number
    height: number
    alt: string
  }>
  locale: string
}

export interface Icon {
  rel: string
  url: string
}

export interface Robots {
  index: boolean
  follow: boolean
  nocache: boolean
  googleBot: {
    index: boolean
    follow: boolean
    noimageindex: boolean
  }
}

// Use constantes para strings repetidas
const INDEX = 'index'
const NOINDEX = 'noindex'
const FOLLOW = 'follow'
const NOFOLLOW = 'nofollow'

const generateRobotContent = ({
  index,
  follow
}: {
  index: boolean
  follow: boolean
}) => `${index ? INDEX : NOINDEX}, ${follow ? FOLLOW : NOFOLLOW}`

interface MetaTagsProps {
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
  openGraph: OpenGraph
  title: string
  description: string
  keywords: string[]
  icons: Icon[]
}

const AUTHOR_NAME = 'Nome do Autor'

const MetaTags = ({
  robots,
  openGraph,
  title,
  description,
  keywords,
  icons
}: MetaTagsProps) => (
  <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content={AUTHOR_NAME} />
    <meta name="googlebot" content={generateRobotContent(robots.googleBot)} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(', ')} />
    <meta property="og:title" content={openGraph.title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={openGraph.images[0].url} />
    <meta property="og:url" content={openGraph.url} />
    <meta property="og:site_name" content={openGraph.sitename} />
    <meta property="og:locale" content={openGraph.locale} />
    <meta
      name="robots"
      content={`${robots.index ? 'index' : 'noindex'}, ${
        robots.follow ? 'follow' : 'nofollow'
      }`}
    />
    <link rel="icon" href={icons[0].url} />
  </>
)
interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" type="image/ico" />

        <MetaTags {...metadata} />
      </Head>
      <html>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
            fontHeading.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

export default RootLayout
