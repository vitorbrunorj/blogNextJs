import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'

export function Header() {
  return (
    <header className="border border-red-700">
      <div className="flex justify-between">
        Endereço: Rua 1, 123 - Bairro - Cidade - UF
        <div className="">Telefone: (XX) 99999--9999</div>
      </div>
      <div className="">
        <Link href="/">
          <Image src={logo} alt="Keyko Terapias logo" className="w-12 h-12" />
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contatos">Contatos</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <div></div>
      </div>
    </header>
  )
}
