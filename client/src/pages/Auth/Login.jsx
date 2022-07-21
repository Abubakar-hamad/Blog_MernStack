import React from 'react'
import { useState } from 'react'
import './Auth.css'
import Navbar from '../../components/navbar/Navbar'
import {useDispatch , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login , reset} from '../../redux/auth/AuthSlice'
import { useEffect } from 'react'
import {  toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'



function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading  , isError  , message  ,isSuccess , user} = useSelector((state) => state.auth)

    const [data , setData] = useState({

        email:'' ,
        password:'',

    })
    const {email , password } = data


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
        
       
            if( !email || !password ){
            return toast.error('some filds is empty')
            }
          

            dispatch(login(data))      

    }
 
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h2 className='my-5' >Login</h2>
            <form action="">
                <div className="formLogin">
         
               
                
                    <input onChange={handleChange} className='form-control' type="text" name='email' placeholder=' Email' />
                    <input onChange={handleChange} className='form-control' type="text" name='password' placeholder='Password'/>


                   
    
                
              
             
                <input onClick={handleClick} className='form-control btn btn-primary' type="submit"  />
                <span> Don't hava an acount  .. !  
                       <Link to='/register'>  Register Now</Link>  
                </span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login