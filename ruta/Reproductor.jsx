import React from 'react'
import styles from '../styles/reproductor.module.css'
import { FaPlay, FaUser } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import { FaRandom, FaApple, FaMusic } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { CgLoadbarAlt } from "react-icons/cg";
import { IoOptions } from "react-icons/io5";



export default function Reproductor() {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
      <FaRandom />
      <IoPlayBack />
      <FaPlay />
      <IoPlayForward />
      <MdReplay />
      </div>
      <div className={styles.song}>
      <FaMusic className={styles.songMusic}/>
      <FaApple className={styles.apple}/>
      </div>
      <div className={styles.volume}>
      <AiFillSound />
      <CgLoadbarAlt />
      </div>
      <div className={styles.login}>
      <IoOptions />
      <button className={styles.btn}><FaUser />Iniciar sesión</button>
      </div>

    </div>
  )
}
