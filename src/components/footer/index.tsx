import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export function Footer() {
  return (
    <>
      <footer>
        <div className="bg-primary ">
          <div className="container px-2 py-3 ">
            <nav className="flex justify-between text-white h-40 px-1">
              <section>
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Keyko Terapias logo"
                    width={166}
                    height={50}
                    className="cursor-pointer"
                  />
                </Link>

                <p className=" pt-2 tracking-wide text-xs sm:text-sm">
                  Tel: (21) 98094-3965
                </p>
                <p className="py-2 text-xs sm:text-sm">exemplo@empresa.com</p>
                <address className="text-xs sm:text-sm">
                  {' '}
                  <p>Rua Visc. de Pirajá, 572 - 6º andar</p>
                  <p>Ipanema, Rio de Janeiro - RJ</p>
                </address>
              </section>
              <SiteLinks />
              <ServiceLinks />
              <SocialLinks />
            </nav>
          </div>
        </div>
      </footer>

      <div className=" ">
        <div className="container flex items-center justify-center px-2 py-2 h-8 ">
          <hr />
          <p>© 2023 Keyko Terapias - Created by Vitor Bruno </p>
        </div>
      </div>
    </>
  )
}

function SiteLinks() {
  return (
    <div className="hidden sm:flex flex-col ">
      <h2 className="font-heading tracking-widest">Site</h2>
      <ul className="py-1 text-xs sm:text-sm font-light tracking-wide flex-col items-center flex-grow">
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/">Home</Link>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/sobre">Sobre</Link>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/agendamento">Agendamento</Link>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/servicos">Serviços</Link>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/contatos">Contatos</Link>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}

function ServiceLinks() {
  return (
    <div className="hidden lg:flex flex-col">
      <h2 className="flex text-base font-heading tracking-widest">Serviços</h2>
      <ul className="py-1 text-sm font-light tracking-wide">
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/">Serviço 1</Link>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/">Serviço 2</Link>
        </li>
        <li className="transform transition-transform duration-200  hover:text-secondary">
          <Link href="/">Serviço 3</Link>
        </li>
      </ul>
    </div>
  )
}

function SocialLinks() {
  return (
    <div>
      <h2 className="font-heading tracking-widest">Siga-nos</h2>
      <ul className="flex py-2 bg-slate-50 p-2 rounded-full">
        <section className="flex space-x-3">
          <li>
            <Link href="https://www.facebook.com/your-facebook-page">
              <a target="_blank" rel="noopener noreferrer"></a>
              <FaFacebookSquare className="text-lg" color="#3b5998" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/your-facebook-page">
              <a target="_blank" rel="noopener noreferrer"></a>
              <FaInstagramSquare className="text-lg" color="#E1306C" />
            </Link>
          </li>
          <li>
            <Link href="https://www.whatsapp.com/your-facebook-page">
              <a target="_blank" rel="noopener noreferrer"></a>
              <FaWhatsappSquare className="text-lg" color="#25D366" />
            </Link>
          </li>
          <li>
            <Link href="https://www.gmail.com/your-facebook-page">
              <a target="_blank" rel="noopener noreferrer"></a>
              <SiGmail className="text-lg" color="#D44638" />
            </Link>
          </li>
        </section>
      </ul>
    </div>
  )
}
