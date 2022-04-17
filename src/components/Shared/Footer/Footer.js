import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FiTwitter,FiFacebook,FiInstagram } from 'react-icons/fi';
import {FaSnapchat} from 'react-icons/fa'

const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to='/'>Wedding Package</Link></li>
                                <li><Link to='/'>Birthday Special</Link></li>
                                <li><Link to='/'>Corporate Package</Link></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/'>Blog</Link></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>About Me</h3>
                            <p>Hello there, I'm Sabbir.A professional cake artist.</p>
                        </div>
                        <div class="col item social">
                            <a href="#"><FiTwitter/> </a>
                            <a href="#"><FiFacebook /></a>
                            <a href="#"><FaSnapchat /></a>
                            <a href="#"><FiInstagram /></a>
                        </div>
                    </div>
                    <p class="copyright">Company Name © 2018</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;