import React, {Component} from 'react'
import { message } from 'antd'
import {getEvent} from '../../services/eventService'
import {getArticles} from '../../services/articleService'
import {} from '../../services/authService'
import EventBuyDisplay from './EventBuyDisplay'

message.config({top: 400, duration: 2, maxCount: 3,});

 class EventBuyContainer extends Component{

 state = {
    event:{},
    current:0,
    articles:[]
 }

 next = () => {
    let current = this.state.current + 1;
    this.setState({ current });
  }

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }

 componentWillMount =()=>{
    getEvent(this.props.match.params.id)
    .then(event => {
        return this.setState({event:event.data,current:0})
    })
    .catch(e=>{console.log(e)})

    getArticles(this.props.match.params.id)
    .then(articles => {
        this.setState({articles:articles.data})
    })
    .catch(e=>{console.log(e)})
 }


    render(){
        const {show} = this.state
        return(
            <EventBuyDisplay 
                showFormCompra={this.showFormCompra}
                event={this.state.event}
                show={show}
                current={this.state.current}
                next={this.next}
                prev={this.prev}
                articles={this.state.articles}
            />
        )
    }
}

export default EventBuyContainer