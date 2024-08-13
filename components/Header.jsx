'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const ROUTES = [
  {
    name: '+ Info',
    url: '/about'
  },
  {
    name: 'Estrenos',
    url: '/premieres'
  },
  {
    name: 'Calendario',
    url: '/schedule'
  },
  {
    name: 'Yo',
    url: '/custom-schedule'
  }
]

const Header = ({}) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className='w-full text-xl h-12 flex justify-between items-center absolute top-0 bg-black bg-opacity-50 z-50'>
      <Link
        className={`hover:text-orange-500 text-3xl font-medium px-2 ${
          pathname === '/' ? 'text-orange-500' : ''
        }`}
        href={'/'}
      >
        ¿Cuando Sale?
      </Link>

      <button
        type='button'
        className='inline-flex items-center p-2 mr-1 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:ring-slate-700'
        onClick={handleToggle}
        title='Menu'
      >
        <span className='sr-only'>Menu</span>
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>

      <div
        className={`w-full md:flex md:w-4/6 md:justify-around items-center ${
          isOpen
            ? 'fixed h-screen bg-slate-900 flex flex-col top-0 justify-evenly overflow-hidden '
            : 'hidden'
        } `}
      >
        <button
          className={`md:hidden ${isOpen ? '' : 'hidden'}'`}
          type='button'
          onClick={handleToggle}
          title='Cerrar Menu'
        >
          <span className='sr-only'>Cerrar menu</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='2rem'
            height='2rem'
            viewBox='0 0 24 24'
            className={`${
              isOpen ? 'absolute top-2 right-2 hover:text-orange-500' : 'hidden'
            } hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500`}
          >
            <path
              fill='currentColor'
              d='M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z'
            />
          </svg>
        </button>
        {ROUTES.map((item) => (
          <Link
            key={item.url}
            className={`${
              pathname === item.url
                ? 'text-orange-500 border-y border-orange-500'
                : ''
            } ${
              isOpen
                ? 'w-full text-center py-4 hover:bg-orange-500 hover:text-black'
                : 'hover:text-orange-500'
            }`}
            href={item.url}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        {/*         <Link
          className={`${
            pathname === '/about'
              ? 'text-orange-500 border-y border-orange-500'
              : ''
          } ${
            isOpen
              ? 'w-full text-center py-4 hover:bg-orange-500 hover:text-black'
              : 'hover:text-orange-500'
          }`}
          href={'/about'}
          onClick={() => setIsOpen(false)}
        >
          + Info
        </Link>

        <Link
          className={`${
            pathname === '/premieres'
              ? 'text-orange-500 border-y border-orange-500'
              : ''
          } ${
            isOpen
              ? 'w-full text-center py-4 hover:bg-orange-500 hover:text-black'
              : 'hover:text-orange-500'
          }`}
          href={'/premieres'}
          onClick={() => setIsOpen(false)}
        >
          Estrenos
        </Link>

        <Link
          className={`${
            pathname === '/schedule'
              ? 'text-orange-500 border-y border-orange-500'
              : ''
          } ${
            isOpen
              ? 'w-full text-center py-4 hover:bg-orange-500 hover:text-black'
              : 'hover:text-orange-500'
          }`}
          href={'/schedule'}
          onClick={() => setIsOpen(false)}
        >
          Calendario
        </Link> */}
      </div>
    </header>
  )
}

export default Header
