// src/components/Footer.tsx
import { type FC } from 'react'

const Footer: FC = () => {
  return (
    <footer>
      <p>© 2022 Sua Empresa</p>
      <ul>
        <li>
          <a href="/privacy">Política de Privacidade</a>
        </li>
        <li>
          <a href="/terms">Termos de Serviço</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://www.facebook.com/suaempresa">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com/suaempresa">Twitter</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
