import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
import { Button,Input,Icon,Select,DatePicker,TimePicker} from 'antd';
import moment from 'moment'
import 'moment/locale/es';
const { TextArea } = Input;
const Option = Select.Option;
const InputGroup = Input.Group;
const dateFormat = 'DD/MM/YYYY';
const format = 'HH:mm';

const EventDetOrgDisplay = ({event,onChange,onBack,onSubmit,loading,handleSelect,handleDate,handleHour,uploadPic,onChangeFile})=>{ 
    return(
        <div className="contentInicio">          
            <div className="white"></div><br/> <br/>
            <div className="panel"><h1>Panel de Administrador</h1></div>
            <section className="eventDetail">
                <div className="detail">
                <h2><b>Detalles de tu evento:</b></h2><br/>
                
                <div className="descDetail">
                        <div className="icon">
                        <i class="fas fa-smile"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Nombre:</b></h4>
                            <Input name="name"
                                type="text"
                                style={{width:'100%'}}
                                prefix={<Icon type="book" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                required={true}
                                onChange={onChange}
                                value={event.name}/><br/><br/>
                        </div>
                    </div> 
                    
                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i class="fas fa-camera-retro"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Imagen:</b></h4>
                            <img src={event.imageURL} style={{width:'60%',borderRadius:'10px'}} alt="event_image"></img><br/>
                            <br/>Cambiar imagen: <Input accept="image/*"
                                style={{width:'100%',border:"0"}}
                                onChange={onChangeFile} 
                                type="file"/><br/><br/>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Tipo de evento:</b></h4>
                            <InputGroup compact>
                            <Select name="typeEvent" id="typeEvent" style={{width:'50%'}} value={event.typeEvent} onChange={handleSelect}>
                                <Option value="Presentación de Libro">Presentación de Libro</Option>
                                <Option value="Inauguración">Inauguración</Option>
                                <Option value="Conferencia">Conferencia</Option>
                                <Option value="Exposición">Exposición</Option>
                                <Option value="Firma de libros">Firma de libros</Option>
                                <Option value="Otro">Otro</Option>                        
                            </Select>
                        </InputGroup><br/>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i class="fas fa-map-marked"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Lugar:</b></h4>
                            <Input name="location[address]" id="address"
                                style={{width:'100%'}}
                                type="text"
                                prefix={<Icon type="environment" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                value={event.place}/><br/><br/>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Fecha y hora:</b></h4>
                            <DatePicker name="date" 
                                onChange={handleDate}
                                format={dateFormat} defaultValue={moment(event.date)}/><TimePicker name="schedule" onChange={handleHour}
                                defaultValue={moment(event.schedule)} format={format} />
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                        <i class="fas fa-money-bill-alt"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Costo de Entrada:</b></h4>
                            <Input name="priceTicket"
                                type="text"
                                style={{width:'100%'}}
                                prefix={<Icon type="dollar" theme="outlined" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                onChange={onChange}
                                value={event.priceTicket}/><br/><br/>
                        </div>
                    </div>

                     <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i class="fas fa-chair"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Número de localidades:</b></h4>
                            <Input name="availableSeats"
                                type="number"
                                style={{width:'100%'}}
                                prefix={<Icon type="diff" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                onChange={onChange}
                                value={event.availableSeats}/><br/><br/>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>
                    
                    <div className="descDetail">
                        <div className="icon">
                            <i class="fas fa-book-reader"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Descripción del evento:</b></h4>
                            <TextArea name="description"
                                placeholder="Descripción del evento." 
                                style={{width:'100%'}}
                                onChange={onChange}
                                autosize={{ minRows: 2, maxRows: 6 }}
                                value={event.description} /><br/><br/>
                        </div>
                    </div>

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i class="fas fa-sticky-note"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Fecha de creación</b></h4>
                            <h5>{moment(event.created_at).format('LL')+`, `+moment(event.created_at).format('LT') + ` hrs.`}</h5>
                        </div>
                    </div>

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i class="fas fa-pen-square"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Última modificación:</b></h4>
                            <h5>{moment(event.updated_at).format('LL')+`, `+moment(event.updated_at).format('LT') + ` hrs.`}</h5>
                        </div>
                    </div>

                    <hr className="stylehr"></hr>
                    
                </div>
                <div className="adminEvento">
                
                    <div className="cbButton">
                        <Button style={{width:'150px'}}type="primary">Guardar Cambios</Button>
                    </div>
                    <div className="cbButton">
                        <Button style={{width:'150px'}}type="primary"><Link to={`/event/${event._id}/newarticle`}>Agregar Artículos</Link></Button>
                    </div>
                </div>
            </section>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"></link>
        </div>
    )
}

export default EventDetOrgDisplay