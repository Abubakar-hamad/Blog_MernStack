import React from 'react'
import { useState } from 'react'
import './Auth.css'
import Navbar from '../../components/navbar/Navbar'
import {useDispatch , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {SignUp , reset} from '../../redux/auth/AuthSlice'
import { useEffect } from 'react'
import {  toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'



function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading  , isError  , message  ,isSuccess , user} = useSelector((state) => state.auth)

    const [isConfirm  , setISConfirm] = useState(true)
    const [data , setData] = useState({
        name:'' ,
        email:'' ,
        password:'',
        password2:''
    })
    const {name , email , password , password2} = data


    const handleChange = (e)=>{
        setData({...data , [e.target.name]:e.target.value})
    }
    
    useEffect(()=>{

        if(isError){
        
        toast.error(message)
        
      
        }
        if(isLoading){
            <Spinner />
        }

        if(isSuccess ){
            navigate('/')
        }
        dispatch(reset())

    }, [ isError , message  , isLoading , isSuccess , navigate ,dispatch])
    

   


    const handleClick =(e)=>{
        e.preventDefault()
        
       
            if(!name || !email || !password || !password2){
            return toast.error('some filds is empty')
            }
            if(password !== password2){
            return toast.error("password not match")
             }
            const formData  = {name  ,email , password}
            dispatch(SignUp(formData))      

    }
 
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h2 className='my-5' >Register</h2>
            <form action="">
                <div className="formLogin">
         
               
                
                    <input onChange={handleChange} className='form-control' type="text" name='name' placeholder=' username'/>     
                    <input onChange={handleChange} className='form-control' type="text" name='email' placeholder=' Email' />
                    <input onChange={handleChange} className='form-control' type="text" name='password' placeholder='Password'/>
                    <input onChange={handleChange} className='form-control' type="text" name='password2' placeholder='Password again'/>
                    <span style={{color:"red"}} >{!isConfirm && 'Password Not Match !'}</span>
                   
    
                
              
             
                <input onClick={handleClick} className='form-control btn btn-primary' type="submit"  />
                <span> Already hava an acoount  .. ?  
                       <Link to='/login'>  Login</Link>  
                </span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register