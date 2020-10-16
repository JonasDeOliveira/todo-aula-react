import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Menu from '../template/Menu';
import About from '../about/About';
import Todo from '../todo/Todo';

export default props => (
    <div className="container">
        <Menu/> 
        <About/>
        <Todo />
    </div>
    
)