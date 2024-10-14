import React from 'react'
import Songs from '../components/Songs'
import Form from '../components/Form'
import styles from '../styles/inicio.module.css'

export default function ListSongs({listSongs,setListSongs}) {
    const borrarCancion = (id) =>{
        setListSongs(listSongs.filter((song) =>song.id !== id))
    }
  return (
    <div >{
        listSongs.length > 0 ? 
        listSongs.map((song) => {
            return(
                
                <Songs key={song.id} cancion={song.title} autor={song.autor} fechaLanzamiento={song.launchDate} genero={song.gender} borrarCancion={borrarCancion} cancionID={song.id}/>
                )
        })
        :
        <div>Aquí aparecerán tus canciones</div>
    }
    </div>
  )
}
