import React, { useState, useEffect } from 'react'
import './Preloader.css'

const Preloader = () => {
  const [progress, setProgress] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(timer)
          setTimeout(() => {
            setComplete(true)
          }, 500)
        }
        return Math.min(oldProgress + 25, 100)
      })
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`preloader ${complete ? 'complete' : ''}`}>
      <div
        className={`loading-text text-xs sm:text-md lg:text-xl xl:text-2xl`}
      >
        L O A D I N G
      </div>
      <div className={`progress-bar w-5/6 sm:w-3/5 md:w-2/3 lg:w-1/2`}>
        <div className='progress' style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}

export default Preloader
