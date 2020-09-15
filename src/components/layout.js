import React from "react"
import Header from "./header"
import Footer from "./footer"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../styles/theme"
import useStyles from "../styles/components/layout.style"
const Layout = props => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.wrapper}>{props.children}</div>
      <Footer />
    </MuiThemeProvider>
  )
}

export default Layout
