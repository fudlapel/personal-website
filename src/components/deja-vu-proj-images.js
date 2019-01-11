import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const projImage = graphql`
  fragment projImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const ProjImage = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "deja-brew/home-page.png" }
        ) {
          ...projImage
        }
      }
    `}
    render={data => (
      <Img
        className={props.className}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)
export default styled(ProjImage)`
  max-width: 575px;
`
