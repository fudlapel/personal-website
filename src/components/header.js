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
      </h1>

      <ul className={styles.link}>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          {' '}
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
