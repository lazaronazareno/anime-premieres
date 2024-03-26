import React from 'react'
import { animeList } from '../animeList'
import ClientGate from '@/components/ClientGate'
import BackgroundVideo from '@/components/BackgroundVideo'
import Timer from '@/components/Timer'
import { adventProFont, dosisFont } from '../page'

export const dynamicParams = false

export async function generateStaticParams() {
  return animeList.map((item) => ({
    slug: item.slug
  }))
}

const Page = ({ params }) => {
  const { slug } = params
  const anime = animeList.find((item) => item.slug === slug)
  return (
    <div className='w-full h-screen text-center relative'>
      <div
        className={`absolute top-32 left-1/2 w-full -translate-x-1/2 ${dosisFont.className}`}
      >
        <p className='text-3xl'>Cuando sale</p>
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
