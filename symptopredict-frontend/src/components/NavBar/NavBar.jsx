import React from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='py-5 fixed top-0 left-0 w-full z-50'>
      <div className='w-[70%] mx-auto flex items-center justify-between bg-transparent bg-opacity-80 py-3 px-10 backdrop-blur-sm border-2 border-[#b4bef1a4] rounded-full'>
        <div>
          <img src={logo} alt='logo' />
        </div>
        <div className="flex gap-8 items-center">
          <div>
            <ul className='flex gap-8'>
              <li className='text-white transform duration-300 hover:scale-110 hover:text-[#27226c] relative group'>
                <a href='#' className='inline-block'>
                  Home
                </a>
                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#27226c] transition-all duration-300 group-hover:w-full'></span>
              </li>
              <li className='text-white transform duration-300 hover:scale-110 hover:text-[#27226c] relative group'>
                <a href='#' className='inline-block'>
                  About
                </a>
                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#27226c] transition-all duration-300 group-hover:w-full'></span>
              </li>
              <li className='text-white transform duration-300 hover:scale-110 hover:text-[#27226c] relative group'>
                <a href='#' className='inline-block'>
                  Services
                </a>
                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#27226c] transition-all duration-300 group-hover:w-full'></span>
              </li>
              <li className='text-white transform duration-300 hover:scale-110 hover:text-[#27226c] relative group'>
                <a href='#' className='inline-block'>
                  Contact
                </a>
                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-[#27226c] transition-all duration-300 group-hover:w-full'></span>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-[#261e71] px-4 py-1 font-medium transition duration-300 rounded-md text-white hover:bg-[#f0f0f0] hover:text-[#14163b]">Login</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar