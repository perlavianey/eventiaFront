import axios from 'axios'

const url = 'http://localhost:3000/'

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

export const getAllEvents = () => {
    return axios.get(url + "getAllEvents" )
        .then(event=>{
            return event
        })
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

export const getEvent = (eventID) => {
    console.log(url + `getEvent/`+ eventID)
    return axios.get(url + `getEvent/`+ eventID)
        .then(event=>{return event})
        .catch(error=>{
            return error
        })
}