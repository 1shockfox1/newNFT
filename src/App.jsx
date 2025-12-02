import { useState } from 'react'
import './App.scss'
import Header from './Header/Header'
import Disc from './Discover/Disc'
import { Route, Routes } from 'react-router-dom'
import Create from './Create/Create'
import Footer from './Footer/Footer'
import Market from './Marketplace/Market'
import Collection from './Collection/Collection'
import Creatos from './Authors/Creates'
import Browse from './Browse/Browse'
import DiscMore from './MoreDisc/MoreDisc'
import Muhomor from './Muhomor/Muhomor'
import Join from './Join/Join'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
<Routes>
  <Route 
    path='/' 
    element={
      <main>
        <Disc/>
        <Collection/>
        <Creatos/>
        <Browse/>
        <DiscMore/>
        <Muhomor/>
        <Join/>
      </main>
    } 
  />

         <Route path='registr' element = {
          <Create/>
         } />
         <Route path='marketplace' element= {
            <Market/>
         } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
