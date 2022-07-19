import React from 'react'
import useFetch from '../Hooks/useFetch'
import wedd from '../img/honey.jpg'
import trav from '../img/traveling.jpg'
import relax from '../img/relax.jpg'
function FeaturedType() {
    const {loading   , data , error} = useFetch("/hotel/countByType")
    console.log(data);
  return (
    <div className='container'>
        <h3 className='my-5 text-primary '>Featured Type</h3>
    
           <div className="hotelsType">
           
           <div className="type">
            <img src={wedd} alt="" />
            <div className="title">
            <p>{data[0]?.type}</p>
            <p>{data[0]?.count}</p>
            </div>
           </div>

           <div className="type">
            <img src={relax} alt="" />
            <div className="title">
            <p>{data[1]?.type}</p>
            <p>{data[1]?.count}</p>
            </div>
           </div>

           <div className="type">
            <img src={trav} alt="" />
            <div className="title">
            <p>{data[2]?.type}</p>
            <p>{data[2]?.count}</p>
            </div>
           </div>
           </div>

    </div>
  )
}

export default FeaturedType