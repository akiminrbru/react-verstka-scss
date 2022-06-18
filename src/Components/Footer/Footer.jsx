import React from 'react';
import classes from './Footer.module.scss';
import logo from "../../assets/img/logo.svg";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div><img src={logo} alt="logo"/></div>
            <div className={classes.footer__links}>
                <div className={classes.footer__links1}>
                    <div>Twitter</div>
                    <div>Youtube</div>
                    <div>Instagram</div>
                </div>
                <div className={classes.footer__links2}>
                    <div>Flickr</div>
                    <div>LinkedIn</div>
                    <div>Privacy</div>
                    <div>Policy</div>
                </div>
            </div>
            <div className={classes.footer__about}>For additional questions, contact rideshare@spacex.com</div>
            <div className={classes.footer__contact}>
                <button>Contact us</button>
            </div>
        </footer>
    );
};

export default Footer;