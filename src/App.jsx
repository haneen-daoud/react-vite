import React from 'react'
import Product from './assets/component/product/Product'
import Restaurant from './assets/component/restaurant/Restaurant'
import Navbar from './assets/component/navbar/Navbar'
import About from './assets/component/about/About'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/product' element={<Product />} />
     <Route path='/restaurant' element={<Restaurant />} />
     <Route path='/' element={<About/>}/>
     
    </Routes>
    </BrowserRouter>
    
   
    </>
    
  )
}
