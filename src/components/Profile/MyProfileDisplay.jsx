import React from 'react'
import { Icon } from 'antd'
import {Link} from 'react-router-dom'

const MyProfileDisplay =({orders=[]})=> {
    //const organizadorData = JSON.parse(localStorage.getItem('user'))                                    
    console.log(orders)
    return(
        <div className="contentInicio">          
            <div className="white"></div><br/> <br/>
            <div className="panel"><h1>Tus compras en eventia</h1></div>
            <section className="eventDetail">
            <div className="father">
                {orders.map((b, key)=>{
                    return  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} key={key}>
                        <div className="myEvent">
                            <img src={b.event.imageURL} alt="event_Pic"></img><br/><br/>
                            <h3>{b.event.name}</h3> 
                            <p>Fecha: {b.event.date}</p>
                            <p>Hora: {b.event.schedule} hrs.</p>
                            <p>{b.boletos.quantity} boletos - $ {b.boletos.price * b.boletos.quantity } MXN</p>
                            <div>{b.articles.map((c,key)=>{
                                return <p key={key}>{c.quantity}</p>
                            })}</div>
                        </div>
                    </div>
                
                })}        
            </div> 
                <div className="adminEvento">
                    <div className="cbButton">
                        <Link to={`/inicio`}><Icon type="left-circle" style={{fontSize:'40px', color:'navy', cursor:"pointer"}}  theme="filled" /></Link>
                        <p>Ir atrás</p>
                    </div><br/>
                </div>
            </section>
        <hr/>        
        </div>
    )    

}

export default MyProfileDisplay