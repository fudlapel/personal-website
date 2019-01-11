import React from 'react'
import styles from './contact-banner.module.css'
const LinkedInLogo = require('../images/logos/linkedin.png')
const EmailLogo = require('../images/logos/email.png')
const GitHubLogo = require('../images/logos/github.png')

const ContactBanner = () => (
  <div className={styles.banner}>
    <div className={styles.innerbanner}>
      <a name="contact" href="https://www.linkedin.com/in/sirimcclean/">
        <img
          src={LinkedInLogo}
          alt="linkedin logo"
          className={styles.contactlogo}
        />
      </a>

      <a href="mailto:siri.mcclean@gmail.com">
        <img src={EmailLogo} alt="email logo" className={styles.contactlogo} />
      </a>
      <a href="https://github.com/fudlapel">
        <img
          src={GitHubLogo}
          alt="github logo"
          className={styles.contactlogo}
        />
      </a>
    </div>
  </div>
)

export default ContactBanner
