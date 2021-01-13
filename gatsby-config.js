/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path:`
  .env.${process.env.NODE_ENV}
  `,
})
module.exports = {
  siteMetadata:{
    title:'Gatsby Tutorial',
    description:'some random description',
    author:'@johndoe',
    data:['item 1', 'item 2'],
    person:{name: "peter", age: 32},
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `tmrjbsvtcuni`,
      accessToken: `hFOxM8SZb56Updx7YSj25uymmL_LWXn6txb0Em3ERnw`,
    },
  },
],

}
