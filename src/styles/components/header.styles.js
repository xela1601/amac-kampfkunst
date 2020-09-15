import { makeStyles } from "@material-ui/core"
import globalVariables from "../globalVars"
export default makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.primary.light,
    },
    link: {
      display: "flex",
      height: globalVariables.headerHeight,
      padding: "10px 10px",
      alignItems: "center",
      "& a": {
        fontSize: "30px",
        fontWeight: "bold",
        color: theme.palette.secondary.main,
        textDecoration: "none",
        textTransform: "uppercase",
        "&:hover": {
          textDecoration: "none",
        },
      },
      "&:hover": {
        background: theme.palette.primary.dark,
        "& a": {
          color: theme.palette.secondary.light,
        },
      },
    },
    linkForMobile: {
      height: globalVariables.headerHeight,
      color: theme.palette.secondary.main,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    title: {
      "& a": {
        fontSize: "30px",
        fontWeight: "bold",
        color: theme.palette.secondary.main,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      },
      marginLeft: "10px",
      textDecoration: "none",
      color: theme.palette.secondary.light,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  }
})
