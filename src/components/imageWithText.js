import { Paper, Grid, Typography, Container, Avatar } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"

import useStyles from "../styles/components/imageWithText.styles"
const ImageWithText = props => {
  const { text, imageSrc, imageLeft, imageRight, title } = props
  const classes = useStyles()
  const imageContainer = (
    <Grid item xs={12} sm={6} md={3}>
      <Avatar
        variant="square"
        className={classes.image}
        alt={title}
        title={title}
        src={imageSrc}
      />
    </Grid>
  )
  const textContainer = (
    <Grid item xs={12} sm={6} md={9}>
      <Typography variant="body1">{text}</Typography>
    </Grid>
  )
  return (
    <div>
      <Paper className={classes.root} square>
        <Container maxWitdth="lg">
          <Typography className={classes.title} variant="h3">
            {title}
          </Typography>
          <Grid container spacing={3}>
            {imageLeft && imageContainer}
            {imageLeft && textContainer}
            {imageRight && textContainer}
            {imageRight && imageContainer}
          </Grid>
        </Container>
      </Paper>
    </div>
  )
}

ImageWithText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imageLeft: PropTypes.bool,
  imageRight: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
export default ImageWithText
