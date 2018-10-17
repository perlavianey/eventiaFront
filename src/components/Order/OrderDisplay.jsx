import React from 'react'
import { Icon } from 'antd'
import {Link} from 'react-router-dom'

const OrderDisplay =({_id, boletos={}, event={}, articles=[],user={} })=> {                                   
    return(
        <div className="contentProfile">          
            <div className="white"></div><br/> <br/>
            <div className="panel panelMisCompras"><h1>Tu orden de compra</h1></div>
            <section className="eventDetail">
                <div className="father">
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
                        <div className="myOrder">
                            <h2><b>{event.name}</b></h2>
                            <h5><b>FOLIO DE COMPRA:</b> {_id}</h5>
                            <img src={event.imageURL} alt="event_Pic"></img>
                            <p><b>Fecha: </b>{event.date}</p>
                            <p><b>Hora: </b>{event.schedule} hrs</p>
                            <p><b>Lugar: </b>{event.place}</p><hr/>
                            <p className="cuentaOrden"><b>RESUMEN DE COMPRA</b></p>
                            <p className="cuentaOrden">Boletos: {boletos.quantity} --> $ {boletos.price || 0 * boletos.quantity || 0 } MXN</p>
                            <div>{articles.map((c,key)=>{
                                return <div  key={key}>
                                    <p className="cuentaOrden"> {c.product.name} ({c.quantity}) --> {c.quantity*c.product.price} MXN</p>
                                </div>
                            })}</div>
                        </div>
                    </div>      
                </div> 
            
                <div className="adminEvento">
                    <div className="cbButton">
                        <Link to={`/myProfile/`+ user._id}><Icon type="left-circle" style={{fontSize:'40px', color:'navy', cursor:"pointer"}}  theme="filled" /></Link>
                        <p>Ir a Mis compras</p>
                    </div><br/>
                    <div className="cbButton">
                        <Link to="#" onClick={()=>window.print()}><Icon type="printer" style={{fontSize:'40px', color:'rgb(109, 68, 7)', cursor:"pointer"}}  theme="filled"/></Link>
                        <p>Imprimir</p>
                    </div><br/>
                </div>
            </section>
        </div>
)}

export default OrderDisplay