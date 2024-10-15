import React from 'react';
import styles from '../styles/novedades.module.css';
import { MdArrowForwardIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

import n1 from '../src/assets/n1.png';
import n2 from '../src/assets/n2.png';
import n3 from '../src/assets/n3.png';
import n4 from '../src/assets/n4.png';
import nc1 from '../src/assets/nc1.png';
import nc2 from '../src/assets/nc2.png';
import nc3 from '../src/assets/nc3.png';
import nc4 from '../src/assets/nc4.png';
import nc5 from '../src/assets/nc5.png';
import nc6 from '../src/assets/nc6.png';
import nc7 from '../src/assets/nc7.png';
import nc8 from '../src/assets/nc8.png';

export default function Novedades() {
  return (
    <div className={styles.container}>
      <h1 className={styles.border}>Novedades</h1>
      
      <section className={styles.cardContainer}>
        <div className={styles.card}>
          <p>NUEVO ÁLBUM</p>
          <h6>LA CASA DE LA PLAYA</h6>
          <span>Miami</span>
          <img src={n1} alt="La Casa de la Playa" />
        </div>
        <div className={styles.card}>
          <p>NUEVO ÁLBUM</p>
          <h6>Ejército de salvación</h6>
          <span>Love of Lesbian</span>
          <img src={n2} alt="Ejército de salvación" />
        </div>
        <div className={styles.card}>
          <p>NUEVO ÁLBUM</p>
          <h6>SORA</h6>
          <span>Ganges</span>
          <img src={n3} alt="SORA" />
        </div>
        <div className={styles.card}>
          <span>UP NEXT</span>
          <h6>Mafalda Cardenal es nueva artista Up Next de octubre</h6>
          <img src={n4} alt="Mafalda Cardenal Up Next" />
        </div>
      </section>
  
      <h2 className={styles.border}>
        Canciones recién llegadas <MdArrowForwardIos />
      </h2>
      <section className={styles.cardContainer2}>
        <div className={styles.column}>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={nc1} alt="Sympathy is a knife" />
              <div>
                <p>Sympathy is a knife</p>
                <span>Charli xcx - Ariana Grande</span>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={nc2} alt="La Champions y el Mundo" />
              <div>
                <p>La Champions y el Mundo</p>
                <span>Love of Lesbian</span>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={nc3} alt="Cómo Quieres Que Te Quiera" />
              <div>
                <p>Cómo Quieres Que Te Quiera</p>
                <span>Rosario</span>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={nc4} alt="Contigo" />
              <div>
                <p>Contigo</p>
                <span>Malú - Prince Royce</span>
              </div>
            </div>
            <BsThreeDots />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={nc5} alt="Vuela" />
              <div>
                <p>Vuela</p>
                <span>Nena Daconte</span>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={nc6} alt="Que nadie me llore" />
              <div>
                <p>Que nadie me llore</p>
                <span>Funambulista - La La Love</span>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={nc7} alt="Besitos BB 2.0" />
              <div>
                <p>Besitos BB 2.0</p>
                <span>La Perla - Omar Montes</span>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={nc8} alt="No me duele" />
              <div>
                <p>No me duele</p>
                <span>Morad</span>
              </div>
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
