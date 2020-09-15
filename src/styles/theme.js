import { createMuiTheme } from "@material-ui/core/styles"
import { grey, blue, lightBlue, purple } from "@material-ui/core/colors"

const theme = createMuiTheme({
  global: {
    marginTop: "64px",
  },
  palette: {
    primary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    type: "dark",
  },
  typography: {
    fontFamily: ["Barlow", "Oswald", "Anton", "sans-serif"].join(","),
    h1: {
      color: blue[300],
      fontWeight: 500,
      textShadow: "2px 1px 8px rgba(0,0,0,0.75)",
      fontSize: 70,
    },
    h2: {
      color: blue[300],
      fontWeight: 500,
      fontSize: 60,
    },
    h3: {
      color: blue[300],
      fontWeight: 400,
      fontSize: 60,
    },
    h4: {
      color: blue[300],
      fontWeight: 500,
      fontSize: 30,
    },
    h5: {
      color: blue[300],
      fontWeight: 300,
      fontSize: 30,
    },
  },
  overrides: {},
})

export default theme
