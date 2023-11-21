// src/components/Header.tsx
import { type FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header>
      <Link href="/">
        <img src="/logo.png" alt="Logo da Empresa" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
