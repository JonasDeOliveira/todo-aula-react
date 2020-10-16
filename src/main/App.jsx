import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Menu from '../template/Menu';
import Footer from '../template/Footer';
import Routes from './Routes';


export default props => (
    <div className="container">
        <Menu/> 
        <Routes/>
        <Footer/>
    </div>
    
)