'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ScheduleMobileDay = ({ animeList, day }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }
  const dropdownClass = isOpen ? 'flex opacity-100' : 'invisible h-0 py-0'

  const color = {
    Lunes: {
      name: 'Lunes',
      class:
        'text-gray-900 bg-blue-100 hover:bg-blue-200 dark:bg-blue-100 dark:hover:bg-blue-200 '
    },
    Martes: {
      name: 'Martes',
      class:
        'text-gray-900 bg-yellow-700 hover:bg-yellow-800 dark:bg-yellow-600 dark:hover:bg-yellow-700 '
    },
    Miercoles: {
      name: 'Miercoles',
      class:
        'text-gray-900 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 '
    },
    Jueves: {
      name: 'Jueves',
      class:
        'text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 '
    },
    Viernes: {
      name: 'Viernes',
      class:
        'text-gray-900 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-300 dark:hover:bg-yellow-400 '
    },
    Sabado: {
      name: 'Sabado',
      class:
        'text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 '
    },
    Domingo: {
      name: 'Domingo',
      class:
        'text-white bg-red-800 hover:bg-red-900 dark:bg-red-700 dark:hover:bg-red-800 '
    }
  }
  return (
    <>
      <div className={`relative h-12 ${isOpen ? 'h-full' : ''}`}>
        <button
          onClick={toggle}
          className={`w-4/5 overflow-hidden font-bold text-lg px-5 py-2.5 text-center justify-center items-center inline-flex 
          ${color[day].class} ${day === 'Lunes' ? 'rounded-t-lg' : ''}  
          ${day === 'Domingo' ? 'rounded-b-lg' : ''} 
          ${isOpen ? 'rounded-b-none' : ''}
          `}
          type='button'
        >
          {day}
          <svg
            className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
        <div
          className={`w-4/5 flex-row flex-wrap gap-2 text-center inline-flex justify-center py-12 ${dropdownClass} ${color[day].class} transition-opacity duration-300 opacity-0`}
        >
          {animeList.map((item) => (
            <div
              key={item.name}
              className={`flex items-center h-52 w-60 gap-2 text-start ${
                isOpen ? '' : 'hidden'
              }`}
            >
              <Image
                className='w-auto h-auto'
                alt={item.name}
                src={item.image}
                width={100}
                height={'100'}
              />
              <h5 className='text-base font-medium'>{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ScheduleMobileDay
