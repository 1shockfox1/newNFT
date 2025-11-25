import { useState } from 'react'
import user from '../assets/User.png'
import photo from '../assets/Storefront.png'
import style from '../Header/Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className= {style.head}>
    <Link to = {'/'}>
        <ul className= {style.ulika}>
            <img className = {style.photos} src={photo} alt="" />
            <h1>NFT Marketplace</h1>
        
       </ul>
 </Link>
        <ul className={style.ulika1}>
            <Link to={'Marketplace'}> 
            <a href="#">Marketplace</a>
            </Link>
            <a href="#">Rankings</a>
            <a href="#">Connect a wallet</a>
            <Link to = {'registr'}> 
        <button className= {style.bulka}>
          <img src={user} alt="" />
          Sign up
        </button>
        </Link>
        </ul>
        
      </div>
    </>
  )
}

export default Header