import React from 'react'
import { Input,Button } from 'antd'
import '../../index.css'

const LoginDisplay =({onChange,onSubmit,loading})=>{
    return(
        <section className="eventPadre login">
        <h2 className="titleLogin">Inicia Sesión</h2>
            <form onSubmit={onSubmit} className="newEvent" style={{width:600, margin:"0 auto", padding:20}}>
                
                <p>
                    Email: <br/>
                <Input 
                    name="email"
                    type="email"
                    onChange={onChange}
                    placeholder="Tu correo" 
                    />    
                </p> 
                <p>
                Contraseña: <br/>
                <Input 
                    name="password"
                    type="password"
                    onChange={onChange}
                    placeholder="Tu Password" 
                    />  <br/>  
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >Inicia sesión</Button>
            </form>
        </section>
    )
}
export default LoginDisplay