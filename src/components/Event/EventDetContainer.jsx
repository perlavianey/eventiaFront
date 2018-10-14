import React, {Component} from 'react'
import { message } from 'antd'
import {getEvent} from '../../services/eventService'
import {} from '../../services/authService'
import EventDetDisplay from './EventDetDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

 class EventDetContainer extends Component{

    state = {
        event:{},
        loading:false,
        show:false
    }

    showFormCompra = () =>{
        this.setState({show:!this.state.show})
    }

    componentWillMount =()=>{
        getEvent(this.props.match.params.id)
        .then(event => {
            return this.setState({event:event.data})
        })
        .catch(e=>{console.log(e)})
    }

    render(){
        const {show} = this.state
        return(
            <EventDetDisplay 
                showFormCompra={this.showFormCompra}
                event={this.state.event}
                show={show}
            />
        )
    }
}

export default EventDetContainer