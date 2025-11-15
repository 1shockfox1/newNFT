import { useState } from 'react'
import './App.scss'
import Header from './Header/Header'
import Disc from './Discover/Disc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Disc/>
    </>
  )
}

export default App
