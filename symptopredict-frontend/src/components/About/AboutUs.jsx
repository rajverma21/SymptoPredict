import React from 'react'
import backgroundImage from '../../assets/backgroundImage.svg'
import NavBar from './../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'
import About from './About.jsx'

const AboutUs = () => {
  return (
    <>
      <NavBar />
      {/* Container for Background Image and Content */}
      <div className='relative min-h-screen w-screen overflow-hidden'>
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt='Background image'
          className='absolute inset-0 object-cover h-full w-full z-0'
        />

        {/* Content Section */}
        <div className='relative z-20'>
          <About />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
