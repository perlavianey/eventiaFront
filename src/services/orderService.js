import axios from 'axios'

const url = 'http://localhost:3000/'

//Crear una orden
export const createOrder = (newOrderData) => {
    const token = localStorage.getItem('token')
    
    return axios.post(url + "newOrder", newOrderData,{
        headers:{
            'Authorization':token
        }
    })
    .then(order=>{
        return order
    })
    .catch(error=>{
        return error
    })
}

//Traer las órdenes del usuario
export const getOrders = (idUser) => {
    const token = localStorage.getItem('token')
    return axios.get(url + `getOrders/${idUser}`,{
        headers:{
            'Authorization':token
        }
    })
    .then(orders=>{
        return orders
    })
    .catch(error=>{
        return error
    })
}