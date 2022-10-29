import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>RICO.work</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-sontainer'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout