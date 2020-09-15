import { graphql, useStaticQuery } from "gatsby"

export default () =>
  useStaticQuery(graphql`
    query postsQuery {
      allWpPost {
        nodes {
          slug
          title
          id
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
          excerpt
        }
      }
    }
  `).allWpPost
