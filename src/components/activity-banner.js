import React from 'react'
import styles from './activity-banner.module.css'
const YogaIcon = require('../images/activity/yoga.png')
const VBIcon = require('../images/activity/vb.png')
const ReadingIcon = require('../images/activity/reading.png')

const ActivityBanner = () => (
  <div className={styles.banner}>
    <div className={styles.innerbanner}>
      <p className={styles.activities}>
        When I'm not coding you can find me...
      </p>
      <p className={styles.iconbox}>
        <img src={YogaIcon} alt="yoga icon" className={styles.icons} />{' '}
        <img src={VBIcon} alt="volleyball icon" className={styles.icons} />{' '}
        <img src={ReadingIcon} alt="reading icon" className={styles.icons} />
      </p>
      <p className={styles.activities}>
        doing yoga, playing volleyball or reading!
      </p>
    </div>
  </div>
)

export default ActivityBanner
