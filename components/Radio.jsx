import React from 'react'
import styles from '../styles/novedades.module.css'
import { BsThreeDots } from "react-icons/bs";


export default function Radio() {
  return (
    <div className={styles.container}>
    <h1 className={styles.border}>Radio</h1>
        
    <section className={styles.cardContainer}>
        <div className={styles.card}>
            <h3>Music 1</h3>
            <p>Música nueva y relevante.</p>
            <div>
            <img src="../src/assets/r1.png" alt="" />
            <div className={styles.infoCard}>
            <p>EN DIRECTO - 16:00-18:00</p>
            <span>Time Crisis</span>
            <p>The Crew talk Red Lobster and shellflish-themed...</p>
            </div>
            </div>
        </div>
        <div className={styles.card}>
        <h3>Music Hits</h3>
            <p>Música nueva y relevante.</p>
            <div><img src="../src/assets/r2.png" alt="" />
            <div className={styles.infoCard}>
            <p>EN DIRECTO - 17:00-19:00</p>
            <span>The Hits List</span>
            <p>Songs you know and love.</p>
            </div>
            </div>
        </div>
        <div className={styles.card}>
        <h3>Music Country</h3>
            <p>La casa del country.</p>
            <div>
            <img src="../src/assets/r3.png" alt="" />
            <div className={styles.infoCard}>
            <p>EN DIRECTO - 18:00-19:00</p>
            <span>Country Rewind</span>
            <p>Timeless country hits you can revisit again and again.</p>
            </div>
            </div>
        </div>
    </section>
    
        <h2 className={styles.border}>Emisores locales</h2>
    <section className={styles.cardContainer2}>
        <div className={styles.column}>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/re1.png" alt="" />
            <div>
            <p>Cadena 100</p>
            <p>La mejor variedad musical.</p>
            </div>
            </div>
            <BsThreeDots />
        </div>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/re2.png" alt="" />
            <div>
            <p>KISS FM (ESPAÑA)</p>
            <p>TuneIn</p>
            </div>
            </div>
            
            <BsThreeDots />
        </div>
        </div>
        
        <div className={styles.column}>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/re3.png" alt="" />
            <div><p>LOS40</p>
            <p>TuneIn</p></div>
            </div>
            <BsThreeDots />
        </div>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/re4.png" alt="" />
            <div>
            <p>Rock FM</p>
            <p>La radio viva del rock.</p>
            </div>
            </div>
            
            <BsThreeDots />
        </div>
        </div>
        
        
    </section>
    </div>
  )
}
