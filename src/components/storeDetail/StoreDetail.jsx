import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Cart from "../../pages/cart/Cart"
import ProductDetail from "../productDetail/ProductDetail";

import StarIcon from "@mui/icons-material/Star";
import AddBoxIcon from '@mui/icons-material/AddBox';

import "./storeDetail.scss";

const StoreDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
        };
        getProduct();
    }, []);

    return (
        <div className="product-container">
            <div className="product-describe">
                <div className="box-img">
                    <img src={product.image} alt=""></img>
                </div>
                <div className="product-detail">
                    {/* <h1>{product.title}</h1> */}
                    <h1>Store's Name</h1>
                    <div className="rate">
                        {/* <h2>${product.price}</h2> */}
                        <span>Store's address</span>
                        <span className="count">
                            {product.rating && product.rating.rate} <StarIcon />
                            store's rate
                        </span>
                    </div>
                    <p>{product.description}</p>
                </div>
            </div>

            <div className="menu-order">
                <Menu />
                <Cart />
            </div>
            <ProductDetail />
        </div>
    );
};

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getMenu = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            setMenu(await response.json());
        }
        getMenu()
    }, []);

    return (

        <div className="menu-container">
            {
                menu.map((item) => {
                    return (
                        <>
                            <div className="menu-item">
                                <div className="item-img">
                                    <img src={item.image} alt=''></img>
                                </div>
                                <div className="item-title">
                                    <h3>{item.title}</h3>
                                    <span>describe the product</span>
                                </div>
                                <div className="item-price">
                                    <h3>${item.price}</h3>
                                </div>
                                <div className="btnOrder">
                                    <button><AddBoxIcon /></button>
                                </div>
                            </div>
                            <div>

                            </div>
                        </>
                    )
                })
            }
        </div>

    )
}


export default StoreDetail;
