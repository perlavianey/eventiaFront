import React, {Component} from 'react'
import { message } from 'antd'
import {getEvents} from '../../services/eventService'
import {} from '../../services/authService'
import OrganizerDisplay from './OrganizerDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

 class OrganizerContainer extends Component{

 state = {
    events:[],
    loading:false
 }

 componentWillMount =()=>{
    getEvents()
    .then(events => {
        return this.setState({events:events.data})
    })
    .catch(e=>{console.log(e)})
 }

 

 redirectNewEvent =()=>{
    this.props.history.push('/newEvent')
 }
    render(){
        return(
            <OrganizerDisplay 
                redirectNewEvent={this.redirectNewEvent}
                events={this.state.events}
            />
        )
    }
}

export default OrganizerContainer
