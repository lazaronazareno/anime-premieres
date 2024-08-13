import Image from 'next/image'
import React from 'react'

const ScheduleDay = ({ animeList, day, color }) => {
  return (
    <div className={`${color ? 'bg-slate-800' : ''}`}>
      <h3 className='text-3xl border-b border-orange-500 mb-2'>{day}</h3>
      {animeList.map((item) => (
        <div key={item.name} className='flex flex-col items-center'>
          <Image
            className='w-32 h-40'
            alt={item.name}
            src={item.image}
            width={400}
            height={'600'}
          />
          <h5 className='text-base'>{item.name}</h5>
        </div>
      ))}
    </div>
  )
}

export default ScheduleDay
