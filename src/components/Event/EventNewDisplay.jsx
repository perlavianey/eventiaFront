import React from 'react'
import { Input,Button,Select,DatePicker,TimePicker,Icon } from 'antd'
import Autocomplete from 'react-google-autocomplete';
const Option = Select.Option;
const InputGroup = Input.Group;
const { TextArea } = Input;
const dateFormat = 'DD/MM/YYYY';
const format = 'HH:mm';

const EventNewDisplay =({onPlaceSelect,onBack,onChange,onSubmit,loading,handleSelect,handleDate,handleHour,onChangeFile})=>{
    
    return(
        <div>
            <div className="white"></div><br/> <br/>
            <section className="eventPadre">
            <h2 className="title">Creando evento</h2>
            <form onSubmit={onSubmit} className="newEvent" >
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
                    </InputGroup><br/>

                   Nombre: <br/><Input name="name"
                        type="text"
                        style={{width:'100%'}}
                        prefix={<Icon type="book" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        required={true}
                        onChange={onChange}
                        placeholder="Nombre del evento"/><br/><br/>
                
                   Descripción: <br/><TextArea name="description"
                        placeholder="Descripción del evento." 
                        style={{width:'100%'}}
                        onChange={onChange}
                        autosize={{ minRows: 2, maxRows: 6 }} /><br/><br/>
                
                    Imagen:<br/><Input accept="image/*"
                        style={{width:'100%',border:"0"}}
                        onChange={onChangeFile} 
                        type="file"/><br/><br/>
                
                    Lugar/Recinto: <br/><Autocomplete
                        style={{width: '100%'}}
                        placeholder="Lugar del evento"
                        name="place" id="address"
                        prefix={<Icon type="environment" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        onPlaceSelected={onPlaceSelect}
                        types={['establishment']}
                        componentRestrictions={{country: "mx"}}/><br/><br/>

                    Número de localidades: <br/><Input name="availableSeats"
                        type="number"
                        style={{width:'100%'}}
                        prefix={<Icon type="diff" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        onChange={onChange}
                        placeholder="¿Cuántos boletos se venderán?"/><br/><br/>
                
                    Precio de Entrada: <br/><Input name="priceTicket"
                        type="text"
                        style={{width:'100%'}}
                        prefix={<Icon type="dollar" theme="outlined" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        onChange={onChange}
                        placeholder="¿En cuánto se venderán las entradas?"/><br/><br/>
                
                    Fecha: <br/><DatePicker name="date" 
                        onChange={handleDate}
                        format={dateFormat} /><br/><br/>

                    Hora: <br/> <TimePicker name="schedule" onChange={handleHour}
                        format={format} /><br/><br/>

                <div className="btnCreateEvent">
                    <Button style={{width:'120px'}} className="btnEventia2" loading={loading} type="primary" htmlType="submit" >Crear Evento</Button> 
                </div>
            </form>         
            <div className="cbButton">
                <Icon type="left-circle" onClick={onBack} style={{fontSize:'40px', color:'navy', cursor:"pointer"}}  theme="filled" />
                <p>Ir atrás</p>
            </div><br/>
        </section>
    </div>
    )}
    
export default EventNewDisplay