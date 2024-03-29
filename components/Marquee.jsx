import React from 'react'

const Marquee = ({ word }) => {
  return (
    <div className='relative flex overflow-x-hidden bg-orange-400 text-black md:text-4xl text-2xl'>
      <div className='py-4 md:py-8 animate-marquee whitespace-nowrap '>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
      </div>

      <div className='absolute top-0 py-4 md:py-8 animate-marquee2 whitespace-nowrap'>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
        <span className=' mx-4'>{word}</span>
      </div>
    </div>
  )
}

export default Marquee
