import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Typography } from "@material-ui/core"
class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wpPage
    return (
      <div>
        <Layout>
          <SEO title="Home" />
          <Typography
            variant="h1"
            dangerouslySetInnerHTML={{ __html: currentPage.title }}
          />
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          <p dangerouslySetInnerHTML={{ __html: currentPage.date }} />
          <b dangerouslySetInnerHTML={{ __html: currentPage.slug }} />
        </Layout>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

export default PageTemplate
