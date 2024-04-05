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
  const [message, setMessage] = useState('Para el estreno falta: ')

  function changeTimezone(date, ianatz) {
    // suppose the date is 12:00 UTC
    let invdate = new Date(
      date.toLocaleString('en-US', {
        timeZone: ianatz
      })
    )

    // then invdate will be 07:00 in Toronto
    // and the diff is 5 hours
    let diff = date.getTime() - invdate.getTime()

    // so 12:00 in Toronto is 17:00 UTC
    return new Date(date.getTime() - diff) // needs to substract
  }

  let here = new Date()
  let there = changeTimezone(here, 'America/Buenos_Aires')

  console.log(`Here: ${here.toString()}\server: ${there.toString()}`)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const targetDate = date
      console.log('now', now)
      console.log('date', date)
      console.log('targetDate', targetDate)
      console.log('targetDate hour', targetDate.getHours())
      console.log('targetDate date', targetDate.getDate())

      if (targetDate < now) {
        targetDate.setDate(targetDate.getDate() + 7)
        // ESTA MAL MUY MAL... ARREGLO MOMENTARIO
        targetDate.setHours(targetDate.getHours() + 3)
        setMessage('El siguiente capitulo sale en:')
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
