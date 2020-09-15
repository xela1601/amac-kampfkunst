import React from "react"
import useStyles from "../styles/components/footer.styles"
import { Link } from "gatsby"
import { Paper, Avatar } from "@material-ui/core"

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.footer} square>
        <a href="https://www.facebook.com/alex.schreiner76" target="_blank">
          <Avatar
            className={classes.small}
            variant="square"
            alt="Facebook"
            src="./icons/facebook.svg"
          />
        </a>
        <a href="https://twitter.com/Xela50671599" target="_blank">
          <Avatar
            className={classes.small}
            variant="square"
            alt="Twitter"
            src="./icons/twitter.svg"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-schreiner-302216167/"
          target="_blank"
        >
          <Avatar
            className={classes.small}
            variant="square"
            alt="LinkedIn"
            src="./icons/linkedin.svg"
          />
        </a>
        <a href="https://www.instagram.com/alex_160197/" target="_blank">
          <Avatar
            className={classes.small}
            variant="square"
            alt="Instagram"
            src="./icons/instagram.svg"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UC-T1N3vN7QOhZW4I-jQxc5A"
          target="_blank"
        >
          <Avatar
            className={classes.small}
            variant="square"
            alt="YouTube"
            src="./icons/youtube.svg"
          />
        </a>
      </Paper>
    </div>
  )
}
export default Footer
