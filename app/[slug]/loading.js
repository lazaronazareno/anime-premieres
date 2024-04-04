import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen w-full flex flex-col pt-16 items-center'>
      <div className='w-5/6 h-full bg-slate-400'>
        <div className='absolute top-32 left-1/2 w-full -translate-x-1/2 bg-orange-800 bg-opacity-50 animate-pulse'>
          <div className='w-1/2 h-32' />
        </div>
        <div className='w-1/2 h-48 absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
          <div className='w-1/2 h-16 rounded-t-md bg-orange-800 animate-pulse -mb-1' />
          <div className='w-full h-32 bg-orange-800 animate-pulse' />
        </div>
      </div>
    </div>
  )
}

export default Loading
