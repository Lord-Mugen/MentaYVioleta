import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'; 
import MentaYVioleta from '../Main/MentaYVioleta';
import Cart from '../CartScreen/Cart';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <h1>welcome to react router</h1>
        <Routes>
            <Route path="/" element={<MentaYVioleta/>}/>
            <Route path="/CartScreen" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter