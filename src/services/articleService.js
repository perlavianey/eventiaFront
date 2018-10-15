import axios from 'axios'

const url = 'http://localhost:3000/'

//Crear un artículo
export const createArticle = (newArticleData) => {
    const token = localStorage.getItem('token')
    const form = new FormData()
    for(let key in newArticleData){
        form.append(key, newArticleData[key])
    }
    return axios.post(url + "newArticle", form,{
        headers:{
            'Authorization':token
        }
    })
        .then(article=>{
            return article
        })
        .catch(error=>{
            return error
        })
}

//Trae un artículo por ID
export const getArticle = (articleID) => {
    console.log(url + `getArticle/`+ articleID)
    return axios.get(url + `getArticle/`+ articleID)
    .then(article=>{return article})
    .catch(error=>{
        return error
    })
}

//Trae artículos del evento mostrado
export const getArticles = (eventID) => {
    const token = localStorage.getItem('token')
    return axios.get(url + "getArticles/" + eventID,{
        headers:{
            'Authorization':token
        }
    })
    .then(articles=>{
        return articles
    })
    .catch(error=>{
        return error
    })
}

//Actualiza un artículo por ID
export const updateArticle = (articleID,updatedArticleData) => {
    const form = new FormData()
    for(let key in updatedArticleData){
        form.append(key, updatedArticleData[key])
    }
    
    return axios.post(url + `updateArticle/`+articleID, form,{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
    .then(article=>{
        return article
    })
    .catch(error=>{
        return error
    })
}

//Elimina un artículo por ID
export const deleteArticle =(articleID)=>{
    return axios.get(url + `deleteArticle/`+articleID,{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
    .then(article=>{
        return article
    })
    .catch(error=>{
        return error
    })
}