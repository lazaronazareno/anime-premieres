'use client'
import React, { useEffect, useState } from 'react'
import TimerNumber from './TimerNumber'

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
  const [message, setMessage] = useState(
    'El siguiente capitulo se estrena en: '
  )

  function differenceInDays(targetDate, now) {
    const diff = targetDate - now
    const diffInDays = Math.floor(diff / DAY)

    return Math.floor(diffInDays / 7) * 7
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const targetDate = date

      const daysToSum = -differenceInDays(targetDate, now)

      if (targetDate < now) {
        targetDate.setDate(targetDate.getDate() + daysToSum)
        // ESTA MAL MUY MAL... ARREGLO MOMENTARIO Se agregan 3 horas por que las horas estan en -3 y el horario del hosting en 0.
        targetDate.setHours(targetDate.getHours() + 3)
        setMessage('El siguiente capitulo se estrena en:')
      }

      const difference = targetDate - now

      if (difference < 0) {
        clearInterval(interval)
        setMessage('Ya no se encuentra en emision')
      } else {
        const days =
          Math.floor(difference / DAY) === 7 ? 0 : Math.floor(difference / DAY)
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
    <div className='absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
      <span className='w-max text-xl 2xl:text-4xl bg-orange-400 text-blue-950 rounded-t-md p-2 -mb-1'>
        {message}
      </span>
      <div
        className={`flex gap-1 md:min-w-max text-center lg:text-8xl text-6xl bg-orange-400`}
      >
        <TimerNumber num={remainingTime.days} text={'dias'} />
        <TimerNumber num={remainingTime.hours} text={'horas'} />
        <TimerNumber num={remainingTime.minutes} text={'minutos'} />
        <TimerNumber num={remainingTime.seconds} text={'segundos'} />
      </div>
    </div>
  )
}

export default Timer
