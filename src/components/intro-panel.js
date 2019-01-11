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
          I am a software engineer hungry to put my coding skills to the test. I
          am eager to work on projects that facilitate human connection and
          harness creative thinking—ultimately to make our world a brighter
          place.
        </p>
      </div>
    </div>
  </div>
)

export default IntroPanel
