import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';

function App() {

  return (
    <>
      <Router>
          <Header />
          <Footer />
      </Router>
    </>
  )
}

export default App
