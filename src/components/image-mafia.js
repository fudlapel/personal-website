import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const projImageMafia = graphql`
  fragment projImageMafia on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const ProjImageMafia = props => (
  <StaticQuery
    query={graphql`
      query {
        front: file(relativePath: { eq: "mafia/mafia.png" }) {
          ...projImageMafia
        }
      }
    `}
    render={data => (
      <Img
        className={props.className}
        fluid={data.front.childImageSharp.fluid}
      />
    )}
  />
)

export default styled(ProjImageMafia)`
  width: 575px;
`
