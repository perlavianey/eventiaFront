import React, {Component} from 'react'
import { message } from 'antd'
import {getEvent} from '../../services/eventService'
import {getArticles} from '../../services/articleService'
import {} from '../../services/authService'
import EventBuyDisplay from './EventBuyDisplay'
import {createOrder} from '../../services/orderService'

message.config({top: 200, duration: 1, maxCount: 3,});

 class EventBuyContainer extends Component{

 state = {
    event:{},
    current:0,
    articles:[],
    order:{        
        articles:[]
    },
    totalBoletos:0,
    totalArticles:0
 }

 next = () => {
    let current = this.state.current
    if(current===0){
        let boletos=this.state.order.boletos
        if(!boletos || boletos.quantity<1) {
            return message.error("Debe seleccionar al menos un boleto para adquirir.")
        }
        else{
            current++;
            return this.setState({ current });
        }
    }
    else{
        current++;
        return this.setState({ current });
    }
  }

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  setUser =() =>{
    const {order} = this.state
    order['user']=JSON.parse(localStorage.getItem('user'))._id
    this.setState({order})
  }

  setEvent=()=>{
    const {order} = this.state
    order['event']=this.props.match.params.id
    this.setState({order})
  }

  handleSubmit=()=>{
    this.setUser()
    this.setEvent()
    const {order} = this.state
    createOrder(order)
        .then(order=>{
            const success = () => {
                message.loading('Procesando pago...', 2.5)
                  .then(() => message.success('Compra exitosa. Generando comprobante...', 2.5))
                  .then(() => {
                      return this.props.history.push(`/orderDetail/`+ order.data._id)
                  })
              };
              success()
        }).catch(e=>{
            console.log(e)
        })

  }

  handleBoletos=(e)=>{
    const {order, event} = this.state
    order['boletos'] = {quantity:e.target.value, price:event.priceTicket}
    this.setState({order})

    let totalBoletos=e.target.value*event.priceTicket
    this.setState({totalBoletos})
    localStorage.setItem('ordenBoletos',totalBoletos)
  }

  handleItems=(e,id,price)=>{
    const {order} = this.state
    let {articles} = order
    const obj = {quantity:e.target.value, product:id,price:price}
    articles = articles.filter(i=>i.product!==obj.product)
    articles.push(obj)
    order['articles'] = articles
    this.setState({order})

    let total = []
    order.articles.map((item, index) => {
        let qty = parseInt(item.quantity)
        let calc = qty * item.price
        return total.push(calc)
    })
    const add = (a, b) => {return a + b}
    let totalArticles = total.reduce(add, 0)
    this.setState({totalArticles})
    localStorage.setItem('ordenArticulos',totalArticles)
  }

 componentWillMount =()=>{
    localStorage.setItem('ordenBoletos',0)
    localStorage.setItem('ordenArticulos',0)
    getEvent(this.props.match.params.id)
    .then(event => {
        return this.setState({event:event.data,current:0})
    })
    .catch(e=>{console.log(e)})

    getArticles(this.props.match.params.id)
    .then(articles => {
        this.setState({articles:articles.data})
    })
    .catch(e=>{console.log(e)})
    this.setState.totalBoletos=0;
 }

    render(){
        const {show} = this.state
        return(
            <EventBuyDisplay 
                totalBoletos={this.state.totalBoletos}
                totalArticles={this.state.totalArticles}
                showFormCompra={this.showFormCompra}
                event={this.state.event}
                show={show}
                current={this.state.current}
                next={this.next}
                prev={this.prev}
                articles={this.state.articles}
                handleItems={this.handleItems}
                handleBoletos={this.handleBoletos}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default EventBuyContainer