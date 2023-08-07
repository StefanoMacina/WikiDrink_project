import React from 'react'
import { useGlobalContext } from './Context'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screen/Home'
import About from './screen/About'
import Contattaci from './screen/Contattaci'
import Cocktail from './screen/Cocktail'
import Sidebar from './components/Sidebar'


const App = () => {
 
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contattaci' element={<Contattaci/>}/>
        <Route path='/cocktail/:id' element={<Cocktail/>}/>
      </Routes>
    </Router>
  )
}

export default App