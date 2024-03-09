import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import NavbarTop from './components/NavbarTop'
import Imgsearch from './components/Imgsearch'
import Cardcontent from './components/Cardcontent'

function App() {
  return (
    <div>
      <NavbarTop/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/imgsearch' element={<Imgsearch/>}/>
        <Route path='/product/:productid' element={<Cardcontent/>}/>
      </Routes>
    </div>
  )
}

export default App