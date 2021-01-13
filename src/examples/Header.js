import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
//set up query
const getData = graphql`
{
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

const Header = () => {
    const {
        site: {
            info:{
                title,
                person: {name} ,
                person: {age} ,
        },
    },
} = useStaticQuery(getData)


    return (
        <div>
            {/*<h1>title: {data.site.siteMetadata.title}</h1> */}
            {/*<h1>name: {data.site.siteMetadata.person.name}</h1> */}
            <h1>title: {title}</h1>
            <h1>name: {name}</h1>
            <h1>age: {age}</h1>
        </div>
    )
}

export default Header;