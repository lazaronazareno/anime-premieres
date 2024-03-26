import { animeList } from '@/app/animeList'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SomePremieresSection = () => {
  const premieresList = animeList.slice(0, 3)
  return (
    <div className='w-full flex p-4'>
      <div className='w-1/2'>
        <Image
          width='600'
          height='600'
          src='/images/premieres.webp'
          alt='anime-premieres'
        />
      </div>
      <div className='w-1/2 flex flex-col gap-2 items-center text-xl justify-center'>
        {premieresList.map((anime) => (
          <Link
            className='text-orange-500 hover:text-blue-700'
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
