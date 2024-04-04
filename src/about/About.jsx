import './About.css'
import arrow from '../about/arrow.svg'
import { Link } from 'react-router-dom'


function About() {
  return (
    <>
    <div className='about'>
      <h1>Assalomu aleykum</h1>
      <p>Restaurant, establishment where refreshments or meals may be procured by the public. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major contributions to the restaurant’s development.

        A look at France's historic restaurant culture and what sets its cuisine apart from the rest of the world
        A look at France's historic restaurant culture and what sets its cuisine apart from the rest of the world
        Learn more about restaurants in France.See all videos for this article
        The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in Paris in 1765. The sign above his door advertised restoratives, or restaurants, referring to the soups and broths available within. The institution took its name from that sign, and restaurant now denotes a public eating place in English, French, Dutch, Danish, Norwegian, Romanian, and many other languages, with some variations. For example, in Spanish and Portuguese the word becomes restaurante, in Italian it is ristorante, in Swedish restaurang, in Russian restoran, and in Polish restauracia.</p>
        <Link className='btnLink' to={"/"}><button className='btn'><img src={arrow}  width={20}/><span>BACK HOME</span></button></Link>

    </div>
    </>
  )
}

export default About
