import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from '../ruta/Menu'
import Reproductor from '../ruta/Reproductor'
import Footer from '../ruta/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Reproductor/>
    </div>
    <div>
    <Menu />
    <Footer/>
    </div>
    </>
  )
}

export default App
