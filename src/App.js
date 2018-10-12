import React, { Component } from 'react';
import {withRouter,NavLink} from 'react-router-dom'
import Routes from './Routes';

import './index.css'

import logo from '../src/images/eventiaBook.png'


class App extends Component{
    render(){
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet"/>
                <nav className="navbar">
                    <a href="/inicio">
                        <img src={logo} alt="logo" className="logoImg"/>
                    </a>
                    <ul>
                        <li><NavLink to={`/signup`} className="menuitem menuitem1">Crear cuenta</NavLink></li>
                        <li><NavLink to={`/login`} className="menuitem menuitem2">Iniciar sesión</NavLink></li>
                    </ul>
                </nav>
                
            <div className="content">
                <Routes/>
            </div>
            
            {/* <div className="brown-cloud">
                <img src={browncloud} alt="cloud"/>
            </div> */}
            <footer className="footer">
                <p>By Perla Vianey</p>
            </footer>
            </div>
        ); 
    }
}

export default withRouter(App);