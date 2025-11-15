import { useState } from 'react'
import user from '../assets/User.png'
import photo from '../assets/Storefront.png'
import style from '../Header/Header.module.scss'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className= {style.head}>

        <ul className= {style.ulika}>
            <img className = {style.photos} src={photo} alt="" />
            <h1>NFT Marketplace</h1>
        </ul>

        <ul className={style.ulika1}>
            <a href="#">Marketplace</a>
            <a href="#">Rankings</a>
            <a href="#">Connect a wallet</a>
            <button className={style.bulka}> 
                <img src= {user} alt="" />  
                Sing up
            </button>
        </ul>

      </div>
    </>
  )
}

export default Header