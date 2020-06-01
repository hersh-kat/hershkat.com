import { createMuiTheme } from "@material-ui/core/styles";

const darkNavyBlue = "#0a192f";
const neonGreen = "#64fdda";

export default createMuiTheme({
  palette: {
    common: {
      blue: darkNavyBlue,
      green: neonGreen,
    },
    primary: {
      main: darkNavyBlue,
    },
    secondary: {
      main: neonGreen,
    },
  },
  typography: {},
});
