import Link from 'next/link'
import SomePremieresSection from '@/components/SomePremieresSection'
import { adventProFont } from './layout'

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between ${adventProFont.className}`}
    >
      <div className='w-full max-w-7xl pb-12'>
        <div className='py-20 px-4 flex flex-col gap-2'>
          <h1 className='md:text-7xl text-6xl font-semibold'>
            ¿Cuando sale el anime...?
          </h1>
          <p className='text-xl md:text-2xl'>
            ¿No sabes cuándo se estrena el anime que estás esperando? Aqui
            podrás obtener la fecha del estreno en japon y la fecha estimada en
            la que saldra en plataformas de stream como Crunchyroll
          </p>
          <Link
            className='flex self-end rounded font-semibold bg-orange-400 text-black p-2 w-max text-xl hover:bg-black border-[1px] border-orange-500 hover:text-slate-100'
            href={'/premieres'}
          >
            Ver Proximos Estrenos
          </Link>
        </div>
        <SomePremieresSection />
      </div>
    </main>
  )
}
