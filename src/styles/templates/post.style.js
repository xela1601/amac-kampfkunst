import { makeStyles } from "@material-ui/core"
export default makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "Oswald",
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    padding: 40,
    margin: "40px auto",
  },
}))
