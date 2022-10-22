import React from 'react'
import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';

import banner1 from '../../assets/banner/ban_1.jpeg'
import banner2 from '../../assets/banner/ban_2.jpeg'
import banner3 from '../../assets/banner/ban_3.jpeg'



import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: banner1,
        caption: 'Increase takeout sales by 50%',
        class: 'slide-1 slide'
    },
    {
        url: banner2,
        caption: 'Increase takeout sales by 50%',
        class: 'slide-2 slide'
    },
    {
        url: banner3,
        caption: 'Increase takeout sales by 50%',
        class: 'slide-3 slide'
    },
];

const Banner = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div className='bg_img_slider' style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                            <div className={slideImage.class}>
                                <div className='text-slide'>
                                    <h1>{slideImage.caption}</h1>
                                    <span>with the largest delivery platfrom in the U.S. and Canada</span>
                                    <Button variant="primary">Learn More</Button>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Banner