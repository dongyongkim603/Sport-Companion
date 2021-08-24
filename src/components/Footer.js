import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';
import FighterCard from './FighterCard';
import logo from './../resources/1000_F_287669297_jyKF7nGOczOnkSvXNxFzikGl2ppPCGPm.jpg';
import NavigationBar from './NavigationBar';

const Footer = (props) => {

    return (
        <footer class="footer mt-auto py-3">
            <div class="footer-container">
                <a class="navbar-brand" href="index.html">
                    <img src="images/johnLogo.png" class="logo"
                        style="width: 106px; height: 106px; margin-left: 3rem;">

                        </a>
                    <span class="text-muted"><a href="mailto: dongyonkim8@gmail.com">
                        <img src="images/icons8-important-mail-24.png"> Email: dongyongkim8@gmail.com
                    </a>
                </span>
                        <span class="text-muted">
                            <img src="images/icons8-phone-26.png"> Phone: (603) 244-0939
                </span>
                            <span class="text-muted">
                                <a href="https://github.com/dongyongkim603">
                                    <img src="images/icons8-github-24.png"> GitHub: github.com/dongyongkim603
                    </a>
                </span>
                                <span class="text-muted">
                                    <a href="https://www.linkedin.com/in/john-haney-280121140/">
                                        <img src="images/icons8-linkedin-24.png"> LinkedIn: linkedin.com/in/john-haney
                    </a>
                </span>
            </div>
        </footer>
                            );
}

                            export default Footer;