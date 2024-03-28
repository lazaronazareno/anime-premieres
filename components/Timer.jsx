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

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const targetDate = new Date(formatDateString(date))
      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(interval)
        setRemainingTime('Ya salio!')
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
        <div
          className={`flex gap-1 md:min-w-max text-center absolute lg:text-8xl text-6xl top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-400`}
        >
          <TimerNumber num={remainingTime.days} text={'dias'} />
          <TimerNumber num={remainingTime.hours} text={'horas'} />
          <TimerNumber num={remainingTime.minutes} text={'minutos'} />
          <TimerNumber num={remainingTime.seconds} text={'segundos'} />
        </div>
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
