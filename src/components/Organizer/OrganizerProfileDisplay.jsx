import React from 'react'
import { Button, Icon,Input } from 'antd'
import {Link} from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es';


const OrganizerProfileDisplay =({onSubmit,onChange,onChangeFile,showConfirm})=> {
    const organizadorData = JSON.parse(localStorage.getItem('user'))                                    

    return(
        <div className="contentInicio">          
            <div className="white"></div><br/> <br/>
            <div className="panel"><h1>Tu perfil en eventia</h1></div>
            <section className="eventDetail">
                <div className="detail">
                <h2><b><ins>Detalles de Artículo:</ins></b></h2><br/>
                
                <form onSubmit={onSubmit}>
                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Nombre:</b></h4>
                            <Input name="name"
                                type="text"
                                style={{width:'100%'}}
                                prefix={<Icon type="book" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                required={true}
                                onChange={onChange}
                                value={organizadorData.name}/><br/><br/>
                        </div>
                    </div> 

                     <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-camera-retro"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Imagen:</b></h4>
                            <img src={organizadorData.photoURL} style={{width:'60%',borderRadius:'10px'}} alt="userPic"></img><br/>
                            <br/>Cambiar imagen: <Input accept="image/*"
                                style={{width:'100%',border:"0"}}
                                onChange={onChangeFile} 
                                type="file"/><br/><br/>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-sticky-note"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Fecha de creación del perfil:</b></h4>
                            <h5>{moment(organizadorData.created_at).format('LL')+`, `+moment(organizadorData.created_at).format('LT') + ` hrs.`}</h5>
                        </div>
                    </div>

                        <hr className="stylehr"></hr>
                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-pen-square"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Última modificación:</b></h4>
                            <h5>{moment(organizadorData.updated_at).format('LL')+`, `+moment(organizadorData.updated_at).format('LT') + ` hrs.`}</h5>
                        </div>
                    </div>

                    <hr className="stylehr"></hr><br/><br/>
                    <div className="cbButton">
                    <Button style={{width:'150px'}}type="primary" className="btnEventia2" htmlType="submit">Guardar Cambios</Button>
                    </div>
                </form>
            </div>  
            <div className="adminEvento">
                    <div className="cbButton">
                        <Icon type="delete" onClick={showConfirm} style={{fontSize:'40px', color:'#D1302B', cursor:"pointer"}} theme="filled"></Icon>
                        <p>Eliminar Perfil</p>
                        {/* <Button style={{width:'150px'}}type="primary" onClick={showConfirm}>Eliminar evento</Button> */}
                    </div>
                    <div className="cbButton">
                        <Link to={`/organizerProfile/${organizadorData._id}`}><Icon type="left-circle" style={{fontSize:'40px', color:'navy', cursor:"pointer"}}  theme="filled" /></Link>
                        <p>Ir atrás</p>
                    </div><br/>
                </div>
            </section>
        <hr/>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
            <script src="./chartSoldEvent.js"></script>            
        </div>
    )    

}

export default OrganizerProfileDisplay
