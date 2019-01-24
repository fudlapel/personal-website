import React from 'react'
import styles from './project-panel.module.css'
import ProjImage from '../components/image-deja-brew'
import ProjImageMafia from '../components/image-mafia'
import ProjImageFortuneMock from '../components/image-fortune-mock'

const ProjectPanel = () => (
  <div className={styles.panel}>
    <div className={styles.innerpanel}>
      <a name="projects" />
      <h1>Projects</h1>
      <div className={styles.container}>
        <div className={styles.tile}>
          <div className={styles.projdetails}>
            <h4>Fortune Cookie</h4>
            <p>
              A mobile dating app that re-imagines the dating game. Fortune
              Cookie allows users to swipe through and match with other users.
              Users may also use the geo-location based AR feature to scan their
              surroundings and through their phone camera see other users in the
              vicinity.{' '}
            </p>
            <p>
              Firebase • React Native • Redux • ExpoAR • Three.js • Stripe •
              FBOAuth
            </p>
          </div>
          <div className={styles.projdetails}>
            <ProjImageFortuneMock />
          </div>
        </div>

        <div className={styles.tile}>
          <div className={styles.projdetails}>
            <h4>Mafia</h4>
            <p>
              A web app adaptation of Mafia, a multi-player strategy card game.
              Users are able to create a game and invite participants, assign
              roles and play with game statuses updated in real time.
            </p>
            <p>PostgreSQL • Sequelize • Express • React • Redux • Socket.io</p>
          </div>
          <div className={styles.projdetails}>
            <ProjImageMafia />
          </div>
        </div>

        <div className={styles.tile}>
          <div className={styles.projdetails}>
            <h4>Deja Brew</h4>
            <p>
              An e-commerce website handling the sale and purchase of magic
              teas. Users may browse + purchase tea products, leave + read
              customer reveiws and create an account to establish an order
              history.
            </p>
            <p>
              PostgreSQL • Sequelize • Express • React • Redux • Stripe •
              GoogleOAuth
            </p>
          </div>
          <div className={styles.projdetails}>
            <ProjImage />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectPanel
