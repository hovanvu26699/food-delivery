import React from "react";
import { Link } from 'react-router-dom'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import footer_img1 from "../../assets/footer/footer-1.jpg"
import footer_img2 from "../../assets/footer/footer-2.jpg"
import footer_img3 from "../../assets/footer/footer-3.jpg"
import footer_img4 from "../../assets/footer/footer-4.jpg"
import footer_img5 from "../../assets/footer/footer-5.jpg"
import footer_img6 from "../../assets/footer/footer-6.jpg"


const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-support">
                <Row className="list-support">
                    <Col sm>
                        <div>
                            <CreditScoreIcon />
                        </div>
                        <span>100% Payment Secured</span>
                    </Col>
                    <Col sm>
                        <div>
                            <AccountBalanceWalletIcon />
                        </div>
                        <span>Support lots of Payments</span>
                    </Col>
                    <Col sm>
                        <div>
                            <ContactSupportIcon />
                        </div>
                        <span>24 hours / 7 days Suppor</span>
                    </Col>
                    <Col sm>
                        <div>
                            <LocalShippingIcon />
                        </div>
                        <span>Free Delivery with $50</span>
                    </Col>
                </Row>
            </Container>

            <div className="footer-img ">
                <ul className="list-img ">
                    <li> <img src={footer_img1} alt="" /></li>
                    <li> <img src={footer_img2} alt="" /></li>
                    <li> <img src={footer_img3} alt="" /></li>
                    <li> <img src={footer_img4} alt="" /></li>
                    <li> <img src={footer_img5} alt="" /></li>
                    <li> <img src={footer_img6} alt="" /></li>
                    <li> <img src={footer_img1} alt="" /></li>
                    <li> <img src={footer_img3} alt="" /></li>
                </ul>
            </div>

            <Container className="footer-bottom">
                <Row className="footer-content">
                    <Col >
                        <h5>Need Help</h5>
                        <ul>
                            <li>Call Us : <Link to="/">+(347) 123 456 789</Link></li>
                            <li>Email Us : <Link to="/">demo@domain.com</Link> </li>
                            <li>Join our : <Link to='/'>twitter @quickmunch</Link> </li>
                            <li>Join our : <Link to='/'>instagram @quickmunch</Link> </li>
                        </ul>
                    </Col>
                    <Col >
                        <h5>Get to Know Us</h5>
                        <ul>
                            <li><Link to=''>About Us</Link></li>
                            <li><Link to=''>Blog</Link></li>
                            <li><Link to=''>Socialize</Link></li>
                            <li><Link to=''>Quickmunch</Link></li>
                        </ul>
                    </Col>
                    <Col >
                        <h5>Let Us Help You</h5>
                        <ul>
                            <li><Link to=''>Account Details</Link></li>
                            <li><Link to=''>Order History</Link></li>
                            <li><Link to=''>Find restaurant</Link></li>
                            <li><Link to=''>Login</Link></li>
                        </ul>
                    </Col>
                    <Col >
                        <h5>Doing Business</h5>
                        <ul>
                            <li><Link to=''>Suggest an Idea</Link></li>
                            <li><Link to=''>Be a Partner restaurant</Link></li>
                            <li><Link to=''>Create an Account</Link></li>
                            <li><Link to=''>Help</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="follow">
                <div className="title">
                    <h4>Follow us</h4>
                </div>
                <div className="social">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
            </div>
        </div>
    );
};

export default Footer;
