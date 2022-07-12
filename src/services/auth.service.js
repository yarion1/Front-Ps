import axios from 'axios';

const baseURL = "http://localhost:5000";

// register request
const register = (newUser) => {
    return axios.post(`${baseURL}/register`, newUser)
        .then(response => {
            if (response){
                return Promise.resolve(response)
            }
        })
        .catch(error => {
            return Promise.reject(error.response)
        })
}
const registerequip = (newEquip) => {
    return axios.post(`${baseURL}/products`, newEquip)
    .then(response => {
        if (response){
            return Promise.resolve(response)
        }
    })
    .catch(error => {
        return Promise.reject(error.response)
    })
}
const registerRent = (newRent) =>{
    return axios.post(`${baseURL}/rent_product`, newRent)
    .then(response => {
        if (response){
            return Promise.resolve(response)
        }
    })
    .catch(error => {
        return Promise.reject(error.response)
    })
}
// login request
const login = (userCredential) => {
    return axios.post(`${baseURL}/login`, userCredential)
        .then(response => {
            if (response.data.token){
                localStorage.setItem("x-access-token", response.data.token)
            }
            return Promise.resolve(response.data)
        })
        .catch(error => {
            return Promise.reject(error.response.data)
        })
}


const logout = () => {
    localStorage.removeItem('x-access-token')
    return { msg : "Logout Successfully...!"}
}

export {
    register,
    registerequip,
    registerRent,
    login,
    logout
}
