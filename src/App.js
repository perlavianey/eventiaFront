import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom'
import Routes from './Routes';
import './index.css'
import { Tooltip } from 'antd';
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
                    <Link to="/inicio">
                        <img src={logo} alt="logo" className="logoImg"/>
                    </Link>
                    <ul>
                       {!token?
                            <section className="sesion">
                                <Link to={`/signup`} className="menuitem menuitem1"><li>Crear cuenta</li></Link>
                                <Link to={`/login`} className="menuitem menuitem2"><li>Iniciar sesión</li></Link>
                            </section>
                           :<section className="sesion">
                                {user.role==='Organizador'?
                                    <Tooltip placement="left" title={`Mi Perfil `+user.name}>
                                        <Link to={`/organizerProfile/`+ user._id}><i className="fas fa-book-reader iconSesion" style={{fontSize:"40px",marginRight:"50px"}}/></Link>
                                    </Tooltip>
                                    : 
                                    <Tooltip placement="left" title={`Mi Perfil `+user.name}>
                                    <Link to={`/myProfile/`+ user._id}><i className="fas fa-book-reader iconSesion" style={{fontSize:"40px",marginRight:"50px"}}/></Link>
                                    </Tooltip>
                                }

                                 <Tooltip placement="right" title="Salir">
                                    <Link to={`#`} onClick={this.cierraSesión}><i className="fas fa-sign-out-alt iconSesion" style={{fontSize:"40px",marginLeft:"30px"}}/></Link>
                                </Tooltip>
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
                <Link to="#" style={{color:'black',fontSize:'15px'}}>Acerca de Nosotros</Link>
                <Link to="#" style={{color:'black',fontSize:'15px'}}>Contáctanos</Link>
                <Link to="#" style={{color:'black',fontSize:'15px'}}>By Perla Vianey ®</Link>
                <a href="https://www.facebook.com/perlitavianey"><i className="fab fa-facebook"style={{color:'black',fontSize:'25px'}}></i></a>
                <a href="https://twitter.com/perlavianey?lang=es"><i className="fab fa-twitter-square" style={{color:'black',fontSize:'25px'}}></i></a>
            </footer>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"></link>
            </div>
        ); 
    }
}

export default withRouter(App);