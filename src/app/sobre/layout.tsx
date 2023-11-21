export const metadata = {
  title: 'Sobre',
  description: 'Esse é o painel demonstrativo do site'
}

export default function SobreLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h3>Header do sobre</h3>
      <br />
      {children}
    </>
  )
}
