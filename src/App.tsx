import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero'
import Features from './components/features'
import Newsletter from './components/newsletter'
import Zigzag from './components/zigzag'
import PageIllustration from './components/page-illustration'
import Footer from './components/ui/footer'
import Header from './components/ui/header'
import { Route, Routes } from 'react-router-dom'
import RequestDemoComp from './components/contactUs'
import JoinCommunity from './components/joinCommunity'

const Home = () => {
  return (
    <div className="font-sans antialiased  bg-black text-white tracking-tight">
      <Header />
      <main className="grow ">
        <PageIllustration />
        <Hero />
        <Features />
        <Zigzag />
        <JoinCommunity />
        <Newsletter />

      </main>

      <Footer />

    </div>
  )
}

const ContactUs = () => {
  return (
    <div className="font-sans antialiased bg-black text-white tracking-tight">
      <Header />
      <main className="grow ">

        <RequestDemoComp />

      </main>

      <Footer />

    </div>
  )
}


export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  )
}
