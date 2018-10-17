import React from 'react'
import { Input, Button, Select,Icon } from 'antd'
import {NavLink} from 'react-router-dom'
import Autocomplete from 'react-google-autocomplete';
const Option = Select.Option;
const InputGroup = Input.Group;

const SignupDisplay =({onPlaceSelect,onChange,onSubmit,handleSelect,loading})=>{
    return(
        <div>
        <div className="white"></div><br></br>
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
                    Ciudad:<Autocomplete
                    style={{width: '100%'}}
                    placeholder="Introduce tu ciudad"
                    name="city" id="address"
                    onPlaceSelected={onPlaceSelect}
                    types={['(regions)']}
                    componentRestrictions={{country: "mx"}}/>
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
                        <Select name="role" 
                        id="role"
                        style={{width:'50%'}} onChange={handleSelect} defaultValue="Usuario">
                            <Option value="Usuario">Usuario</Option>
                            <Option value="Organizador">Organizador de eventos</Option>
                        </Select>
                    </InputGroup><br/>
                <div className="cbButton">
                    <Button loading={loading} className="btnEventia2" type="primary" htmlType="submit" >Registrarme</Button>
                </div>
            </form><br/>
            <NavLink to='/login'>Ya tengo cuenta</NavLink> <br/> <br/>
        </section>
    </div>
    )}
    
export default SignupDisplay