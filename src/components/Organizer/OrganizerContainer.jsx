import React, {Component} from 'react'
import { message } from 'antd'
import {getEvents} from '../../services/eventService'
import {} from '../../services/authService'
import OrganizerDisplay from './OrganizerDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

 class OrganizerContainer extends Component{

 state = {
    events:[],
    eventsPasados:[],
    eventsFuturos:[],
    loading:false,
    organizadorData:{}
 }

 componentWillMount =()=>{
    const localStorageUser=JSON.parse(localStorage.getItem('user'))
    if(!localStorageUser) {        
        return this.props.history.push(`/login`)
    }
    else{
        getEvents()
        .then(events => {
            return this.setState({events:events.data, organizadorData:localStorageUser})
        })
        .catch(e=>{console.log(e)})
    }
 }

 redirectNewEvent =()=>{
    this.props.history.push('/newEvent')
 }
    render(){
        
        return(
            <OrganizerDisplay 
                organizadorData={this.state.organizadorData}
                redirectNewEvent={this.redirectNewEvent}
                events={this.state.events}
            />
        )
    }
}

export default OrganizerContainer
