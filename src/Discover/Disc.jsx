import { useState } from 'react'
import style from '../Discover/Disc.module.scss'
import raketa from '../assets/RocketLaunch.png'
import luna from '../assets/Highlighted.png'
function Disc() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section className= {style.diss}>
    <div className= {style.left_diss}>
    <h1>Discover digital art & Collect NFTs</h1>
    <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
    <button> 
        <img src={raketa} alt="" />
        Get Started
    </button>
    <ul className= {style.total}>
        <li>
          <h1> 240k+ </h1>
          <p> Total Sale </p>
        </li>
        <li>
          <h1> 240k+ </h1>
          <p> Total Sale </p>
        </li>
        <li>
          <h1> 240k+ </h1>
          <p> Total Sale </p>
        </li>
    </ul>
    </div>
    
    <div>
    <img src= {luna} alt="" />
    </div>

     </section>
    </>
  )
}

export default Disc