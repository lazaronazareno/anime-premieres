'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ScheduleAnimesSkeleton from './ScheduleAnimesSkeleton'
import { InfoIcon } from './Icons'

const CustomSchedule = ({ animeList }) => {
  const [selectedAnimes, setSelectedAnimes] = useState({
    Lunes: [],
    Martes: [],
    Miércoles: [],
    Jueves: [],
    Viernes: [],
    Sábado: [],
    Domingo: []
  })
  const [showSelectedAnimes, setShowSelectedAnimes] = useState(false)
  const [animeLoading, setAnimeLoading] = useState(true)

  const getAnimePremiereDay = (anime) => {
    const daysOfWeek = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
    ]
    const dayIndex = anime.premiere.getDay()
    return daysOfWeek[dayIndex]
  }

  const handleAdd = (currentAnime) => {
    const day = getAnimePremiereDay(currentAnime)

    if (selectedAnimes[day].some((anime) => anime.name === currentAnime.name)) {
      return
    }

    setSelectedAnimes((prevState) => ({
      ...prevState,
      [day]: [...prevState[day], currentAnime]
    }))
  }

  const handleRemove = (animeToRemove) => {
    const day = getAnimePremiereDay(animeToRemove)
    setSelectedAnimes((prevState) => ({
      ...prevState,
      [day]: prevState[day].filter((anime) => anime !== animeToRemove)
    }))
  }

  const isSelected = (anime) => {
    const day = getAnimePremiereDay(anime)
    return selectedAnimes[day].some(
      (selectedAnime) => selectedAnime.name === anime.name
    )
  }

  const totalAnimesSelected = Object.values(selectedAnimes).reduce(
    (total, animes) => total + animes.length,
    0
  )

  const allDaysSelected = Object.values(selectedAnimes).every(
    (animes) => animes.length > 0
  )
  const handleSaveToLocalStorage = () => {
    localStorage.setItem('selectedAnimes', JSON.stringify(selectedAnimes))
    console.log('Tus selecciones han sido guardadas.')
  }

  useEffect(() => {
    const savedAnimes = localStorage.getItem('selectedAnimes')
    if (savedAnimes) {
      setSelectedAnimes(JSON.parse(savedAnimes))
      setAnimeLoading(false)
    }
    setAnimeLoading(false)
  }, [])

  return (
    <>
      <div className='flex justify-between md:px-14 pb-2 border-b border-white'>
        <div className='flex gap-2'>
          <h3 className='text-lg md:text-2xl font-semibold '>
            {showSelectedAnimes ? 'Mi calendario' : 'Animes en emisión'}
          </h3>
          <p className='has-tooltip relative cursor-help'>
            <span className='tooltip w-72 bg-orange-500 text-black font-semibold left-10 top-1 rounded'>
              {showSelectedAnimes
                ? 'Los Animes acá son los que elegiste en la pestaña anterior. Recuerda guardar tus selecciones!'
                : 'Selecciona los animes que quieres agregar a tu calendario. Si están más oscuros quiere decir que ya los agregaste.'}
            </span>
            <InfoIcon />
          </p>
        </div>
        <label className='inline-flex items-center me-5 cursor-pointer'>
          <input
            type='checkbox'
            value={showSelectedAnimes}
            className='sr-only peer'
            checked={showSelectedAnimes}
            onChange={() => setShowSelectedAnimes(!showSelectedAnimes)}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
          <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Mostrar mi Calendario
          </span>
        </label>
      </div>
      {animeLoading && <ScheduleAnimesSkeleton />}
      {!animeLoading && (
        <>
          {showSelectedAnimes ? (
            <>
              <div className='md:grid md:grid-cols-7 md:grid-rows-1 gap-2 mt-4'>
                {Object.entries(selectedAnimes).map(([day, animes]) => (
                  <div className='flex flex-col items-center' key={day}>
                    <h4 className='text-xl border-b border-b-white mb-4 w-2/3'>
                      {day}
                    </h4>
                    <div
                      className={`flex items-center flex-wrap justify-center gap-4 mb-6`}
                    >
                      <>
                        {animes.length > 0 ? (
                          <>
                            {animes.map((anime) => (
                              <div key={anime.name} className='relative group'>
                                <Link href={anime.slug}>
                                  <Image
                                    className='w-32 h-44'
                                    alt={anime.name}
                                    src={anime.image}
                                    width={400}
                                    height={600}
                                  />
                                  <div className='absolute text-sm bottom-0 left-0 w-full bg-orange-500 text-white text-center transition-all opacity-0 group-hover:opacity-100'>
                                    {anime.name}
                                  </div>
                                </Link>
                                <button
                                  type='button'
                                  className='absolute text-base -top-2 -right-3 w-6 bg-red-500 text-white rounded-full z-10'
                                  onClick={() => handleRemove(anime)}
                                >
                                  X
                                </button>
                              </div>
                            ))}
                          </>
                        ) : (
                          <span>No tienes animes este dia</span>
                        )}
                      </>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className='py-4 px-8 rounded bg-orange-500 text-black font-semibold'
                type='button'
                onClick={handleSaveToLocalStorage}
              >
                Guardar
              </button>
            </>
          ) : (
            <div className='flex items-center flex-wrap justify-center gap-2 text-start'>
              <div className='flex gap-4 justify-end w-full text-sm me-6 mb-4 md:me-14'>
                {allDaysSelected && (
                  <p className='text-green-600 font-bold'>
                    Ya has elegido un anime para cada día de la semana!*
                  </p>
                )}

                {totalAnimesSelected > 7 && totalAnimesSelected <= 10 && (
                  <p className='text-blue-600 font-bold '>
                    Has elegido más de 7 animes*
                  </p>
                )}

                {totalAnimesSelected > 10 && totalAnimesSelected <= 13 && (
                  <p className='text-yellow-600 font-bold'>
                    Has elegido más de 10 animes*
                  </p>
                )}

                {totalAnimesSelected > 12 && (
                  <p className='text-red-800 font-bold'>
                    Has elegido {totalAnimesSelected} animes*
                  </p>
                )}
              </div>
              {animeList.map((item) => (
                <div
                  className={`${
                    isSelected(item)
                      ? 'opacity-30 cursor-auto'
                      : 'hover:opacity-50 cursor-pointer'
                  } transition-all`}
                  key={item.name}
                  onClick={() => handleAdd(item)}
                >
                  <Image
                    className='w-32 h-40'
                    alt={item.name}
                    src={item.image}
                    width={400}
                    height={'600'}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default CustomSchedule
