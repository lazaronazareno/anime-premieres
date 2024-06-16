'use client'
import { formatDateString } from '@/app/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Search = ({ animeList }) => {
  const seasons = animeList.map((item) => item.season)
  const seasonsArray = [...new Set(seasons)]

  const [search, setSearch] = useState('')
  const [season, setSeason] = useState(seasonsArray[0])
  const [filteredList, setFilteredList] = useState(animeList)

  const handleClick = (e) => {
    e.preventDefault()
    const filteredList = animeList.filter((item) => {
      const lowerCaseName = item.name.toLowerCase()
      const lowerCaseSearch = search.toLowerCase()

      if (lowerCaseSearch < 3) {
        return animeList
      } else {
        return lowerCaseName.includes(lowerCaseSearch)
      }
    })
    setFilteredList(filteredList)
  }

  const handleSelectSeason = (season) => {
    setSeason((prev) => (prev = season))

    const filteredList = animeList.filter((item) => {
      const itemSeason = item.season

      const seasonMatch = itemSeason.includes(season)

      return seasonMatch
    })

    setFilteredList(filteredList)
  }

  useEffect(() => {
    handleSelectSeason(season)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='py-16 text-xl'>
      <form onSubmit={handleClick} className='px-2 w-full flex justify-center'>
        <input
          className='rounded mx-2 p-2 text-black w-72'
          type='text'
          placeholder='Boku no Hero, Mushoku Tensei...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='bg-orange-500 rounded p-2 text-black hover:bg-orange-800 hover:text-slate-100'>
          Buscar Anime
        </button>
      </form>
      {seasonsArray.length > 0 && (
        <div className='flex justify-center gap-2 mt-2'>
          {seasonsArray.map((item) => (
            <span
              value={item}
              key={item}
              onClick={() => handleSelectSeason(item)}
              className={`${
                item === season
                  ? 'text-orange-500 border-b-[1px] border-orange-500'
                  : ''
              } cursor-pointer p-1`}
            >
              {item}
            </span>
          ))}
        </div>
      )}
      {animeList.length !== filteredList.length && search !== '' && (
        <div className='flex justify-between items-center'>
          <span className='text-2xl px-4 my-8 '>Resultados :</span>
          <button
            className='px-4 bg-orange-500 rounded text-black hover:bg-orange-800 hover:text-slate-100'
            type='button'
            onClick={() => {
              setSearch('')
              setFilteredList(animeList)
            }}
          >
            Borrar
          </button>
        </div>
      )}
      <div className='p-4 grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-2 items-center'>
        {filteredList.map((item) => (
          <Link
            className='hover:text-orange-500 flex flex-col sm:flex-row sm:w-72 lg:w-80 2xl:w-96 h-full gap-2 hover:animate-pulse'
            href={`/${item.slug}`}
            key={item.slug}
          >
            <Image
              className='w-full max-w-48 sm:w-24 sm:max-w-24 md:w-32 md:max-w-32 2xl:w-40 2xl:max-w-40 2xl:h-52 h-44 aspect-[2/1] '
              alt={item.name}
              src={item.image}
              width={100}
              height={60}
            />
            <div className='w-full flex flex-col gap-2 justify-center'>
              <p>{item.name}</p>
              <p>{formatDateString(item.premiere)}</p>
            </div>
          </Link>
        ))}
        {filteredList.length === 0 && <span>No hay Resultados</span>}
      </div>
    </div>
  )
}

export default Search
