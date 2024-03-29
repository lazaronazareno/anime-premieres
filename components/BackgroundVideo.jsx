'use client'
import React, { Suspense } from 'react'
import ReactPlayer from 'react-player/youtube'

const BackgroundVideo = ({ url, title }) => {
  return (
    <>
      {url ? (
        <ReactPlayer
          className='absolute -z-10 top-0'
          width={'100%'}
          height={'100vh'}
          url={url}
          fallback={'Cargando'}
          muted
          playing
          loop
        />
      ) : (
        <span>Cargando...</span>
      )}
    </>
  )
}

export default BackgroundVideo
