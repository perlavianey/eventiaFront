import React, {Component} from 'react'
import { message } from 'antd'
import {getEvent} from '../../services/eventService'
import {} from '../../services/authService'
import EventDetDisplay from './OrganizerDetDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

 class EventDetContainer extends Component{

 state = {
    event:{},
    loading:false
 }

 componentWillMount =()=>{
    getEvent(/*pasarID_evento*/)
    .then(event => {
        return this.setState({event:event.data})
    })
    .catch(e=>{console.log(e)})
 }

 

//  redirectNewEvent =()=>{
//     this.props.history.push('/newEvent')
//  }
    render(){
        return(
            <EventDetDisplay 
                // redirectNewEvent={this.redirectNewEvent}
                event={this.state.event}
            />
        )
    }
}

export default EventDetContainer