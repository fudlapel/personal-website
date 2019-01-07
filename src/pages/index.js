import React from 'react'
// import { Link } from 'gatsby'

import Header from '../components/header'
// import Layout from '../components/layout'
import IntroPanel from '../components/intro-panel'
import ProjectPanel from '../components/project-panel'
import ActivityBanner from '../components/activity-banner'
import Container from '../components/container'
import ExperiencePanel from '../components/experience-panel'
import ContactBanner from '../components/contact-banner'

const IndexPage = () => (
  <Container>
    <Header />
    {/* <Layout> */}
    <IntroPanel />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    {/* </Layout> */}
    <ActivityBanner />
    <ProjectPanel />
    <ExperiencePanel />
    <ContactBanner />
  </Container>
)

export default IndexPage
