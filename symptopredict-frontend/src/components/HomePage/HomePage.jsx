import React from 'react'
import backgroundImage from '../../assets/backgroundImage.svg'
import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'

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
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <p className='text-6xl text-[#f6f6f6d8] font-semibold heroSectionFont'>
          AI-Driven Health Diagnosis
        </p>
        <p className='text-6xl text-[#f6f6f6d8] font-semibold heroSectionFont'>
          at Your Fingertips
        </p>
        <p className='mt-5 text-lg text-[#f6f6f6d8] heroSectionFont'>
          Enter your symptoms and get a predicted
        </p>
        <p className='-mt-1 text-lg text-[#f6f6f6d8] heroSectionFont'>
          diagnosis within seconds.
        </p>
        <button className='mt-3 px-7 py-2 bg-[#261e71] text-cyan-50 rounded-lg font-medium transition duration-300 hover:bg-[#f0f0f0] hover:text-[#14163b] buttonFont'>
          Join Now
        </button>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default HomePage
