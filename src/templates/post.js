import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout/layout"
import {
  Grid,
  Container,
  Typography,
  Paper,
  Card,
  Button,
} from "@material-ui/core"
import useStyles from "../styles/templates/post.style"
const PostTemplate = props => {
  const classes = useStyles()
  return (
    <Layout>
      <Paper square>
        <Container>
          <Grid
            container
            display="flex"
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h2">Title</Typography>
            </Grid>
            <Grid item>
              <Link to="/" />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  )
}
export default PostTemplate
