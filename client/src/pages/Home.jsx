import Navbar from "../components/Navbar"
import Featured from "../components/Featured"
import Hotels from "../components/Hotels"
import FeaturedType from "../components/FeaturedType"
function Home() {
  return (
    <div>
        
        <Featured/>
        <div className="featured">
        <Hotels/>
        </div>
        <FeaturedType />
    </div>
  )
}

export default Home