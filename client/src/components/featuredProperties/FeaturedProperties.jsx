import useFetch from "../../hooks/useFetch";
import Spinner from "../Spinner/Spinner";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {data  , error , loading} = useFetch('/hotel?feature=true')
  console.log(data);
  return (
    <div className="fp">
        {loading ? <Spinner /> :
          <>
            {data.map((item , i)=>{
                return(
                  <div className="fpItem" key={i}>
                <img
                  src={item.photos[0]}
                  alt="img"
                  className="fpImg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                
              </div>
                )
            })}
          </>
        }
    </div>
  );
};

export default FeaturedProperties;
