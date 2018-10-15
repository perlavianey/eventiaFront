import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import { Card } from 'antd';
import moment from 'moment'

const { Meta } = Card;

const InicioDisplay = ({events,user})=>{ 
    return(
        <div className="contentInicio">
            {/* <div className="white-cloud-arriba flip">
            <img src={cloud} alt="nube"/>
            </div>
            <div className="parallax"></div>
            <div className="white-cloud">
                <img src={cloud} alt="cloud"/>
            </div> */}
            <div className="white"></div>
            <div className="parallax">
            <div id="cta" className="inner-container">
                <h2>En eventia tus eventos de Literatura se vuelven realidad</h2>

                <div id="slogan">
                <h4>Ve un paso más allá y crea tu evento en cuestión de minutos.</h4>
                {!user? 
                <a className="c-cover__button button button-green" href="/login">Crear evento</a>
                : 
                <a className="c-cover__button button button-green" href="/newEvent">Crear evento</a>   
            }
                
                <h4>Sí, es posible.</h4>
                </div>
            </div>
            
            </div>
            <div className="white-down"></div>
            

            <div className="titleMain">
                <h3>Próximos eventos</h3>
            </div>

            <div className="father">
                {events.map((b, key)=>{
                return  <Link to={`/event/${b._id}`} key={key}>
                    <Card className="eventCard"
                        hoverable
                        title={b.name}
                        bordered='true'
                        cover={<img alt="eventPic" src={b.imageURL}/>}> 
                            <Meta
                                title={b.place}
                                //description={b.date+`, `+ b.schedule + `hrs.`}
                                description={moment(b.date).format('LL')+`, `+moment(b.schedule).format('LT') + `hrs.`}
                            />
                        </Card>
                </Link>
                })}        
            </div> 
        </div>
    )
}

export default InicioDisplay