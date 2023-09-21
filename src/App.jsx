import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import AboutMe from './AboutMe';
import Home from './Home'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
          path='/Challenge-20/'
          element={<Home/>}
          >

          </Route>
          <Route
            path="/about"
            element={<AboutMe />}
          >
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
