import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
import { Button } from 'antd';
import moment from 'moment'
import 'moment/locale/es';

const EventDetDisplay = ({event})=>{ 
    return(
        <div className="contentInicio">          
            <div className="white"></div>
            <div className="imgMainDetail">
                    <img src={event.imageURL} alt="event_image"></img>
                </div>
                
                <div className="eventTitle">
                    <h2>{event.name}</h2>
                </div>
            <section className="eventDetail">
                <div className="detail">
                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-map-marked"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>¿Dónde?</b></h4>
                            <h5>{event.place + `, `+event.city}</h5>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>¿Cuándo?</b></h4>
                            <h5>{moment(event.date).format('LL')+`, `+moment(event.schedule).format('LT') + ` hrs.`}</h5>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-book-reader"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Descripción del evento:</b></h4>
                            <h5>{event.description}</h5>
                        </div>
                    </div>

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                        <i className="fas fa-money-bill-alt"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Costo de Entrada:</b></h4>
                            <h5>$ {event.priceTicket} MXN</h5>
                        </div>
                    </div>
                    <hr className="stylehr"></hr>
                    
                </div>
                <div className="compraBoletos">
                    <div className="cbButton">
                        <Button style={{width:'120px'}}type="primary"><Link to={`/event/buy/${event._id}`}>¡Quiero Asistir!</Link></Button>
                    </div>
                    <div className="cbMapa">

                    </div>
                </div>
            </section>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"></link>
        </div>
    )
}

export default EventDetDisplay