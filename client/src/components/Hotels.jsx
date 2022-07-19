import React from 'react'
import imag from '../img/2.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import useFetch from '../Hooks/useFetch';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Spinner from './Spinner';



function Hotels() {
    const {data , error , loading} = useFetch('/hotel/')

    return (
    <div className='container'>
        <h3 className='my-5 text-primary '>Hotels in the country</h3>
        
         <Splide  options={{ perPage:3 , arrows:false , drag:'free' , gap:'5rem' , pagination:false}}>
        
             {
                loading ? <Spinner/> : 
                <>
                {
                data.map((item , i )=>{
                    return(
                        <SplideSlide key={i}>
                            <img className='w-100' src={imag} alt="img" />
                            <p className='text-center'>{item.name}</p>
                            <p className='text-center'>{item.address}</p>
                        </SplideSlide>
                    )
                })
             }
                </>
             }
           
        </Splide> 

        
    </div>
  )
}



export default Hotels