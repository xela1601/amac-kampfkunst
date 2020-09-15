import React from "react"
import Layout from "../components/layout"
import HeroBanner from "../components/heroBanner"
import ImageWithText from "../components/imageWithText"
import CardContainer from "../components/cardContainer"
import Card from "../components/card"
import usePosts from "../queries/posts"
import { Typography } from "@material-ui/core"
const IndexPage = () => {
  const defaultImageSrc = "./images/default.png"
  const posts = usePosts()
  return (
    <Layout>
      <section>
        <HeroBanner
          imageSrc="./images/banner.jpeg"
          title="AMAC-Kampfkunst"
          // {/*data.site.siteMetadata.title*/}
          subtitle="Kampfkunst mit Niveau"
        />
      </section>
      <section>
        <Typography variant="body1"></Typography>
        <ul></ul>
        <ImageWithText
          imageLeft
          title="Lorem Ipsum"
          imageSrc="./images/profile.png"
          text="   This is the 'imageWithText'-Component with the following properties:    
          'imageLeft' / 'imageRight' - self explaining    
          'title' - the title on the middle top of the component    
          'imageSrc' - the location of the image    
          'text' - The text next to the image"
        />
      </section>

      <section>
        <CardContainer title="Lorem Ipsum">
          {posts.nodes.map(post => (
            <Card
              key={post.id}
              imageSrc={post.featuredImage?.node.sourceUrl ?? defaultImageSrc}
              link="/"
              title={post.title}
              text={post.excerpt}
            />
          ))}
        </CardContainer>
      </section>
    </Layout>
  )
}

export default IndexPage
