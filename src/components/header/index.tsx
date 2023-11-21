import Link from 'next/link'

export function Header() {
  return (
    <header>
      <Link href="/">
        <img src="/logo.png" alt="Logo da Empresa" />
      </Link>
      <nav className="bg-slate-400">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contatos">Contatos</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}
