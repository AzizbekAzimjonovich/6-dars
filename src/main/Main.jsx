
import './Main.css';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function Main() {
  const [url, setUrl] = useState('http://localhost:3000/foods');
  const { data: trip } = useFetch(url);

  if (!trip) {
    return null;
  }

  return (
    <div className='container2'>
      <div className="main">
        {trip.map((trip) => (
          <div className="card" key={trip.id}>
            <img src={trip.img} alt="" width={250} height={150} />
            <p className='name'>Name : {trip.name}</p>
            <p className='time'>Fulltime : {trip.cookingTime}</p>
            <p className='aboutFood'>
              <Link
                className='aboutFood'
                to={{
                  pathname: "/learnMore",
                }}
              >
                Learn more...
              </Link>

            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main;
