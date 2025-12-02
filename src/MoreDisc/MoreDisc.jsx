import React from 'react'
import styles from './More.module.scss'
import {artists, nfts} from '../massiv/data.js'
import Cad from "../Cad/Cad.jsx"
import {Link}   from "react-router-dom"
import eye from '../assets/Eye.png'

const DiscMore = () => {
  const cards = nfts.slice(0, 3).map((item) => { 
    const artist = artists.find(p => p.id === item.author) 
    return (
      <Cad 
        key={item.id}
        pic={item.pic} 
        title={item.title} 
        avatar={artist?.pic} 
        name={artist?.name} 
        price={item.price} 
        bid={item.bid}
        id={item.id}
        color='black'
      />
    )
  })
  return(
    <section className={styles.nft_more}>
      <div className={styles.top}>
        <div>
            <h2>Discover More NFTs</h2>
            <p>Explore new trending NFTs</p>
        </div>
        
        <button>
          <img src={eye} alt="" />
          <Link to="/marketplace">See All</Link>
        </button>
      </div>
      <div className={styles.bot}>{cards}</div>
    </section>
    
  )
}

export default DiscMore