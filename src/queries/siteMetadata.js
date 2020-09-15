import { graphql, useStaticQuery } from "gatsby"

export default () =>
  useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          image
        }
      }
    }
  `).site.siteMetadata
