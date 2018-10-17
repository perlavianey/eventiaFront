import React, {Component} from 'react'
import { message } from 'antd'
import {getOrders} from '../../services/orderService'
import {} from '../../services/authService'
import  MyProfileDisplay from './MyProfileDisplay'

message.config({top: 400, duration: 2, maxCount: 3,});

 class myProfileContainer extends Component{

 state = {
    orders:[]
 }

 componentWillMount =()=>{
    const idUser=this.props.match.params.id 
    getOrders(idUser)
    .then(orders => {
        console.log(orders)
        this.setState({orders:orders.data})
    })
    .catch(e=>{console.log(e)})
 }

    render(){
        return(
            <MyProfileDisplay
                orders={this.state.orders}
            />
        )
    }
}

export default myProfileContainer