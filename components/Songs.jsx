import React from 'react'
import ListSongs from '../components/ListSongs'
import styles from '../styles/inicio.module.css'

export default function Songs ( {cancion, autor, fechaLanzamiento, genero, borrarCancion, cancionID}) {
  return (
    <div className={styles.card}>
        <button className={styles.deleteBtn} onClick={()=>(borrarCancion(cancionID))}>Borrar</button>
        <h6>Canción: {cancion}</h6>
        <p>Autor: {autor}</p>
        <p>Fecha de Lanzamiento: {fechaLanzamiento}</p>
        <p>Género: {genero}</p>
    </div>
  )
}
