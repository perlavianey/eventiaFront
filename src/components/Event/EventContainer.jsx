import React, {Component} from 'react'
import { message } from 'antd'
import {createEvent} from '../../services/eventService'
import EventDisplay from './EventDisplay';

message.config({top: 400, duration: 2, maxCount: 3,});

 class EventContainer extends Component{

 state = {
    eventData:{},
    loading:false
 }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {eventData} = this.state
        eventData[field] = value
        this.setState({eventData})
    }

    handleSelect=(value)=>{
        const field = 'typeEvent'
        const {eventData} = this.state
        eventData[field] = value
        this.setState({eventData})
    }

    handleDate=(value)=>{
        const field = 'date'
        const {eventData} = this.state
        eventData[field] = value._d
        this.setState({eventData})
    }

    handleHour=(value)=>{
        const field = 'schedule'
        const {eventData} = this.state
        eventData[field] = value._d
        this.setState({eventData})
    }

    onChangeFile = (e) => {
        const field = "imageURL"
        const {eventData} = this.state
        eventData[field] = e.target.files[0].name
        this.setState({eventData})
    }

    goBack = () =>{
        return this.props.history.goBack()
    }

    setCreator = () =>{
        const field="manager"
        const creator = JSON.parse(localStorage.getItem('user'))
        const {eventData} = this.state
        eventData[field] = creator._id
        this.setState({eventData})
    }

    newEvent = (e) =>{
        this.setCreator()
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({loading:true})
        e.preventDefault()
        const {eventData} = this.state
        createEvent(eventData)
        .then(r=>{
            this.props.history.push(`/organizerProfile/`+ user._id)
            return message.success("Evento creado exitosamente")
        })
        .catch(e=>{
            this.setState({loading:false})
            return message.error("Error al crear evento, favor de intentarlo más tarde.")
        })
    }

    render(){
        return(
            <EventDisplay 
                onChange={this.onChange}
                onSubmit={this.newEvent}
                loading={this.loading}
                handleSelect={this.handleSelect}
                onChangeFile={this.onChangeFile}
                handleDate={this.handleDate}
                handleHour={this.handleHour}
                onBack={this.goBack}
            />
        )
    }
}

export default EventContainer
