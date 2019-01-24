import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const projImageFortune = graphql`
  fragment projImageFortune on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const ProjImageFortune = props => (
  <StaticQuery
    query={graphql`
      query {
        home: file(relativePath: { eq: "fortune-cookie/fortune-mock.png" }) {
          ...projImageFortune
        }
      }
    `}
    render={data => (
      <Img
        className={props.className}
        fluid={data.home.childImageSharp.fluid}
      />
    )}
  />
)

export default styled(ProjImageFortune)`
  width: 575px;
`

// export default ProjImageFortune
