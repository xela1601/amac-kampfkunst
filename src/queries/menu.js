import { graphql, useStaticQuery } from "gatsby"

export default () =>
  useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  `)
