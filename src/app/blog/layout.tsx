export const metadata = {
  title: 'Blog',
  description: 'Esse é o painel demonstrativo do site'
}

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h3>Header do Blog</h3>
      <br />
      {children}
    </>
  )
}
