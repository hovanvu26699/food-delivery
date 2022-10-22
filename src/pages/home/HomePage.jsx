import React from "react";
import ProductSlide from "../../components/productSlide/ProductSlide";
import Banner from "../../components/banner/Banner"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import type1 from "../../assets/type_food/chinese.jpg";
import type2 from "../../assets/type_food/india.webp";
import type3 from "../../assets/type_food/italian.jpg";
import type4 from "../../assets/type_food/japan.jpg";
import type5 from "../../assets/type_food/korean.jpg";
import type6 from "../../assets/type_food/thailand.jpg";
import type7 from "../../assets/type_food/vietnam.jpg";
import type8 from "../../assets/type_food/france.jpg";


const HomePage = () => {
    return (
        <div className="homepage">
            <div className="home_container">
                <Banner />
                <div className="food">
                    <div className="type-food">
                        <div className="title">
                            <h1>Browse by cuisine</h1>
                            <span>See all restaurant</span>
                        </div>
                        <div className="list-typefood">
                            <ul>
                                <li>
                                    <img src={type1} alt="" />
                                    <span>Chinese</span>
                                </li>
                                <li>
                                    <img src={type2} alt="" />
                                    <span>India</span>
                                </li>
                                <li>
                                    <img src={type3} alt="" />
                                    <span>Italian</span>
                                </li>
                                <li>
                                    <img src={type4} alt="" />
                                    <span>Japan</span>
                                </li>
                                <li>
                                    <img src={type5} alt="" />
                                    <span>Korean</span>
                                </li>
                                <li>
                                    <img src={type6} alt="" />
                                    <span>Thailand</span>
                                </li>
                                <li>
                                    <img src={type7} alt="" />
                                    <span>Vietnam</span>
                                </li>
                                <li>
                                    <img src={type8} alt="" />
                                    <span>France</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="ordered">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h1>Your previous orders</h1>
                        <h5>See all past orders</h5>
                    </div>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={type5} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={type4} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={type4} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={type2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div> */}
                <div className="slideFood">
                    <ProductSlide title='ABCX DEF' />
                    <ProductSlide title='ABCX HJK' />
                    <ProductSlide title='ABCX QWE' />
                    <ProductSlide title='ABCX TYI' />

                </div>
            </div>
        </div>
    );
};

export default HomePage;
