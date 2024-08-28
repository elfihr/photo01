import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Update from './pages/Update'
import Write from './pages/Write'


function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/>
        <Route exact path='/update/:id' element={<Update/>}/>
        <Route exact path='/write' element={<Write/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
