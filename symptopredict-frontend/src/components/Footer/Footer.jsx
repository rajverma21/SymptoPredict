import React from 'react'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white pt-8 px-4 z-20 heroSectionFont'>
      <div className='flex flex-col sm:flex-row w-full mx-auto justify-around sm:w-4/5'>
        <div className='w-full sm:w-3/5 flex flex-col gap-5'>
          <div>
            <h2 className='text-lg sm:text-xl font-bold mb-4 flex items-center'>
              <img src={logo} className='h-7' alt='Logo' />
              SymptoPredict
            </h2>
            <p className='text-sm text-gray-300'>
              SymptoPredict helps you to identify potential health conditions
              based on your symptoms using advanced machine learning algorithms
              & gives you the best plan to follow. Always consult a healthcare
              professional for medical advice.
            </p>
          </div>

          <div className='w-full'>
            <h2 className='text-xl font-bold mb-3'>Follow Us</h2>
            <ul className='flex space-x-6'>
              <li>
                <FaSquareXTwitter
                  size={25}
                  className='transition duration-300 transform hover:scale-125 hover:text-[#aab6ff] hover:shadow-lg font-medium'
                />
              </li>
              <li>
                <AiFillInstagram
                  size={25}
                  className='transition duration-300 transform hover:scale-125 hover:text-[#aab6ff] hover:shadow-lg font-medium'
                />
              </li>
              <li>
                <FaFacebook
                  size={25}
                  className='transition duration-300 transform hover:scale-125 hover:text-[#aab6ff] hover:shadow-lg font-medium'
                />
              </li>
              <li>
                <IoLogoLinkedin
                  size={25}
                  className='transition duration-300 transform hover:scale-125 hover:text-[#aab6ff] hover:shadow-lg font-medium'
                />
              </li>
              <li>
                <IoLogoGithub
                  size={25}
                  className='transition duration-300 transform hover:scale-125 hover:text-[#aab6ff] hover:shadow-lg font-medium'
                />
              </li>
            </ul>
          </div>
        </div>

        <div className='hidden sm:block'>
          <h2 className='text-lg sm:text-xl font-bold mb-4'>Quick Links</h2>
          <ul className='space-y-2 text-gray-300'>
            <li>
              <a
                href='/'
                className='relative hover:underline after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/services'
                className='relative hover:underline after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='relative hover:underline after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='relative hover:underline after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-6 border-t border-gray-400 py-2 text-center text-sm text-gray-300'>
        <p>&copy; 2024 SymptoPredict. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
