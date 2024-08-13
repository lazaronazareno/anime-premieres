import ScheduleAnimesSkeleton from '@/components/ScheduleAnimesSkeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full min-h-screen justify-center py-16 px-4 text-2xl flex flex-col md:gap-12 gap-4 text-center pb-24 md:pb-16'>
      <div className='py-14 px-8 rounded mb-2' />
      <ScheduleAnimesSkeleton />
    </div>
  )
}

export default Loading
