import Link from 'next/link'
import Image from 'next/image'
import banner from '@/public/banner.png'

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-primary to-white min-h-[200px] ">
      <section className="container flex justify-between items-center">
        <div>
          <h1 className="text-base font-bold tracking-wider text-primary">
            Bem-vindo à Jornada de Transformação com Elaine Keyko, Terapeuta
            Integrativa!
          </h1>
        </div>
        <Link href="/">
          <Image
            className="object-contain"
            src={banner}
            alt="Keyko Terapias logo"
          />
        </Link>
      </section>
    </main>
  )
}
