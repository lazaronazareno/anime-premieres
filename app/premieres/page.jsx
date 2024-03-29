import React from 'react'
import { getAllAnimes } from '../api/animelist'
import Link from 'next/link'
import Search from '@/components/Search'

const Premieres = async () => {
  const animeList = await getAllAnimes()

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Search animeList={animeList} />
    </div>
  )
}

export default Premieres
