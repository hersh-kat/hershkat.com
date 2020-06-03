import { createMuiTheme } from "@material-ui/core/styles";

const darkNavyBlue = "#0a192f";
const turquoise = "#4becff";
const textLight = "#fff";

export default createMuiTheme({
  palette: {
    common: {
      blue: darkNavyBlue,
      green: turquoise,
    },
    primary: {
      main: darkNavyBlue,
    },
    secondary: {
      main: turquoise,
    },
    text: {
      primary: textLight,
    },
    action: {
      hover: turquoise,
    },
    background: {
      paper: darkNavyBlue,
      default: darkNavyBlue,
    },
  },
  typography: {
    fontFamily: ["Fira Sans", "sans-serif"].join(","),
    button: {
      textTransform: "uppercase",
      fontWeight: 500,
      fontSize: "0.8rem",
      letterSpacing: "0.1rem",
    },
  },
});
