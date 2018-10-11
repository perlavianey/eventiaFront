import React from 'react'
import { Input,Button,Select,DatePicker,TimePicker } from 'antd'
const Option = Select.Option;
const InputGroup = Input.Group;
const { TextArea } = Input;
const dateFormat = 'DD/MM/YYYY';
const format = 'HH:mm';

const EventDisplay =({onBack,onChange,onSubmit,loading,handleSelect,handleDate,handleHour,uploadPic,onChangeFile})=>{
    return(
        <div>
             <form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Creando evento</h2>
                <p>
                   Nombre: <Input name="name"
                        type="text"
                        required={true}
                        onChange={onChange}
                        placeholder="Nombre del evento"/>               
                </p>
                <p>
                   Descripción: <TextArea name="description"
                        placeholder="Descripción del evento." 
                        onChange={onChange}
                        autosize={{ minRows: 2, maxRows: 6 }} />
                </p>
                
                <p>
                    Imagen:
                        <input accept="image/*"
                        onChange={onChangeFile} 
                        type="file" />
                </p> 
                <p>
                    Lugar/Recinto: <Input name="place"
                        type="text"
                        onChange={onChange}
                        placeholder="Lugar del evento"/>
                </p> 
                <p>
                    Ciudad: <Input name="city"
                        type="text"
                        onChange={onChange}
                        placeholder="Ciudad"/>
                </p> 
                <p>
                    Número de localidades: <Input name="availableSeats"
                        type="number"
                        onChange={onChange}
                        placeholder="¿Cuántos boletos se venderán?"/>
                </p> 
                <p>
                    Precio de Entrada: <Input name="priceTicket"
                        type="text"
                        onChange={onChange}
                        placeholder="¿En cuánto se venderán las entradas?"/>
                </p> 
                
                    Fecha: <DatePicker name="date" onChange={handleDate}
                    format={dateFormat} />
                <br/>
                <br/>
                    Hora:  <TimePicker name="schedule" onChange={handleHour}
                    format={format} />
                <br/>

                    Tipo de evento: 
                    <InputGroup compact>
                        <Select name="typeEvent" id="typeEvent" style={{width:'50%'}} onChange={handleSelect} defaultValue="Musical">
                            <Option value="Cultural">Cultural</Option>
                            <Option value="Musical">Musical</Option>
                            <Option value="Exposición">Exposición</Option>
                            <Option value="Deportivo">Deportivo</Option>
                            <Option value="Otro">Otro</Option>                        
                        </Select>
                    </InputGroup>
                <br/>
                <Button loading={loading} type="primary" htmlType="submit" >Crear Evento</Button>
                
            </form>
            <button type="primary" onClick={onBack}>Cancelar</button>
        </div>
    )
}
export default EventDisplay