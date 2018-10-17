import React, {Component} from 'react'
import { message } from 'antd'
import {getEvent} from '../../services/eventService'
import {getArticles} from '../../services/articleService'
import {} from '../../services/authService'
import EventDetDisplay from './EventDetDisplay'


message.config({top: 400, duration: 2, maxCount: 3,});

 class EventDetContainer extends Component{

    state = {
        event:{},
        loading:false,
        show:false,
        articles:[]
    }

    showFormCompra = () =>{
        this.setState({show:!this.state.show})
    }

    componentWillMount =()=>{
        getEvent(this.props.match.params.id)
        .then(event => {
            this.setState({event:event.data})
            getArticles(this.props.match.params.id)
            .then(articles => {
                this.setState({articles:articles.data})
            })
            .catch(e=>{console.log(e)})
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
                articles={this.state.articles}
            />
        )
    }
}

export default EventDetContainer