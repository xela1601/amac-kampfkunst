import { makeStyles } from "@material-ui/core"
import globalVars from "../globalVars"

export default makeStyles(theme => ({
  title: {
    padding: "20px 0 30px 0",
    fontFamily: "Oswald",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderStyle: "solid",
    borderColor: theme.palette.secondary.light,
    borderWidth: "5px",
  },
  root: {
    paddingBottom: "30px",
    backgroundColor: theme.palette.primary.light,
  },
}))
