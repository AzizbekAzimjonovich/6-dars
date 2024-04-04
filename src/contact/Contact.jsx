import './Contact.css'
import { Link } from 'react-router-dom'
import arrow from '../about/arrow.svg'

function contact() {
  return (
   <>
    <div className='contactD'>
      <div className='contact'>
        <p>Number : </p>
        <a href="">+998 90 040 16 78</a>
      </div>
      <div className='contact'>
        <p>Instagram :</p>
        <a href="https://www.instagram.com/username/" >az1zbek.1105</a>
      </div>
      <div className='contact'>
        <p>Telegram :</p>
        <a href="https://t.me/azizbek1678">Azizbek</a>
      </div>
    </div>
    <Link className='btnLink' to={"/"}><button className='btn'><img src={arrow} width={20} /><span>BACK HOME</span></button></Link>

   </>
  )
}

export default contact
