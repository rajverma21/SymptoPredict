import React, { useState, useEffect } from 'react'
import Preloader from './components/Preloader/Preloader.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import AnimatedCursor from 'react-animated-cursor'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color='40, 11, 110'
        outerAlpha={0.3}
        innerScale={0.8}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      {loading ? <Preloader /> : null}
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
