import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FiTwitter,FiFacebook,FiInstagram } from 'react-icons/fi';
import {FaSnapchat} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to='/'>Wedding Package</Link></li>
                                <li><Link to='/'>Birthday Special</Link></li>
                                <li><Link to='/'>Corporate Package</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/blogs'>Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>About Me</h3>
                            <p>Hello there, I'm Sabbir. A professional cake artist. Please check our services & enjoy our exclusive packages. </p>
                        </div>
                        <div className="col item social pt-3">
                            <a href="#a"><FiTwitter className='pb-1' /> </a>
                            <a href="#a"><FiFacebook className='pb-1' /></a>
                            <a href="#a"><FaSnapchat className='pb-1' /></a>
                            <a href="#a"><FiInstagram className='pb-1' /></a>
                        </div>
                    </div>
                    <p className="copyright">All Rights Reserved By Sabbir Bake's ©  2021-22</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;