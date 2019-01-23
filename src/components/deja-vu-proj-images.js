import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Slider from 'nuka-carousel'
// import ImageGallery from 'react-image-gallery'
// import Slider from 'react-slick'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import { Carousel } from 'react-responsive-carousel'

// export const projImage = graphql`
//   fragment projImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
// const ProjImage = props => (
//   <StaticQuery
//     query={graphql`
//       query {
//         one: file(relativePath: { eq: "deja-brew/home-page.png" }) {
//           ...projImage
//         }
//         two: file(relativePath: { eq: "deja-brew/white-teas.png" }) {
//           ...projImage
//         }
//         three: file(relativePath: { eq: "deja-brew/raritea.png" }) {
//           ...projImage
//         }
//       }
//     `}
//     render={data => (
//       <Slider slidesToShow={1} initialSlideHeight="100px">
//         <div>
//           <Img
//             className={props.className}
//             fluid={data.one.childImageSharp.fluid}
//           />
//         </div>
//         <div>
//           <Img
//             className={props.className}
//             fluid={data.two.childImageSharp.fluid}
//           />
//         </div>
//         <div>
//           <Img
//             className={props.className}
//             fluid={data.three.childImageSharp.fluid}
//           />
//         </div>
//       </Slider>
//     )}
//   />
// )

// export default styled(ProjImage)`
//   max-width: 575px;
// `
