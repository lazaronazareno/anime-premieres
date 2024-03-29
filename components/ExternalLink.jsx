import React from 'react'

const ExternalLink = ({ url, text }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='text-orange-500 hover:text-orange-800'
    >
      {text}
    </a>
  )
}

export default ExternalLink
