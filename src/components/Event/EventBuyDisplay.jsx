import React from 'react'
import '../../index.css'
import { Steps, Button, message,Input } from 'antd';
import 'moment/locale/es';
const Step = Steps.Step;

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

const eventBuyDisplay = ({event,current,next,prev,onChange,onSubmit,loading,onBack, show})=>{ 
    
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
                    
                            Número de boletos: <br/>
                            <Button onClick={ 
                                function(){
                                    document.getElementById("noBoletos").value>1?document.getElementById("noBoletos").value--
                                    :document.getElementById("noBoletos").value=1
                                    let cto = +event.priceTicket
                                    let pUnit= +document.getElementById("noBoletos").value
                                    document.getElementById("cto").innerHTML=`$ `+ pUnit*cto + ` MXN `
                                } 
                            }>-</Button>  
                            <Input name="noBoletos"
                                id="noBoletos"
                                type="number"
                                min="1" 
                                max="10"
                                value="1"
                                style={{width:'20%'}}
                                required={true}
                                />
                            <Button onClick={ 
                                function(){
                                    document.getElementById("noBoletos").value<10?document.getElementById("noBoletos").value++
                                    :document.getElementById("noBoletos").value=10
                                    let cto = +event.priceTicket
                                    let pUnit= +document.getElementById("noBoletos").value
                                    document.getElementById("cto").innerHTML=`$ `+ pUnit*cto + ` MXN `
                                } 
                            }>+</Button>
                            <br/><br/>
                
                            Costo Total: <br/>
                            <p id="cto">$ {event.priceTicket} MXN</p><br/><br/>
                        </form>
                    

                    :current===1?
                        <h1>Agrega artículos</h1>

                    
                    :current===2?
                    
                        <h1>¿Cuál será tu forma de pago?</h1>
                    :
                    ""
                    }

                </div>

                <br></br>
                <div className="steps-action">
                {
                    current < steps.length - 1
                    && <Button type="primary" onClick={next}>Next</Button>
                }
                {
                    current === steps.length - 1
                    && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                }
                {
                    current > 0
                    && (
                    <Button style={{ marginLeft: 8 }} onClick={prev}>
                    Previous
                    </Button>
                    )
                }
        </div>
      </div>
            </section>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"></link>
        </div>
    )
}

export default eventBuyDisplay