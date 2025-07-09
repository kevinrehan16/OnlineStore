import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content my-5">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
