import React from 'react';
import classes from './App.module.scss';
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div className={classes.app}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default App;