import React from 'react'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { LuTimerReset } from 'react-icons/lu'
import { MdOnlinePrediction } from 'react-icons/md'

function ServicesCard () {
  return (
    <>
      <div className='flex gap-8 absolute inset-0 justify-center items-center z-20 heroSectionFont mx-4'>
        {/* Card 1 */}
        <div className='backdrop-blur-lg h-64 w-64 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 bg-opacity-60 flex flex-col justify-center items-center rounded-xl shadow-lg border border-blue-300 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out'>
          <MdOnlinePrediction size={60} className='text-blue-700' />
          <h3 className='mt-4 text-lg font-semibold text-blue-800'>Predict</h3>
        </div>

        {/* Card 2 */}
        <div className='backdrop-blur-lg h-64 w-64 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 bg-opacity-60 flex flex-col justify-center items-center rounded-xl shadow-lg border border-blue-300 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out'>
          <LuTimerReset size={60} className='text-blue-700' />
          <h3 className='mt-4 text-lg font-semibold text-blue-800'>Daily</h3>
        </div>

        {/* Card 3 */}
        <div className='backdrop-blur-lg h-64 w-64 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 bg-opacity-60 flex flex-col justify-center items-center rounded-xl shadow-lg border border-blue-300 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out'>
          <FaRegCalendarAlt size={60} className='text-blue-700' />
          <h3 className='mt-4 text-lg font-semibold text-blue-800'>Weekly</h3>
        </div>

        {/* Card 4 */}
        <div className='backdrop-blur-lg h-64 w-64 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 bg-opacity-60 flex flex-col justify-center items-center rounded-xl shadow-lg border border-blue-300 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out'>
          <IoCalendarNumberOutline size={60} className='text-blue-700' />
          <h3 className='mt-4 text-lg font-semibold text-blue-800'>Monthly</h3>
        </div>
      </div>
    </>
  )
}

export default ServicesCard
