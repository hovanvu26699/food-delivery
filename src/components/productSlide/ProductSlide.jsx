import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Slider from "react-slick";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import ProductCard from '../productCard/ProductCard';

import "./productSlide.scss"


const ProductSlide = (props) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    // const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getproducts = async () => {
            const respone = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await respone.clone().json());
                setFilter(await respone.json());
            }

            return () => {
                componentMounted = false;
            }
        }

        getproducts()
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='product-list'>
            <div className='title'>
                <h2>{props.title}</h2>
                <h5>See more <KeyboardDoubleArrowRightIcon /></h5>
            </div>
            <Slider {...settings} className="slide">
                {
                    filter.map((product) => {
                        return (
                            <div className='product'>
                                <ProductCard item={product} className="slide-product" />
                                <Link to={`/products/${product.id}`}>
                                    <button className='btnAdd'><AddIcon />Add to cart</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ProductSlide