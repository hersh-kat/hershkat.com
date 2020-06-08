import { createMuiTheme } from "@material-ui/core/styles";

const darkNavyBlue = "#0a192f";
const black = "#1f1c1c";
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
  spacing: 8,
  textLinkTransition: {
    display: "inline-block",
    "text-decoration-line": "none",
    "text-decoration-style": "initial",
    "text-decoration-color": "initial",
    "text-decoration": "none",
    "transition-duration": "0.25s",
    "transition-timing-function": "cubic-bezier(0.645, 0.045, 0.355, 1)",
    "transition-delay": "initial",
    "transition-property": "all",
    cursor: "pointer",
    "&:hover, &:focus, &:active": {
      color: turquoise,
      "text-decoration": "none",
    },
  },
  iconLinkTransition: {
    opacity: 0.6,
    cursor: "pointer",
    display: "inline-block",
    "vertical-align": "middle",
    "-webkit-transform": "perspective(1px) translateZ(0)",
    transform: "perspective(1px) translateZ(0)",
    "box-shadow": "0 0 1px rgba(0, 0, 0, 0)",
    "-webkit-transition-duration": "0.3s",
    "transition-duration": "0.3s",
    "-webkit-transition-property": "transform",
    "transition-property": "transform",
    "-webkit-transition-timing-function": "ease-out",
    "transition-timing-function": "ease-out",
    "&:hover, &:focus, &:active": {
      "-webkit-transform": "translateY(-5px)",
      transform: "translateY(-5px)",
      opacity: 1,
    },
  },
});
