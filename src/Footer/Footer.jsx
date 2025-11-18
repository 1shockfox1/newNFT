import style from '../Footer/Footer.module.scss'
import photo from '../assets/Storefront.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <section className={style.Konech}  >
        <div className={style.levo}> 
            <Link to = {'/'}>
                <ul className= {style.Konech}>
                <img src={photo} alt="" />
                <h1>NFT Marketplace</h1>
                </ul>
            </Link>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>

        <div>2</div>
        <div>3</div>
     </section>
    </>
  )
}

export default Footer