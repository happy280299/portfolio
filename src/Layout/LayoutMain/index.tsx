import React from 'react'
import Header from '../../Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Footer'

const LayoutMain = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutMain