import React from 'react'
import styles from './intro-panel.module.css'
import Image from '../components/profile-image'

const IntroPanel = () => (
  <div className={styles.panel}>
    <div className={styles.innerpanel}>
      <div className={styles.tile}>
        <Image />
      </div>
      <div className={styles.tile}>
        <h2>Hello I'm Siri!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
)

export default IntroPanel
