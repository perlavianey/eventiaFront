import React from 'react'
import { Icon,Input,Button } from 'antd'
import {NavLink} from 'react-router-dom'
import '../../index.css'

const LoginDisplay =({onChange,onSubmit,loading})=>{
    return(
        <div>
            <div className="white"></div>
            <br></br>
        <section className="eventPadre login">
        <h2 className="titleLogin">Inicia Sesión</h2>
            <form onSubmit={onSubmit} className="newEvent" style={{width:600, margin:"0 auto", padding:20}}>
                
                <p>
                    Email: <br/>
                <Input 
                    name="email"
                    type="email"
                    prefix={<Icon type="mail" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    onChange={onChange}
                    placeholder="Tu correo" 
                    />    
                </p> 
                <p>
                Contraseña: <br/>
                <Input 
                    name="password"
                    type="password"
                    prefix={<Icon type="lock" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    onChange={onChange}
                    placeholder="Tu Password" 
                    />  <br/>  
                </p> 
                <div className="cbButton">
                    <Button loading={loading} type="primary" htmlType="submit" className="btnEventia2">Inicia sesión</Button>    
                </div>  
                
            </form> <br/>

            <NavLink to='/signup' style={{marginBottom:"28px"}}>No tengo cuenta</NavLink>
        </section>
    </div>
    )
}
export default LoginDisplay