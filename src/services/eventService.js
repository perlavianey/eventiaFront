import axios from 'axios'

const url = 'http://localhost:3000/'

//Crea un evento
export const createEvent = (newEventData) => {
    const form = new FormData()
    for(let key in newEventData){
        form.append(key, newEventData[key])
    }
    return axios.post(url + "newEvent", form,{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
    .then(event=>{
        return event
    })
    .catch(error=>{
        return error
    })
}

//Trae un evento por ID
export const getEvent = (eventID) => {
    return axios.get(url + `getEvent/`+ eventID)
    .then(event=>{return event})
    .catch(error=>{
        return error
    })
}

//Trae eventos del usuario logueado
export const getEvents = () => {
    const token = localStorage.getItem('token')
    return axios.get(url + "getEvents",{
        headers:{
            'Authorization':token
        }
    })
    .then(event=>{
        return event
    })
    .catch(error=>{
        return error
    })
}

//Trae todos los eventos para la vista inicial
export const getAllEvents = () => {
    return axios.get(url + "getAllEvents" )
    .then(event=>{
        return event
    })
    .catch(error=>{
        return error
    })
}

//Actualiza un evento por ID
export const updateEvent = (eventID,updatedEventData) => {
    const form = new FormData()
    for(let key in updatedEventData){
        form.append(key, updatedEventData[key])
    }
    
    return axios.post(url + `updateEvent/`+eventID, form,{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
    .then(event=>{
        return event
    })
    .catch(error=>{
        return error
    })
}

//Elimina un evento por ID
export const deleteEvent =(eventID)=>{
    return axios.get(url + `deleteEvent/`+eventID,{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
    .then(event=>{
        return event
    })
    .catch(error=>{
        return error
    })
}