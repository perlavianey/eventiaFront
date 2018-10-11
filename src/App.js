import React, { Component } from 'react';
import {withRouter,NavLink} from 'react-router-dom'
import Routes from './Routes';
import './index.css'




class App extends Component{
    render(){
        return(
            <div>
                <img src="../src/images/logo2.png" alt="logo" className="logo"/>
                <nav className="navbar">
                <ul id="nav">
                    <li><NavLink to={`/signup`} className="menuitem">Crear cuenta</NavLink></li>
                    <li><NavLink to={`/login`} className="menuitem">Iniciar sesión</NavLink></li>
                </ul>
            </nav>   
            <section className="content">
                <Routes/>
            </section>
            <footer className="footer">
                <p>Footer</p>
            </footer>
            </div>
            
            

            //   <Layout className="App" >
            //         <Header className="Menu">
            //             <div className="logo"></div>
            //             <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}
            //                 style={{ lineHeight: '64px'}} >
            //                 <Menu.Item key="1">Crear cuenta<NavLink to={`/signup`}></NavLink></Menu.Item>
            //                 <Menu.Item key="2">Iniciar sesion<NavLink to={`/login`}></NavLink></Menu.Item>
            //             </Menu>
            //         </Header>

            //         <Content style={{ padding: '10px' }}>
            //             <div style={{ background: '#fff', padding: 24, height: '80vh' }}>
            //                 <Routes />
            //             </div>
            //         </Content>

            //         <Footer className="foot" style={{ background: 'gray', padding: 24, height: '10vh'}}>
            //             Pie de página
            //         </Footer>
            //     </Layout>
        ); 
    }
}

export default withRouter(App);