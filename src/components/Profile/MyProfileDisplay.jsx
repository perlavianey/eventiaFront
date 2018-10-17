import React from 'react'
import { Icon,Button } from 'antd'
import {Link} from 'react-router-dom'

const MyProfileDisplay =({orders=[]})=> {                                   
    console.log(orders)
    return(
        <div className="contentProfile">          
            <div className="white"></div><br/> <br/>
            <div className="panel panelMisCompras"><h1>Tus compras en eventia</h1></div>
            {
            orders.length<1?
            <div style={{marginBottom:"29%",display: 'flex', alignItems: 'center',flexDirection: 'column'}}>
                <h2>Aún no tienes compras <i className="far fa-frown"></i></h2><br/>
                <Link to={`/inicio`}><Button className="btnEventia" icon="plus-square"> Explora nuestros eventos </Button></Link>
            </div>
            :
            <section className="eventDetail">
                <div className="father">
                {orders.map((b, key)=>{
                    return  <Link to={`/orderDetail/`+ b._id} key={key}><div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <div className="myEvent">
                        <h3>{b.event.name} </h3> 
                        <img src={b.event.imageURL} alt="event_Pic"></img>
                        <p className="folio"><b>FOLIO: </b><i>{b._id}</i></p>
                        <p><b>Datos del evento: </b></p>
                        <p><b>Fecha: </b>{b.event.date}      <b>Hora: </b>{b.event.schedule} hrs</p>
                        <p><b>Lugar: </b>{b.event.place}</p>
                    </div>
                </div></Link>})}        
                </div> 
            
                <div className="adminEvento">
                    <div className="cbButton">
                        <Link to={`/inicio`}><Icon type="left-circle" style={{fontSize:'40px', color:'navy', cursor:"pointer"}}  theme="filled" /></Link>
                        <p>Ir atrás</p>
                    </div><br/>
                </div>
            </section>   
            }     
        </div>
)}

export default MyProfileDisplay