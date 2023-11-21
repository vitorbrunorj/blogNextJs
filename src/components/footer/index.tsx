import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-400">
      <hr />
      <p>© 2022 Sua Empresa</p>
      <ul>
        <li>
          <Link href="/privacy">Política de Privacidade</Link>
        </li>
        <li>
          <Link href="/terms">Termos de Serviço</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="https://www.facebook.com/suaempresa">Facebook</Link>
        </li>
        <li>
          <Link href="https://www.twitter.com/suaempresa">Twitter</Link>
        </li>
      </ul>
      <br />
    </footer>
  )
}
