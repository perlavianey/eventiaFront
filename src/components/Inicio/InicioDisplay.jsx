import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import { Card , Select} from 'antd';
const Option = Select.Option;
const { Meta } = Card;

const InicioDisplay = ({events,user,handleSelect})=>{ 
    return(
        <div className="contentInicio">
            <div className="white"></div>
            <div className="parallax">
                <div id="cta" className="inner-container">
                    <h2>En eventia tus eventos de Literatura se vuelven realidad.</h2>
                    <div id="slogan">
                        <h4>Crea tu evento en cuestión de minutos.</h4>
                        {!user? 
                        <Link className="c-cover__button button button-green" to="/login">Crear evento</Link>
                        : 
                        <Link className="c-cover__button button button-green" to="/newEvent">Crear evento</Link>   
                        }
                        
                    </div>
                </div>
                <div style={{overflow:"hidden", height:"70vh", backgroundSize:"cover"}}>
                    <video muted autoPlay loop id="myVideo" style={{width:"100vw"}}>
                        <source src="https://res.cloudinary.com/perlavianey/video/upload/v1539623077/eventia/Feria_del_Libro_de_Guadalajara._Somos_Grandes_Momentos_online-video-cutter.com.mp4"></source>
                    </video>
                </div>
            </div>
            
            <div className="white"></div>
            <div className="filtro">
                <div style={{textAlign:"center"}}>
                    <span id="filter"> <b>Filtrar eventos por:    </b></span>
                    <Select name="typeEvent" id="filter" className="filterSelect" onChange={handleSelect} defaultValue="Todos" style={{width:"30%"}}>
                        <Option value="Todos">Todos</Option>
                        <Option value="Presentación de Libro">Presentación de Libro</Option>
                        <Option value="Inauguración">Inauguración</Option>
                        <Option value="Conferencia">Conferencia</Option>
                        <Option value="Exposición">Exposición</Option>
                        <Option value="Firma de libros">Firma de libros</Option>
                        <Option value="Otro">Otro</Option>                        
                    </Select>
                </div><br/>
            </div>
            <div className="tituloInicio">
                <h4><b>¡Explora nuestros eventos!</b></h4>
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
                            description={b.date+`, `+ b.schedule + `hrs.`}
                        />
                    </Card>
                </Link>
                })}        
            </div> 
        </div>
    )
}

export default InicioDisplay