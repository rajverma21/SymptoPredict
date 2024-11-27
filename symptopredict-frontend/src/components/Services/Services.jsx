import React from 'react'
import backgroundImage from '../../assets/backgroundImage.svg'
import NavBar from './../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'
import ServicesCard from './ServicesCard.jsx';

const Services = () => {
  return (
    <>
      <NavBar />
      <div className='relative min-h-screen w-screen overflow-hidden'>
        <img
          src={backgroundImage}
          alt='Background image'
          className='absolute inset-0 object-cover h-full w-full z-10'
        />
      </div>
      <ServicesCard />
      <Footer />
    </>
  )
}

export default Services
