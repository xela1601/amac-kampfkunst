const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const slash = require(`slash`)
const pagesQuery = `
query {
    allWpPage {
        edges {
          node {
            id
            slug
            status
          }
        }
    }
}
`

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === "allWpPost") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
  if (node.internal.type === "WpPage") {
  }
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(pagesQuery).then(result => {
      if (result.errors) {
        console.log(result.errors)
        //reject(result.errors);
      }
      const pageTemplate = path.resolve("./src/templates/page.js")
      result.data.allWpPage.edges.forEach(edge => {
        createPage({
          path: edge.node.slug,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id,
            /*
            The context parameter is optional, 
            though often times it will include a 
            unique identifier that can be used to
            query for associated data that will
            be rendered to the page. 
            All context values are made available
            to a template’s GraphQL queries as arguments
            prefaced with $, so in this case
            the id property will become the $id argument
            in our page-template query
            */
          },
        })
      })
      resolve()
    })
  })
}
