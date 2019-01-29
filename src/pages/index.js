import React from 'react'
import Header from '../components/header'
import IntroPanel from '../components/intro-panel'
import ProjectPanel from '../components/project-panel'
import ActivityBanner from '../components/activity-banner'
import Container from '../components/container'
import ExperiencePanel from '../components/experience-panel'
import ContactBanner from '../components/contact-banner'

const IndexPage = () => (
  <Container>
    <Header />
    <IntroPanel />
    <ActivityBanner />
    <ProjectPanel />
    {/* <ExperiencePanel /> */}
    <ContactBanner />
  </Container>
)

export default IndexPage
