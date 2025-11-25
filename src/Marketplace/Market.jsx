import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import lupa from '../assets/MagnifyingGlass.png'
import style from '../Marketplace/Market.module.scss'
function Market() {
  const [activePara, setActive] = useState(null); 

  return (
    <>
    <section className = {style.market}>
        <h1>Browse Marketplace </h1>
        <p> Browse through more than 50k NFTs on the NFT Marketplace.</p>
        <div>
            <input type="text" placeholder='Search your favourite NFTs'/>
            <img src={lupa} alt="" />
        </div>
    </section>
    <div className= {style.viborka}>
        <p>NFTs</p>
        <p>Collections</p>
    </div>
    </>
  )
}

export default Market