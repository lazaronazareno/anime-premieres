import React from 'react'

const ActionButton = ({ url }) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      Mas info
    </a>
  )
}

export default ActionButton
