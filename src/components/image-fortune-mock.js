import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const projImageFortuneMock = graphql`
  fragment projImageFortuneMock on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const ProjImageFortuneMock = props => (
  <StaticQuery
    query={graphql`
      query {
        mock: file(relativePath: { eq: "fortune-cookie/fortune-mock.png" }) {
          ...projImageFortuneMock
        }
      }
    `}
    render={data => (
      <Img
        className={props.className}
        fluid={data.mock.childImageSharp.fluid}
      />
    )}
  />
)

export default styled(ProjImageFortuneMock)`
  height: 350px;
  width: 575px;
`
