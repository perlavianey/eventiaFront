import React, {Component} from 'react'
import { message } from 'antd'
import {signUp} from '../../services/authService'
import SignupDisplay from './SignupDisplay';

message.config({top: 100, duration: 2, maxCount: 3,});

class SignupContainer extends Component{

    state = {
        signupData:{},
        loading:false
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){return this.props.history.push('/inicio/')}
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {signupData} = this.state
        signupData[field] = value
        this.setState({signupData})
    }
    handleSelect=(value)=>{
        const field = 'role'
        const {signupData} = this.state
        signupData[field] = value
        this.setState({signupData})
    }

    onPlaceSelect = (value)=>{
        const p=value.name
        const field = "city"
        console.log(p)
        const {signupData} = this.state
        signupData[field] = p
        this.setState({signupData})
    }

    createUser = (e) => {
        e.preventDefault()
        const {signupData} = this.state
        if(signupData.password !== signupData.password2) {
            return message.error('Los passwords no coinciden');
        }
        if(signupData.password.length<5){
            return message.error('Contraseña demasiado débil.');
        }
        signUp(signupData)
            .then(r=>{
                this.props.history.push('/login')
                return message.success("Tu cuenta se ha creado.")
            })
            .catch(e=>message.error("Ocurrió un error, por favor intenta nuevamente"))
    }

    render(){
        return(
            <div >
                <SignupDisplay 
                    onSubmit={this.createUser}
                    onChange={this.onChange}
                    handleSelect={this.handleSelect}
                    loading={this.loading}
                    onPlaceSelect={this.onPlaceSelect}
                />
            </div>
        )
    }
}

export default SignupContainer