import React from 'react'
import { NavLink } from 'react-router-dom'

import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar justify-content-center'>
            <NavLink to="/home" > Home</NavLink>
            <NavLink to="/products">All Food </NavLink>
            <NavLink to="/stores">Store </NavLink>
        </div>
    )
}

export default Navbar