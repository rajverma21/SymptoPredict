import React from 'react'
import NavBar from './../NavBar/NavBar.jsx'
import backgroundImage from '../../assets/backgroundImage.svg'
import { BsFillSendFill } from 'react-icons/bs'
// import contact from '../../assets/contact.svg'

const ContactForm = () => {
  return (
    <>
      <div className='flex flex-col gap-6 absolute inset-0 justify-center items-center z-20 heroSectionFont mx-4'>
        <form
          action='https://api.web3forms.com/submit'
          className='px-8 py-10 absolute bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-3xl border-2 border-[#e9e9e93d] heroSectionFont shadow-2xl max-w-md w-full mx-auto'
          method='POST'
        >
          <h1 className='flex items-center gap-4 text-3xl l:text-4xl font-extrabold mb-5 bg-gradient-to-r from-red-800 via-purple-900 to-blue-950 bg-clip-text text-transparent'>
            Get in Touch
            {/* <img src={contact} alt='Contact' className='w-9 h-9' /> */}
          </h1>

          <input
            type='hidden'
            name='access_key'
            value='be3e870b-0b46-4758-a3b9-0a7e2a8a1f4b'
          />

          <div className='mb-4'>
            <label htmlFor='name' className='block text-blue-950'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='py-[5px] w-full px-4 l:text-lg rounded-md bg-white/70 text-gray-800 buttonFont placeholder-gray-400 focus:outline hover:outline outline-[#2640d5] outline-2 focus:drop-shadow-lg'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-blue-950'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='py-[5px] w-full px-4 l:text-lg rounded-md bg-white/70 text-gray-800 buttonFont placeholder-gray-400 focus:outline hover:outline outline-[#2640d5] outline-2 focus:drop-shadow-lg'
              required
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='message' className='block text-blue-950'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='py-[5px] w-full px-4 l:text-lg rounded-md bg-white/70 text-gray-800 buttonFont placeholder-gray-400 focus:outline hover:outline outline-[#2640d5] outline-2 focus:drop-shadow-lg overflow-hidden'
              required
            ></textarea>
          </div>

          <input
            type='hidden'
            name='redirect'
            value='https://web3forms.com/success'
          />

          <button
            type='submit'
            className='w-full flex justify-center items-center gap-3 l:px-7 py-3 text-sm sm:text-base  bg-[#261e71] text-cyan-50 rounded-lg font-medium transition duration-300 hover:bg-[#f0f0f0] hover:text-[#14163b] buttonFont'
          >
            <BsFillSendFill />
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm