import React from 'react'
// import '../header/header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/food-logo.png'

import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Header = () => {
    return (
        <div className='header'>

            <div className='header_logo'>
                <Link to="/">
                    <img src={logo} alt='' />
                </Link>
            </div>
            <div className='main_search'>
                <div className='header_search'>
                    <InputGroup size="lg">
                        <Form.Control
                            placeholder="Pizza, Burger, Thailand"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            className='search_text'
                        />
                        <InputGroup.Text id="inputGroup-sizing-lg"><SearchIcon /></InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
            <div className='header_user'>
                <div className='header_location'>
                    <PlaceIcon />
                    <span>TP.HCM</span>
                </div>
                <div className='user_login'>
                    <Button variant="contained" color="success">
                        Log in
                    </Button>
                </div>
                <Link to='/cart'>
                    <div className='user_cart'>
                        <ShoppingBasketIcon />
                        <span>12</span>
                    </div>
                </Link>
            </div>

        </div >
    )
}

export default Header