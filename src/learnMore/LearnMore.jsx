import './LearnMore.css'
import { Link } from 'react-router-dom'
import arrow from '../about/arrow.svg'



function LearnMore() {
    return (
        <>
        <div className='learnMore'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-xDLXhh2PKPTXzEvMPGM_pBNbWMvWDo41Q8z3DZBuw&s" alt="" />
            <div className='fullInfo'>
                <div className='info'>
                    <p>Name : Palov</p>
                    <p>Price : 270 000 UZS</p>
                    <p>Fulltime : 50 min</p>
                </div>
                <div className='plus'>
                    <p>Salat</p>
                    <p>Suzma</p>
                    <p>Non</p>
                </div>
                <div className='products'>
                    <p>guruch</p>
                    <p>guruch</p>
                    <p>guruch</p>
                    <p>guruch</p>
                    <p>guruch</p>
                    <p>guruch</p>
                    <p>guruch</p>
                    <p>guruch</p>
                </div>
            </div>

        </div>
        <Link className='btnLink' to={"/"}><button className='btn2'><img src={arrow}  width={20}/><span>BACK HOME</span></button></Link>

        </>
    )
}

export default LearnMore
