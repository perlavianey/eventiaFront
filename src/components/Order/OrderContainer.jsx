import React, {Component} from 'react'
import { message } from 'antd'
import {getOrder} from '../../services/orderService'
import {} from '../../services/authService'
import  OrderDisplay from './OrderDisplay'

message.config({top: 400, duration: 2, maxCount: 3,});

 class OrderContainer extends Component{

 state = {
    orderData:{}
 }

 componentWillMount =()=>{
    const idOrder=this.props.match.params.id 
    getOrder(idOrder)
    .then(order => {
        console.log(order)
        this.setState({orderData:order.data})
    })
    .catch(e=>{console.log(e)})
 }

    render(){
        const {orderData} = this.state
        
        return(
            <OrderDisplay
                {...orderData}
            />
        )
    }
}

export default OrderContainer