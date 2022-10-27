import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ProductCard from '../../components/productCard/ProductCard';

import AddIcon from '@mui/icons-material/Add';

import "./allFood.scss"

const AllFood = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            setProduct(await response.json());
        }
        getProduct()
    }, [])

    return (
        <div className='list-product'>
            {
                products.map((product) => {
                    return (
                        <div className='a-product'>
                            <ProductCard item={product} className="productCard" />
                            <Link to={`/products/${product.id}`}>
                                <button className='btn-Add'><AddIcon />Add to cart</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllFood