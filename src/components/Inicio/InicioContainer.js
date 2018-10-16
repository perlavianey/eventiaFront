import React, {Component} from 'react'
import {getAllEvents,getEventsFilter} from '../../services/eventService'
import { message } from 'antd'
import InicioDisplay from './InicioDisplay'


message.config({top: "400px", duration: 2, maxCount: 3,});

class InicioContainer extends Component{

    state = {
        events:[],
        loading:false
    }

    componentWillMount =()=>{
        getAllEvents()
        .then(events => {
            return this.setState({events:events.data})
        })
        .catch(e=>{console.log(e)})
     }

     handleSelect=(eventType)=>{
        if(eventType==="Todos"){
            getAllEvents()
            .then(events => {
                return this.setState({events:events.data})
            })
            .catch(e=>{console.log(e)})
        }
        else{
            getEventsFilter(eventType)
            .then(events => {
                this.setState({events:events.data})
                if (events.data<1){
                    return  message.info("Aún no existen eventos de esta categoría.")
                }
            })
            .catch(e=>{console.log(e)})
        }
    }
    

    render(){
        const {events} = this.state
        const user = JSON.parse(localStorage.getItem('user'))
        return(
            <div>
              <InicioDisplay 
                events={events}
                user={user}
                handleSelect={this.handleSelect}
              />
            </div>
        )
    }
}

export default InicioContainer