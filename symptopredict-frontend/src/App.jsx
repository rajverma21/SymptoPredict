import React, { useState, useEffect } from 'react'
import Preloader from './components/Preloader/Preloader.jsx'
import HomePage from './components/HomePage/HomePage.jsx'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000) 
    return () => clearTimeout(timer)
  }, [])

  return <div>{loading ? <Preloader /> : <HomePage />}</div>
}

export default App
