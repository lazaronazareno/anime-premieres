import React, { Suspense } from 'react'
import ClientGate from '@/components/ClientGate'
import BackgroundVideo from '@/components/BackgroundVideo'
import Timer from '@/components/Timer'
import { adventProFont } from '../layout'
import { getAllAnimes, getAnimeBySlug } from '../api/animelist'

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { slug } = params
  const anime = await getAnimeBySlug(slug)
  return {
    title: `Cuando Sale ${anime.name}`,
    description: `El anime ${anime.name} se estrena el ${new Date(
      anime.premiere
    ).toLocaleString()}`
  }
}

export async function generateStaticParams() {
  const animeList = await getAllAnimes()
  return animeList.map((item) => ({
    slug: item.slug
  }))
}

const Page = async ({ params }) => {
  const { slug } = params
  const anime = await getAnimeBySlug(slug)

  return (
    <Suspense>
      <div className='w-full h-screen text-center relative overflow-hidden'>
        <div className='absolute top-32 left-1/2 w-full -translate-x-1/2 bg-orange-400 bg-opacity-50'>
          <p className='sm:text-3xl text-2xl'>¿Cuando sale</p>
          <h2
            className={`sm:text-6xl text-5xl font-semibold ${adventProFont.className}`}
          >
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
    </Suspense>
  )
}

export default Page
