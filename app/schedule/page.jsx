import React, { Suspense } from 'react'
import { getAllAnimeDates } from '../api/animelist'
import ScheduleDay from '@/components/ScheduleDay'
import ScheduleMobile from '@/components/ScheduleMobile'

export const metadata = {
  title: 'Calendario Animes de Temporada | Cuando Sale el anime...',
  description:
    'Descubre que dia de la semana salen tus animes preferidos. Calendario Animes de Temporada 2024'
}

const Schedule = async () => {
  const animeList = await getAllAnimeDates()
  const mondayAnimes = animeList.filter((a) => a.premiere.getDay() === 1)
  const tuesdayAnimes = animeList.filter((a) => a.premiere.getDay() === 2)
  const wednesdayAnimes = animeList.filter((a) => a.premiere.getDay() === 3)
  const thursdayAnimes = animeList.filter((a) => a.premiere.getDay() === 4)
  const fridayAnimes = animeList.filter((a) => a.premiere.getDay() === 5)
  const saturdayAnimes = animeList.filter((a) => a.premiere.getDay() === 6)
  const sundayAnimes = animeList.filter((a) => a.premiere.getDay() === 0)

  return (
    <div className='w-full min-h-screen justify-center py-16 px-4 text-2xl flex flex-col md:gap-12 gap-4 text-center pb-24 md:pb-16'>
      <h2 className='text-2xl border-b border-orange-500'>
        Calendario Animes de Temporada Primavera 2024
      </h2>
      <Suspense>
        <div className='md:hidden'>
          <ScheduleMobile animeList={mondayAnimes} day={'Lunes'} />
          <ScheduleMobile animeList={tuesdayAnimes} day={'Martes'} />
          <ScheduleMobile animeList={wednesdayAnimes} day={'Miercoles'} />
          <ScheduleMobile animeList={thursdayAnimes} day={'Jueves'} />
          <ScheduleMobile animeList={fridayAnimes} day={'Viernes'} />
          <ScheduleMobile animeList={saturdayAnimes} day={'Sabado'} />
          <ScheduleMobile animeList={sundayAnimes} day={'Domingo'} />
        </div>
        <div className='hidden md:grid md:grid-cols-7 md:gap-2'>
          <ScheduleDay animeList={mondayAnimes} day={'Lunes'} color />
          <ScheduleDay animeList={tuesdayAnimes} day={'Martes'} />
          <ScheduleDay animeList={wednesdayAnimes} day={'Miercoles'} color />
          <ScheduleDay animeList={thursdayAnimes} day={'Jueves'} />
          <ScheduleDay animeList={fridayAnimes} day={'Viernes'} color />
          <ScheduleDay animeList={saturdayAnimes} day={'Sabado'} />
          <ScheduleDay animeList={sundayAnimes} day={'Domingo'} color />
        </div>
      </Suspense>
    </div>
  )
}

export default Schedule
