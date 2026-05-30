import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white overflow-hidden">
      <Hero />
      <About />
      <Achievements />
      <Gallery />
      <Footer />
    </main>
  )
}