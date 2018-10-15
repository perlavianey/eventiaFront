import React, {Component} from 'react'
import {getAllEvents} from '../../services/eventService'
import { message } from 'antd'
import InicioDisplay from './InicioDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

class InicioContainer extends Component{

    state = {
        events:[],
        loading:false,
    }

    componentWillMount =()=>{
        getAllEvents()
        .then(events => {
            return this.setState({events:events.data})
        })
        .catch(e=>{console.log(e)})
     }

    render(){
        const {events} = this.state
        const user = JSON.parse(localStorage.getItem('user'))
        return(
            <div>
              <InicioDisplay 
                events={events}
                user={user}
              />
            </div>
        )
    }
}

export default InicioContainer