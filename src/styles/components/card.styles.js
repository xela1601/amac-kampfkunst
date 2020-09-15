import { makeStyles } from "@material-ui/core"
export default makeStyles(theme => ({
  image: {
    background: props =>
      `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.35)),url(${props.imageSrc}) 50% no-repeat`,
    height: 260,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  forAccessibilityOnly: {
    opacity: 0,
    height: 0,
    display: "flex",
  },
  title: {
    color: theme.palette.secondary.main,
    textAlign: "center",
  },
  exploreButton: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.main,
    },
  },
}))
