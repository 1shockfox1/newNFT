
import { useState } from 'react'
import kosmos from '../assets/Place.png'
import style from '../Create/Create.module.scss'
import user from '../assets/User.png'
import simple from '../assets/Simple.png'
import lock from '../assets/Lock.png'
function Create() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className={style.creat}>
        <div className={style.left_creat} >
            <img src= {kosmos} alt="" />
        </div>
        <div className={style.right_creat}>
            <h1>Create account</h1>
            <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
           <div className= {style.inp}>
            <li>
                <img src={user} alt="" />
            <input type="text" placeholder='Username' /> 
            </li>
            <li>
                <img src={simple} alt="" />
            <input type="text" placeholder='Email Address' /> 
            </li>
            <li>
                <img src={lock} alt="" />
            <input type="text" placeholder='Password' /> 
            </li>
            <li>
                <img src={lock} alt="" />
            <input type="text" placeholder='Confirm Password' /> 
            </li>
            <button> Create account </button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Create