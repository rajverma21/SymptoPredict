import React, { useState } from 'react'
import background from '../../assets/signupLoginBackground.svg'
import googleLogo from '../../assets/googleLogo.svg'
import githubLogo from '../../assets/githubLogo.svg'
import facebookLogo from '../../assets/facebookLogo.svg'
import password1 from '../../assets/hidden.png'
import password2 from '../../assets/visible.png'
import { Link } from 'react-router-dom'

const Login = () => {
  const [Type, setType] = useState('password')
  const [Visibility, setVisibility] = useState(password1)
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const show_password = event => {
    event.preventDefault() // Prevent default behavior
    if (Type === 'text') {
      setType('password')
      setVisibility(password1)
    } else {
      setType('text')
      setVisibility(password2)
    }
  }

  const handleSubmit = event => {
    event.preventDefault() // Prevent form reload
    console.log('Login Details:', {
      Email,
      Password
    })
    // You can add further actions here (e.g., API call for authentication)
  }

  return (
    <div className='relative h-screen w-screen overflow-hidden flex items-center justify-center'>
      <img
        src={background}
        alt='Background image'
        className='absolute inset-0 object-cover h-full w-full'
      />
      <div className='relative z-10 flex flex-col gap-7 mx-auto w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 px-[7%] py-[7%] sm:py-[4%] md:py-[3%] lg:py-[2%] lg:px-[5%] xl:px-[7%] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl border-2 border-[#e9e9e93d] heroSectionFont shadow-2xl'>
        <h1 className='text-3xl font-bold text-white'>Login</h1>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <div className='flex gap-2 flex-col'>
            <label htmlFor='email' className='text-white'>
              Email
            </label>
            <input
              type='email'
              value={Email}
              onChange={e => setEmail(e.target.value)}
              id='email'
              className='py-[5px] px-4 l:text-lg rounded-md bg-white/95 text-gray-800 buttonFont placeholder-gray-400 focus:outline hover:outline outline-[#2640d5] outline-2 focus:drop-shadow-lg'
              placeholder='username@gmail.com'
              required
            />
          </div>
          <div className='flex gap-2 flex-col'>
            <label htmlFor='password' className='text-white'>
              Password
            </label>
            <div className='flex l:text-lg rounded-md overflow-hidden bg-white/95 text-gray-800 buttonFont placeholder-gray-300 focus:outline hover:outline outline-[#2640d5] outline-2 focus:drop-shadow-lg'>
              <input
                value={Password}
                onChange={e => setPassword(e.target.value)}
                type={Type}
                id='password'
                className='py-[5px] px-4 focus:outline-none w-full'
                placeholder='Password'
                required
              />
              <button className='pr-2' onClick={show_password}>
                <img
                  src={Visibility}
                  className='h-4 w-4'
                  alt='Show/Hide Password'
                />
              </button>
            </div>
            <a href='#' className='text-sm l:text-md text-white'>
              Forgot Password?
            </a>
          </div>

          <button
            type='submit'
            className='bg-[#261e71] py-2 text-lg heroSectionFont transition duration-300z font-medium text-white rounded-lg hover:bg-white/90 hover:text-[#14163b]'
          >
            Login
          </button>
        </form>
        <p className='text-white'>or continue with</p>
        <div className='flex justify-between'>
          <button className='py-[2.5%] bg-white/95 px-[10%] rounded-lg'>
            <img src={googleLogo} alt='Google' />
          </button>
          <button className='py-[2.5%] bg-white/95 px-[10%] rounded-lg'>
            <img src={githubLogo} alt='GitHub' />
          </button>
          <button className='py-[2.5%] bg-white/95 px-[10%] rounded-lg'>
            <img src={facebookLogo} alt='Facebook' />
          </button>
        </div>
        <Link to='/signup' className='text-sm text-white'>
          Don't have an account?{' '}
          <span className='font-semibold'>Register for free</span>
        </Link>
      </div>
    </div>
  )
}

export default Login
