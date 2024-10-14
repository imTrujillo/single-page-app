import React from 'react'
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
        <ul className={styles.options}>
            <li className={styles.element}>España</li>
            <li className={styles.element}>English (UK)</li>
            <li className={styles.element}>Catalá</li>
        </ul>
        <p>Copyright @ 2024 Apple Inc. Todos los derechos reservados</p>
        <ul className={styles.options}>
            <li className={styles.element}>Términos del servicio del internet</li>
            <li className={styles.element}>Apple Music y la privacidad</li>
            <li className={styles.element}>Aviso sobre cookies</li>
            <li className={styles.element}>Soporte</li>
            <li className={styles.element}>Comentarios</li>
        </ul>
    </div>
  )
}
