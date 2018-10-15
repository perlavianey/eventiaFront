import React, {Component} from 'react'
import { message,Modal } from 'antd'
import {getEvent,updateEvent,deleteEvent} from '../../services/eventService'
import {getArticles} from '../../services/articleService'
import {} from '../../services/authService'
import EventDetOrgDisplay from './EventDetOrgDisplay'

message.config({top: 10, duration: 2, maxCount: 3,});
const confirm = Modal.confirm;
 class EventDetOrgContainer extends Component{

    state = {
        eventData:{},
        loading:false,
        show:false,
        articles:[]
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user){return this.props.history.push('/login/')}
        else if(user.role!=='Organizador'){
            message.info("Debes ser Organizador de eventos para poder acceder a un panel de administrador.")
            return this.props.history.push('/inicio/')
        }
        else{
            getEvent(this.props.match.params.id)
            .then(event => {
                if(event.data.manager===user._id){
                    this.setState({eventData:event.data})
                    getArticles(this.state.eventData._id)
                    .then(articles => {
                        this.setState({articles:articles.data})
                    })
                    .catch(e=>{console.log(e)})
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
        this.setState({loading:true})
         e.preventDefault()
        const {eventData} = this.state
        updateEvent(this.state.eventData._id,eventData) 
        .then(r=>{
            this.props.history.push(`/event/org/`+ this.state.eventData._id)
            return message.success("Evento actualizado exitosamente")
        })
        .catch(e=>{
            this.setState({loading:false})
            return message.error("Error al actualizar evento, favor de intentarlo más tarde.")
        })
    }

    showConfirm = (e) => {
        const id=this.state.eventData._id
        const history=this.props.history
        confirm({ title: '¿Realmente quieres eliminar este evento?',
          content: 'Se eliminarán también los artículos relacionados.',
          onOk() {
                const user = JSON.parse(localStorage.getItem('user'))
                deleteEvent(id)
                .then(r=>{
                    history.push(`/organizerProfile/`+ user._id)
                    return message.success("Evento eliminado.")
                })
                .catch(e=>{
                    return message.error("Error al eliminar evento, favor de intentarlo más tarde.")
                })
          },
          onCancel() {},
        });
      }

    render(){
        return(
            <EventDetOrgDisplay 
                showConfirm={this.showConfirm}
                event={this.state.eventData}
                articles={this.state.articles}
                onChange={this.onChange}
                onSubmit={this.saveChangesEvent}
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