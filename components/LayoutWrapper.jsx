import React from 'react'
import Header from './Header'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LayoutWrapper
