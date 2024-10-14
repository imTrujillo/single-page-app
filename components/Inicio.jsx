import {useState} from 'react'
import ListSongs from '../components/ListSongs'
import Form from '../components/Form'
import Songs from '../components/Songs'
import styles from '../styles/inicio.module.css'

export default function Inicio() {

    const [listSongs, setListSongs] = useState([])

  return (
    <div className={styles.container}>
        <section>
        <h1 className={styles.border}>Guarda tus canciones</h1>
        <Form listSongs={listSongs} setListSongs={setListSongs}/>
        </section>
        <section>
            <h2 className={styles.border}>Tu librería</h2>
            <ListSongs listSongs={listSongs} setListSongs={setListSongs} />
        </section>
    </div>
    
  )
}
