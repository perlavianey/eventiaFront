import React, {Component} from 'react'
import { message } from 'antd'
import {createArticle} from '../../services/articleService'
import {getEvent} from '../../services/eventService'
import ArticleNewDisplay from './ActicleNewDisplay';

message.config({top: 400, duration: 2, maxCount: 3,});

 class ArticleNewContainer extends Component{

 state = {
    eventData:{},
    articleData:{},
    loading:false
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
                    return this.setState({eventData:event.data})
                }
                else{
                    this.props.history.push('/inicio/')
                    return message.info("Debes ser el organizador del evento para poder añadirle artículos.")
                }
            })
            .catch(e=>{console.log(e)})
        }  
    }


    onChangeCheckList = (checkedList) => {
        const {articleData} = this.state
        articleData['size']=[]
        for(let i=0; i<checkedList.length;i++){
            articleData['size'].push(checkedList[i])
        }
        this.setState({articleData})
        console.log(this.state.articleData)
      }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {articleData} = this.state
        articleData[field] = value
        this.setState({articleData})
    }

    onChangeFile = (e) => {
        const field = "imageURL"
        const {articleData} = this.state
        articleData[field] = e.target.files[0]
        this.setState({articleData})
    }

    onChangeColor = (e) => {
        const field = "color"
        console.log(e.hex)
        const value = e.hex
        const {articleData} = this.state
        articleData[field] = value
        this.setState({articleData})
    }

    goBack = () =>{
        return this.props.history.goBack()
    }

    setEventRef = () =>{
        const event = this.state.eventData._id
        const {articleData} = this.state
        articleData['event'] = event
        this.setState({articleData})
    }
    
    setVendorRef = () =>{
        const creator = JSON.parse(localStorage.getItem('user'))
        const {articleData} = this.state
        articleData['vendor'] = creator._id
        this.setState({articleData})
    }

    newArticle = (e) =>{
        this.setEventRef()
        this.setVendorRef()
        this.setState({loading:true})
        e.preventDefault()
        const {articleData} = this.state
        createArticle(articleData) //Envía los datos del formulario con axios
        .then(r=>{
            this.props.history.push(`/event/org/`+ r.data.event)
            return message.success("Artículo creado exitosamente")
        })
        .catch(e=>{
            this.setState({loading:false})
            return message.error("Error al crear el artículo, favor de intentarlo más tarde.")
        })
    }

    render(){
        return(
            <ArticleNewDisplay 
                onChangeCheckList={this.onChangeCheckList}
                onCheckAllChange={this.onCheckAllChange}
                onChangeColor={this.onChangeColor}
                event={this.state.eventData}
                onChange={this.onChange}
                onSubmit={this.newArticle}
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

export default ArticleNewContainer
