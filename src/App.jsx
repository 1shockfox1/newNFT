import { useState } from 'react'
import './App.scss'
import Header from './Header/Header'
import Disc from './Discover/Disc'
import { Route, Routes } from 'react-router-dom'
import Create from './Create/Create'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element = {<Disc/>} />

         <Route path='registr' element = {
          <Create/>
         } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
