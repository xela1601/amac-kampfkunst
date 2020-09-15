import React from "react"
import PropTypes from "prop-types"
import useStyles from "../styles/components/cardContainer.styles.js"
import { Paper, Container, Grid, Typography } from "@material-ui/core"

const CardContainer = props => {
  const classes = useStyles()
  return (
    <Paper square className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" className={classes.title}>
          {props.title}
        </Typography>
        <Grid container spacing={3}>
          {props.children}
        </Grid>
      </Container>
    </Paper>
  )
}

CardContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default CardContainer
