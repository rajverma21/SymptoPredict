import React from 'react'
import backgroundImage from '../../assets/backgroundImage.svg'
import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className='relative h-screen w-screen overflow-hidden'>
        <img
          src={backgroundImage}
          alt='Background image'
          className='absolute inset-0 object-cover h-full w-full'
        />
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center w-[90%] mx-auto'>
        <p className='text-2xl l:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f6f6f6d8] font-semibold heroSectionFont'>
          AI-Driven Health Diagnosis
        </p>
        <p className='text-2xl l:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f6f6f6d8] font-semibold heroSectionFont'>
          at Your Fingertips
        </p>
        <p className='mt-5 text-md md:text-lg text-[#f6f6f6d8] heroSectionFont'>
          Enter your symptoms and get predicted
        </p>
        <p className='-mt-1 text-md md:text-lg text-[#f6f6f6d8] heroSectionFont'>
          diagnosis within seconds.
        </p>
        <Link
          to='/login'
          className='mt-3 px-5 l:px-7 py-2 text-sm sm:text-base  bg-[#261e71] text-cyan-50 rounded-lg font-medium transition duration-300 hover:bg-[#f0f0f0] hover:text-[#14163b] buttonFont'
        >
          Join Now
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default HomePage
