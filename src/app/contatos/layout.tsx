export const metadata = {
  title: 'Contatos',
  description: 'Esse é o painel demonstrativo do site'
}

export default function ContatosLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h3>Header dos contatos</h3>
      <br />
      {children}
    </>
  )
}
