import { useState } from 'react'
import './App.css'

import Header from './Header'
import Footer from './Footer';
import AboutMe from './AboutMe';
import Home from './Home'

function App() {

  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    console.log('hello')
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
        <Header 
        currentPage={currentPage} handlePageChange={handlePageChange} 
        />
        {renderPage()}
        <Footer />
    </>
  )
}

export default App
