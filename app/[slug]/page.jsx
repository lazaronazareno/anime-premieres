import React from 'react'
import ClientGate from '@/components/ClientGate'
import BackgroundVideo from '@/components/BackgroundVideo'
import Timer from '@/components/Timer'
import { adventProFont } from '../layout'
import { getAllAnimes } from '../api/animelist'

export const dynamicParams = false

export async function generateStaticParams() {
  const animeList = await getAllAnimes()
  return animeList.map((item) => ({
    slug: item.slug
  }))
}

const Page = async ({ params }) => {
  const { slug } = params
  const animeList = await getAllAnimes()

  const anime = animeList.find((item) => item.slug === slug)
  return (
    <div className='w-full h-screen text-center relative overflow-hidden'>
      <div
        className={`absolute top-32 left-1/2 w-full -translate-x-1/2 bg-orange-400 bg-opacity-50`}
      >
        <p className='text-3xl'>¿Cuando sale</p>
        <h2 className={`text-6xl font-semibold ${adventProFont.className}`}>
          {anime.name}?
        </h2>
      </div>
      <ClientGate>
        {
          <>
            <BackgroundVideo url={anime.url} />
            <Timer date={anime.premiere} />
          </>
        }
      </ClientGate>
    </div>
  )
}

export default Page
