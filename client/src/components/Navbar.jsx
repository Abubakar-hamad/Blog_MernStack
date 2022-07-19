
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='headers '>
        <div className="container">
        <div className="header">
            <div className="logo">
                <h4>Booking.com</h4>
            </div>
            <div className="auth">
                <span className='currency'>€£$$</span>
                <span className='lang'>EN</span>
                <button className='list'>list your property</button>
                <button className='log'>register</button>
                <button className='log'>sign in</button>
            </div>
        </div>
        <div className="navbar">
            <ul>
                <Link style={{color:'white' , marginRight:"3rem" , textDecoration:"none" }} to="/">home</Link>
                <Link style={{color:'white' , marginRight:"3rem" , textDecoration:"none" }} to="/">Hotels</Link>
                <Link style={{color:'white' , marginRight:"3rem" , textDecoration:"none" }} to="/">contact us</Link>
            </ul>
        </div>
        </div>
    </div>
  )
}
 
export default Navbar