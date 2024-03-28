import { getAllAnimes } from '@/app/api/animelist'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SomePremieresSection = async () => {
  const animeList = await getAllAnimes()
  const premieresList = animeList.slice(0, 6)
  return (
    <div className='w-full flex flex-col md:flex-row items-center p-4 gap-2 md:gap-0 bg-white text-black'>
      <div className='w-1/2'>
        <Image
          width='600'
          height='600'
          src='/images/premieres.webp'
          alt='anime-premieres'
          placeholder='empty'
          priority
        />
      </div>
      <div className='w-1/2 flex flex-col gap-2 items-center text-xl md:text-2xl justify-center px-2'>
        {premieresList.map((anime) => (
          <Link
            className='text-blue-600 hover:text-orange-600'
            href={`/${anime.slug}`}
            key={anime.slug}
          >
            {anime.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SomePremieresSection
