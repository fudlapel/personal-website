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
        <h2>Hello, World! My name is Siri. </h2>
        <p>
          I am a software engineer ready to code and collaborate. I am eager to
          work on projects that facilitate human connection + harness creative
          thinking—and ultimately make our world a brighter place.
        </p>
      </div>
    </div>
  </div>
)

export default IntroPanel
