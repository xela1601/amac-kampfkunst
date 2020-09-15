import React from "react"
import { Card, CardMedia, Typography } from "@material-ui/core"
import useStyles from "../styles/components/heroBanner.styles"
export default props => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.imageSrc}>
        <Typography className={classes.title} variant="h1">
          {props.title}
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          {props.subtitle}
        </Typography>
      </CardMedia>
    </Card>
  )
}
