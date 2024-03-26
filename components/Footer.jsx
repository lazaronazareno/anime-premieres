import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='absolute bottom-1 p-2 text-xl'>
      <span>
        &copy; {year.toString()} Todos los derechos reservados a sus respectivos
        dueños. - Hecho por{' '}
        <a
          href='https://lazaro-portfolio.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          lazaronazareno
        </a>
      </span>
    </footer>
  )
}

export default Footer
