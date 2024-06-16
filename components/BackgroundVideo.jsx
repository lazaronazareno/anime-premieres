'use client'
import React, { Suspense, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import VideoControls from './VideoControls'

const BackgroundVideo = ({ url, title }) => {
  const [videoState, setVideoState] = useState({
    playing: true,
    muted: true
  })
  const { playing, muted } = videoState

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing })
  }

  const muteHandler = () => {
    setVideoState({ ...videoState, muted: !videoState.muted })
  }
  return (
    <>
      {url ? (
        <>
          <ReactPlayer
            className='absolute -z-10 top-0'
            width={'100%'}
            height={'100vh'}
            url={url}
            fallback={'Cargando'}
            playing={playing}
            muted={muted}
            loop
          />
          <VideoControls
            onPlayPause={playPauseHandler}
            onMute={muteHandler}
            playing={playing}
            mute={muted}
          />
        </>
      ) : (
        <span>Cargando...</span>
      )}
    </>
  )
}

export default BackgroundVideo
