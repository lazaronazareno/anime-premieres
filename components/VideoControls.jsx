import React from 'react'

function TwemojiMutedSpeaker(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2em'
      height='2em'
      viewBox='0 0 36 36'
      {...props}
    >
      <path
        fill='#8899A6'
        d='M9 10s-2 0-2 2v12c0 2 2 2 2 2h6l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8z'
      />
      <path
        fill='#CCD6DD'
        d='m15 26l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8z'
      />
      <path
        fill='#DD2E44'
        d='M31.003 33.003L3.997 5.997a1.41 1.41 0 0 1 0-1.994l.006-.006a1.41 1.41 0 0 1 1.994 0l27.006 27.006a1.41 1.41 0 0 1 0 1.994l-.006.006a1.41 1.41 0 0 1-1.994 0'
      />
    </svg>
  )
}

function TwemojiSpeakerHighVolume(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2em'
      height='2em'
      viewBox='0 0 36 36'
      {...props}
    >
      <path
        fill='#8899A6'
        d='M2 10s-2 0-2 2v12c0 2 2 2 2 2h6l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8z'
      />
      <path
        fill='#CCD6DD'
        d='m8 26l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8z'
      />
      <path
        fill='#8899A6'
        d='M29 32.019a.945.945 0 0 1-.615-1.666c3.603-3.071 5.668-7.551 5.668-12.29s-2.066-9.219-5.669-12.29a.947.947 0 0 1 1.229-1.44a18.017 18.017 0 0 1 6.333 13.73a18.016 18.016 0 0 1-6.332 13.729a.944.944 0 0 1-.614.227'
      />
      <path
        fill='#8899A6'
        d='M26.27 28.959a.927.927 0 0 1-.592-1.645a12.04 12.04 0 0 0 4.394-9.315a12.05 12.05 0 0 0-4.311-9.245a.929.929 0 0 1 1.196-1.422a13.905 13.905 0 0 1 4.973 10.667c0 4.172-1.848 8.089-5.069 10.746a.918.918 0 0 1-.591.214'
      />
      <path
        fill='#8899A6'
        d='M23.709 25.959a.998.998 0 0 1-.636-1.772A7.98 7.98 0 0 0 26 18a7.968 7.968 0 0 0-2.988-6.236a1 1 0 1 1 1.254-1.558A9.96 9.96 0 0 1 28 18a9.972 9.972 0 0 1-3.657 7.731a.99.99 0 0 1-.634.228'
      />
    </svg>
  )
}

export function ZondiconsPlayOutline(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2em'
      height='2em'
      viewBox='0 0 20 20'
    >
      <path
        fill='#fb923c'
        d='M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32M7 6l8 4l-8 4z'
      />
    </svg>
  )
}

export function ZondiconsPauseSolid(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='2em'
      height='2em'
      viewBox='0 0 20 20'
    >
      <path
        fill='#fb923c'
        d='M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M7 6v8h2V6zm4 0v8h2V6z'
      />
    </svg>
  )
}

const VideoControls = ({ onPlayPause, playing, onMute, mute }) => {
  return (
    <>
      <button
        className='z-10 w-2 absolute bottom-8 left-4'
        type='button'
        onClick={onPlayPause}
      >
        {playing ? <ZondiconsPauseSolid /> : <ZondiconsPlayOutline />}
      </button>
      <button
        className='z-10 absolute bottom-10 right-4'
        type='button'
        onClick={onMute}
      >
        {mute ? <TwemojiSpeakerHighVolume /> : <TwemojiMutedSpeaker />}
      </button>
    </>
  )
}

export default VideoControls
