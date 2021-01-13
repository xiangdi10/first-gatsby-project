import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export const examples = ({data}) => {
    const {site:{info:{author}}} = data
    return (
        <Layout>
            <h1>hello from examples page</h1>
            <Header></Header>
            <HeaderStatic></HeaderStatic>
            <h5>author: {author}</h5>
        </Layout>
    )
}

//pass the data to the top parameter (top)
export const data = graphql`
query MyQuery {
    site(siteMetadata: {}) {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
  
`
export default examples
