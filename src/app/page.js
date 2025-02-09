import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <Header />
      <Features />
      <Footer />
    </>
  )
}

export default page