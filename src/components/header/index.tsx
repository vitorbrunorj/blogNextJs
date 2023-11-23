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
      <div className="grid text-white">
        <div className="container">
          <div className="flex flex-wrap md:flex-no-wrap bg-gray-100 px-2 py-1 item-center justify-between">
            <div className="py-1 px-2 flex space-x-2">
              <Link href="https://www.facebook.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaFacebookSquare className="icon-medium" color="#3b5998" />
              </Link>
              <Link href="https://www.instagram.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaInstagramSquare className="icon-medium" color="#E1306C" />
              </Link>
              <Link href="https://www.whatsapp.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaWhatsappSquare className="icon-medium" color="#25D366" />
              </Link>
              <Link href="https://www.gmail.com/your-facebook-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <SiGmail className="icon-medium" color="#D44638" />
              </Link>

              <Link href="https://www.telegram.com/your-telegram-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaTelegram className="icon-medium" color="#0088cc" />
              </Link>
              <Link href="https://www.youtube.com/your-youtube-page">
                <a target="_blank" rel="noopener noreferrer"></a>
                <FaYoutube className="icon-medium" color="#FF0000" />
              </Link>
            </div>

            <div className="text-black text-xs font-light flex items-center px-2 space-x-2">
              <div className="text-gray-600">
                <BsFillTelephoneFill />
              </div>
              <span>Telefone: (21) 98094-3965 </span>
            </div>

            <div className="text-black text-xs font-light flex items-center px-2 space-x-2">
              <div className="text-gray-600">
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

      <div className="grid text-white">
        <div className="flex flex-wrap md:flex-no-wrap bg-primary py-1 item-center">
          <div className="py-1 px-2 md:border hover:boarder-white rounded">
            <FaBars className="text-2xl border-0" />
          </div>

          <div className="flex mx-2 my2 border border-transparent hover:border-white">
            <Link href="/">
              <Image src={logo} alt="Keyko Terapias logo" className="h-7" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
