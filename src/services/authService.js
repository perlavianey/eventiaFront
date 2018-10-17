import axios from 'axios'

const url = 'http://localhost:3000/'

export const signUp = (newUserData) => {
    return axios.post(url + "signup", newUserData)
        .then(user=>{
            return user
        })
        .catch(e=>{
            return e
        })
}

export const login = (loginData) => {
    return axios.post(url + "login", loginData)
        .then(user=>{
            return user
        })
        .catch(e=>{
            return e
        })
}

export const getUser = (userID) => {
    return axios.get(url + `getUserData/`+ userID)
    .then(user=>{return user})
    .catch(error=>{
        return error
    })
}
