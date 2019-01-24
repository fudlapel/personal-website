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
        one: file(relativePath: { eq: "deja-brew/home-page.png" }) {
          ...projImage
        }
        two: file(relativePath: { eq: "deja-brew/white-teas.png" }) {
          ...projImage
        }
        three: file(relativePath: { eq: "deja-brew/raritea.png" }) {
          ...projImage
        }
      }
    `}
    render={data => (
      <Img className={props.className} fluid={data.one.childImageSharp.fluid} />
    )}
  />
)

export default styled(ProjImage)`
  height: 280px;
  width: 575px;
`
