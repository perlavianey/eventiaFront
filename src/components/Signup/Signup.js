import React, {Component} from 'react'
//import {ToastContainer, ToastStore} from 'react-toasts';
import { Input, Button, Select, message } from 'antd'
import toastr from 'toastr'
import {signUp} from '../../services/authService'

const Option = Select.Option;
const InputGroup = Input.Group;

message.config({top: 400, duration: 2, maxCount: 3,});

class SignupContainer extends Component{

    state = {
        signup:{},
        loading:false
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {signup} = this.state
        signup[field] = value
        this.setState({signup})
    }
    handleSelect=(value)=>{
        const field = 'role'
        const {signup} = this.state
        signup[field] = value
        this.setState({signup})
    }

    createUser = (e) => {
        
        e.preventDefault()
        const {signupData} = this.state
        if(signupData.password !== signupData.password2) {
            return message.error('Los passwords no coinciden');
            //return toastr.error('Los passwords no coinciden')   
        }
        signUp(signupData)
            .then(r=>{
                toastr.success("Tu cuenta se ha creado.")
                this.props.history.push('/login')
            })
            .catch(e=>toastr.error("Ocurrió un error, por favor intenta nuevamente"))
    }

    render(){
        const {signup, loading} = this.state
        return(
            <div>
            <form onSubmit={this.createUser} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Crea tu cuenta</h2>
                <p>
                   Nombre: <Input name="name"
                        type="text"
                        required={true}
                        onChange={this.onChange}
                        value={signup.name}
                        placeholder="Tu nombre"/>               
                </p>
                <p>
                   Apellido: <Input name="lastName"
                        type="text"
                        required={true}
                        onChange={this.onChange}
                        value={signup.lastName}
                        placeholder="Tu apellido"/>
                </p>
                <p>
                    Email:<Input name="email"
                    type="email"
                    required={true}
                    onChange={this.onChange}
                    value={signup.email}
                    placeholder="Tu correo"/>    
                </p> 
                <p>
                    Ciudad: <Input name="city"
                        type="text"
                        onChange={this.onChange}
                        value={signup.city}
                        placeholder="Ciudad"/>
                </p> 
                <p>
                    Contraseña: <Input name="password"
                    type="password"
                    required={true}
                    onChange={this.onChange}
                    value={signup.password}
                    placeholder="Define una contraseña"/>    
                </p>  
                <p>
                    Repite tu contraseña: <Input name="password2"
                    type="password"
                    required={true}
                    onChange={this.onChange}
                    value={signup.password2}
                    placeholder="Repite la contraseña"/>    
                </p> 
                    Tipo de cuenta: 
                    <InputGroup compact>
                        <Select name="role" id="role" style={{width:'50%'}} onChange={this.handleSelect}>
                            <Option value="Usuario">Usuario</Option>
                            <Option value="Organizador">Organizador de eventos</Option>
                        </Select>
                    </InputGroup>
                <br/>
                <Button loading={loading} type="primary" htmlType="submit" >Registrarme</Button>
            </form>
            </div>
        )
    }
}

export default SignupContainer