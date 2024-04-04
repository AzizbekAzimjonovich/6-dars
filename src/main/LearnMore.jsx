import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import './LearnMore.css'
import { Link } from 'react-router-dom'
import arrow from '../about/arrow.svg'



function LearnMore() {
  const { id } = useParams();
  const url = `http://localhost:3000/foods/${id}`;
  const { data: trip, isPending, error } = useFetch(url);

  return (
    <>
      <div className="learn">
        {isPending && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {trip && (
          <>
            <img src={trip.img} alt={trip.name} height="400" width={200} />
            <div className="info">
              <p className="name">Name : {trip.name}</p>
              <p className="price">Price : {trip.price}</p>
              <p className="cookingT">Cooking Time : {trip.cookingTime}</p>
              <div className="text">
                <p>Qo'shimcha :</p>
                {trip.plus.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className="text">
                <p className="product">Masalliqlar :</p>
                {trip.product.map((item, index) => (
                  <p className="btnS" key={index}>{item}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <Link className='btnLink' to={"/"}><button className='btn'><img src={arrow} width={20} /><span>BACK HOME</span></button></Link>


    </>
  );
}

export default LearnMore;
