import React, {Component} from 'react'
import { message } from 'antd'
import {createEvent} from '../../services/eventService'
import EventNewDisplay from './EventNewDisplay';

message.config({top: 400, duration: 2, maxCount: 3,});

 class EventNewContainer extends Component{

 state = {
    eventData:{},
    loading:false
 }
 
    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user){return this.props.history.push('/login/')}
        else if(user.role!=='Organizador'){
            message.info("Debes ser Organizador de eventos para poder crear eventos.")
            return this.props.history.push('/inicio')
        }
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

    handleDate=(value, valuestr)=>{
        const field = 'date'
        const {eventData} = this.state
        eventData[field] = valuestr
        this.setState({eventData})
    }

    handleHour=(value,hrstr)=>{
        const field = 'schedule'
        const {eventData} = this.state
        eventData[field] = hrstr
        this.setState({eventData})
    }

    onChangeFile = (e) => {
        const field = "imageURL"
        const {eventData} = this.state
        eventData[field] = e.target.files[0]
        this.setState({eventData})
    }

    onPlaceSelect = (value)=>{
        const p=value.name + ', '+value.formatted_address
        const field = "place"
        const {eventData} = this.state
        eventData[field] = p
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
        createEvent(eventData) //Envía los datos del formulario con axios
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
            <EventNewDisplay 
                onChange={this.onChange}
                onSubmit={this.newEvent}
                loading={this.loading}
                handleSelect={this.handleSelect}
                onChangeFile={this.onChangeFile}
                handleDate={this.handleDate}
                handleHour={this.handleHour}
                onBack={this.goBack}
                onPlaceSelect={this.onPlaceSelect}
            />
        )
    }
}

export default EventNewContainer
