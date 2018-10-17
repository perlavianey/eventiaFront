import React, {Component} from 'react'
import { message } from 'antd'
import {getUser} from '../../services/authService'
import {} from '../../services/authService'
import OrganizerProfileDisplay from './OrganizerProfileDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

 class OrganizerProfileContainer extends Component{

 state = {
    userData:{}
 }

 componentWillMount =()=>{
    const idUser=this.props.match.params.id 
    const localStorageUser=JSON.parse(localStorage.getItem('user'))
    if(localStorageUser._id!==idUser){
        this.props.history.push(`/inicio`)
    }
    else{
        getUser(localStorageUser._id)
        .then(events => {
            return this.setState({events:events.data})
        })
        .catch(e=>{console.log(e)})
    }
 }

 

 redirectNewEvent =()=>{
    this.props.history.push('/newEvent')
 }
    render(){
        return(
            <OrganizerProfileDisplay 
                redirectNewEvent={this.redirectNewEvent}
                events={this.state.events}
            />
        )
    }
}

export default OrganizerProfileContainer