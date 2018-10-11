import React, {Component} from 'react'
import {Input, Button, message} from 'antd'
import {login} from '../../services/authService'

message.config({top: 400, duration: 2, maxCount: 3,});

class Login extends Component{

    state = {
        loginData:{},
        loading:false
    }

    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {loginData} = this.state
        login(loginData)
        .then(r=>{
            console.log(r)
            localStorage.setItem('user', JSON.stringify(r.data.user))
            localStorage.setItem('token',r.data.token)
            this.setState({loading:false})
            if(r.data.user.role==="Organizador"){
                this.props.history.push(`/organizerProfile/`+ r.data.user._id)
                return message.success("Bienvenid@ " + r.data.user.name)
            }
            else{
                this.props.history.push('/profile')
                return message.success("Bienvenid@ " + r.data.user.name)
            }
        })
        .catch(e=>{
            this.setState({loading:false})
            return message.error("Ocurrió un error al iniciar sesión, por favor intenta nuevamente")
        })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {loginData} = this.state
        loginData[field] = value
        this.setState({loginData})
    }

    render(){
        const {loginData, loading} = this.state
        return(
            <form onSubmit={this.login} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Inicia sesión</h2>
                <p>
                <Input 
                    name="email"
                    type="email"
                    onChange={this.onChange}
                    value={loginData.email}
                    placeholder="Tu correo" 
                    />    
                </p> 
                <p>
                <Input 
                    name="password"
                    type="password"
                    onChange={this.onChange}
                    value={loginData.password}
                    placeholder="Tu Password" 
                    />    
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >Inicia sesión</Button>
            </form>
        )
    }
}

export default Login