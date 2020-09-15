import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  Typography,
} from "@material-ui/core"
import useStyles from "../styles/components/card.styles"

const CardComponent = props => {
  const classes = useStyles(props)
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card square>
        <CardActionArea>
          <Link to={props.link}>
            <CardMedia className={classes.image} />
            <span className={classes.forAccessibilityOnly}>{props.title}</span>
          </Link>
        </CardActionArea>
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="div"
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        </CardContent>
        <CardActions>
          <Grid container alignItems="center" justify="center">
            <Link to={props.link}>
              <Button
                className={classes.exploreButton}
                variant="contained"
                size="small"
                color="primary"
                aria-label="Explore"
              >
                Explore
              </Button>
            </Link>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

Card.propTypes = {
  key: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default CardComponent
