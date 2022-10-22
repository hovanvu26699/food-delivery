import React from 'react';

import { Route, Routes } from 'react-router-dom'


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HomePage from './pages/home/HomePage';
import ProductDetail from './components/productDetail/ProductDetail'
import AllFood from "./pages/allFood/AllFood"
import Cart from "./pages/cart/Cart"
// import Routes from './routes/Routes'

import "./sass/index.scss"
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes >
        <Route exact path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/products' element={<AllFood />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes >
      <Footer />
    </>
  );
}

export default App;
