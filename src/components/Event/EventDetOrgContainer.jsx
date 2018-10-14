import React, {Component} from 'react'
import { message } from 'antd'
import {getEvent} from '../../services/eventService'
import {} from '../../services/authService'
import EventDetOrgDisplay from './EventDetOrgDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

 class EventDetOrgContainer extends Component{

    state = {
        eventData:{},
        loading:false,
        show:false
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user){return this.props.history.push('/login/')}
        else if(user.role!=='Organizador'){
            message.info("Debes ser Organizador de eventos para poder acceder a un panelde administrador.")
            return this.props.history.push('/inicio/')
        }
        else{
            getEvent(this.props.match.params.id)
            .then(event => {
                if(event.data.manager===user._id){
                    return this.setState({eventData:event.data})
                }
                else{
                    this.props.history.push('/inicio/')
                    return message.info("Debes ser el organizador del evento para poder editarlo.")
                }
            })
            .catch(e=>{console.log(e)})
        }  
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {eventData} = this.state
        eventData[field] = value
        this.setState({eventData})
        if (field==='location[address]'){
            this.determineAdress(e.target.value)
        }
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
        eventData[field] = e.target.files[0]
        this.setState({eventData})
    }

    goBack = () =>{
        return this.props.history.goBack()
    }

    saveChangesEvent = (e) =>{
        // this.setCreator()
        // const user = JSON.parse(localStorage.getItem('user'))
        // this.setState({loading:true})
        // e.preventDefault()
        // const {eventData} = this.state
        // createEvent(eventData) //Envía los datos del formulario con axios
        // .then(r=>{
        //     this.props.history.push(`/organizerProfile/`+ user._id)
        //     return message.success("Evento creado exitosamente")
        // })
        // .catch(e=>{
        //     this.setState({loading:false})
        //     return message.error("Error al crear evento, favor de intentarlo más tarde.")
        // })
    }

    render(){
        return(
            <EventDetOrgDisplay 
                showFormCompra={this.showFormCompra}
                event={this.state.eventData}
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

export default EventDetOrgContainer