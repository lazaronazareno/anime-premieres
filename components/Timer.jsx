'use client'
import React, { useEffect, useState } from 'react'
import TimerNumber from './TimerNumber'
import { formatDateString } from '@/app/utils'

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const Timer = ({ date }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [message, setMessage] = useState('Para el estreno faltan: ')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const targetDate = new Date(formatDateString(date))

      if (targetDate < now) {
        targetDate.setDate(targetDate.getDate() + 7)
        setMessage('El siguiente capitulo sale:')
      }

      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(interval)
        setMessage('Ya no se encuentra en emision')
      } else {
        const days = Math.floor(difference / DAY)
        const hours = Math.floor((difference % DAY) / HOUR)
        const minutes = Math.floor((difference % HOUR) / MINUTE)
        const seconds = Math.floor((difference % MINUTE) / SECOND)

        setRemainingTime({
          days,
          hours,
          minutes,
          seconds
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [date])
  return (
    <>
      {remainingTime ? (
        <>
          <span className='w-max text-xl 2xl:text-4xl absolute bottom-56 2xl:bottom-80 -translate-x-1/2 translate-y-1/3 bg-orange-400 text-blue-950 rounded-t-md p-2 pb-4'>
            {message}
          </span>
          <div
            className={`flex gap-1 md:min-w-max text-center absolute lg:text-8xl text-6xl top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-400`}
          >
            <TimerNumber num={remainingTime.days} text={'dias'} />
            <TimerNumber num={remainingTime.hours} text={'horas'} />
            <TimerNumber num={remainingTime.minutes} text={'minutos'} />
            <TimerNumber num={remainingTime.seconds} text={'segundos'} />
          </div>
        </>
      ) : (
        <span
          className={`md:min-w-max text-center absolute lg:text-8xl text-6xl top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-400`}
        >
          12d 34h 56m 78s
        </span>
      )}
    </>
  )
}

export default Timer
