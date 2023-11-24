import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import { FaBars, FaYoutube, FaTelegram, FaLocationDot } from 'react-icons/fa6'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'

export function Header() {
  return (
    <header>
      {/* Header superior */}
      <div className="grid bg-light ">
        <div className="container">
          <div className="h-38 hidden sm:flex flex flex-wrap px-2 justify-between">
            <div className="flex opacity-80 items-center space-x-2 ">
              <Link href="https://www.facebook.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaFacebookSquare className="text-xl" color="#3b5998" />
              </Link>
              <Link href="https://www.instagram.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaInstagramSquare className="text-xl" color="#E1306C" />
              </Link>
              <Link href="https://www.whatsapp.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaWhatsappSquare className="text-xl" color="#25D366" />
              </Link>
              <Link href="https://www.gmail.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <SiGmail className="text-xl" color="#D44638" />
              </Link>

              <Link href="https://www.telegram.com/your-telegram-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaTelegram className="text-xl" color="#0088cc" />
              </Link>
              <Link href="https://www.youtube.com/your-youtube-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaYoutube className="text-xl" color="#FF0000" />
              </Link>
            </div>

            <div className="hidden sm:flex text-black text-xs font-light tracking-widest text-shadow items-center px-2 py-2 space-x-2">
              <div className="text-gray-600">
                <BsFillTelephoneFill />
              </div>
              <span>Telefone: (21) 98094-3965 </span>
            </div>

            <div className="hidden md:flex text-black text-12px  font-light tracking-wide text-shadow items-center px-2 space-x-2">
              <div className="text-gray-600 ">
                <FaLocationDot />
              </div>
              <span>
                R. Visc. de Pirajá, 572 - 6 andar - Ipanema, Rio de Janeiro -
                RJ, 22410-002
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header Inferior */}

      <div className="grid text-white bg-primary fixed-top ">
        <div className="container">
          <div className="flex px-2 flex-wrap h-52 items-center justify-between">
            <Link href="/">
              <Image
                src={logo}
                alt="Keyko Terapias logo"
                className="cursor-pointer"
              />
            </Link>

            <div className="sm:hidden py-1 px-1">
              <FaBars className="text-4xl" />
            </div>
          </div>
        </div>
        <div className="bg-blue-600 h-536"></div>
        <div className="bg-blue-900 h-400"></div>
      </div>
    </header>
  )
}
