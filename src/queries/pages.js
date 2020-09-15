import { graphql, useStaticQuery } from "gatsby"

export default () => `
    query pagesQuery {
      allWpPage {
        edges {
          node {
            id
            slug
            status
            title
            content
          }
        }
      }
    }
  `
