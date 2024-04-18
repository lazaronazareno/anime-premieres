import Image from 'next/image'
import React from 'react'

const ScheduleDay = ({ animeList, day, color }) => {
  return (
    <div className={`${color ? 'bg-slate-800' : ''}`}>
      <h3 className='text-3xl border-b border-orange-500 mb-2'>{day}</h3>
      {animeList.map((item) => (
        <div key={item.name} className='flex flex-col items-center'>
          <Image
            className='w-auto h-auto'
            alt={item.name}
            src={item.image}
            width={100}
            height={'100'}
          />
          <h5 className='text-base'>{item.name}</h5>
        </div>
      ))}
    </div>
  )
}

export default ScheduleDay
