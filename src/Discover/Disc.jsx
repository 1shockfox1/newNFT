import { useState } from 'react'
import style from '../Discover/Disc.module.scss'
import raketa from '../assets/RocketLaunch.png'

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
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    </div>
    
    <div>
    <img src="" alt="" />
    <h2></h2>
    <img src="" alt="" />
    <p></p>
    </div>

     </section>
    </>
  )
}

export default Disc