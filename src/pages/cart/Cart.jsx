import React, { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

import "./cart.scss"

const Cart = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=5');
            setProduct(await response.json());
        };
        getProduct();
    }, []);

    let s = 0
    product.map((item) => {
        s = s + item.price
    })

    return (
        <div className="order-container">
            <h1>Your order</h1>
            <div className="order-list">
                {
                    product.map((item) => {
                        return (
                            <div className="order-item">
                                <div className="count">
                                    <span>1</span>
                                </div>
                                <div className="item-name">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="item-price">
                                    <span>${item.price}</span>
                                </div>
                                <div className="change-count">
                                    <div><span>-</span></div>
                                    <div><span>1</span></div>
                                    <div><span>+</span></div>
                                </div>
                                <DeleteIcon />

                            </div>
                        )

                    })
                }
                <div className="sum">
                    <h3>Items subtotal: </h3>
                    <h4>${s}</h4>
                </div>

            </div>
        </div>
    )
}

export default Cart