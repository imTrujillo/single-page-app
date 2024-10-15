import React from 'react';
import styles from '../styles/novedades.module.css';
import { BsThreeDots } from "react-icons/bs";

import r1 from '../src/assets/r1.png';
import r2 from '../src/assets/r2.png';
import r3 from '../src/assets/r3.png';
import re1 from '../src/assets/re1.png';
import re2 from '../src/assets/re2.png';
import re3 from '../src/assets/re3.png';
import re4 from '../src/assets/re4.png';

export default function Radio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.border}>Radio</h1>
      
      <section className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>Music 1</h3>
          <p>Música nueva y relevante.</p>
          <div>
            <img src={r1} alt="Music 1" />
            <div className={styles.infoCard}>
              <p>EN DIRECTO - 16:00-18:00</p>
              <span>Time Crisis</span>
              <p>The Crew talk Red Lobster and shellfish-themed...</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Music Hits</h3>
          <p>Música nueva y relevante.</p>
          <div>
            <img src={r2} alt="Music Hits" />
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
            <img src={r3} alt="Music Country" />
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
              <img src={re1} alt="Cadena 100" />
              <div>
                <p>Cadena 100</p>
                <p>La mejor variedad musical.</p>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={re2} alt="KISS FM (ESPAÑA)" />
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
              <img src={re3} alt="LOS40" />
              <div>
                <p>LOS40</p>
                <p>TuneIn</p>
              </div>
            </div>
            <BsThreeDots />
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Inner}>
              <img src={re4} alt="Rock FM" />
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
