import React from 'react'
import '../../index.css'
import { Steps, Button, message,Input,Card } from 'antd';
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

const eventBuyDisplay = ({event,current,next,prev,onChange,onSubmit,loading,onBack, articles})=>{ 
    
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
                    
                            <b>¿Cuántos boletos deseas?</b><span>   </span>
                            <Button type="primary" onClick={ 
                                function(){
                                    document.getElementById("noBoletos").value>1?document.getElementById("noBoletos").value--
                                    :document.getElementById("noBoletos").value=1
                                    let cto = +event.priceTicket
                                    let pUnit= +document.getElementById("noBoletos").value
                                    document.getElementById("cto").innerHTML=`Costo Total: $ `+ pUnit*cto + ` MXN (IVA incluìdo)`
                                } 
                            }>-</Button>  
                            <Input name="noBoletos"
                                id="noBoletos"
                                type="number"
                                min="1" 
                                max="10"
                                defaultValue="1"
                                style={{width:'12%'}}
                                required={true}
                                />
                            <Button type="primary" onClick={ 
                                function(){
                                    document.getElementById("noBoletos").value<10?document.getElementById("noBoletos").value++
                                    :document.getElementById("noBoletos").value=10
                                    let cto = +event.priceTicket
                                    let pUnit= +document.getElementById("noBoletos").value
                                    document.getElementById("cto").innerHTML=`Costo Total: $ `+ pUnit*cto + ` MXN (IVA incluìdo)`
                                } 
                            }>+</Button>
                            <br/><br/> 
                            <p id="cto">{`Costo Total: $`+ event.priceTicket + ` MXN (IVA incluìdo)`}</p><br/><br/>
                        </form>
                    

                    :current===1?
                        <div>
                            <h2 style={{textAlign:'center'}}><b><ins>¿Deseas agregar alguno de estos artículos?</ins></b></h2>
                            <div className="father">
                                {articles.map((b, key)=>{

                                return  <div><Card className="eventCard"
                                        hoverable
                                        title={b.name}
                                        bordered='true'
                                        cover={<img alt="articlePic" src={b.imageURL}/>}> 
                                            <Meta
                                                title={b.sold}
                                                description={`Precio: $`+ b.price +` MXN`}
                                            />
                                    </Card> 
                                    <Button type="primary" onClick={ 
                                    function(){
                                    document.getElementById("pzas").value>0?document.getElementById("pzas").value--
                                    :document.getElementById("pzas").value=0
                                    let cto = +b.price
                                    let pUnit= +document.getElementById("pzas").value
                                    document.getElementById("cto").innerHTML=`Costo Total: $ `+ pUnit*cto + ` MXN (IVA incluìdo)`
                                } 
                            }>-</Button>  
                            <Input name="pzas"
                                id="pzas"
                                type="number"
                                min="0" 
                                max="10"
                                defaultValue="0"
                                style={{width:'5vw'}}
                                required={true}
                                />
                            <Button type="primary" onClick={ 
                                function(){
                                    document.getElementById("pzas").value<10?document.getElementById("pzas").value++
                                    :document.getElementById("pzas").value=10
                                    let cto = +b.price
                                    let pUnit= +document.getElementById("pzas").value
                                    document.getElementById("cto").innerHTML=`Costo Total: $ `+ pUnit*cto + ` MXN (IVA incluìdo)`
                                } 
                            }>+</Button>
                            </div>
                            })}        
                            </div> <br></br>
                            <p id="cto">{`Costo Total: $ 0 MXN (IVA incluìdo)`}</p><br/><br/>
                        </div>
                    
                    :current===2?
                            <div>
                                <h3><b>Introduzca los datos de su tarjeta:</b></h3>
                                Número de Tarjeta: <Input type="text" id="card-number" placeholder="1234 5678 9101 1112" length="16"/>
                                <div id="cardholder-container">
                                Propietario: <Input type="text" id="card-holder" placeholder="e.g. John Doe" />
                                </div>
                                
                                <div id="exp-container">
                                    Fecha de expiración<Input id="card-month" type="text" placeholder="MM" length="2"/>
                                    <Input id="card-year" type="text" placeholder="YY" length="2"/>
                                </div>
                                <div id="cvc-container">
                                <label for="card-cvc"> CVC/CVV</label>
                                <Input id="card-cvc" placeholder="XXX-X" type="text" min-length="3" max-length="4"/>
                                <p>Últimos 3 o 4 dígitos</p>
                                </div>

                            </div>
                        
                    :
                    <h1>Compra finalizada. Generando comprobante.....</h1>
                    }

                </div>

                <br></br>
                <div className="steps-action">
                {
                    current < steps.length - 1
                    && <Button type="primary" onClick={next}>Siguiente</Button>
                }
                {
                    current === steps.length - 1
                    && <Button type="primary" onClick={() => message.success('Processing complete!')}>Compra finalizada</Button>
                }
                {
                    current > 0
                    && (
                    <Button style={{ marginLeft: 8 }} onClick={prev}>
                    Atrás
                    </Button>
                    )
                }
            </div>
        </div>
        </section>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"></link>
    </div>
    )
}

export default eventBuyDisplay