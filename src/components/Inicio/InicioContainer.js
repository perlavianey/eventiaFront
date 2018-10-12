import React, {Component} from 'react'
import {getAllEvents} from '../../services/eventService'
import { message } from 'antd'
import InicioDisplay from './InicioDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

class Signup extends Component{

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
        return(
            <div>
              <InicioDisplay 
                events={events}
              />
            </div>
        )
    }
}

export default Signup