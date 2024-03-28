import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full text-xl h-12 flex justify-around items-center absolute top-0 bg-black bg-opacity-50 z-50'>
      <Link className='hover:text-orange-500' href={'/#about'}>
        + Info
      </Link>
      <Link className='hover:text-orange-500 text-3xl font-medium' href={'/'}>
        ¿Cuando Sale?
      </Link>
      <Link className='hover:text-orange-500' href={'/premieres'}>
        Estrenos
      </Link>
    </header>
  )
}

export default Header
