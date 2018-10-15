import React, {Component} from 'react'
import { message,Modal } from 'antd'
import {getArticle,updateArticle,deleteArticle} from '../../services/articleService'
import {} from '../../services/authService'
import ArticleDetOrgDisplay from './ArticleDetOrgDisplay'

message.config({top: 10, duration: 2, maxCount: 3,});
const confirm = Modal.confirm;
 class ArticleDetOrgContainer extends Component{

    state = {
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
            getArticle(this.props.match.params.id)
            .then(article => {
                if(article.data.vendor===user._id){
                    this.setState({articleData:article.data})
                }
                else{
                    this.props.history.push('/inicio/')
                    return message.info("Debes ser el creador del artículo para poder editarlo.")
                }
            })
            .catch(e=>{console.log(e)})
        }  
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {articleData} = this.state
        articleData[field] = value
        this.setState({articleData})
    }

    handleSelect=(value)=>{
        const field = 'typeEvent'
        const {articleData} = this.state
        articleData[field] = value
        this.setState({articleData})
    }

    handleDate=(value)=>{
        const field = 'date'
        const {articleData} = this.state
        articleData[field] = value._d
        this.setState({articleData})
    }

    handleHour=(value)=>{
        const field = 'schedule'
        const {articleData} = this.state
        articleData[field] = value._d
        this.setState({articleData})
    }

    onChangeFile = (e) => {
        const field = "imageURL"
        const {articleData} = this.state
        articleData[field] = e.target.files[0]
        this.setState({articleData})
    }

    goBack = () =>{
        return this.props.history.goBack()
    }

    saveChangesArticle = (e) =>{
        const event=this.state.articleData.event
        this.setState({loading:true})
         e.preventDefault()
        const {articleData} = this.state
        updateArticle(this.state.articleData._id,articleData) 
        .then(r=>{
            this.props.history.push(`/event/org/`+ event)
            return message.success("Articulo actualizado exitosamente")
        })
        .catch(e=>{
            this.setState({loading:false})
            return message.error("Error al actualizar artículo, favor de intentarlo más tarde.")
        })
    }

    showConfirm = (e) => {
        const id=this.state.articleData._id
        const event=this.state.articleData.event
        const history=this.props.history
        confirm({ title: '¿Realmente quieres eliminar este artículo?',
          onOk() {
                
                deleteArticle(id)
                .then(r=>{
                    history.push(`/event/org/`+ event)
                    return message.success("Artículo eliminado.")
                })
                .catch(e=>{
                    return message.error("Error al eliminar artículo, favor de intentarlo más tarde.")
                })
          },
          onCancel() {},
        });
      }

    render(){
        return(
            <ArticleDetOrgDisplay 
                showConfirm={this.showConfirm}
                article={this.state.articleData}
                articles={this.state.articles}
                onChange={this.onChange}
                onSubmit={this.saveChangesArticle}
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

export default ArticleDetOrgContainer