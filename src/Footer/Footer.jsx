import style from '../Footer/Footer.module.scss'
import photo from '../assets/Storefront.png'
import { Link } from 'react-router-dom'
import photoo from  '../assets/User.png'
import discord from '../assets/Discord.png'
import insta from '../assets/Insta.png'
import twit from '../assets/Twit.png'
import you from '../assets/You.png'

function Footer() {
  return (
    <>
     <section className={style.Konech}  >
        <div className={style.levo}> 
            <Link to = {'/'}>
                <div className= {style.Konechi}>
                <img src={photo} alt="" />
                <h1>NFT Marketplace</h1>
                </div>
            </Link>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <div className={style.photo} >
                <img src= {discord} alt="" />
               <img src= {insta} alt="" />
                <img src= {twit} alt="" />
                <img src= {you} alt="" />
            </div>
        </div>

        <div className={style.center} >
          <h2>Explore</h2>
          <p>Marketplace</p>
          <p>Rankings</p>
          <p>Connect a wallet</p>
        </div>
        
        <div className={style.pravo}>
          <h1> Join Our Weekly Digest</h1>
          <p>Get explusive promotions & updates straight to your inbox.</p>
            <div className= {style.inbut}>
            <input type="text" placeholder='Usernam' />
            <button>  Sub</button>
            </div>
        </div>
        
     </section>
          <div className={style.holl}>
          <p>Ⓒ NFT Market. Use this template freely.</p>
        </div>
    </>
  )
}

export default Footer