import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='flex flex-col gap-2 w-full h-screen justify-center items-center'>
      <h2 className='text-4xl'>Pagina no encontrada</h2>
      <p className='text-2xl'>
        Si quiere que agregemos un anime a nuestro pagina contactenos al
        siguiente mail:
      </p>
      <a
        className='text-blue-600 hover:text-blue-400'
        href='mailto:lazaronazareno@gmail.com'
      >
        lazaronazareno@gmail.com
      </a>
      <Link
        className='text-xl rounded h-8 px-4 bg-blue-500 text-white hover:bg-blue-800'
        href='/'
      >
        Regresar
      </Link>
    </div>
  )
}

export default notFound
