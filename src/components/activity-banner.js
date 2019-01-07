import React from 'react'
import styles from './activity-banner.module.css'

const ActivityBanner = () => (
  <div className={styles.banner}>
    <div className={styles.innerbanner}>
      <p className={styles.activities}>
        When I'm not coding, you can find me...
      </p>

      <ul className={styles.activities}>
        <li>YOGA</li>
        <li>---</li>
        <li>READING</li>
        <li>---</li>
        <li>TRAVEL/VB/POTTERY/</li>
      </ul>
    </div>
  </div>
)

export default ActivityBanner
