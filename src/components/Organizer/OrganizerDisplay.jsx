import React from 'react'
import { Button } from 'antd'
import { Card } from 'antd';

const { Meta } = Card;

const OrganizerDisplay =({redirectNewEvent,events=[]})=> {
    const organizadorData = JSON.parse(localStorage.getItem('user'))                                    

    return(
        <section>
            <section>
                <h1>Hola {organizadorData.name}</h1>
                <img src={organizadorData.photoURL} alt='profilePicture' width='100' height='100'></img>
                <p>Nombre Completo: {organizadorData.name} {organizadorData.lastName}</p>
                <p>Correo electrónico: {organizadorData.email}</p>
                <Button>Editar perfil</Button>
            </section>
            <br/>
            <section>
                <h3>Mis eventos organizados</h3>
                <Button onClick={redirectNewEvent}>Crear evento</Button>
                <section>
                    <h2>Pasados</h2>
                        <div className="father">
                            {events.map((b, key)=>{
                            return  <Card className="eventCard"
                                key={key}
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="eventPic" src={b.imageURL} />}> 
                                <Meta
                                    title={b.name}
                                    description={b.date}/>
                                </Card>
                            })}        
                        </div> 
                </section>
                <section>
                    <h2>Futuros</h2>
                </section>
            </section>
        </section>
        
    )        

}

export default OrganizerDisplay
