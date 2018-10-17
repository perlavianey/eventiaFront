import React, {Component} from 'react'
import { message } from 'antd'
import {getOrders} from '../../services/orderService'
import {} from '../../services/authService'
import  MyProfileDisplay from './MyProfileDisplay'

message.config({top: 400, duration: 2, maxCount: 3,});

 class MyProfileContainer extends Component{

 state = {
    orders:[]
 }

 componentWillMount =()=>{
    const idUser=this.props.match.params.id 
    const localStorageUser=JSON.parse(localStorage.getItem('user'))
    if(!localStorageUser) return this.props.history.push(`/login`)
    if(localStorageUser._id!==idUser){
        this.props.history.push(`/inicio`)
    }
    else{
        getOrders(localStorageUser._id)
        .then(orders => {
            console.log(orders.data)
            return this.setState({orders:orders.data})
        })
        .catch(e=>{console.log(e)})
    }
 }

    render(){
        return(
            <MyProfileDisplay
                orders={this.state.orders}
            />
        )
    }
}

export default MyProfileContainer