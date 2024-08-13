import React, { Suspense } from 'react'
import { getAllAnimeDates } from '../api/animelist'
import CustomSchedule from '@/components/CustomSchedule'

export const metadata = {
  title: 'Calendario Animes de Temporada | Cuando Sale el anime...',
  description:
    'Descubre que dia de la semana salen tus animes preferidos. Calendario Animes de Temporada 2024'
}

const Schedule = async () => {
  const animeList = await getAllAnimeDates()

  return (
    <div className='w-full min-h-screen py-16 px-4 flex flex-col md:gap-6 gap-4 text-center pb-24 md:pb-16'>
      <h2 className='md:text-4xl text-3xl pb-2 border-b border-orange-500'>
        ¡Armá tu Calendario de estrenos!
      </h2>
      <Suspense>
        <CustomSchedule animeList={animeList} />
      </Suspense>
    </div>
  )
}

export default Schedule
