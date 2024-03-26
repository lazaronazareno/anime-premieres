import BackgroundVideo from '@/components/BackgroundVideo'
import Timer from '@/components/Timer'
import { animeList } from './animeList'
import { Dosis, Advent_Pro } from 'next/font/google'
import ClientGate from '@/components/ClientGate'
import { Suspense } from 'react'
import LayoutWrapper from '@/components/LayoutWrapper'
import Link from 'next/link'
import SomePremieresSection from '@/components/SomePremieresSection'

export const dosisFont = Dosis({ subsets: ['latin'] })
export const adventProFont = Advent_Pro({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between ${adventProFont.className}`}
    >
      <LayoutWrapper>
        <div className='w-full max-w-7xl'>
          <div className='py-12 px-4 flex flex-col gap-2'>
            <h1 className='text-7xl font-semibold'>
              ¿Cuando sale el anime...?
            </h1>
            <p className='text-2xl'>
              ¿No sabes cuándo se estrena el anime que estás esperando? Aqui
              podrás obtener la fecha del estreno en japon y la fecha estimada
              en la que saldra en plataformas de stream como Crunchyroll
            </p>
            <Link
              className='flex self-end rounded font-semibold bg-orange-400 text-black p-2 w-max text-xl hover:bg-black hover:border-[1px] hover:border-orange-500 hover:text-slate-100'
              href={'/premieres'}
            >
              Ver Proximos Estrenos
            </Link>
          </div>
          <SomePremieresSection />
        </div>
      </LayoutWrapper>
    </main>
  )
}
