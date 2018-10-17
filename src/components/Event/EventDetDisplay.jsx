import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
import { Button,Card,Tooltip} from 'antd';
import 'moment/locale/es';
const { Meta } = Card;
const text = <span>Deber iniciar sesión para comprar entradas</span>;
const EventDetDisplay = ({event,articles})=>{ 
    return(
        <div>
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
                            <h5>{event.place}</h5>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>¿Cuándo?</b></h4>
                            <h5>{event.date+`, `+event.schedule + ` hrs.`}</h5>
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
                    {localStorage.getItem('user')?
                        <div className="cbButton">
                            <Button style={{width:'130px'}} className="btnEventia2"  type="primary"><Link to={`/event/buy/${event._id}`}>¡Quiero Asistir!</Link></Button>
                        </div>
                        :
                        <div className="cbButton">
                            <Tooltip placement="top" title={text}>
                                <Button ghost disabled style={{width:'130px',color:"white"}} className="btnEventia2"  type="primary"><Link to={`/event/buy/${event._id}`}>¡Quiero Asistir!</Link></Button>
                            </Tooltip>
                        </div>
                    }
                </div>
            </section>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"></link>
        </div>

        
            {articles.length>0?
            <div>
            <h2 style={{textAlign:'center'}}><b><ins>Artículos a la venta con este evento:</ins></b></h2>
            <div className="fatherArticle">
                {articles.map((b, key)=>{
                return <Card className="eventCard"
                        key={key}
                        hoverable
                        title={b.name}
                        bordered='true'
                        cover={<img alt="articlePic" src={b.imageURL}/>}> 
                            <Meta
                                title={b.sold}
                                description={`Precio: $`+ b.price +` MXN`}
                            />
                    </Card>
                })}        
                </div>
                </div>
            :""
            }
        </div>
    )
}

export default EventDetDisplay