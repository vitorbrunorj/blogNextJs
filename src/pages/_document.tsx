import Document, { Html, Head, Main, NextScript } from 'next/document'
import { metadata } from '@/components/Metadata/metadata'

import type { OpenGraph, Robots, Icon } from '@/app/layout'

interface MetaTagsProps {
  robots: Robots
  openGraph: OpenGraph
  title: string
  description: string
  keywords: string[]
  icons: Icon[]
}

const renderMetaTag = (name: string, content: string) => (
  <meta name={name} content={content} />
)

const MetaTags = ({
  robots,
  openGraph,
  title,
  description,
  keywords,
  icons
}: MetaTagsProps) => (
  <>
    {renderMetaTag('charSet', 'UTF-8')}
    {renderMetaTag('viewport', 'width=device-width, initial-scale=1')}
    {renderMetaTag('author', process.env.AUTHOR_NAME ?? 'Nome do Autor')}

    {renderMetaTag(
      'googlebot',
      `${robots.googleBot.index ? 'index' : 'noindex'}, ${
        robots.googleBot.follow ? 'follow' : 'nofollow'
      }`
    )}
    <title>{title}</title>
    {renderMetaTag('description', description)}
    {keywords.map((keyword, index) =>
      renderMetaTag(`keyword-${index}`, keyword)
    )}
    {renderMetaTag('og:title', openGraph.title)}
    {renderMetaTag('og:description', description)}
    {Array.isArray(openGraph.images) &&
      openGraph.images.length > 0 &&
      renderMetaTag('og:image', openGraph.images[0].url)}

    {renderMetaTag('og:url', openGraph.url)}
    {renderMetaTag('og:site_name', openGraph.sitename)}
    {renderMetaTag('og:locale', openGraph.locale)}
    {renderMetaTag(
      'robots',
      `${robots.index ? 'index' : 'noindex'}, ${
        robots.follow ? 'follow' : 'nofollow'
      }`
    )}
    <link rel="icon" href={icons[0].url} />
  </>
)

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/ico" />
          <MetaTags {...metadata} />
        </Head>
        <body className="min-h-screen bg-background antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
