import React from 'react'

import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import "./productCard.scss"



const ProductCard = (props) => {

    const product = props.item

    return (
        <Link to='' className='prodcut'>
            <div className="product-card">
                <div className='box-img'>
                    <img src={product.image} alt="" />
                    <div className='product-price'>
                        <h2>${product.price}</h2>
                    </div>
                    <div className="product-name">
                        {product.title}
                    </div>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={product.rating['rate']} precision={0.5} />
                    </Stack>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard