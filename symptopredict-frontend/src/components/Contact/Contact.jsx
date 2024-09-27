import React from 'react'
import backgroundImage from '../../assets/backgroundImage.svg'
import NavBar from './../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'
import ContactForm from './ContactForm.jsx'

const Contact = () => {
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
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact
