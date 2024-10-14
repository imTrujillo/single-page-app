import React, {useState} from 'react'
import ListSongs from '../components/ListSongs'
import {v4 as uuidv4} from 'uuid'
import styles from '../styles/inicio.module.css'

export default function Inicio({setListSongs, listSongs}) {

    const [titleSong, setTitleSong] = useState("")
    const [autor, setAutor] = useState("")
    const [launchDate, setLaunchDate] = useState("")
    const [gender, setGender] = useState("")

    const handleTitleSong = (e) => {
        setTitleSong(e.target.value)
    }
    const handleSetAutor = (e) =>{
        setAutor(e.target.value)
    }
    const handleLaunchDate = (e) =>{
        setLaunchDate(e.target.value)
    }
    const handleGender = (e) =>{
        setGender(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!titleSong || !autor || !launchDate || !gender) {
            alert("Por favor, completa todos los campos")
            return
        }
        setListSongs([...listSongs,{
            id: uuidv4(),
            title: titleSong,
            autor: autor,
            launchDate: launchDate,
            gender: gender
        }])
    }

  return (
    <div>
        
        <form className={styles.form} action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre de la canción' onChange={(e) => handleTitleSong(e)} />
            <input type="text" placeholder='Nombre del autor' onChange={(e)=>handleSetAutor(e)}/>
            <div><p>Fecha de lanzamiento: </p>
            <input type="date"  onChange={(e)=>handleLaunchDate(e)} />
                </div>
            <input type="text" placeholder='Género musical' onChange={(e) => handleGender(e)}/>
            <input className={styles.formBtn} type="submit" value="Guardar Canción"/>
        </form>
    </div>
  )
}
