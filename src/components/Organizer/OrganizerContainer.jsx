import React, {Component} from 'react'
import { message } from 'antd'
import {} from '../../services/authService'
import OrganizerDisplay from './OrganizerDisplay';
import {getAllEvents} from '../../services/eventService'

message.config({top: 400, duration: 2, maxCount: 3,});

 class OrganizerContainer extends Component{

 state = {
    eventData:{},
    loading:false
 }

 componentWillMount =()=>{
    getAllEvents()
    .then(r=>{console.log(r)})
    .catch(e=>{console.log(e)})
 }

 redirectNewEvent =()=>{
    this.props.history.push('/newEvent')
 }
    render(){
        return(
            <OrganizerDisplay 
                redirectNewEvent={this.redirectNewEvent}
            />
        )
    }
}

export default OrganizerContainer
