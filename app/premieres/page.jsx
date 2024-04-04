import React, { Suspense } from 'react'
import { getAllAnimes } from '../api/animelist'
import Search from '@/components/Search'

export const metadata = {
  title: 'Estrenos de Anime | Cuando Sale el anime...',
  description:
    'Conoce la fecha de estreno de los animes de temporada y próximos estrenos.'
}

const Premieres = async () => {
  const animeList = await getAllAnimes()

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Suspense>
        <Search animeList={animeList} />
      </Suspense>
    </div>
  )
}

export default Premieres
