import { makeStyles } from "@material-ui/core"
import globalVariables from "../globalVars"
export default makeStyles(theme => {
  return {
    wrapper: {
      marginTop: globalVariables.headerHeight,
      "& > *": { margin: theme.spacing(1) },
    },
  }
})
