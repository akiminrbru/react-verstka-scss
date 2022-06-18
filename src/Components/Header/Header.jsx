import React from 'react';
import classes from './Header.module.scss';
import logo from "../../assets/img/logo.svg";
import line from "../../assets/img/line.svg";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <nav className={classes.navbar}>
                    <div><img src={logo} alt="logo"/></div>
                    <div className={classes.navbar__rocketlist}>
                        <div>Falcon 9</div>
                        <div>Falcon Heavy</div>
                        <div>Dragon</div>
                        <div>Updates</div>
                    </div>
                    <div className={classes.navbar__navlist}>
                        <div>About</div>
                        <div>Gallery</div>
                        <div>Shop</div>
                    </div>
                </nav>
                <div className={classes.title}>
                    <div className={classes.title__main}>Falcon Heavy</div>
                    <div className={classes.title__text}>
                        The most powerful operational rocket <br/>s in the world by a factor of two
                    </div>
                    <div className={classes.title__line}><img src={line} alt="line"/></div>
                </div>
            </div>
            <div className={classes.header__image}></div>
        </header>
    );
};

export default Header;