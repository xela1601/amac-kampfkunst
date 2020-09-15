import { makeStyles } from "@material-ui/core"
import globalVars from "../globalVars"
export default makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    alignItems: "center",
  },
  media: {
    height: globalVars.heroBannerHeight,
    display: "flex",
    padding: "40px",
    //TODO add breakpoints
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.palette.secondary.light,
    fontWeight: 500,
    textShadow: "2px 1px 8px rgba(0,0,0,0.75)",
    fontSize: 70,
  },
  subtitle: {
    fontSize: 30,
    color: theme.palette.secondary.light,
    fontWeight: 100,
  },
}))
