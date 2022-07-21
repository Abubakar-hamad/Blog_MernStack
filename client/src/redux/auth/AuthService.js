import axios from "axios";

const API = '/auth/'


const createAccount = async(FormData)=>{
    const res = await axios.post(API + "register" , FormData)
    localStorage.setItem('user' , JSON.stringify(res.data))
    return res.data
}


const getAccount = async(FormData)=>{
    const res =await axios.post(API +'login', FormData)
    localStorage.setItem('user' , JSON.stringify(res.data))
    return res.data
}


const AuthService = {
    createAccount ,
    getAccount
}



export default AuthService