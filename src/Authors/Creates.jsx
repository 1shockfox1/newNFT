import React from 'react'
import styles from "./Creates.module.scss"
import {artists} from "../massiv/data.js"
import CardArt from "../Card/Card.jsx"
import {Link}   from "react-router-dom"
import rocket from '../assets//RocketLaunch.png'

const Creators = () => {
  const art_cards = artists.map((itm)=> <CardArt key={itm.id} id={itm.id} pic={itm.pic} name={itm.name} price={itm.nft_sold}/>)
  return (
       <section className={styles.top_creators}>
          <div className={styles.top}>
                  <div>
                      <h2>Top creators</h2>
                      <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                  </div>
                  
                  <button>
                    <img src={rocket} alt="" />
                    <Link to="/Top">View Rankings</Link>
                  </button>
          </div>
          <ul>
            {art_cards}
          </ul>
      </section>
  )
 
}

export default Creators