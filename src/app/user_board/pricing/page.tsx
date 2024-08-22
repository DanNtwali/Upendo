import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar_user'
import Pricings from '@/components/Pricings'
import React from 'react'

function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Navbar />
      <Pricings />
      <Footer />
    </main>
  )
}

export default Pricing