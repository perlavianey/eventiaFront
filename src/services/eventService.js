import axios from 'axios'

const url = 'http://localhost:3000/'

export const createEvent = (newEventData) => {
    return axios.post(url + "newEvent", newEventData)
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