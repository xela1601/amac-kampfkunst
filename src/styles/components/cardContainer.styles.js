import { makeStyles } from "@material-ui/core"
const imageSrc = "./images/profile.png"
export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: "77",
    textAlign: "center",
  },
}))
