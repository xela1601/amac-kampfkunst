require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `CV of Alexander Schreiner`,
    description: `This CV shows up the academic career of Alexander Schreiner.`,
    author: `Alexander Schreiner`,
    image: "./images/profile.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Barlow`,
                variants: [`300`, `400`, `500`, `600`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        html: {
          fallbackImageMaxWidth: 800,
        },
        // fields can be excluded globally.
        // this example is for wp-graphql-gutenberg.
        // since we can get block data on the `block` field
        // we don't need these fields
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  35
                : // And then we can pull all posts in production
                  null,
          },
          // this shows how to exclude entire types from the schema
          // this example is for wp-graphql-gutenberg
          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alexander Schreiner`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
