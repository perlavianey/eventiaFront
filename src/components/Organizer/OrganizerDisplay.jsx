import React from 'react'
import { Button,Card, Icon } from 'antd'
import {Link} from 'react-router-dom'
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
                    <div className="father">
                        {events.map((b, key)=>{
                        return  <Link to={`/event/org/${b._id}`} key={key}>
                        <Card className="eventCard"
                            hoverable
                            title={b.name}
                            bordered='true'
                            cover={<img alt="eventPic" src={b.imageURL}/>}> 
                                <Meta
                                    title={b.place}
                                    description={b.date+`, `+ b.schedule + `hrs.`}
                                />
                        </Card></Link>
                        })}        
                    </div> 
                </section>
            </section>
        </section>
        
    )        

}

export default OrganizerDisplay
