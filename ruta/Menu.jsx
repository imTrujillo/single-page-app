import React from 'react'
import Inicio from '../components/Inicio'
import Novedades from '../components/Novedades'
import Radio from '../components/Radio'
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import styles from '../styles/single-app.module.css'
import { FaSearch,  FaHome } from "react-icons/fa";
import { TbComponents } from "react-icons/tb";
import { BsBroadcast } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";


export default function Menu() {
  return (
  < BrowserRouter>
    <header className={styles.container}>
      <nav>
      <form >
      <img className={styles.logo} src="../src/assets/logo.png" />
      <div><FaSearch /><input type="text"  placeholder='  Buscar'/></div>
      </form>
      <ul className={styles.navbar}>
        <li><FaHome /> <Link to='/inicio' className={styles.link}>Inicio</Link></li>
        <li> <TbComponents /><Link to='/' className={styles.link}>Novedades </Link></li>
        <li> <BsBroadcast /><Link to='/radio' className={styles.link}>Radio</Link></li>
      </ul>
      <div className={styles.btnContainer}>
      <button className={styles.btn}><SiApplemusic />     Abrir en Música    <GoArrowUpRight /></button>
      <button className={styles.btn}>Probar en la versión beta     <GoArrowUpRight /></button>
      </div>
      
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Novedades/>} />
      <Route path='/inicio' element={<Inicio/>} />
      <Route path='/radio' element={<Radio/>} />
    </Routes>
  </BrowserRouter>
  )
}
