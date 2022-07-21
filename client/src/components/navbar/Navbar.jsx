import "./navbar.css"
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux"





const Navbar = () => {

  const {user} = useSelector((state) => state.auth)
const navigate = useNavigate()
const handlelogout = ()=>{
  localStorage.removeItem('user')
  navigate('/')
}

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link style={{color:'white' , textDecoration:"none"}} to='/'>
        <span className="logo">lamabooking</span>
        </Link>
        <div className="navItems">
          {user ? <>
          <span>{user.name}</span>
          <button onClick={handlelogout} className="navButton">logout</button>
          </> : 
          <>
          <button onClick={()=> navigate('/register')} className="navButton">Register</button>
          <button onClick={()=> navigate('/login')} className="navButton">Login</button>
          </>
        }
        </div>
      </div>
    </div>
  )

  }

export default Navbar ;