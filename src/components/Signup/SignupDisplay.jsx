import React from 'react'
import { Input, Button, Select } from 'antd'
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
                        required={true}
                        onChange={onChange}
                        placeholder="Tu nombre"/>               
                </p>
                <p>
                   Apellido: <Input name="lastName"
                        type="text"
                        required={true}
                        onChange={onChange}
                        placeholder="Tu apellido"/>
                </p>
                <p>
                    Email:<Input name="email"
                    type="email"
                    required={true}
                    onChange={onChange}
                    placeholder="Tu correo"/>    
                </p> 
                <p>
                    Ciudad: <Input name="city"
                        type="text"
                        onChange={onChange}
                        placeholder="Ciudad"/>
                </p> 
                <p>
                    Contraseña: <Input name="password"
                    type="password"
                    required={true}
                    onChange={onChange}
                    placeholder="Define una contraseña"/>    
                </p>  
                <p>
                    Repite tu contraseña: <Input name="password2"
                    type="password"
                    required={true}
                    onChange={onChange}
                    placeholder="Repite la contraseña"/>    
                </p> 
                    Tipo de cuenta: 
                    <InputGroup compact>
                        <Select name="role" id="role" style={{width:'50%'}} onChange={handleSelect} defaultValue="Usuario">
                            <Option value="Usuario">Usuario</Option>
                            <Option value="Organizador">Organizador de eventos</Option>
                        </Select>
                    </InputGroup>
                <br/>
                <Button loading={loading} type="primary" htmlType="submit" >Registrarme</Button>
            </form>
        </section>
    )
}
export default SignupDisplay