import React from 'react'
import { Input, Button, Select,Icon } from 'antd'
import {NavLink} from 'react-router-dom'
const Option = Select.Option;
const InputGroup = Input.Group;

const SignupDisplay =({onChange,onSubmit,handleSelect,loading})=>{
    return(
        <section className="eventPadre">
        <h2 className="title">Creando tu cuenta</h2>
            <form onSubmit={onSubmit} className="newEvent">
                
                <p>
                   Nombre: <Input name="name"
                        type="text"
                        prefix={<Icon type="smile" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        required={true}
                        onChange={onChange}
                        placeholder="Nombre"/>               
                </p>
                <p>
                   Apellido: <Input name="lastName"
                        type="text"
                        prefix={<Icon type="star" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        required={true}
                        onChange={onChange}
                        placeholder="Apellido"/>
                </p>
                <p>
                    Email:<Input name="email"
                    type="email"
                    prefix={<Icon type="mail" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    required={true}
                    onChange={onChange}
                    placeholder="Correo electrónico"/>    
                </p> 
                <p>
                    Ciudad: <Input name="city"
                    type="text"
                    prefix={<Icon type="pushpin" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    onChange={onChange}
                    placeholder="Ciudad"/>
                </p> 
                <p>
                    Contraseña: <Input name="password"
                    type="password"
                    prefix={<Icon type="lock" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    required={true}
                    onChange={onChange}
                    placeholder="Define una contraseña"/>    
                </p>  
                <p>
                    Repite tu contraseña: <Input name="password2"
                    type="password"
                    prefix={<Icon type="lock" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    required={true}
                    onChange={onChange}
                    placeholder="Repite la contraseña"/>    
                </p> 
                    Tipo de cuenta: 
                    <InputGroup compact>
                        <Select name="role" id="role" 
                        
                        style={{width:'50%'}} onChange={handleSelect} defaultValue="Usuario">
                            <Option value="Usuario">Usuario</Option>
                            <Option value="Organizador">Organizador de eventos</Option>
                        </Select>
                    </InputGroup>
                <br/>
                <Button loading={loading} type="primary" htmlType="submit" >Registrarme</Button>
            </form><br/>
            <NavLink to='/login'>Ya tengo cuenta</NavLink> <br/> <br/>
        </section>
    )
}
export default SignupDisplay