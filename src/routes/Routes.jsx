import React from 'react'

import { Route, Routes as Switch } from 'react-router-dom'
import HomePage from '../pages/home/HomePage'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'

const Routes = () => {
    return (
        < Switch >
            <Route path='/' exact component={HomePage} />
            <Route path='/products/:id' component={ProductDetail} />
            <Route path='/cart' component={Cart} />
        </ Switch >
    )
}

export default Routes