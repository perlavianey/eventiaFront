import React from 'react'
import { Input,Button,Select,DatePicker,TimePicker } from 'antd'
const Option = Select.Option;
const InputGroup = Input.Group;
const { TextArea } = Input;
const dateFormat = 'DD/MM/YYYY';
const format = 'HH:mm';

const EventDisplay =({onBack,onChange,onSubmit,loading,handleSelect,handleDate,handleHour,uploadPic,onChangeFile})=>{
    return(
        <section className="eventPadre">
        <h2 className="title">Creando evento</h2>
             <form onSubmit={onSubmit} className="newEvent" >
                
                   Nombre: <br/><Input name="name"
                        type="text"
                        style={{width:'100%'}}
                        required={true}
                        onChange={onChange}
                        placeholder="Nombre del evento"/><br/><br/>
                
                   Descripción: <br/><TextArea name="description"
                        placeholder="Descripción del evento." 
                        style={{width:'100%'}}
                        onChange={onChange}
                        autosize={{ minRows: 2, maxRows: 6 }} /><br/><br/>
                
                    Imagen:<br/><input accept="image/*"
                        style={{width:'100%'}}
                        onChange={onChangeFile} 
                        type="file" /><br/><br/>
                
                
                    Lugar/Recinto: <br/><Input name="place"
                    style={{width:'100%'}}
                        type="text"
                        onChange={onChange}
                        placeholder="Lugar del evento"/><br/><br/>
               
                    Ciudad: <br/><Input name="city"
                        style={{width:'100%'}}
                        type="text"
                        onChange={onChange}
                        placeholder="Ciudad"/><br/><br/>
                
                    Número de localidades: <br/><Input name="availableSeats"
                        type="number"
                        style={{width:'100%'}}
                        onChange={onChange}
                        placeholder="¿Cuántos boletos se venderán?"/><br/><br/>
                
                    Precio de Entrada: <br/>
                    <Input name="priceTicket"
                        type="text"
                        style={{width:'100%'}}
                        onChange={onChange}
                        placeholder="¿En cuánto se venderán las entradas?"/><br/><br/>
                
                    Fecha: <br/><DatePicker name="date" onChange={handleDate}
                    format={dateFormat} /><br/><br/>

                    Hora: <br/> <TimePicker name="schedule" onChange={handleHour}
                    format={format} /><br/><br/>

                    Tipo de evento: <br/>
                    <InputGroup compact>
                        <Select name="typeEvent" id="typeEvent" style={{width:'50%'}} onChange={handleSelect} defaultValue="Presentación de Libro">
                            <Option value="Presentación de Libro">Presentación de Libro</Option>
                            <Option value="Inauguración">Inauguración</Option>
                            <Option value="Conferencia">Conferencia</Option>
                            <Option value="Exposición">Exposición</Option>
                            <Option value="Firma de libros">Firma de libros</Option>
                            <Option value="Otro">Otro</Option>                        
                        </Select>
                    </InputGroup><br/><br/>
                <Button style={{width:'120px'}} loading={loading} type="primary" htmlType="submit" >Crear Evento</Button> 
            </form>
            <br/>
            <Button style={{width:'120px'}}type="primary" onClick={onBack}>Cancelar</Button>
            
        </section>
    )
}
export default EventDisplay