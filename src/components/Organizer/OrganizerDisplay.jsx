import React from 'react'
import { Button,Card, Icon } from 'antd'
import {Link} from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es';

const { Meta } = Card;

const OrganizerDisplay =({redirectNewEvent,events=[]})=> {
    const organizadorData = JSON.parse(localStorage.getItem('user'))                                    

    return(
        <section className="eventPadreOrganizer">
            <h2 className="titleMain2">Perfil de Organizador</h2>
            <section className="parallaxUser">
            <Card className="userCard"
                key="1"
                hoverable
                style={{ width: 300,height:360}}
                cover={<img alt="eventPic" src={organizadorData.photoURL}  style={{width:'50%', height:'50%', padding:'5%'}} />}> 
                <hr/><br/>
                <Meta
                    title={organizadorData.name +`  `+organizadorData.lastName} //{organizadorData.lastName}
                    description={organizadorData.email}/> <br/> <br/>
                    <Button><Icon type="edit" theme="filled" style={{ fontSize: '20px', color: 'navy' }}/></Button>
                </Card>
            </section>
            <br/>
            
            <h2 className="titleMain3">Mis eventos organizados</h2>
            <Button onClick={redirectNewEvent} type="primary" icon="plus-square"> Agregar Evento</Button>
            <section className="eventPadreOrganizer">
                <section>
                <h2 className="eventosList">Eventos Futuros:</h2>
                        <div className="father">
                            {events.map((b, key)=>{

                return  <Link to={`/event/org/${b._id}`}>
                   <Card className="eventCard"
                            key={key}
                            hoverable
                            title={b.name}
                            bordered='true'
                            cover={<img alt="eventPic" src={b.imageURL}/>}> 
                                <Meta
                                    title={b.description}
                                    description={moment(b.date).format('LL')+`, `+moment(b.schedule).format('LT') + `hrs.`}
                                />
                        </Card></Link>
                        })}        
                    </div> 
                </section>
                <section>
                    <h2>Eventos Pasados:</h2>
                </section>
            </section>
        </section>
        
    )        

}

export default OrganizerDisplay
