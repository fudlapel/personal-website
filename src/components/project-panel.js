import React from 'react'
import styles from './project-panel.module.css'
import ProjImage from '../components/deja-vu-proj-images'

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
            <ProjImage />
            <p>
              {/* Firebase • React Native • Redux • ExpoAR • Three.js • Stripe • FBOAuth */}
              --------------------------------------------------------------------------------------------
            </p>
          </div>
        </div>

        <div className={styles.tile}>
          <div className={styles.projdetails}>
            <h4>Mafia</h4>
            <p>
              A progressive web app adaptation of Mafia, a multi-player strategy
              card game. Users are able to create a game and invite
              participants, assign roles and play with game statuses updated in
              real time.
            </p>
            <p>PostgreSQL • Sequelize • Express • React • Redux • Socket.io</p>
          </div>
          <div className={styles.projdetails}>
            <ProjImage />
            <p>
              --------------------------------------------------------------------------------------------
            </p>
          </div>
        </div>

        <div className={styles.tile}>
          <div className={styles.projdetails}>
            <h4>Deja Brew</h4>
            <p>
              An e-commerce website handling the sale and purchase of magic
              teas. Users may browse + purchase tea products, leave + read
              customer comments and create an account to establish an order
              history.
            </p>
            <p>
              PPostgreSQL • Sequelize • Express • React • Redux • Stripe •
              GoogleOAuth
            </p>
          </div>
          <div className={styles.projdetails}>
            <ProjImage />
            <p>
              --------------------------------------------------------------------------------------------
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectPanel

{
  /* <div className={styles.tile}>
        <p>
          <h4>Mafia</h4>A progressive web app adaptation of Mafia, a
          multi-player strategy card game. Users are able to create a game and
          invite participants, assign roles and play with game statuses updated
          in real time.
          <p>PostgreSQL • Sequelize • Express • React • Redux • Socket.io</p>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={styles.tile}>
        <p>
          <h4>Deja Brew</h4>
          An e-commerce website handling the sale and purchase of magic teas.
          Users may browse + purchase tea products, leave + read customer
          comments and create an account to establish an order history.
          <p>
            PostgreSQL • Sequelize • Express • React • Redux • Stripe •
            GoogleOAuth
          </p>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div> */
}
{
  /* </div> */
}
