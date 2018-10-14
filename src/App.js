import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom'
import Routes from './Routes';

import './index.css'

import logo from '../src/images/eventiaBook.png'


class App extends Component{

    cierraSesión = () =>{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.props.history.push('/inicio')
    }

    render(){
        //const token = localStorage.getItem('user')
        const token = JSON.parse(localStorage.getItem('user')) 
        const user = JSON.parse(localStorage.getItem('user')) 

        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=ABeeZee" rel="stylesheet"></link>
                <nav className="navbar">
                    <a href="/inicio">
                        <img src={logo} alt="logo" className="logoImg"/>
                    </a>
                    <ul>
                       {!token?
                            <section className="sesion">
                                <Link to={`/signup`} className="menuitem menuitem1"><li>Crear cuenta</li></Link>
                                <Link to={`/login`} className="menuitem menuitem2"><li>Iniciar sesión</li></Link>
                            </section>
                           :<section className="sesion"><Link to={`#`} onClick={this.cierraSesión} className="menuitem menuitem2"><li>Salir</li></Link>
                             {user.role==='Organizador'?
                                
                                    <Link to={`/organizerProfile/`+ user._id} className="menuitem menuitem2"><li>Mi Perfil</li></Link>
                                : 
                                
                                    <Link to={`/myProfile/`+ user._id} className="menuitem menuitem2"><li>Mi Perfil</li></Link>
                                
                            }
                            </section>
                        }
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