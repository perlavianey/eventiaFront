import React, {Component} from 'react'
import { message } from 'antd'
import {signUp} from '../../services/authService'
import SignupDisplay from './SignupDisplay';

message.config({top: 400, duration: 2, maxCount: 3,});

class SignupContainer extends Component{

    state = {
        signupData:{},
        loading:false
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

    createUser = (e) => {
        e.preventDefault()
        const {signupData} = this.state
        if(signupData.password !== signupData.password2) {
            return message.error('Los passwords no coinciden');
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
                />
            </div>
        )
    }
}

export default SignupContainer