import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.banner}>
    <div className={styles.innerbanner}>
      <h1 className={styles.header}>
        <Link to="/" className={styles.link}>
          Siri McClean
        </Link>
        {/* later to link this to top of page */}
      </h1>

      <ul className={styles.link}>
        <li>Projects</li>
        <li>Experience</li>
        <li>Contact</li>
        {/* later to link this to lower in page */}
      </ul>
    </div>
  </div>
)

export default Header
