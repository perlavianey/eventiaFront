import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'
import { Button,Input,Icon} from 'antd';
import moment from 'moment'
import 'moment/locale/es';
const { TextArea } = Input;

const ArticleDetOrgDisplay = ({showConfirm,article,onChange,onBack,onSubmit,loading,onChangeFile})=>{ 
    return(
        <div className="contentInicio">          
            <div className="white"></div><br/> <br/>
            <div className="panel"><h1>Panel de Administrador</h1></div>
            <section className="eventDetail">
                <div className="detail">
                <h2><b><ins>Detalles de Artículo:</ins></b></h2><br/>
                
                <form onSubmit={onSubmit}>
                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Nombre:</b></h4>
                            <Input name="name"
                                type="text"
                                style={{width:'100%'}}
                                prefix={<Icon type="book" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                required={true}
                                onChange={onChange}
                                value={article.name}/><br/><br/>
                        </div>
                    </div> 

                     <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-info-circle"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Descripción del artículo:</b></h4>
                            <TextArea name="description"
                                placeholder="Descripción del evento." 
                                style={{width:'100%'}}
                                onChange={onChange}
                                autosize={{ minRows: 2, maxRows: 6 }}
                                value={article.description} /><br/><br/>
                        </div>
                    </div>

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-camera-retro"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Imagen:</b></h4>
                            <img src={article.imageURL} style={{width:'60%',borderRadius:'10px'}} alt="event_image"></img><br/>
                            <br/>Cambiar imagen: <Input accept="image/*"
                                style={{width:'100%',border:"0"}}
                                onChange={onChangeFile} 
                                type="file"/><br/><br/>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-sort-numeric-down"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Número de piezas a ofertar:</b></h4>
                            <Input name="stock"
                                type="number"
                                style={{width:'100%'}}
                                prefix={<Icon type="diff" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                onChange={onChange}
                                value={article.stock}/><br/><br/>
                        </div>
                    </div> 

                    <hr className="stylehr"></hr>

                <div className="descDetail">
                    <div className="icon">
                        <i className="fas fa-money-bill-alt"></i>
                    </div>
                    <div className="infoDetail">
                        <h4><b>Precio:</b></h4>
                        <Input name="price"
                            type="number"
                            style={{width:'100%'}}
                            prefix={<Icon type="diff" theme="filled" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            onChange={onChange}
                            value={article.price}/><br/><br/>
                    </div>
                </div> 

                    <hr className="stylehr"></hr>

                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-sticky-note"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Fecha de creación</b></h4>
                            <h5>{moment(article.created_at).format('LL')+`, `+moment(article.created_at).format('LT') + ` hrs.`}</h5>
                        </div>
                    </div>

                        <hr className="stylehr"></hr>
                    <div className="descDetail">
                        <div className="icon">
                            <i className="fas fa-pen-square"></i>
                        </div>
                        <div className="infoDetail">
                            <h4><b>Última modificación:</b></h4>
                            <h5>{moment(article.updated_at).format('LL')+`, `+moment(article.updated_at).format('LT') + ` hrs.`}</h5>
                        </div>
                    </div>

                    <hr className="stylehr"></hr><br/><br/>
                    <div className="cbButton">
                    <Button style={{width:'150px'}}type="primary" htmlType="submit">Guardar Cambios</Button>
                    </div>
                </form>
            </div>  
            <div className="adminEvento">
                    <div className="cbButton">
                        <Icon type="delete" onClick={showConfirm} style={{fontSize:'40px', color:'#D1302B', cursor:"pointer"}} theme="filled"></Icon>
                        <p>Eliminar Artículo</p>
                        {/* <Button style={{width:'150px'}}type="primary" onClick={showConfirm}>Eliminar evento</Button> */}
                    </div>
                    <div className="cbButton">
                        <Link to={`/event/org/${article.event}`}><Icon type="left-circle" style={{fontSize:'40px', color:'navy', cursor:"pointer"}}  theme="filled" /></Link>
                        <p>Ir atrás</p>
                    </div><br/>
                </div>
            </section>
        <hr/>

        <section className="eventPadreOrganizer">
            <h2 className="eventosList"><ins>Status de ventas de artículo:</ins></h2><br/>
            <canvas width="200" height="200" id="canvas"></canvas>
        </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
            <script src="./chartSoldEvent.js"></script>            
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"></link>
        </div>
    )
}

export default ArticleDetOrgDisplay