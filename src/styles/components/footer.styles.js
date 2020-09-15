import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  footer: {
    width: "100%",
    height: "64px",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "right",
  },
  small: {
    margin: "0 10px",
    "& img": {
      width: "95%",
      height: "auto",
    },
  },
}))
