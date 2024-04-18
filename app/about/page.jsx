import ExternalLink from '@/components/ExternalLink'
import Marquee from '@/components/Marquee'
import React from 'react'

export const metadata = {
  title: '+Info | Cuando Sale el anime...',
  description:
    'Sobre Cuando Sale el Anime, informacion del autor, futuro y referencias.'
}

const About = () => {
  return (
    <div className='w-full min-h-screen justify-center py-16 px-4 text-2xl flex flex-col md:gap-12 gap-4 text-center pb-24 md:pb-16'>
      <Marquee word={'¿Cuando Sale?'} />
      <div className='w-full flex flex-col gap-4 py-4 max-w-5xl self-center items-center'>
        <h2 className='w-full text-4xl border-b-2 border-orange-500'>
          Sobre la página web ¿Cuando Sale?
        </h2>
        <p>
          Es una pagina hecha para mostrar el horario de los estrenos de
          temporada y futuros animes cuando tenga fecha y/o horario de
          lanzamiento. Aun nose si el horario esta bien para todas las regiones
          o solo para donde fue realizada la pagina: Argentina 😅
        </p>
        <p>
          Doy creditos a las páginas{' '}
          <ExternalLink url={'https://myanimelist.net/'} text={'MyAnimeList'} />{' '}
          y{' '}
          <ExternalLink
            url={'https://animeschedule.net/'}
            text={'AnimeSchedule'}
          />{' '}
          de donde saque las fechas de estreno e imagenes oficiales.
        </p>
        <p>
          <strong>Cosas técnicas:</strong> La primera version esta reapzada con
          una archivo json como base de datos. A medida que vaya teniendo tiempo
          voy a crear una base de datos mysql o similar para ir cargando los
          estrenos con sus datos y luego la idea es poder seleccionar los animes
          que estas mirando por temporada y que te exporte un calendario para
          que puedas mirarlo siempre que quieras.
        </p>
        <p>
          Si hay alguna duda podes comunicarte al siguiente mail{' '}
          <a
            href='mailto:lazaronazareno@gmail.com'
            className='text-orange-500 hover:text-orange-800'
          >
            lazaronazareno@gmail.com
          </a>
        </p>
      </div>
      <Marquee word={'Gracias por visitar'} />
    </div>
  )
}

export default About
