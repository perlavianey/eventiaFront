import React, {Component} from 'react'
import { message } from 'antd'
import {login} from '../../services/authService'
import LoginDisplay from './LoginDisplay';

message.config({top: 400, duration: 2, maxCount: 3,});

class LoginContainer extends Component{

    state = {
        loginData:{},
        loading:false
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){return this.props.history.push('/inicio/')}
    }

    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {loginData} = this.state
        login(loginData)
        .then(r=>{
            localStorage.setItem('user', JSON.stringify(r.data.user))
            localStorage.setItem('token',r.data.token)
            this.setState({loading:false})
            if(r.data.user.role==="Organizador"){
                this.props.history.push(`/organizerProfile/`+ r.data.user._id)
                return message.success("Bienvenid@ " + r.data.user.name)
            }
            else{
                this.props.history.push('/inicio')
                return message.success("Bienvenid@ " + r.data.user.name)
            }
        })
        .catch(e=>{
            this.setState({loading:false})
            return message.error("Usuario y/o contraseña inválidos. Intenta nuevamente")
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
        return(
            <div >
                <LoginDisplay 
                    onSubmit={this.login}
                    onChange={this.onChange}
                    loading={this.loading}
                />
            </div>
        )
    }
}

export default LoginContainer