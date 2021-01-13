import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import img from '../images/images3.jpeg'
import Image from 'gatsby-image'

const getImages = graphql `
{
    fixed:file(relativePath: {eq: "images3.jpeg"}){
      childImageSharp{
        fixed (width: 390, grayscale: true){
            ...GatsbyImageSharpFixed
        }
      }
    }
    fluid:file(relativePath: {eq: "images2.jpeg"}){
      childImageSharp{
        fluid{
           ... GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  example:file(relativePath: {eq: "images2.jpeg"}){
    childImageSharp{
      fluid(maxWidth: 220){
        ... GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`


const Images = () => {
    const data = useStaticQuery(getImages)
    console.log(data)
    return (
        <section className="images">
            <article className="single-image">
                <h3>basic image</h3>
                <img src={img}></img>
            </article>
            <article className="single-image">
                <h3>fixed image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed}></Image>
            </article>
            <article className="single-image">
                <h3>fluid image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid}></Image>
                <div className="small">
                <Image fluid={data.fluid.childImageSharp.fluid}></Image>
                </div>
                <Image fluid={data.example.childImageSharp.fluid}></Image>
            </article>
        </section>
    )
}

export default Images
