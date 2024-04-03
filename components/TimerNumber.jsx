import React from 'react'

const TimerNumber = ({ num, text }) => {
  return (
    <div className='sm:w-36 w-20 flex flex-col items-center justify-center border-r-[1px] border-slate-500'>
      <span className='block text-6xl font-medium text-blue-950'>{num}</span>
      <span className='text-lg md:text-md lg:text-2xl font-light text-slate-800'>
        {text}
      </span>
    </div>
  )
}

export default TimerNumber
