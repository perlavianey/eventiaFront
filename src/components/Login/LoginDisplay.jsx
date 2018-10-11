import React from 'react'
import { Input,Button } from 'antd'

const LoginDisplay =({onChange,onSubmit,loading})=>{
    return(
        <div>
            <form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Inicia sesión</h2>
                <p>
                <Input 
                    name="email"
                    type="email"
                    onChange={onChange}
                    placeholder="Tu correo" 
                    />    
                </p> 
                <p>
                <Input 
                    name="password"
                    type="password"
                    onChange={onChange}
                    placeholder="Tu Password" 
                    />    
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >Inicia sesión</Button>
            </form>
        </div>
    )
}
export default LoginDisplay