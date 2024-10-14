import React from 'react'
import styles from '../styles/novedades.module.css'
import { MdArrowForwardIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";


export default function Novedades() {
  return (
    <div className={styles.container}>
    <h1 className={styles.border}>Novedades</h1>
    
    <section className={styles.cardContainer}>
        <div className={styles.card}>
            <p>NUEVO ÁLBUM</p>
            <h6>LA CASA DE LA PLAYA</h6>
            <span>Miami</span>
            <img src="../src/assets/n1.png" alt="" />
        </div>
        <div className={styles.card}>
            <p>NUEVO ÁLBUM</p>
            <h6>Ejército de salvación</h6>
            <span>Love of Lesbian</span>
            <img src="../src/assets/n2.png" alt="" />
        </div>
        <div className={styles.card}>
            <p>NUEVO ÁLBUM</p>
            <h6>SORA</h6>
            <span>Ganges</span>
            <img src="../src/assets/n3.png" alt="" />
        </div>
        <div className={styles.card}>
            <span>UP NEXT</span>
            <h6>Mafalda Cardenal es nueva artista Up Next de octubre</h6>
            <img src="../src/assets/n4.png" alt="" />
        </div>
    </section>

    <h2 className={styles.border}>Canciones recién llegadas        <MdArrowForwardIos /></h2>
    <section className={styles.cardContainer2}>
        <div className={styles.column}>
        <div className={styles.card2}>
        <div className={styles.card2Inner}>
            <img src="../src/assets/nc1.png" alt="" />
            <div>
            <p>Sympathy is a knife</p>
            <span>Charli xcx - Ariana Grande</span>
            </div>
        </div>
            <BsThreeDots />
        </div>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/nc2.png" alt="" />
            <div><p>La Champions y el Mundo</p>
            <span>Love of Lesbian</span>
            </div>
            </div>
            <BsThreeDots />
        </div>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/nc3.png" alt="" />
            <div><p>Cómo Quieres Que Te Quiera</p>
            <span>Rosario</span></div>
            </div>
            <BsThreeDots />
        </div>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/nc4.png" alt="" />
            <div><p>Contigo</p>
            <span>Malú - Prince Royce</span></div>
            </div>
            <BsThreeDots />
        </div>
        </div>
        <div className={styles.column}>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/nc5.png" alt="" />
            <div><p>Vuela</p>
            <span>Nena Daconte</span></div>
            </div>
            <BsThreeDots />
        </div>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/nc6.png" alt="" />
            <div><p>Que nadie me llore</p>
            <span>Funambulista - La La Love</span></div>
            </div>
            <BsThreeDots />
        </div>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/nc7.png" alt="" />
            <div><p>Besitos BB 2.0</p>
            <span>La Perla - Omar Montes</span></div>
            </div>
            <BsThreeDots />
            
        </div>
        <div className={styles.card2}>
            <div className={styles.card2Inner}>
            <img src="../src/assets/nc8.png" alt="" />
            <div><p>No me duele</p>
            <span>Morad</span></div>
            </div>
            <BsThreeDots />
            
        </div>
        </div>
        
    </section>
    
    <h2 className={styles.border}>Explora más</h2>
    <section className={styles.btnContainer}>
        <button>Explorar por género<MdArrowForwardIos /></button>
        <button>Décadas<MdArrowForwardIos /></button>
        <button>Actividades y estados de ánimo<MdArrowForwardIos /></button>
        <button>Músicas del mundo<MdArrowForwardIos /></button>
        <button>Listas<MdArrowForwardIos /></button>
        <button>Audio espacial<MdArrowForwardIos /></button>
        <button>Videoclips<MdArrowForwardIos /></button>
    </section>
    </div>
  )
}
