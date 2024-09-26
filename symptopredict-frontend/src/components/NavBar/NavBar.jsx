import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='py-5 fixed top-0 left-0 w-full z-50 bg-transparent'>
      <div className='w-[90%] sm:w-[80%] md:w-[70%] mx-auto flex items-center justify-between bg-transparent bg-opacity-80 py-3 px-10 backdrop-blur-sm border-2 border-[#b4bef1a4] rounded-full'>
        {/* Logo */}
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>

        {/* Desktop Links */}
        <div className='flex md:gap-6 lg:gap-8'>
          <ul className='hidden md:flex md:gap-6 lg:gap-8 items-center'>
            <li className='text-white transform duration-300 hover:scale-110 hover:text-[#27226c] relative group'>
              <Link to='/' className='inline-block'>
                Home
              </Link>
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#27226c] transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='text-white transform duration-300 hover:scale-110 hover:text-[#27226c] relative group'>
              <Link to='/about' className='inline-block'>
                About
              </Link>
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#27226c] transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='text-white transform duration-300 hover:scale-110 hover:text-[#27226c] relative group'>
              <Link to='/services' className='inline-block'>
                Services
              </Link>
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#27226c] transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='text-white transform duration-300 hover:scale-110 hover:text-[#27226c] relative group'>
              <Link to='/contact' className='inline-block'>
                Contact
              </Link>
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#27226c] transition-all duration-300 group-hover:w-full'></span>
            </li>
          </ul>

          {/* Login Button */}
          <div className='hidden md:block'>
            <Link
              to='/login'
              className='bg-[#261e71] px-4 py-2 font-medium transition duration-300 rounded-md text-white hover:bg-[#f0f0f0] hover:text-[#14163b]'
            >
              Login
            </Link>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose className='text-white text-3xl' />
            ) : (
              <AiOutlineMenu className='text-white text-3xl' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out max-h-0 overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'opacity-0'
        } transform flex flex-col w-[90%] sm:w-[80%] items-center bg-[rgb(223,222,255)] py-5 fixed top-[90px] left-1/2 -translate-x-1/2 z-40 rounded-2xl border-2 border-[#b4bef1a4]`}
      >
        <ul className='flex flex-col items-center gap-6'>
          <li>
            <Link to='/' className='text-blue-950 text-md' onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='text-blue-950 text-md'
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/services'
              className='text-blue-950 text-md'
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className='text-blue-950 text-md'
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to='/login'
              className='bg-[#261e71] px-4 py-2 font-medium transition duration-300 rounded-md text-white hover:bg-[#f0f0f0] hover:text-[#14163b]'
              onClick={toggleMenu}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
