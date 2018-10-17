import React from 'react'
import '../../index.css'
import { Steps, Button,Input,Card } from 'antd';
import 'moment/locale/es';
const Step = Steps.Step;

const { Meta } = Card;

const steps = [{
    title: 'Boletos',
    content: '',
  },{
    title: 'Artículos',
    content: '',
  }, {
    title: 'Pago',
    content: '',
  }, {
    title: '¡Hecho!',
    content: '',
  }];

const eventBuyDisplay = ({totalBoletos,totalArticles,event,current,next,prev,onChange,onSubmit,loading,onBack, articles,handleSubmit,handleBoletos, handleItems})=>{ 
    
    return(
        <div className="contentInicio">          
            <div className="white"></div>
            <div className="imgMainDetail">
                    <img src={event.imageURL} alt="event_image"></img>
                </div>
                
                <div className="eventTitle">
                    <h2>{event.name}</h2>
                </div>
            <section className="eventDetail">
            <div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">
                
                {current===0? 
                    <form onSubmit={onSubmit} className="newCompra" >
                        <h5><i>Costo del boleto: ${event.priceTicket} MXN</i></h5><hr/><br/>
                        <b>¿Cuántos boletos deseas?</b><span>   </span>
                        <Input name="noBoletos"
                            onChange={handleBoletos}
                            id="noBoletos"
                            type="number"
                            min="1" 
                            max="10"
                            defaultValue="0"
                            style={{width:'12%'}}
                            required={true}
                            />
                        <br/><br/><hr/><br/><br/> 
                        <p id="cto"><b>{`Total: $`+ parseFloat(totalBoletos) + ` MXN (IVA incluído)`}</b></p><br/><br/>
                    </form>
                :current===1?
                    <div>
                        {
                            articles.length>0?
                            <h2 style={{textAlign:'center'}}><b><ins>¿Deseas agregar alguno de estos artículos?</ins></b></h2>
                            :
                            <h2 style={{textAlign:'center'}}><b><ins>Resumen de compra</ins></b></h2>
                        }
                        
                        <div className="father">
                            {articles.map((b, key)=>{
                            return  <div key={key}><Card className="eventCard"
                                    hoverable
                                    title={b.name}
                                    bordered='true'
                                    cover={<img alt="articlePic" src={b.imageURL}/>}> 
                                    <Meta
                                        title={b.sold}
                                        description={`Precio: $`+ b.price +` MXN`}/>
                                    </Card> 
                            <Input name="pzas"
                                onChange={(e)=>{handleItems(e,b._id,b.price)}}
                                id="pzas"
                                type="number"
                                min="0" 
                                max="10"
                                defaultValue="0"
                                style={{width:'5vw'}}
                                required={true}
                                />
                            </div>
                        })} </div> <br></br>
                        <p id="cto">{`Boletos: $`+  localStorage.getItem('ordenBoletos')+` MXN`}</p>
                        <p id="cto">{`Artículos extra: $`+  localStorage.getItem('ordenArticulos')+` MXN`}</p><hr/>
                        <p id="cto"><b>{`Total (IVA Incluído): $`+  (parseFloat(localStorage.getItem('ordenBoletos'))+parseFloat(localStorage.getItem('ordenArticulos')))+` MXN`}</b></p><br/><br/><br/><br/>
                    </div>
                
                :current===2?
                    <div>
                        <h3><b>Introduzca los datos de su tarjeta:</b></h3> <hr/>
                        <form>
                            <p>Cantidad</p>
                                <Input type="text" id="card-holder" style={{width:"40%",textAlign:'center'}} disabled defaultValue={`$ `+(parseFloat(localStorage.getItem('ordenBoletos'))+parseFloat(localStorage.getItem('ordenArticulos')))+` MXN`}/><br/><br/>
                            <p>Número de Tarjeta</p> 
                                <Input type="text" id="card-number" placeholder="1234 5678 9101 1112" length="16" style={{width:"60%",textAlign:'center'}}/> <br/><br/>
                            <p>Propietario</p>
                                <Input type="text" id="card-holder" placeholder="Jaime Ruíz" style={{width:"60%",textAlign:'center'}}/><br/><br/>
                            <p>Fecha de expiración</p>
                            <div id="exp-container">
                                <Input id="card-month" type="text" placeholder="MM" length="2" style={{width:"10%"}}/>
                                <Input id="card-year" type="text" placeholder="YY" length="2" style={{width:"10%"}}/><br/><br/>
                            </div>
                            <p>CVC/CVV</p>
                            <div id="cvc-container">
                                <Input id="card-cvc" placeholder="XXX" type="text" min-length="3" max-length="4" style={{width:"13%"}}/> <br/><br/>
                            </div>
                        </form>   
                    </div>  
                :
                    <h3>¿Finalizar compra?</h3>
                }
                </div><br></br>
                <div className="steps-action">
                {
                    current < steps.length - 1
                    && <Button type="primary" className="btnEventia2" onClick={next}>Siguiente</Button>
                }
                {
                    current === steps.length - 1
                    && <Button type="primary" className="btnEventia2" onClick={handleSubmit}>Finalizar</Button>
                }
                {
                    current > 0
                    && (
                    <Button style={{ marginLeft: 8 }} className="btnEventia2" onClick={prev}>
                    Atrás
                    </Button>
                    )
                }
            </div>
        </div>
        </section>
        
    </div>
    )
}

export default eventBuyDisplay